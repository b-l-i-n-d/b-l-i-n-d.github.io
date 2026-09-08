"use client";

import React from "react";
import { InteractiveUIItem } from "@/types/portfolio";
import { Check, ExternalLink } from "lucide-react";

interface InteractiveMotionLabProps {
    items: InteractiveUIItem[];
}

export const InteractiveMotionLab: React.FC<InteractiveMotionLabProps> = ({ items }) => {
    return (
        <section
            id="motion-lab"
            data-chapter-id="motion-lab"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800/80 bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-200 dark:border-neutral-800/80">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#ff1744] font-bold px-2.5 py-0.5 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded">
                            CHAPTER 07
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                            Motion & Physics Engineering
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Interactive Systems Lab
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Precision engineering prototypes demonstrating gesture-driven navigation, zero layout reflow, 
                        and GPU-accelerated spring animations.
                    </p>
                </div>

                {/* Grid of Micro-Interactions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/90 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 shadow-craft-card hover:shadow-craft-card-hover ring-1 ring-black/[0.04] dark:ring-0 group hover:-translate-y-0.5"
                        >
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-xs font-mono text-neutral-500">
                                            Hardware Accelerated
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff1744] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-mono text-neutral-500">
                                        {item.tagline}
                                    </p>
                                </div>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="space-y-1.5 pt-2">
                                    {item.highlights.map((highlight, idx) => (
                                        <div key={idx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                                            <Check className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800/80 space-y-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {item.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 text-[10px] font-mono bg-stone-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 rounded border border-neutral-200 dark:border-neutral-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {item.demoUrl && (
                                    <a
                                        href={item.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff1744] hover:text-rose-500 font-semibold transition-colors"
                                    >
                                        <span>Test Interactive Prototype</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
