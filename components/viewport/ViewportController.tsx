"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

interface ViewportContextType {
  activeChapter: string;
  setActiveChapter: (chapter: string, lockMs?: number) => void;
  registerVideo: (id: string, element: HTMLVideoElement | HTMLIFrameElement | null) => void;
  activeVideoId: string | null;
  isReducedMotion: boolean;
}

const ViewportContext = createContext<ViewportContextType>({
  activeChapter: "hero",
  setActiveChapter: () => {},
  registerVideo: () => {},
  activeVideoId: null,
  isReducedMotion: false,
});

export const useViewport = () => useContext(ViewportContext);

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeChapter, setActiveChapterState] = useState<string>("hero");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const videosRef = useRef<Map<string, HTMLVideoElement | HTMLIFrameElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lockUntilRef = useRef<number>(0);

  const setActiveChapter = useCallback((chapter: string, lockMs?: number) => {
    const normalized = ["tutor-lms", "enclave", "edtech", "docapp"].includes(chapter)
      ? "case-study"
      : chapter;
    setActiveChapterState(normalized);
    if (lockMs && lockMs > 0) {
      lockUntilRef.current = Date.now() + lockMs;
    }
  }, []);

  // Detect user reduced-motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Manage intersection observation to throttle active decoders to strictly one
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      let bestEntry: IntersectionObserverEntry | null = null;
      let maxRatio = 0.2;

      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const videoId = target.dataset.videoId;

        if (!entry.isIntersecting && videoId) {
          const el = videosRef.current.get(videoId);
          if (el && "pause" in el && typeof el.pause === "function") {
            el.pause();
          }
        }

        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          bestEntry = entry;
        }
      });

      if (bestEntry) {
        const target = (bestEntry as IntersectionObserverEntry).target as HTMLElement;
        const bestId = target.dataset.videoId;
        if (bestId && bestId !== activeVideoId) {
          if (activeVideoId) {
            const prevEl = videosRef.current.get(activeVideoId);
            if (prevEl && "pause" in prevEl && typeof prevEl.pause === "function") {
              prevEl.pause();
            }
          }
          setActiveVideoId(bestId);
          const nextEl = videosRef.current.get(bestId);
          if (nextEl && "play" in nextEl && typeof nextEl.play === "function") {
            nextEl.play().catch(() => {});
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
      rootMargin: "0px 0px -10% 0px",
    });
    observerRef.current = observer;

    videosRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeVideoId]);

  const registerVideo = useCallback(
    (id: string, element: HTMLVideoElement | HTMLIFrameElement | null) => {
      if (element) {
        element.dataset.videoId = id;
        videosRef.current.set(id, element);
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      } else {
        const el = videosRef.current.get(id);
        if (el && observerRef.current) {
          observerRef.current.unobserve(el);
        }
        videosRef.current.delete(id);
      }
    },
    []
  );

  // Highly accurate, continuous scroll-based chapter tracking
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateActiveChapterOnScroll = () => {
      if (Date.now() < lockUntilRef.current) {
        return;
      }

      const chapterElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-chapter-id]")
      );

      if (chapterElements.length === 0) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullDocHeight = document.documentElement.scrollHeight;

      // Handle very top
      if (scrollY < 80) {
        setActiveChapterState("hero");
        return;
      }

      // Handle very bottom
      if (scrollY + windowHeight >= fullDocHeight - 80) {
        setActiveChapterState("profile");
        return;
      }

      // Focus point at 35% from top of viewport
      const targetFocusY = windowHeight * 0.35;

      let currentId: string | null = null;
      let closestDistance = Infinity;

      for (const el of chapterElements) {
        const rect = el.getBoundingClientRect();
        let chapterId = el.dataset.chapterId;
        if (!chapterId) continue;
        if (["tutor-lms", "enclave", "edtech", "docapp"].includes(chapterId)) {
          chapterId = "case-study";
        }

        // Check if target focus point is inside this element
        if (rect.top <= targetFocusY && rect.bottom >= targetFocusY) {
          currentId = chapterId;
          break;
        }

        // Fallback: find element whose center is closest to focus point
        const center = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(center - targetFocusY);
        if (dist < closestDistance) {
          closestDistance = dist;
          currentId = chapterId;
        }
      }

      if (currentId) {
        setActiveChapterState(currentId);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveChapterOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    // Initial run
    updateActiveChapterOnScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        activeChapter,
        setActiveChapter,
        registerVideo,
        activeVideoId,
        isReducedMotion,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};
