"use client";

import React from "react";
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

    return (
        <aside
            aria-label="Chapter navigation"
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-none"
        >
            <div className="pointer-events-auto bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 p-2.5 rounded-full shadow-2xl flex flex-col gap-2 transition-all">
                {chapters.map((chapter) => {
                    const isActive = activeChapter === chapter.id;
                    return (
                        <button
                            key={chapter.id}
                            onClick={() => scrollToChapter(chapter.id)}
                            className="group relative flex items-center justify-end p-1.5 focus:outline-none"
                            aria-label={`Jump to chapter ${chapter.number}: ${chapter.title}`}
                        >
                            {/* Hover tooltip label */}
                            <span className="absolute right-9 px-2.5 py-1 text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-700/80 rounded shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                                <span className="text-amber-400 font-bold mr-1.5">{chapter.number}</span>
                                {chapter.title}
                            </span>

                            {/* Indicator Dot / Pill */}
                            <div
                                className={`transition-all duration-300 rounded-full ${
                                    isActive
                                        ? "h-7 w-2 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                                        : "h-2 w-2 bg-neutral-600 group-hover:bg-neutral-400"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>
        </aside>
    );
};
