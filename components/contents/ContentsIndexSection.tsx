"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContentItem {
    id: string;
    title: string;
    subtitle: string;
    subtitlePosition: "above" | "below";
    dotsCount: 1 | 2 | 3 | 4;
    targetId: string;
}

interface ContentColumn {
    id: string;
    numberScript: string;
    title: string;
    items: ContentItem[];
}

export const ContentsIndexSection: React.FC<{ className?: string }> = ({ className = "" }) => {
    // Default active/anchor item is "specs" (Production Spec Matrix) matching user reference screenshot
    const [hoveredId, setHoveredId] = useState<string>("specs");

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const columns: ContentColumn[] = [
        {
            id: "col-platforms",
            numberScript: "One",
            title: "Platforms :",
            items: [
                {
                    id: "tutor-lms",
                    title: "Tutor LMS (v2.0 to v4.0)",
                    subtitle: "ENTERPRISE EDTECH (V2.0 – V4.0)",
                    subtitlePosition: "above",
                    dotsCount: 1,
                    targetId: "tutor-lms",
                },
                {
                    id: "easystore",
                    title: "EasyStore by JoomShaper",
                    subtitle: "ECOMMERCE PLATFORM",
                    subtitlePosition: "above",
                    dotsCount: 2,
                    targetId: "easystore",
                },
                {
                    id: "ecommerce",
                    title: "E-Commerce Headless SaaS",
                    subtitle: "STOREFRONT SAAS",
                    subtitlePosition: "above",
                    dotsCount: 3,
                    targetId: "ecommerce",
                },
            ],
        },
        {
            id: "col-lab",
            numberScript: "Two",
            title: "Interactive Lab :",
            items: [
                {
                    id: "drag-sort",
                    title: "Drag-N-Sort Engine",
                    subtitle: "Pointer Physics · FLIP Layout",
                    subtitlePosition: "below",
                    dotsCount: 1,
                    targetId: "motion-lab",
                },
                {
                    id: "folder-tree",
                    title: "Recursive Folder Manager",
                    subtitle: "Tree Traversal · Memoized Nodes",
                    subtitlePosition: "below",
                    dotsCount: 2,
                    targetId: "motion-lab",
                },
                {
                    id: "book-3d",
                    title: "3D Book Animation",
                    subtitle: "Perspective RotateY · CSS 3D",
                    subtitlePosition: "below",
                    dotsCount: 3,
                    targetId: "motion-lab",
                },
                {
                    id: "calendar",
                    title: "Interactive Calendar",
                    subtitle: "Range Grid Selection · Day Cells",
                    subtitlePosition: "below",
                    dotsCount: 4,
                    targetId: "motion-lab",
                },
            ],
        },
        {
            id: "col-blueprints",
            numberScript: "Three",
            title: "Blueprints :",
            items: [
                {
                    id: "specs",
                    title: "Production Spec Matrix",
                    subtitle: "12 High-Res System Blueprints",
                    subtitlePosition: "below",
                    dotsCount: 1,
                    targetId: "gallery",
                },
                {
                    id: "experience",
                    title: "Work History & Education",
                    subtitle: "Ollyo / Themeum · SUST CSE",
                    subtitlePosition: "below",
                    dotsCount: 2,
                    targetId: "experience",
                },
                {
                    id: "dossier",
                    title: "Direct Contact & Dossier",
                    subtitle: "Open For Senior Engineering Opportunities",
                    subtitlePosition: "below",
                    dotsCount: 3,
                    targetId: "profile",
                },
            ],
        },
    ];

    const renderDots = (count: 1 | 2 | 3 | 4, isHovered: boolean) => {
        const dotGlow = isHovered
            ? "bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.8)]"
            : "bg-[#ff1744]/70";

        if (count === 1) {
            return (
                <div className="pt-1.5 shrink-0">
                    <span className={`inline-block w-2 h-2 rounded-full transition-all duration-200 ${dotGlow}`} />
                </div>
            );
        }

        if (count === 2) {
            return (
                <div className="pt-1.5 shrink-0 flex items-center gap-1">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                    <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                </div>
            );
        }

        if (count === 3) {
            return (
                <div className="pt-1 shrink-0 flex flex-col items-center leading-none">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                    <div className="flex gap-1 mt-0.5">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                        <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                    </div>
                </div>
            );
        }

        return (
            <div className="pt-1 shrink-0 grid grid-cols-2 gap-1">
                <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
                <span className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotGlow}`} />
            </div>
        );
    };

    return (
        <section
            id="contents"
            data-chapter-id="contents"
            className={`relative py-24 px-6 sm:px-10 lg:px-16 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800/80 overflow-hidden transition-colors duration-200 ${className}`}
        >
            {/* Soft Ambient Radial Glow */}
            <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-crimson-600/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Header (Clean, without redundant title tabs) */}
                <div className="space-y-3 border-b border-neutral-200 dark:border-neutral-800/80 pb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#ff1744] uppercase tracking-widest px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                            CHAPTER 01
                        </span>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                            Index Directory
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#ff1744] font-sans">
                        Contents
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                        Table of Chapters & Interactive Case Studies
                    </p>
                </div>

                {/* 3 Columns with Script Watermark Headers ("One", "Two", "Three") and Anchor-Pill Hover/Idle Glider */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14 pt-4">
                    {columns.map((col) => (
                        <div key={col.id} className="relative space-y-6">
                            {/* Script Watermark ("One", "Two", "Three") */}
                            <div
                                className="absolute -top-12 -left-2 text-7xl sm:text-8xl font-script text-rose-600/15 dark:text-crimson-700/35 pointer-events-none select-none"
                                aria-hidden="true"
                            >
                                {col.numberScript}
                            </div>

                            <div className="relative z-10 space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                    <span>{col.title}</span>
                                </h3>

                                <ul className="space-y-2 text-sm sm:text-base">
                                    {col.items.map((item) => {
                                        const isHovered = hoveredId === item.id;
                                        return (
                                            <li
                                                key={item.id}
                                                style={{
                                                    // @ts-ignore CSS anchor name for smooth anchor positioning
                                                    anchorName: `--contents-item-${item.id}`,
                                                }}
                                                onMouseEnter={() => setHoveredId(item.id)}
                                                onFocus={() => setHoveredId(item.id)}
                                                onClick={() => scrollToId(item.targetId)}
                                                className="relative group flex items-start gap-3 cursor-pointer p-3 sm:p-3.5 rounded-xl transition-all duration-150 active:scale-[0.98] select-none"
                                            >
                                                {/* Smooth Anchor/Spring Gliding Highlight Pill */}
                                                {isHovered && (
                                                    <motion.div
                                                        layoutId="contents-column-pill"
                                                        className="absolute inset-0 bg-white/95 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 rounded-xl shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0 -z-10"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 450,
                                                            damping: 32,
                                                            mass: 0.8,
                                                        }}
                                                    />
                                                )}

                                                {renderDots(item.dotsCount, isHovered)}

                                                <div className="space-y-0.5">
                                                    {item.subtitlePosition === "above" && (
                                                        <div
                                                            className={`text-[11px] font-mono uppercase tracking-wider transition-colors ${
                                                                isHovered
                                                                    ? "text-neutral-700 dark:text-neutral-400 font-medium"
                                                                    : "text-neutral-500"
                                                            }`}
                                                        >
                                                            {item.subtitle}
                                                        </div>
                                                    )}

                                                    <div
                                                        className={`font-semibold tracking-tight transition-colors ${
                                                            isHovered
                                                                ? "text-[#ff1744]"
                                                                : "text-neutral-900 dark:text-neutral-200"
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </div>

                                                    {item.subtitlePosition === "below" && (
                                                        <div
                                                            className={`text-[11px] font-mono transition-colors ${
                                                                isHovered
                                                                    ? "text-neutral-700 dark:text-neutral-400 font-medium"
                                                                    : "text-neutral-500"
                                                            }`}
                                                        >
                                                            {item.subtitle}
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
