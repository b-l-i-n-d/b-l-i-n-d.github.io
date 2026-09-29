"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

interface CaseStudyChapterItem {
  id: string;
  number: string;
  title: string;
  label: string;
}

const CHAPTERS: CaseStudyChapterItem[] = [
  { id: "overview", number: "00", title: "Overview", label: "Overview & Metrics" },
  { id: "chapter-topology", number: "01", title: "Topology", label: "System Boundaries" },
  { id: "chapter-flow", number: "02", title: "Flow Engine", label: "State Simulation" },
  { id: "chapter-source", number: "03", title: "Source Code", label: "Production Studio" },
];

export const CaseStudyChapterRail: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>("overview");
  const [mounted, setMounted] = useState(false);
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Continuous, high-precision scroll tracking with requestAnimationFrame
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateActiveChapter = () => {
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullDocHeight = document.documentElement.scrollHeight;

      // Handle page top
      if (scrollY < 120) {
        setActiveChapter("overview");
        return;
      }

      // Handle page bottom
      if (scrollY + windowHeight >= fullDocHeight - 100) {
        setActiveChapter("chapter-source");
        return;
      }

      // Focus line at 35% of the viewport height
      const focusY = windowHeight * 0.35;

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const item = CHAPTERS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focusY) {
            setActiveChapter(item.id);
            return;
          }
        }
      }
      setActiveChapter("overview");
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveChapter();
          ticking = false;
        });
        ticking = true;
      }
    };

    const unlockScroll = () => {
      if (isClickScrollingRef.current) {
        isClickScrollingRef.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("wheel", unlockScroll, { passive: true });
    window.addEventListener("touchmove", unlockScroll, { passive: true });

    updateActiveChapter();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", unlockScroll);
      window.removeEventListener("touchmove", unlockScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 124; // 64px navbar + 48px breadcrumb + 12px breathing room
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const targetTop = id === "overview" ? 0 : Math.max(0, elementTop - navbarOffset);

    // Lock scroll tracking during smooth scroll to prevent intermediate jitter
    isClickScrollingRef.current = true;
    setActiveChapter(id);

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
  };

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 420,
        damping: 28,
        mass: 0.8,
      };

  const currentChapter = CHAPTERS.find((c) => c.id === activeChapter) || CHAPTERS[0];

  return (
    <>
      {/* Desktop Vertical Pill Scrubber (Matching Home Page Shrink & Grow Spring Motion) */}
      <aside
        aria-label="Case study chapter navigation"
        className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end pointer-events-none select-none"
      >
        <div className="pointer-events-auto bg-white/80 dark:bg-[#121214]/80 backdrop-blur-xl border border-black/6 dark:border-white/10 py-2.5 px-1.5 rounded-full shadow-craft-float flex flex-col items-center gap-1 transition-all">
          {CHAPTERS.map((chapter) => {
            const isActive = activeChapter === chapter.id;

            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className="group relative flex items-center justify-center w-6 h-6 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.92] transition-transform duration-150"
                aria-label={`Jump to chapter ${chapter.number}: ${chapter.title}`}
              >
                {/* Tooltip label on hover */}
                <span
                  style={{ transformOrigin: "right center" }}
                  className="absolute right-8 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-black/8 dark:border-white/10 rounded-lg shadow-craft-card whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-[transform,opacity] duration-150 ease-out z-50 -translate-x-1 group-hover:translate-x-0"
                >
                  <span className="text-accent font-bold mr-1.5">{chapter.number}</span>
                  <span className="font-semibold">{chapter.title}</span>
                  <span className="text-neutral-400 dark:text-neutral-500 ml-1.5 text-[10px]">
                    {chapter.label}
                  </span>
                </span>

                {/* Dot or Animated Growing Active Pill with Shrink & Grow Spring Physics */}
                <div className="flex items-center justify-center min-h-[14px]">
                  {isActive ? (
                    <motion.div
                      layoutId="active-case-study-chapter-pill"
                      layout
                      initial={false}
                      className="w-2 h-6 rounded-full bg-accent shadow-[0_0_12px_rgba(255,23,68,0.8)]"
                      transition={springTransition}
                    />
                  ) : (
                    <motion.div
                      layout
                      className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-accent/80 dark:group-hover:bg-accent/80 group-hover:scale-125 transition-colors"
                      transition={springTransition}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Scrubber Pill (Touch-friendly & Responsive with Horizontal Shrink & Grow) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl px-4 py-2 rounded-full border border-black/6 dark:border-white/10 shadow-craft-elevated pointer-events-auto select-none">
        <span className="text-xs font-mono font-bold text-accent shrink-0">
          {currentChapter?.number || "00"}
        </span>
        <span className="text-xs font-mono text-neutral-800 dark:text-neutral-200 max-w-[130px] truncate font-medium">
          {currentChapter?.title || "Overview"}
        </span>
        <div className="flex items-center gap-1.5 pl-2 border-l border-black/6 dark:border-white/8 shrink-0">
          {CHAPTERS.map((chapter) => {
            const isActive = activeChapter === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                aria-label={`Scroll to ${chapter.title}`}
                className="w-6 h-6 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <motion.div
                  layout
                  className={`rounded-full transition-colors ${
                    isActive
                      ? "w-3.5 h-2 bg-accent shadow-[0_0_6px_rgba(255,23,68,0.7)]"
                      : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700"
                  }`}
                  transition={springTransition}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
