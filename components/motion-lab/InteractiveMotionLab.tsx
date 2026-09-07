"use client";

import React from "react";
import { InteractiveUIItem } from "@/types/portfolio";

interface InteractiveMotionLabProps {
    items: InteractiveUIItem[];
}

export const InteractiveMotionLab: React.FC<InteractiveMotionLabProps> = ({ items }) => {
    return (
        <section
            id="motion-lab"
            data-chapter-id="motion-lab"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-800/80 bg-neutral-950 text-white"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#ff1744] font-bold px-2.5 py-0.5 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded">
                            CHAPTER 04
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                            Motion & Physics Engineering
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight">
                        Interactive Motion Lab
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-400 max-w-3xl">
                        Hardware-accelerated micro-interactions, recursive tree algorithms, and 3D matrix transforms engineered with zero layout thrashing and locked at 60 FPS.
                    </p>
                </div>

                {/* 6-Item Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-[#ff1744]/50 transition-all flex flex-col justify-between group shadow-lg"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                                        {item.category}
                                    </span>
                                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        {item.fpsTarget} FPS
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-neutral-100 group-hover:text-[#ff1744] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-mono text-[#ff1744]/90">
                                        {item.tagline}
                                    </p>
                                </div>

                                <p className="text-xs text-neutral-400 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="space-y-1.5 pt-2">
                                    {item.highlights.map((highlight, idx) => (
                                        <div key={idx} className="text-xs text-neutral-500 flex items-center gap-1.5">
                                            <span className="text-[#ff1744] text-xs">✓</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}.
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-800/80 space-y-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {item.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 text-[10px] font-mono bg-neutral-950 text-neutral-400 rounded border border-neutral-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 pt-1">
                                    <a
                                        href={item.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 py-2 text-center rounded-lg bg-neutral-800 hover:bg-[#ff1744] hover:text-white text-neutral-200 font-mono text-xs font-semibold transition-all shadow-sm"
                                    >
                                        Live Demo ↗
                                    </a>
                                    <a
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 border border-neutral-800 transition-all"
                                        title="View Source on GitHub"
                                        aria-label="View source repository on GitHub"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
