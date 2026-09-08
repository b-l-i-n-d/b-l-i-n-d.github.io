"use client";

import React from "react";
import { motion } from "framer-motion";
import { Chapter } from "@/types/portfolio";
import { useViewport } from "@/components/viewport/ViewportController";

interface ChapterScrubberProps {
    chapters: Chapter[];
}

export const ChapterScrubber: React.FC<ChapterScrubberProps> = ({ chapters }) => {
    const { activeChapter, setActiveChapter } = useViewport();

    const scrollToChapter = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveChapter(id);
        }
    };

    const currentChapterIndex = Math.max(
        0,
        chapters.findIndex((c) => c.id === activeChapter)
    );

    return (
        <>
            {/* Desktop Vertical Pill Scrubber (Compact with Dynamic Spring Growth) */}
            <aside
                aria-label="Chapter navigation"
                className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end pointer-events-none"
            >
                <div className="pointer-events-auto bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 py-2.5 px-1.5 rounded-full shadow-craft-float ring-1 ring-black/[0.05] dark:ring-0 dark:shadow-2xl flex flex-col items-center gap-1 transition-all">
                    {chapters.map((chapter) => {
                        const isActive = activeChapter === chapter.id;
                        return (
                            <button
                                key={chapter.id}
                                onClick={() => scrollToChapter(chapter.id)}
                                className="group relative flex items-center justify-center p-1 focus:outline-none"
                                aria-label={`Jump to chapter ${chapter.number}: ${chapter.title}`}
                            >
                                {/* Tooltip label on hover */}
                                <span className="absolute right-7 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/80 rounded shadow-craft-card ring-1 ring-black/[0.05] dark:ring-0 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 z-50 -translate-x-1 group-hover:translate-x-0">
                                    <span className="text-[#ff1744] font-bold mr-1.5">{chapter.number}</span>
                                    {chapter.title}
                                </span>

                                {/* Dot or Animated Growing Active Pill */}
                                <div className="flex items-center justify-center min-h-[14px]">
                                    {isActive ? (
                                        <motion.div
                                            layoutId="active-chapter-pill"
                                            layout
                                            initial={false}
                                            className="w-2 h-6 rounded-full bg-[#ff1744] shadow-[0_0_12px_rgba(255,23,68,0.8)]"
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
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-craft-elevated ring-1 ring-black/[0.05] dark:ring-0 dark:shadow-xl pointer-events-auto">
                <span className="text-[10px] font-mono font-bold text-[#ff1744]">
                    {chapters[currentChapterIndex]?.number || "00"}
                </span>
                <span className="text-[11px] font-mono text-neutral-800 dark:text-neutral-200 max-w-[140px] truncate font-medium">
                    {chapters[currentChapterIndex]?.title || "Showreel"}
                </span>
                <div className="flex items-center gap-1 pl-1.5 border-l border-neutral-200 dark:border-neutral-800">
                    {chapters.map((chapter) => {
                        const isActive = activeChapter === chapter.id;
                        return (
                            <button
                                key={chapter.id}
                                onClick={() => scrollToChapter(chapter.id)}
                                aria-label={`Scroll to ${chapter.title}`}
                                className="p-0.5 focus:outline-none"
                            >
                                <motion.div
                                    layout
                                    className={`rounded-full transition-colors ${
                                        isActive
                                            ? "w-3 h-1.5 bg-[#ff1744] shadow-[0_0_6px_rgba(255,23,68,0.7)]"
                                            : "w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-700"
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
