"use client";

import React from "react";
import { motion } from "motion/react";
import { Chapter } from "@/types/portfolio";
import { useViewport } from "@/components/viewport/ViewportController";

interface ChapterScrubberProps {
  chapters: Chapter[];
}

export const ChapterScrubber: React.FC<ChapterScrubberProps> = ({ chapters }) => {
  const { activeChapter, setActiveChapter } = useViewport();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isChapterActive = (chapterId: string) => {
    const caseStudyIds = ["case-study", "tutor-lms", "enclave", "edtech", "docapp"];
    if (chapterId === "case-study" && caseStudyIds.includes(activeChapter)) {
      return true;
    }
    return activeChapter === chapterId;
  };

  const scrollToChapter = (id: string) => {
    const element =
      document.getElementById(id) || document.querySelector(`[data-chapter-id="${id}"]`);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navbarHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveChapter(id, 1200);
    }
  };

  const currentChapterIndex = Math.max(
    0,
    chapters.findIndex((c) => isChapterActive(c.id))
  );

  return (
    <>
      {/* Desktop Vertical Pill Scrubber (Compact with Dynamic Spring Growth) */}
      <aside
        aria-label="Chapter navigation"
        className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end pointer-events-none"
      >
        <div className="pointer-events-auto bg-white/80 dark:bg-[#121214]/80 backdrop-blur-xl border border-black/6 dark:border-white/10 py-2.5 px-1.5 rounded-full shadow-craft-float flex flex-col items-center gap-1 transition-all">
          {chapters.map((chapter) => {
            const isActive = isChapterActive(chapter.id);
            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className="group relative flex items-center justify-center w-6 h-6 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                aria-label={`Jump to chapter ${chapter.number}: ${chapter.title}`}
              >
                {/* Tooltip label on hover */}
                <span className="absolute right-7 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/6 dark:border-white/10 rounded shadow-craft-card whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 z-50 -translate-x-1 group-hover:translate-x-0">
                  <span className="text-accent font-bold mr-1.5">{chapter.number}</span>
                  {chapter.title}
                </span>

                {/* Dot or Animated Growing Active Pill */}
                <div className="flex items-center justify-center min-h-[14px]">
                  {isActive ? (
                    <motion.div
                      layoutId="active-chapter-pill"
                      layout
                      initial={false}
                      className="w-2 h-6 rounded-full bg-accent shadow-[0_0_12px_rgba(255,23,68,0.8)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                        mass: 0.8,
                      }}
                    />
                  ) : (
                    <motion.div
                      layout
                      className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500 dark:group-hover:bg-neutral-400 group-hover:scale-125 transition-colors"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Scrubber Pill (Touch-friendly & Responsive) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl px-4 py-2 rounded-full border border-black/6 dark:border-white/10 shadow-craft-elevated pointer-events-auto">
        <span className="text-xs font-mono font-bold text-accent shrink-0">
          {chapters[currentChapterIndex]?.number || "00"}
        </span>
        <span className="text-xs font-mono text-neutral-800 dark:text-neutral-200 max-w-[150px] truncate font-medium">
          {chapters[currentChapterIndex]?.title || "Showreel"}
        </span>
        <div className="flex items-center gap-1.5 pl-2 border-l border-black/6 dark:border-white/8 shrink-0">
          {chapters.map((chapter) => {
            const isActive = isChapterActive(chapter.id);
            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                aria-label={`Scroll to ${chapter.title}`}
                className="w-6 h-6 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <motion.div
                  layout
                  className={`rounded-full transition-colors ${
                    isActive
                      ? "w-3.5 h-2 bg-accent shadow-[0_0_6px_rgba(255,23,68,0.7)]"
                      : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700"
                  }`}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
