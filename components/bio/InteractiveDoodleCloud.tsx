"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move } from "lucide-react";

interface SkillDoodle {
    name: string;
    subtitle: string;
    badge: string;
    x: string;
    y: string;
    size: string;
    weight: string;
    rot: number;
}

const SKILLS_DOODLE: SkillDoodle[] = [
    {
        name: "Design Systems",
        subtitle: "Tokenized UI with mathematical rhythm",
        badge: "Atomic Systems",
        x: "4%",
        y: "14%",
        size: "text-xl sm:text-2xl",
        weight: "font-bold",
        rot: -4,
    },
    {
        name: "Fluid Motion",
        subtitle: "120 FPS interruptible spring physics",
        badge: "120 FPS",
        x: "58%",
        y: "16%",
        size: "text-base sm:text-lg",
        weight: "font-semibold",
        rot: 3,
    },
    {
        name: "State Machines",
        subtitle: "Predictable, zero-illegal-state UI",
        badge: "Deterministic",
        x: "8%",
        y: "52%",
        size: "text-xl sm:text-2xl",
        weight: "font-extrabold",
        rot: -3,
    },
    {
        name: "Optimization",
        subtitle: "18X build pipeline & bundle tree-shaking",
        badge: "18X Fast",
        x: "48%",
        y: "46%",
        size: "text-sm sm:text-base",
        weight: "font-medium",
        rot: 6,
    },
    {
        name: "Micro-Interactions",
        subtitle: "Tactile gestures & magnetic pointer physics",
        badge: "Tactile",
        x: "16%",
        y: "78%",
        size: "text-sm sm:text-base",
        weight: "font-normal",
        rot: 2,
    },
    {
        name: "Zero CLS",
        subtitle: "FLIP layout geometry pre-computation",
        badge: "Score: 0.000",
        x: "64%",
        y: "72%",
        size: "text-base sm:text-lg",
        weight: "font-bold",
        rot: -5,
    },
];

export const InteractiveDoodleCloud: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<SkillDoodle | null>(null);
    const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="space-y-3 border-t border-black/[0.06] dark:border-white/[0.08] pt-6">
            {/* Header with Title and subtle playful hint */}
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                    Also best at :
                </h4>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 opacity-90 select-none">
                    <Move className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                    <span>drag to test physics</span>
                </span>
            </div>

            {/* Interactive Sketchpad Canvas */}
            <div
                ref={containerRef}
                className="relative w-full h-48 sm:h-52 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] p-4 overflow-hidden group select-none shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-black/[0.12] dark:hover:border-white/[0.15]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 0.75px, transparent 0.75px)`,
                    backgroundSize: "20px 20px",
                    color: "rgba(128, 128, 128, 0.08)",
                }}
            >
                {/* Flowing Dashed Vector Trajectory Waves */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500"
                    viewBox="0 0 400 190"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    {/* Trajectory 1: Upper Harmonic Wave */}
                    <motion.path
                        d="M 15 95 Q 90 25, 185 85 T 385 65"
                        stroke="#ff1744"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -56 }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 16,
                        }}
                        style={{
                            opacity: hoveredSkill ? 0.45 : 0.22,
                            filter: hoveredSkill
                                ? "drop-shadow(0 0 4px rgba(255, 23, 68, 0.4))"
                                : "none",
                        }}
                    />

                    {/* Trajectory 2: Lower Kinetic Wave */}
                    <motion.path
                        d="M 25 155 Q 160 85, 270 145 T 380 115"
                        stroke="#ff1744"
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: 48 }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                        style={{
                            opacity: hoveredSkill ? 0.35 : 0.16,
                        }}
                    />

                    {/* Architectural Crosshair / Registration Targets */}
                    <g className="opacity-20 dark:opacity-30">
                        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1" />
                        <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1" />
                        <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="1" />
                        <circle cx="380" cy="170" r="4" stroke="currentColor" strokeWidth="1" />
                        <line x1="372" y1="170" x2="388" y2="170" stroke="currentColor" strokeWidth="1" />
                        <line x1="380" y1="162" x2="380" y2="178" stroke="currentColor" strokeWidth="1" />
                    </g>
                </svg>

                {/* Floating Draggable Doodle Words */}
                {SKILLS_DOODLE.map((item) => {
                    const isHovered = hoveredSkill?.name === item.name;
                    const isDragged = draggedSkill === item.name;

                    return (
                        <motion.div
                            key={item.name}
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.35}
                            dragSnapToOrigin
                            onDragStart={() => setDraggedSkill(item.name)}
                            onDragEnd={() => setDraggedSkill(null)}
                            onMouseEnter={() => setHoveredSkill(item)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            initial={{ rotate: item.rot }}
                            animate={{
                                rotate: isHovered || isDragged ? 0 : item.rot,
                                scale: isDragged ? 1.25 : isHovered ? 1.16 : 1,
                                zIndex: isHovered || isDragged ? 30 : 10,
                            }}
                            whileTap={{ scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 450,
                                damping: 25,
                            }}
                            style={{
                                top: item.y,
                                left: item.x,
                                position: "absolute",
                            }}
                            className="cursor-grab active:cursor-grabbing select-none group/item"
                        >
                            <div className="relative inline-flex items-center">
                                {/* Hand-Drawn Glow Backdrop on hover */}
                                {isHovered && (
                                    <motion.div
                                        layoutId="doodle-glow"
                                        className="absolute -inset-2 rounded-xl bg-[#ff1744]/10 dark:bg-[#ff1744]/15 -z-10 blur-sm pointer-events-none"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    />
                                )}

                                {/* Main Doodle Script Text */}
                                <span
                                    className={`font-script tracking-wide transition-colors duration-200 ${item.size} ${item.weight} ${
                                        isHovered || isDragged
                                            ? "text-[#ff1744] drop-shadow-[0_2px_8px_rgba(255,23,68,0.35)]"
                                            : "text-neutral-700 dark:text-neutral-200 group-hover/item:text-[#ff1744]"
                                    }`}
                                >
                                    {item.name}
                                </span>

                                {/* Animated Hand-drawn Underline Scribble when active */}
                                {isHovered && (
                                    <motion.svg
                                        className="absolute -bottom-1.5 left-0 w-full h-2 pointer-events-none overflow-visible"
                                        viewBox="0 0 100 8"
                                        preserveAspectRatio="none"
                                    >
                                        <motion.path
                                            d="M 0 4 Q 25 7, 50 3 T 100 5"
                                            stroke="#ff1744"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </motion.svg>
                                )}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Micro Telemetry Pill: Dynamically displays active skill context at bottom */}
                <div className="absolute bottom-2.5 right-3 pointer-events-none">
                    <AnimatePresence mode="wait">
                        {hoveredSkill ? (
                            <motion.div
                                key={hoveredSkill.name}
                                initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 2, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="px-3 py-1 rounded-full bg-white/95 dark:bg-neutral-900/95 border border-[#ff1744]/25 shadow-sm flex items-center gap-1.5 text-xs font-mono text-neutral-800 dark:text-neutral-200 backdrop-blur-sm"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] animate-pulse shrink-0" />
                                <span className="font-semibold text-[#ff1744] shrink-0">
                                    {hoveredSkill.badge}:
                                </span>
                                <span className="text-neutral-600 dark:text-neutral-400">
                                    {hoveredSkill.subtitle}
                                </span>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                className="text-xs font-mono text-neutral-400 dark:text-neutral-400 hidden sm:block"
                            >
                                6 craft specializations
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
