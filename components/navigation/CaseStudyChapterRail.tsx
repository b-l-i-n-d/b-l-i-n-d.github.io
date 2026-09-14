"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 140;

      // Check each chapter position from bottom to top
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const item = CHAPTERS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveChapter(item.id);
            return;
          }
        }
      }
      setActiveChapter("overview");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 124; // navbar (64px) + breadcrumb (48px) + breathing room
    const targetTop = Math.max(0, el.offsetTop - navbarOffset);

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
    setActiveChapter(id);
  };

  return (
    <aside
      aria-label="Case study chapter navigation"
      className="fixed right-3 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-none select-none"
    >
      <div className="pointer-events-auto bg-white/85 dark:bg-[#121214]/85 backdrop-blur-xl border border-black/6 dark:border-white/10 py-3 px-2 rounded-full shadow-craft-float flex flex-col items-center gap-1.5 transition-all">
        {CHAPTERS.map((chapter) => {
          const isActive = activeChapter === chapter.id;

          return (
            <button
              key={chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              className="group relative flex items-center justify-center w-6 h-6 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.92] transition-transform duration-150"
              aria-label={`Jump to ${chapter.title}`}
            >
              {/* Tooltip label on hover - Emil craft: origin-aware, scale(0.95)->scale(1), custom ease-out */}
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

              {/* Active Spring Pill or Idle Dot */}
              <div className="flex items-center justify-center min-h-[14px]">
                {isActive ? (
                  <motion.div
                    layoutId="active-case-study-chapter-pill"
                    layout
                    initial={false}
                    className="w-2 h-6 rounded-full bg-accent shadow-[0_0_14px_rgba(255,23,68,0.85)]"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                      mass: 0.6,
                    }}
                  />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-accent/80 dark:group-hover:bg-accent/80 group-hover:scale-125 transition-all duration-150" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
