"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlagshipProject, CaseStudyStage } from "@/types/portfolio";
import { TutorArchitectureGraph } from "./TutorArchitectureGraph";
import {
    Layers,
    Activity,
    Terminal,
    ExternalLink,
    Zap,
    ShoppingBag,
    ShieldCheck,
    Rocket,
    Check,
    Copy,
} from "lucide-react";

interface ProjectCaseStudySectionProps {
    project: FlagshipProject;
}

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({ project }) => {
    const [activeStage, setActiveStage] = useState<CaseStudyStage>("architecture");
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const stages = project.stages;
    const currentStage = stages[activeStage];

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const tabs = [
        { type: "architecture" as const, label: "01. Architecture Schema", Icon: Layers },
        { type: "flow" as const, label: "02. Interaction Flow", Icon: Activity },
        { type: "code" as const, label: "03. Code Deep-Dive", Icon: Terminal },
        { type: "live" as const, label: "04. Live Verification", Icon: ExternalLink },
    ];

    return (
        <section
            id={project.id}
            data-chapter-id={project.id}
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800/80 bg-stone-50 dark:bg-[#0b0b0b] text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-[#ff1744] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#ff1744]/10 border border-[#ff1744]/30">
                                Chapter {project.chapterNumber}
                            </span>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                                {project.role}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                            <span>{project.timeline}</span>
                            <span>•</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{project.category}</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                                {project.tagline}
                            </p>
                        </div>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700/80 font-mono text-xs transition-all flex items-center gap-2 self-start lg:self-auto shrink-0 shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out group"
                            >
                                <span>{project.title} Production</span>
                                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#ff1744] transition-colors" />
                            </a>
                        )}
                    </div>

                    {/* Architecture Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((item, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 text-xs font-mono shadow-craft-subtle ring-1 ring-black/[0.03] dark:ring-0"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quick Architecture Stat Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 flex flex-col justify-center shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150"
                        >
                            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                                {stat.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-200 mt-0.5">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4-STAGE INTERACTIVE SWITCHER WITH ANCHOR POSITIONING & SPRING MOTION */}
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden shadow-craft-elevated ring-1 ring-black/[0.05] dark:ring-0 dark:shadow-2xl">
                    {/* Stage Navigation Tab Bar with Anchor Positioning & Hover Glow */}
                    <div
                        className="relative flex p-1.5 border-b border-neutral-200 dark:border-neutral-800/80 bg-stone-100/90 dark:bg-neutral-900/90 overflow-x-auto scrollbar-none gap-1"
                        style={{
                            position: "relative",
                        }}
                    >
                        {tabs.map((tab) => {
                            const isSelected = activeStage === tab.type;
                            const isHovered = hoveredTab === tab.type;
                            const TabIcon = tab.Icon;

                            return (
                                <button
                                    key={tab.type}
                                    onClick={() => setActiveStage(tab.type)}
                                    onMouseEnter={() => setHoveredTab(tab.type)}
                                    onMouseLeave={() => setHoveredTab(null)}
                                    style={{
                                        // @ts-ignore
                                        anchorName: `--stage-tab-${tab.type}`,
                                    }}
                                    className={`relative z-10 flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-mono whitespace-nowrap rounded-xl transition-colors min-h-[44px] ${
                                        isSelected
                                            ? "text-[#ff1744] font-bold"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                    }`}
                                >
                                    {/* Active Tab Sliding Pill (Framer Motion Spring) */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId={`active-stage-pill-${project.id}`}
                                            className="absolute inset-0 bg-white dark:bg-neutral-950 rounded-xl shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0 -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 34,
                                            }}
                                        />
                                    )}

                                    {/* Active Red Underline Bar */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId={`active-stage-underline-${project.id}`}
                                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#ff1744] rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 34,
                                            }}
                                        />
                                    )}

                                    <TabIcon className="w-3.5 h-3.5" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Stage Body Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStage}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.22, ease: "easeInOut" }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                        {currentStage.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
                                        {currentStage.subtitle}
                                    </p>
                                </div>

                                {/* Custom Visual Rendering per Stage */}
                                {activeStage === "architecture" && (
                                    <>
                                        {project.id === "tutor-lms" ? (
                                            <TutorArchitectureGraph />
                                        ) : (
                                            <div className="p-8 rounded-xl bg-stone-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 font-mono text-xs space-y-6">
                                                <div className="text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                                                    <span>DIAGRAM: EASYSTORE ATOMIC FLOW</span>
                                                    <span className="text-[#ff1744]">GPU-COMPOSITED PIPELINE</span>
                                                </div>
                                                <div className="grid md:grid-cols-4 gap-4">
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">1. Attribute Graph</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Directed acyclic graph of product options (Color, Size, Material) pre-computed in O(1) memory lookup table.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">2. Mutation Engine</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            FLIP-driven SKU transition computes bounding rectangles to smoothly glide imagery and price tickers.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">3. Cart Syncer</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Optimistic cart drawer dispatch updates local badge instantly while debounced network batch confirms with server.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">4. Checkout Gate</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Zero-reload step transitions validate postal codes, tax calculations, and payment tokens synchronously.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeStage === "flow" && (
                                    <div className="p-6 rounded-xl bg-stone-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/90 space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 text-xs font-mono">
                                            <span>Interaction Sequence</span>
                                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Hardware Accelerated</span>
                                        </div>
                                        <div className="grid sm:grid-cols-3 gap-4 text-center">
                                            <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150 flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                                                    <Zap className="w-5 h-5 text-[#ff1744]" />
                                                </div>
                                                <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-200">1. Instant Filtering</h4>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                                    Faceted URL search syncs categories, colors, and sizes with zero layout reflow.
                                                </p>
                                            </div>
                                            <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150 flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                                                    <ShoppingBag className="w-5 h-5 text-[#ff1744]" />
                                                </div>
                                                <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-200">2. Persistent State</h4>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                                    Stateful hydration persists selections across browser navigation sessions.
                                                </p>
                                            </div>
                                            <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150 flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                                                    <ShieldCheck className="w-5 h-5 text-[#ff1744]" />
                                                </div>
                                                <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-200">3. Secure Handoff</h4>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                                    Redirect to localized checkout session with cryptographic verification.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeStage === "code" && currentStage.codeSnippet && (
                                    <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 font-mono text-xs shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0">
                                        <div className="flex items-center justify-between px-4 py-2.5 bg-stone-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                                            <span className="text-[#ff1744] font-semibold">
                                                {currentStage.codeSnippet.filename}
                                            </span>
                                            <button
                                                onClick={() => copyCode(currentStage.codeSnippet!.code)}
                                                className="px-2.5 py-1 rounded bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 transition-all text-xs flex items-center gap-1.5 shadow-sm"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-3 h-3 text-emerald-500" />
                                                        <span>Copied</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-3 h-3" />
                                                        <span>Copy Code</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <pre className="p-4 overflow-x-auto text-neutral-800 dark:text-neutral-200 leading-relaxed scrollbar-thin">
                                            <code>{currentStage.codeSnippet.code}</code>
                                        </pre>
                                    </div>
                                )}

                                {activeStage === "live" && (
                                    <div className="p-8 rounded-xl bg-stone-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 mx-auto flex items-center justify-center">
                                            <Rocket className="w-7 h-7 text-[#ff1744]" />
                                        </div>
                                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                                            Ready for Live Inspection
                                        </h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                                            This system is continuously deployed with automated checks and live production endpoints.
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-5 py-2.5 rounded-lg bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all shadow-[0_0_12px_rgba(255,23,68,0.4)] active:scale-[0.97] transition-all duration-150 ease-out inline-flex items-center gap-2"
                                                >
                                                    <span>Launch Live Experience</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
