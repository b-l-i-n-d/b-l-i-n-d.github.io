"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move, Sparkles, TrendingUp, Zap } from "lucide-react";
import { PromotionStage } from "@/types/portfolio";

interface CareerVelocityCanvasProps {
    promotions?: PromotionStage[];
}

interface MilestoneNode {
    year: string;
    role: string;
    status: string;
    highlight: string;
    meta: string;
    x: string;
    y: string;
    rot: number;
    isCurrent?: boolean;
    stageIndex: number;
}

const MILESTONES: MilestoneNode[] = [
    {
        year: "2024",
        role: "Junior Software Engineer",
        status: "Joined Ollyo",
        highlight: "Tutor LMS builder core, in-house form reactive state, and Rsbuild optimization.",
        meta: "Foundation Phase",
        x: "5%",
        y: "56%",
        rot: -3.5,
        isCurrent: false,
        stageIndex: 0,
    },
    {
        year: "2025",
        role: "Associate Software Engineer",
        status: "Promoted (Year 1)",
        highlight: "Led FLIP reordering matrix, zero-CLS layout calculations, and plugin addon registry.",
        meta: "1st Promotion · Velocity",
        x: "38%",
        y: "32%",
        rot: 2.8,
        isCurrent: false,
        stageIndex: 1,
    },
    {
        year: "2026",
        role: "Software Engineer",
        status: "Promoted (Year 2) · Current",
        highlight: "Core frontend architecture, state orchestration across 120,000+ global deployments.",
        meta: "Current Role · 2x in 2 Yrs",
        x: "69%",
        y: "8%",
        rot: -2,
        isCurrent: true,
        stageIndex: 2,
    },
];

const MOBILE_OLLYO_TRAJECTORY = [
    {
        year: "2026",
        role: "Software Engineer",
        tagType: "current" as const,
        tagText: "Current Role",
        company: "Ollyo",
        subtitle: "Themeum • Tutor LMS Core",
        description: "Frontend architecture, dynamic state orchestration & high-concurrency client engines across 120,000+ academies globally.",
        isCurrent: true,
        yearColor: "text-[#ff1744]",
        curvePath: "M 12 0 C -2 32, 2 68, 12 100",
    },
    {
        year: "2025",
        role: "Associate Software Engineer",
        tagType: "script" as const,
        tagText: "1st promotion",
        company: "Ollyo",
        subtitle: "Performance & Video Pipeline",
        description: "Continuous lesson video player, dynamic quiz runners & locked 60 FPS compositor physics.",
        isCurrent: false,
        yearColor: "text-neutral-400 dark:text-neutral-500",
        curvePath: "M 12 0 C 1 28, -3 72, 12 100",
    },
    {
        year: "2024",
        role: "Junior Software Engineer",
        tagType: "mono" as const,
        tagText: "Joined Ollyo",
        company: "Ollyo",
        subtitle: "Foundation Phase",
        description: "Tutor LMS 2.0 core component library, form state reducers, and architectural design token primitives.",
        isCurrent: false,
        yearColor: "text-neutral-400 dark:text-neutral-500",
        curvePath: null,
    },
];

export const CareerVelocityCanvas: React.FC<CareerVelocityCanvasProps> = ({ promotions }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [draggedNode, setDraggedNode] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeMilestone = hoveredIndex !== null ? MILESTONES[hoveredIndex] : null;

    return (
        <div className="space-y-3 pt-2">
            {/* Section Header: Matches Original Desktop Design with Mobile Responsiveness */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#ff1744] shrink-0" />
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight flex items-center gap-2">
                        <span>Career Trajectory at Ollyo :</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#ff1744]/10 text-[#ff1744] font-semibold">
                            2x in 2 Years
                        </span>
                    </h4>
                </div>

                <span className="hidden sm:flex text-xs font-mono text-neutral-500 dark:text-neutral-400 items-center gap-1.5 opacity-90 select-none">
                    <Move className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                    <span className="hidden xs:inline">drag milestones to test physics</span>
                    <span className="xs:hidden">drag physics</span>
                </span>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* MOBILE PRESENTATION (< sm): Curvy Animated Timeline Track          */}
            {/* ------------------------------------------------------------------ */}
            <div data-role="career-mobile-track" className="block sm:hidden py-1">
                <div className="space-y-0">
                    {MOBILE_OLLYO_TRAJECTORY.map((item, idx) => (
                        <div key={item.year} className="relative flex items-start gap-3.5 pb-7 last:pb-1">
                            {/* Left Rail: Dot Anchor */}
                            <div className="relative w-6 shrink-0 flex items-center justify-center pt-0.5">
                                {item.isCurrent ? (
                                    <div className="relative z-10 flex items-center justify-center w-6 h-6">
                                        <span className="absolute inset-0 rounded-full bg-[#ff1744]/20 animate-pulse" />
                                        <span className="absolute inset-1 rounded-full bg-[#ff1744]/25" />
                                        <span className="relative w-2.5 h-2.5 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
                                    </div>
                                ) : (
                                    <div className="relative z-10 flex items-center justify-center w-6 h-6">
                                        <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600 border border-neutral-400/30" />
                                    </div>
                                )}
                            </div>

                            {/* Animated Curvy Dashed Line: Connects current dot center to next dot center */}
                            {item.curvePath && (
                                <svg
                                    className="absolute left-0 w-6 overflow-visible pointer-events-none"
                                    style={{ top: "14px", height: "100%" }}
                                    preserveAspectRatio="none"
                                    viewBox="0 0 24 100"
                                    fill="none"
                                >
                                    <motion.path
                                        d={item.curvePath}
                                        stroke="#ff1744"
                                        strokeWidth="1.75"
                                        strokeDasharray="4 3.5"
                                        strokeLinecap="round"
                                        className="opacity-50 dark:opacity-65"
                                        vectorEffect="non-scaling-stroke"
                                        initial={{ strokeDashoffset: 0 }}
                                        animate={{ strokeDashoffset: -24 }}
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 2.2,
                                        }}
                                    />
                                </svg>
                            )}

                            {/* Fading tail below final node (2024 Joined Ollyo) */}
                            {idx === MOBILE_OLLYO_TRAJECTORY.length - 1 && (
                                <svg
                                    className="absolute left-0 top-[14px] w-6 h-8 overflow-visible pointer-events-none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 24 32"
                                    fill="none"
                                >
                                    <motion.path
                                        d="M 12 0 C 6 10, 8 20, 9 32"
                                        stroke="#ff1744"
                                        strokeWidth="1.75"
                                        strokeDasharray="4 3.5"
                                        strokeLinecap="round"
                                        className="opacity-25 dark:opacity-35"
                                        vectorEffect="non-scaling-stroke"
                                        initial={{ strokeDashoffset: 0 }}
                                        animate={{ strokeDashoffset: -24 }}
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 2.2,
                                        }}
                                    />
                                </svg>
                            )}

                            {/* Milestone Content */}
                            <div className="flex-1 min-w-0 pt-0.5 space-y-1">
                                {/* Title Line: Year + Role + Badge */}
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <span className={`font-mono text-sm font-bold ${item.yearColor}`}>
                                        {item.year}
                                    </span>
                                    <span className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                                        {item.role}
                                    </span>
                                    {item.tagType === "current" && (
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/25">
                                            {item.tagText}
                                        </span>
                                    )}
                                    {item.tagType === "script" && (
                                        <span className="font-script text-base text-[#ff1744] font-semibold -rotate-2 select-none">
                                            {item.tagText}
                                        </span>
                                    )}
                                    {item.tagType === "mono" && (
                                        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                                            {item.tagText}
                                        </span>
                                    )}
                                </div>

                                {/* Description Paragraph */}
                                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {item.company && (
                                        <strong className="font-bold text-neutral-900 dark:text-neutral-100">
                                            {item.company} •{" "}
                                        </strong>
                                    )}
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* DESKTOP PRESENTATION (sm+): Exact Original Canvas Layout           */}
            {/* ------------------------------------------------------------------ */}
            <div
                ref={containerRef}
                data-role="career-desktop-canvas"
                className="hidden sm:block relative w-full h-72 sm:h-80 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] p-4 sm:p-5 overflow-hidden group select-none shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-black/[0.12] dark:hover:border-white/[0.15]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 0.85px, transparent 0.85px)`,
                    backgroundSize: "22px 22px",
                    color: "rgba(128, 128, 128, 0.09)",
                }}
            >
                {/* SVG Vector Trajectory Canvas: Exponential Ascension Curve */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500"
                    viewBox="0 0 700 280"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    {/* Background Altitude Horizontal Guides */}
                    <g className="opacity-15 dark:opacity-20 stroke-current text-neutral-600 dark:text-neutral-400">
                        <line x1="40" y1="70" x2="660" y2="70" strokeDasharray="3 6" strokeWidth="1" />
                        <line x1="40" y1="140" x2="660" y2="140" strokeDasharray="3 6" strokeWidth="1" />
                        <line x1="40" y1="210" x2="660" y2="210" strokeDasharray="3 6" strokeWidth="1" />
                    </g>

                    {/* Technical Crosshairs & Corner Targets */}
                    <g className="opacity-25 dark:opacity-35 text-neutral-600 dark:text-neutral-400">
                        <circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="1" />
                        <line x1="18" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1" />
                        <line x1="28" y1="18" x2="28" y2="38" stroke="currentColor" strokeWidth="1" />

                        <circle cx="672" cy="252" r="5" stroke="currentColor" strokeWidth="1" />
                        <line x1="662" y1="252" x2="682" y2="252" stroke="currentColor" strokeWidth="1" />
                        <line x1="672" y1="242" x2="672" y2="262" stroke="currentColor" strokeWidth="1" />
                    </g>

                    {/* Gradient Definition for Ascension Glow */}
                    <defs>
                        <linearGradient id="velocityGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff1744" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#ff1744" stopOpacity="0.75" />
                            <stop offset="100%" stopColor="#ff1744" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Ambient Glow Spline Path */}
                    <path
                        d="M 50 230 C 180 225, 260 160, 360 135 C 460 110, 520 65, 650 45"
                        stroke="#ff1744"
                        strokeWidth="7"
                        strokeLinecap="round"
                        className={hoveredIndex !== null ? "opacity-25" : "opacity-12"}
                    />

                    {/* Primary Dynamic Kinetic Ascension Curve: travels forward/upward */}
                    <motion.path
                        d="M 50 230 C 180 225, 260 160, 360 135 C 460 110, 520 65, 650 45"
                        stroke="url(#velocityGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -56 }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 14,
                        }}
                        style={{
                            opacity: hoveredIndex !== null ? 0.9 : 0.65,
                        }}
                    />

                    {/* Milestone Coordinates on Spline */}
                    {/* 2024 Node Anchor: (95, 222) */}
                    <circle cx="95" cy="222" r="4.5" fill="#ff1744" />
                    <circle cx="95" cy="222" r="10" stroke="#ff1744" strokeWidth="1" opacity="0.3" />

                    {/* 2025 Node Anchor: (360, 135) */}
                    <circle cx="360" cy="135" r="4.5" fill="#ff1744" />
                    <circle cx="360" cy="135" r="10" stroke="#ff1744" strokeWidth="1" opacity="0.3" />

                    {/* 2026 Peak Anchor: (620, 48) */}
                    <circle cx="620" cy="48" r="5" fill="#ff1744" />
                    <circle cx="620" cy="48" r="12" stroke="#ff1744" strokeWidth="1.5" opacity="0.4" />
                </svg>

                {/* Ambient Decorative Doodles */}
                <div className="absolute top-3 left-12 text-[10px] font-mono text-neutral-600 dark:text-neutral-400/70 pointer-events-none select-none hidden sm:block">
                    <span>dy/dt &gt; 2.0x • momentum surge</span>
                </div>
                <div className="absolute top-3 right-12 text-[10px] font-mono text-emerald-500/80 pointer-events-none select-none flex items-center gap-1 hidden sm:flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Peak Stage</span>
                </div>

                {/* Floating Handcrafted Milestone Capsules (Original Script Typography & Glow) */}
                {MILESTONES.map((item, idx) => {
                    const isHovered = hoveredIndex === idx;
                    const isDragged = draggedNode === item.year;

                    return (
                        <div
                            key={item.year}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                top: item.y,
                                left: item.x,
                                position: "absolute",
                                zIndex: isHovered || isDragged ? 30 : 10,
                            }}
                            className="p-3 -m-3 select-none group/milestone max-w-[280px] sm:max-w-none transform-gpu"
                        >
                            <motion.div
                                drag
                                dragConstraints={containerRef}
                                dragElastic={0.35}
                                dragSnapToOrigin
                                onDragStart={() => setDraggedNode(item.year)}
                                onDragEnd={() => setDraggedNode(null)}
                                initial={{ rotate: item.rot }}
                                animate={{
                                    rotate: isHovered || isDragged ? 0 : item.rot,
                                    scale: isDragged ? 1.18 : isHovered ? 1.12 : 1,
                                }}
                                whileTap={{ scale: 1.08 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 26,
                                }}
                                className="cursor-grab active:cursor-grabbing select-none [backface-visibility:hidden]"
                            >
                                <div className="relative flex flex-col items-start">
                                    {/* Top Pill Badge: Year & Status */}
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <span
                                            className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold transition-colors ${
                                                item.isCurrent
                                                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                                    : isHovered
                                                    ? "bg-[#ff1744]/15 text-[#ff1744] border border-[#ff1744]/30"
                                                    : "bg-black/[0.05] dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-400 border border-black/[0.04] dark:border-white/[0.06]"
                                            }`}
                                        >
                                            {item.year} • {item.status}
                                        </span>
                                        {item.isCurrent && (
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Main Title with Clipped Frosted Glass Backing & Text-Only Glow */}
                                    <div className="relative inline-flex items-center">
                                        {/* Frosted Glass Layer strictly clipped to text (z-0 avoids Firefox negative-z WebRender culling) */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0 -inset-x-2.5 -inset-y-1 rounded-xl bg-white/75 dark:bg-neutral-950/80 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] pointer-events-none z-0"
                                        />
                                        <span
                                            className={`relative z-10 font-script tracking-wide transition-all duration-200 text-xl sm:text-2xl md:text-3xl font-bold leading-tight select-none ${
                                                item.isCurrent
                                                    ? isHovered || isDragged
                                                        ? "text-[#ff1744] [text-shadow:0_0_12px_rgba(255,23,68,0.9),0_0_24px_rgba(255,23,68,0.5)]"
                                                        : "text-[#ff1744] [text-shadow:0_0_8px_rgba(255,23,68,0.45)]"
                                                    : isHovered || isDragged
                                                    ? "text-[#ff1744] [text-shadow:0_0_12px_rgba(255,23,68,0.9),0_0_24px_rgba(255,23,68,0.5)]"
                                                    : "text-neutral-800 dark:text-neutral-100 group-hover/milestone:text-[#ff1744] group-hover/milestone:[text-shadow:0_0_12px_rgba(255,23,68,0.9),0_0_24px_rgba(255,23,68,0.5)]"
                                            }`}
                                        >
                                            {item.role}
                                        </span>
                                    </div>

                                    {/* Animated Hand-drawn Underline Scribble when Hovered - Zero layout-shift container to prevent hover flicker */}
                                    <div className="h-2 w-full relative pointer-events-none overflow-visible -mt-0.5">
                                        {isHovered && (
                                            <motion.svg
                                                className="w-full h-2 pointer-events-none overflow-visible"
                                                viewBox="0 0 120 8"
                                                preserveAspectRatio="none"
                                            >
                                                <motion.path
                                                    d="M 0 4 Q 30 7, 60 3 T 120 5"
                                                    stroke="#ff1744"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </motion.svg>
                                        )}
                                    </div>

                                    {/* Micro-Doodle Tag */}
                                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                                        {item.meta}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* Bottom Live Inspector HUD / Engineering Telemetry */}
                <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex items-center justify-between">
                    <AnimatePresence mode="wait">
                        {activeMilestone ? (
                            <motion.div
                                key={activeMilestone.year}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.15 }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.10] shadow-sm flex items-center justify-between gap-3"
                            >
                                <div className="flex items-center gap-2 truncate">
                                    <Zap className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                                    <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white">
                                        [{activeMilestone.year}]
                                    </span>
                                    <span className="text-xs text-neutral-700 dark:text-neutral-300 truncate">
                                        {activeMilestone.highlight}
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-[#ff1744] font-semibold shrink-0 hidden sm:inline">
                                    {activeMilestone.status}
                                </span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="default-telemetry"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border border-black/[0.04] dark:border-white/[0.06] text-[11px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-[#ff1744]" />
                                    <span>Hover or drag any milestone to inspect technical telemetry</span>
                                </div>
                                <span className="font-semibold text-neutral-700 dark:text-neutral-300 hidden sm:inline">
                                    2024 &rarr; 2025 &rarr; 2026
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
