"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
} from "react";

interface ViewportContextType {
  activeVideoId: string | null;
  activeChapter: string;
  isReducedMotion: boolean;
  registerVideo: (id: string, element: HTMLVideoElement | HTMLIFrameElement | null) => void;
  setActiveChapter: (chapter: string, lockMs?: number) => void;
  forcePauseAll: () => void;
}

const ViewportContext = createContext<ViewportContextType>({
  activeVideoId: null,
  activeChapter: "hero",
  isReducedMotion: false,
  registerVideo: () => {},
  setActiveChapter: () => {},
  forcePauseAll: () => {},
});

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onStoreChange: () => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", onStoreChange);
  return () => {
    mediaQueryList.removeEventListener("change", onStoreChange);
  };
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeChapter, setActiveChapterState] = useState<string>("hero");
  const [videoCount, setVideoCount] = useState<number>(0);

  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const videosRef = useRef<Map<string, HTMLVideoElement | HTMLIFrameElement>>(new Map());
  const activeVideoIdRef = useRef<string | null>(null);
  const lockUntilRef = useRef<number>(0);

  useEffect(() => {
    activeVideoIdRef.current = activeVideoId;
  }, [activeVideoId]);

  const setActiveChapter = useCallback((chapter: string, lockMs?: number) => {
    const normalized = ["tutor-lms", "enclave", "omnicommerce", "docapp"].includes(chapter)
      ? "case-study"
      : chapter;
    setActiveChapterState(normalized);
    if (lockMs && lockMs > 0) {
      lockUntilRef.current = Date.now() + lockMs;
    }
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
        if (bestId && bestId !== activeVideoIdRef.current) {
          const currentActive = activeVideoIdRef.current;
          if (currentActive) {
            const prevEl = videosRef.current.get(currentActive);
            if (prevEl && "pause" in prevEl && typeof prevEl.pause === "function") {
              prevEl.pause();
            }
          }
          setActiveVideoId(bestId);
          activeVideoIdRef.current = bestId;
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

    videosRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [videoCount]);

  const registerVideo = useCallback(
    (id: string, element: HTMLVideoElement | HTMLIFrameElement | null) => {
      if (element) {
        element.dataset.videoId = id;
        videosRef.current.set(id, element);
      } else {
        videosRef.current.delete(id);
      }
      setVideoCount((prev) => prev + 1);
    },
    []
  );

  // Highly accurate, continuous scroll-based chapter tracking
  useEffect(() => {
    let activeRafId: number | null = null;

    const updateActiveChapterOnScroll = () => {
      if (Date.now() < lockUntilRef.current) {
        return;
      }

      const chapterElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-chapter-id]")
      );

      if (chapterElements.length === 0) return;

      const viewportMiddle = window.innerHeight * 0.45;
      let currentBestChapter = "hero";
      let closestDistance = Infinity;

      for (const el of chapterElements) {
        const rect = el.getBoundingClientRect();
        // Check if element intersects the viewport trigger zone
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          const chapterId = el.getAttribute("data-chapter-id");
          if (chapterId) {
            currentBestChapter = chapterId;
            break;
          }
        }

        // Fallback: calculate nearest section to trigger line
        const distance = Math.abs(rect.top - viewportMiddle);
        if (distance < closestDistance) {
          closestDistance = distance;
          const chapterId = el.getAttribute("data-chapter-id");
          if (chapterId) {
            currentBestChapter = chapterId;
          }
        }
      }

      setActiveChapterState((prev) => (prev !== currentBestChapter ? currentBestChapter : prev));
    };

    const onScrollThrottled = () => {
      if (activeRafId !== null) return;
      activeRafId = requestAnimationFrame(() => {
        updateActiveChapterOnScroll();
        activeRafId = null;
      });
    };

    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    // Run an initial pass once layout stabilizes
    updateActiveChapterOnScroll();

    return () => {
      window.removeEventListener("scroll", onScrollThrottled);
      if (activeRafId !== null) {
        cancelAnimationFrame(activeRafId);
      }
    };
  }, []);

  const forcePauseAll = useCallback(() => {
    videosRef.current.forEach((el) => {
      if (el && "pause" in el && typeof el.pause === "function") {
        el.pause();
      }
    });
    setActiveVideoId(null);
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        activeVideoId,
        activeChapter,
        isReducedMotion,
        registerVideo,
        setActiveChapter,
        forcePauseAll,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = (): ViewportContextType => useContext(ViewportContext);
