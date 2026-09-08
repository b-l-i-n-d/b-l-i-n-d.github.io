"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShowcaseItem } from "@/types/portfolio";
import { GithubIcon } from "../icons";
import { X, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface HybridGalleryProps {
    items: ShowcaseItem[];
    isEmbedded?: boolean;
}

export const HybridGallery: React.FC<HybridGalleryProps> = ({ items, isEmbedded = false }) => {
    const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const [navDirection, setNavDirection] = useState<number>(0);
    const [mounted, setMounted] = useState(false);
    const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock background scroll when modal is open
    useEffect(() => {
        if (!selectedItem) return;

        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalBodyPaddingRight = document.body.style.paddingRight;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        if (scrollBarWidth > 0) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }

        // Prevent wheel scrolling on background elements outside the modal
        const handleWheel = (e: WheelEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target?.closest("[data-modal-scrollable='true']")) {
                e.preventDefault();
            }
        };

        // Prevent touchmove scrolling on background elements outside the modal
        const handleTouchMove = (e: TouchEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target?.closest("[data-modal-scrollable='true']")) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.paddingRight = originalBodyPaddingRight;
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [selectedItem]);

    const handleOpenItem = (item: ShowcaseItem) => {
        const element = itemRefs.current.get(item.id);
        if (element) {
            setOriginRect(element.getBoundingClientRect());
        } else {
            setOriginRect(null);
        }
        setNavDirection(0);
        setSelectedItem(item);
    };

    const handleClose = () => {
        if (selectedItem) {
            const element = itemRefs.current.get(selectedItem.id);
            if (element) {
                setOriginRect(element.getBoundingClientRect());
            }
        }
        setSelectedItem(null);
    };

    const handleNavigate = (direction: 1 | -1) => {
        if (!selectedItem || items.length <= 1) return;
        const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + direction + items.length) % items.length;
        const nextItem = items[nextIndex];
        const nextElement = itemRefs.current.get(nextItem.id);
        if (nextElement) {
            setOriginRect(nextElement.getBoundingClientRect());
        }
        setNavDirection(direction);
        setSelectedItem(nextItem);
    };

    // Keyboard navigation: Escape to close, Left/Right arrows to cycle items
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
            if (selectedItem) {
                if (e.key === "ArrowRight") {
                    handleNavigate(1);
                } else if (e.key === "ArrowLeft") {
                    handleNavigate(-1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItem, items]);

    // Calculate translation delta between clicked card and screen center
    const calculateOriginDelta = () => {
        if (!originRect || typeof window === "undefined") {
            return { x: 0, y: 0, scale: 0.85 };
        }

        const modalCenterX = window.innerWidth / 2;
        const modalCenterY = window.innerHeight / 2;
        const originCenterX = originRect.left + originRect.width / 2;
        const originCenterY = originRect.top + originRect.height / 2;

        const deltaX = originCenterX - modalCenterX;
        const deltaY = originCenterY - modalCenterY;

        const modalWidth = Math.min(window.innerWidth - 32, 672);
        const scale = Math.max(0.35, Math.min(0.85, originRect.width / modalWidth));

        return { x: deltaX, y: deltaY, scale };
    };

    const originDelta = calculateOriginDelta();

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

                <div className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400">
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
                                    <span className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 group-hover:text-[#ff1744] transition-colors font-bold">
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

            {/* ORIGIN-AWARE LIGHTBOX INSPECTION MODAL - Portaled to document.body to escape any section stacking contexts */}
            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {selectedItem && (
                            <div
                                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 select-none overflow-hidden touch-none overscroll-contain"
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
                                    className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md cursor-pointer touch-none"
                                />

                                {/* Origin-Aware Modal Box */}
                                <motion.div
                                    key="gallery-modal-card"
                                    data-modal-scrollable="true"
                                    initial={{
                                        x: originDelta.x,
                                        y: originDelta.y,
                                        scale: originDelta.scale,
                                        opacity: 0.1,
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        x: originDelta.x,
                                        y: originDelta.y,
                                        scale: originDelta.scale,
                                        opacity: 0,
                                        transition: { duration: 0.2, ease: "easeInOut" },
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                        mass: 0.8,
                                    }}
                                    className="relative z-10 w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-black/[0.08] dark:border-white/[0.12] p-6 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain touch-auto select-text"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Navigation Toolbar */}
                                    <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4 mb-5 text-xs sm:text-sm font-mono">
                                        {/* Previous Item Button */}
                                        <button
                                            type="button"
                                            onClick={() => handleNavigate(-1)}
                                            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
                                            aria-label="Previous blueprint"
                                        >
                                            <ChevronLeft className="w-4 h-4 shrink-0" />
                                            <span className="hidden sm:inline font-semibold">Prev</span>
                                        </button>

                                        {/* Segmented Indicators / Stepper */}
                                        <div className="flex items-center gap-1.5">
                                            {items.map((item, idx) => {
                                                const isSelected = item.id === selectedItem.id;
                                                return (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        onClick={() => {
                                                            const currentIndex = items.findIndex((i) => i.id === selectedItem.id);
                                                            setNavDirection(idx > currentIndex ? 1 : -1);
                                                            const element = itemRefs.current.get(item.id);
                                                            if (element) {
                                                                setOriginRect(element.getBoundingClientRect());
                                                            }
                                                            setSelectedItem(item);
                                                        }}
                                                        aria-label={`Jump to ${item.title}`}
                                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                            isSelected
                                                                ? "w-6 bg-[#ff1744]"
                                                                : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                                                        }`}
                                                    />
                                                );
                                            })}
                                        </div>

                                        {/* Next Item & Close Actions */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleNavigate(1)}
                                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
                                                aria-label="Next blueprint"
                                            >
                                                <span className="hidden sm:inline font-semibold">Next</span>
                                                <ChevronRight className="w-4 h-4 shrink-0" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleClose}
                                                className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer shrink-0"
                                                aria-label="Close modal"
                                            >
                                                <X className="w-5 h-5 shrink-0" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Body with Directional Slide Transition */}
                                    <AnimatePresence mode="wait" custom={navDirection}>
                                        <motion.div
                                            key={selectedItem.id}
                                            custom={navDirection}
                                            initial={{
                                                opacity: 0,
                                                x: navDirection > 0 ? 24 : navDirection < 0 ? -24 : 0,
                                            }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{
                                                opacity: 0,
                                                x: navDirection > 0 ? -24 : navDirection < 0 ? 24 : 0,
                                            }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="space-y-6"
                                        >
                                            {/* Modal Header */}
                                            <div className="space-y-2 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
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

                                            {/* Description */}
                                            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                                {selectedItem.description}
                                            </p>

                                            {/* Architectural / Engineering Highlights */}
                                            <div className="space-y-2">
                                                <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block font-semibold">
                                                    Technical Specifications
                                                </span>
                                                <div className="space-y-1.5">
                                                    {selectedItem.details.map((detail, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2"
                                                        >
                                                            <span className="text-[#ff1744] font-bold shrink-0 mt-0.5">•</span>
                                                            <span>{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="space-y-2.5">
                                                <span className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block font-semibold">
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

                                            {/* Action Buttons & Shortcut Indicator */}
                                            <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
                                                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                                                    Navigate: [<span className="text-neutral-700 dark:text-neutral-300">←</span>] [
                                                    <span className="text-neutral-700 dark:text-neutral-300">→</span>] &bull; Close: [
                                                    <span className="text-neutral-700 dark:text-neutral-300">Esc</span>]
                                                </span>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {selectedItem.isPrivate ? (
                                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-mono font-medium shrink-0">
                                                            <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                                            <span>Private Spec</span>
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
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
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
            <div className="relative z-10 max-w-6xl mx-auto">{content}</div>
        </section>
    );
};
