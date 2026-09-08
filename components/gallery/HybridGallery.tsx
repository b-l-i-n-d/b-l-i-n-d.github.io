"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShowcaseItem } from "@/types/portfolio";
import { GithubIcon } from "../icons";
import { X, Lock, ExternalLink } from "lucide-react";
import clsx from "clsx";

interface HybridGalleryProps {
    items: ShowcaseItem[];
    isEmbedded?: boolean;
}

export const HybridGallery: React.FC<HybridGalleryProps> = ({ items, isEmbedded = false }) => {
    const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const handleOpenItem = (item: ShowcaseItem) => {
        const element = itemRefs.current.get(item.id);
        if (element) {
            setOriginRect(element.getBoundingClientRect());
        }
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
        setOriginRect(null);
    };

    // Keyboard navigation: Escape to close, Left/Right arrows to cycle items
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
            if (selectedItem) {
                const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
                if (e.key === "ArrowRight") {
                    const nextItem = items[(currentIndex + 1) % items.length];
                    handleOpenItem(nextItem);
                } else if (e.key === "ArrowLeft") {
                    const prevItem = items[(currentIndex - 1 + items.length) % items.length];
                    handleOpenItem(prevItem);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItem, items]);

    const content = (
        <div className="space-y-8">
                {/* Header & Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                Interactive Product Blueprints
                            </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mt-1">
                            Architecture Specifications &amp; Interface Labs
                        </h2>
                    </div>

                    <div className="text-xs sm:text-sm font-mono text-neutral-500">
                        {items.length} Interactive Specifications
                    </div>
                </div>

                {/* 2-Column Responsive Blueprint Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item) => {
                        const isCurrentlyInspected = selectedItem?.id === item.id;
                        return (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    if (el) itemRefs.current.set(item.id, el);
                                    else itemRefs.current.delete(item.id);
                                }}
                                onClick={() => handleOpenItem(item)}
                                className={clsx(
                                    "p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.20] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-craft-card hover:shadow-craft-card-hover active:scale-[0.98]",
                                    isCurrentlyInspected && "ring-2 ring-[#ff1744]/50 dark:ring-[#ff1744]/60 opacity-60 scale-[0.98]"
                                )}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm font-mono text-neutral-500 group-hover:text-[#ff1744] transition-colors font-bold">
                                            #{item.number}
                                        </span>
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            {item.isPrivate && (
                                                <span className="px-2 py-0.5 text-xs font-mono rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1 shrink-0">
                                                    <Lock className="w-3 h-3 shrink-0" /> Private
                                                </span>
                                            )}
                                            <span className="px-2 py-0.5 text-xs font-mono rounded bg-stone-100/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] shrink-0">
                                                {item.badge}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff1744] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono">
                                    <span className="text-neutral-500 dark:text-neutral-400 truncate max-w-[140px]">
                                        {item.category}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenItem(item);
                                        }}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-semibold group-hover:bg-[#ff1744] group-hover:text-white active:scale-95 shadow-xs shrink-0"
                                        aria-label={`Inspect ${item.title} specifications`}
                                    >
                                        <span>Inspect</span>
                                        <span className="text-xs">↗</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            {/* ORIGIN-AWARE LIGHTBOX INSPECTION MODAL */}
            <AnimatePresence>
                {selectedItem && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`gallery-modal-title-${selectedItem.id}`}
                    >
                        {/* Backdrop with fade animation */}
                        <motion.div
                            key="gallery-modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                            key="gallery-modal-card"
                            initial={
                                originRect
                                    ? {
                                          top: originRect.top,
                                          left: originRect.left,
                                          width: originRect.width,
                                          height: originRect.height,
                                          opacity: 0.8,
                                          scale: 0.95,
                                      }
                                    : { scale: 0.95, opacity: 0, y: 15 }
                            }
                            animate={{
                                top: "auto",
                                left: "auto",
                                width: "100%",
                                height: "auto",
                                maxWidth: "700px",
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                y: 15,
                                transition: { duration: 0.18, ease: "easeIn" },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 420,
                                damping: 32,
                            }}
                            className="relative z-10 w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-black/[0.08] dark:border-white/[0.12] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            <motion.div
                                key={selectedItem.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="space-y-6"
                            >
                                {/* Modal Header */}
                                <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-xs sm:text-sm font-mono text-[#ff1744] font-bold">
                                                #{selectedItem.number}
                                            </span>
                                            <span className="px-2 py-0.5 text-xs font-mono rounded bg-stone-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] shrink-0">
                                                {selectedItem.category}
                                            </span>
                                            <span className="px-2 py-0.5 text-xs font-mono rounded bg-[#ff1744]/10 text-[#ff1744] font-semibold shrink-0">
                                                {selectedItem.badge}
                                            </span>
                                            {selectedItem.isPrivate && (
                                                <span className="px-2 py-0.5 text-xs font-mono rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20 flex items-center gap-1 shrink-0">
                                                    <Lock className="w-3 h-3 shrink-0" /> Private
                                                </span>
                                            )}
                                        </div>
                                        <h3
                                            id={`gallery-modal-title-${selectedItem.id}`}
                                            className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                                        >
                                            {selectedItem.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="p-1.5 rounded-lg bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all font-mono text-xs cursor-pointer active:scale-95 shrink-0"
                                        aria-label="Close lightbox"
                                    >
                                        <span className="flex items-center gap-1">
                                            <X className="w-3.5 h-3.5 shrink-0" /> ESC
                                        </span>
                                    </button>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {selectedItem.description}
                                </p>

                                {/* Architectural / Engineering Highlights */}
                                <div className="space-y-2">
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                                        Technical Specifications
                                    </span>
                                    <div className="space-y-1.5">
                                        {selectedItem.details.map((detail, idx) => (
                                            <div
                                                key={idx}
                                                className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2"
                                            >
                                                <span className="text-[#ff1744] font-bold shrink-0">•</span>
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
                                                className="px-2.5 py-1 text-xs sm:text-sm font-mono bg-stone-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 rounded border border-black/[0.04] dark:border-white/[0.06] shrink-0"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                                    <span className="text-xs font-mono text-neutral-500">
                                        Use [←] [→] to navigate items
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {selectedItem.isPrivate ? (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-mono font-medium shrink-0">
                                                <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                <span>Private Repository / Internal Spec</span>
                                            </div>
                                        ) : (
                                            selectedItem.sourceUrl && (
                                                <a
                                                    href={selectedItem.sourceUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 shrink-0"
                                                >
                                                    <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                                                    <span>Repository ↗</span>
                                                </a>
                                            )
                                        )}
                                        {selectedItem.demoUrl && !selectedItem.isPrivate && (
                                            <a
                                                href={selectedItem.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 rounded-lg bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-xs sm:text-sm font-mono transition-all shadow-[0_0_10px_rgba(255,23,68,0.4)] flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
                                            >
                                                <span>Live Demo ↗</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );

    if (isEmbedded) {
        return content;
    }

    return (
        <section
            id="gallery"
            data-chapter-id="gallery"
            className="relative py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#070708] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto">
                {content}
            </div>
        </section>
    );
};
