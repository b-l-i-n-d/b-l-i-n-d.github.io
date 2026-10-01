"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

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

  const handleScroll = useCallback(() => {
    // If user initiated a click jump, skip observation updates until smooth scroll settles
    if (isClickScrollingRef.current) return;

    const scrollPos = window.scrollY;
    const viewportHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // When reaching the near-bottom of the case study document, activate last chapter
    if (scrollPos + viewportHeight >= docHeight - 80) {
      setActiveChapter(CHAPTERS[CHAPTERS.length - 1].id);
      return;
    }

    // Check sections from bottom to top
    const offsetMargin = 160;
    let matched = "overview";

    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      const item = CHAPTERS[i];
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Element has scrolled into view
        if (rect.top <= offsetMargin) {
          matched = item.id;
          break;
        }
      }
    }

    setActiveChapter(matched);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrollingRef.current = true;
    setActiveChapter(id);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const navbarOffset = 116; // 64px navbar + 44px breadcrumb bar + 8px breathing space
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const targetTop = id === "overview" ? 0 : Math.max(0, elementTop - navbarOffset);

    window.scrollTo({
      top: targetTop,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });

    // Reset lock after smooth scrolling completes
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
      handleScroll();
    }, 750);
  };

  if (!mounted) return null;

  const currentChapter = CHAPTERS.find((c) => c.id === activeChapter) || CHAPTERS[0];

  // Emil Spring transition definition
  const springTransition = shouldReduceMotion
    ? { duration: 0.1 }
    : {
        type: "spring" as const,
        stiffness: 450,
        damping: 30,
        mass: 0.8,
      };

  return (
    <>
      {/* Desktop Vertical Magnetic Scrubber Rail */}
      <aside
        aria-label="Case Study Section Navigation"
        className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center pointer-events-auto select-none"
      >
        <div className="relative flex flex-col items-center gap-3 p-2 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-black/8 dark:border-white/10 shadow-craft-subtle">
          {CHAPTERS.map((chapter) => {
            const isActive = activeChapter === chapter.id;

            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                aria-label={`Jump to ${chapter.number} ${chapter.title}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center justify-center w-6 h-8 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 transition-transform"
              >
                {/* Tooltip label on hover */}
                <span
                  style={{ transformOrigin: "right center" }}
                  className="absolute right-9 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-black/8 dark:border-white/10 rounded-lg shadow-craft-card whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-[transform,opacity] duration-150 ease-out z-50 -translate-x-1 group-hover:translate-x-0"
                >
                  <span className="text-accent font-bold mr-1.5">{chapter.number}</span>
                  <span className="font-semibold">{chapter.title}</span>
                  <span className="text-neutral-400 dark:text-neutral-500 ml-1.5 text-[10px]">
                    {chapter.label}
                  </span>
                </span>

                {/* Vertical Expanding Pill with Emil Spring Physics */}
                <div className="flex items-center justify-center min-h-[24px]">
                  <motion.div
                    animate={{
                      height: isActive ? 24 : 6,
                      width: isActive ? 8 : 6,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={springTransition}
                    className={`rounded-full transition-colors ${
                      isActive
                        ? "bg-accent shadow-[0_0_12px_rgba(255,23,68,0.8)]"
                        : "bg-neutral-500 dark:bg-neutral-400 group-hover:bg-accent/80 dark:group-hover:bg-accent/80"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Scrubber Pill (Touch-friendly, Safe Area Aware & Accessible Hit Targets) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-black/8 dark:border-white/10 shadow-craft-elevated pointer-events-auto select-none max-w-[92vw]"
      >
        {/* Dynamic Chapter Label with smooth vertical slide */}
        <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentChapter?.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex items-center gap-1.5 min-w-0"
            >
              <span className="text-xs font-mono font-bold text-accent shrink-0">
                {currentChapter?.number || "00"}
              </span>
              <span className="text-xs font-mono text-neutral-800 dark:text-neutral-200 max-w-[110px] truncate font-medium">
                {currentChapter?.title}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-3 w-px bg-neutral-300 dark:bg-neutral-700 mx-0.5 shrink-0" />

        {/* 4 Interactive Chapter Pagination Dots with Apple Fluid Stretch Physics */}
        <div className="flex items-center gap-0.5">
          {CHAPTERS.map((ch) => {
            const isChActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                aria-label={`Jump to chapter ${ch.number} ${ch.title}`}
                className="relative flex items-center justify-center w-8 h-8 rounded-full outline-none focus-visible:ring-1 focus-visible:ring-accent active:scale-95 transition-transform"
              >
                <motion.div
                  animate={{
                    width: isChActive ? 16 : 6,
                    opacity: isChActive ? 1 : 0.45,
                  }}
                  transition={springTransition}
                  className={`h-1.5 rounded-full transition-colors ${
                    isChActive
                      ? "bg-accent shadow-[0_0_8px_rgba(255,23,68,0.7)]"
                      : "bg-neutral-500 dark:bg-neutral-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
