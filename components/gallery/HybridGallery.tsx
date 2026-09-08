"use client";

import React, { useState } from "react";
import { HybridItem } from "@/types/portfolio";
import { X } from "lucide-react";

interface HybridGalleryProps {
    items: HybridItem[];
}

export const HybridGallery: React.FC<HybridGalleryProps> = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState<HybridItem | null>(null);

    // Keyboard navigation for lightbox
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedItem) return;
            if (e.key === "Escape") {
                setSelectedItem(null);
            } else if (e.key === "ArrowRight") {
                const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
                const nextIndex = (currentIndex + 1) % items.length;
                setSelectedItem(items[nextIndex]);
            } else if (e.key === "ArrowLeft") {
                const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                setSelectedItem(items[prevIndex]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItem, items]);

    return (
        <section
            id="gallery"
            data-chapter-id="gallery"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800/80 bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-200 dark:border-neutral-800/80">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#ff1744] font-bold px-2.5 py-0.5 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded">
                            CHAPTER 08
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                            12-Item Curated Collection
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Architecture Schemas & UI Builds
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
                        Inspired by the 12-item visual development collection of the Behance showcase: 6 system architecture blueprints paired with 6 interactive UI builds. Click any card to inspect the full design specifications.
                    </p>
                </div>

                {/* 12-Item Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className="p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 hover:border-[#ff1744]/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-craft-card hover:shadow-craft-card-hover ring-1 ring-black/[0.04] dark:ring-0 active:scale-[0.98]"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono text-neutral-500 group-hover:text-[#ff1744] transition-colors font-bold">
                                        #{item.number}
                                    </span>
                                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-stone-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff1744] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                                <span>{item.category}</span>
                                <span>Inspect ↗</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX INSPECTION MODAL */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
                    onClick={() => setSelectedItem(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="max-w-2xl w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-craft-float ring-1 ring-black/[0.08] dark:ring-0 dark:shadow-2xl relative max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono text-[#ff1744] font-bold">
                                        #{selectedItem.number}
                                    </span>
                                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-stone-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                        {selectedItem.category}
                                    </span>
                                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#ff1744]/10 text-[#ff1744] border border-[#ff1744]/30">
                                        {selectedItem.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                    {selectedItem.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="p-1.5 rounded-lg bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all font-mono text-xs"
                                aria-label="Close lightbox"
                            >
                                <span className="flex items-center gap-1"><X className="w-3.5 h-3.5" /> ESC</span>
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {selectedItem.description}
                        </p>

                        {/* Architectural / Engineering Highlights */}
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                                Technical Specifications
                            </span>
                            <div className="space-y-1.5">
                                {selectedItem.details.map((detail, idx) => (
                                    <div key={idx} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                                        <span className="text-[#ff1744] font-bold">•</span>
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                                Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {selectedItem.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 text-xs font-mono bg-stone-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                            <span className="text-xs font-mono text-neutral-500">
                                Use [←] [→] to navigate items
                            </span>
                            <div className="flex items-center gap-2">
                                {selectedItem.demoUrl && (
                                    <a
                                        href={selectedItem.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-lg bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all shadow-[0_0_10px_rgba(255,23,68,0.4)]"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                                {selectedItem.sourceUrl && (
                                    <a
                                        href={selectedItem.sourceUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-lg bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 text-xs font-mono transition-all"
                                    >
                                        Inspect Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
