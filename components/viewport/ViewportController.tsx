"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

interface ViewportContextType {
    activeChapter: string;
    setActiveChapter: (chapter: string) => void;
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
    const [activeChapter, setActiveChapter] = useState<string>("hero");
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
    const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
    const videosRef = useRef<Map<string, HTMLVideoElement | HTMLIFrameElement>>(new Map());
    const observerRef = useRef<IntersectionObserver | null>(null);

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
            // Find highest intersecting entry
            let bestEntry: IntersectionObserverEntry | null = null;
            let maxRatio = 0.2; // minimum threshold

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
                    // Pause previous video
                    if (activeVideoId) {
                        const prevEl = videosRef.current.get(activeVideoId);
                        if (prevEl && "pause" in prevEl && typeof prevEl.pause === "function") {
                            prevEl.pause();
                        }
                    }
                    setActiveVideoId(bestId);
                    // Play the new best video if reduced motion is not forced
                    const nextEl = videosRef.current.get(bestId);
                    if (nextEl && "play" in nextEl && typeof nextEl.play === "function") {
                        nextEl.play().catch(() => {
                            // Autoplay policy prevented playback; safely handle
                        });
                    }
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: [0, 0.25, 0.5, 0.75, 1.0],
            rootMargin: "0px 0px -10% 0px",
        });
        observerRef.current = observer;

        // Observe registered elements
        videosRef.current.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [activeVideoId]);

    const registerVideo = useCallback((id: string, element: HTMLVideoElement | HTMLIFrameElement | null) => {
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
    }, []);

    // Track active chapter as user scrolls
    useEffect(() => {
        if (typeof window === "undefined") return;

        const chapterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const chapterId = (entry.target as HTMLElement).dataset.chapterId;
                        if (chapterId) {
                            setActiveChapter(chapterId);
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-20% 0px -50% 0px",
            }
        );

        const chapterElements = document.querySelectorAll("[data-chapter-id]");
        chapterElements.forEach((el) => chapterObserver.observe(el));

        return () => {
            chapterObserver.disconnect();
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
