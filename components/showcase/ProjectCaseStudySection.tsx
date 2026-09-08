"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlagshipProject, CaseStudyStage } from "@/types/portfolio";
import { TutorArchitectureGraph } from "./TutorArchitectureGraph";
import {
    Layers,
    Activity,
    Terminal,
    ExternalLink,
    Shield,
    Workflow,
    Flame,
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
        { type: "architecture" as const, label: "System architecture", Icon: Layers },
        { type: "flow" as const, label: "Interaction flow", Icon: Activity },
        { type: "code" as const, label: "Implementation code", Icon: Terminal },
        { type: "live" as const, label: "Production telemetry", Icon: ExternalLink },
    ];

    return (
        <section
            id={project.id}
            data-chapter-id={project.id}
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-black/[0.06] dark:border-white/[0.08] bg-stone-50 dark:bg-[#0b0b0b] text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                                Flagship Platform
                            </span>
                            <span className="text-xs text-neutral-400">/</span>
                            <span className="text-xs text-neutral-500 font-medium">
                                {project.role}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
                            <span>{project.timeline}</span>
                            <span className="text-neutral-400">/</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{project.category}</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
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
                                className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/[0.08] dark:border-white/[0.10] text-xs font-semibold flex items-center gap-2 self-start lg:self-auto shrink-0 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out group"
                            >
                                <span>{project.title} Production</span>
                                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#ff1744] transition-colors" />
                            </a>
                        )}
                    </div>

                    {/* Architecture Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((item, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] text-xs font-medium shadow-sm"
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
                            className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.06] flex flex-col justify-center shadow-sm hover:shadow-craft-card transition-all duration-150"
                        >
                            <span className="text-xs text-neutral-500 font-medium">
                                {stat.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-200 mt-0.5">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4-STAGE INTERACTIVE SWITCHER WITH ANCHOR POSITIONING & SPRING MOTION */}
                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 overflow-hidden shadow-craft-elevated dark:shadow-2xl">
                    {/* Stage Navigation Tab Bar with Anchor Positioning */}
                    <div
                        className="relative flex p-1.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-stone-100/90 dark:bg-neutral-900/90 overflow-x-auto scrollbar-none gap-1"
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
                                        anchorName: `--case-tab-${tab.type}`,
                                    }}
                                    className={`relative z-10 flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 select-none ${
                                        isSelected
                                            ? "text-neutral-900 dark:text-white"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                    }`}
                                >
                                    {/* Active Animated Glider */}
                                    {isSelected && (
                                        <motion.div
                                            layoutId={`stage-active-pill-${project.id}`}
                                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-xl shadow-craft-card border border-black/[0.04] dark:border-white/[0.06] -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 32,
                                            }}
                                        />
                                    )}

                                    {/* Hover Ghost Pill */}
                                    {isHovered && !isSelected && (
                                        <motion.div
                                            layoutId={`stage-hover-pill-${project.id}`}
                                            className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/40 rounded-xl -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 480,
                                                damping: 34,
                                            }}
                                        />
                                    )}

                                    <TabIcon className={`w-4 h-4 ${isSelected ? "text-[#ff1744]" : "text-neutral-500"}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Stage Body */}
                    <div className="p-6 sm:p-10">
                        {currentStage && (
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
                                            <div className="p-8 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs space-y-6">
                                                <div className="text-neutral-500 pb-2 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between font-medium">
                                                    <span>EasyStore Atomic Data Flow</span>
                                                    <span className="text-[#ff1744]">Hardware-Composited Pipeline</span>
                                                </div>
                                                <div className="grid md:grid-cols-4 gap-4">
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-black/[0.04] dark:border-white/[0.06] space-y-2 shadow-sm hover:shadow-craft-card transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">1. Attribute Graph</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Directed acyclic graph of product options (Color, Size, Material) pre-computed in O(1) memory lookup table.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-black/[0.04] dark:border-white/[0.06] space-y-2 shadow-sm hover:shadow-craft-card transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">2. Matrix Solver</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Validates inventory stock and pricing combinations instantly without network roundtrip or layout reflow.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-black/[0.04] dark:border-white/[0.06] space-y-2 shadow-sm hover:shadow-craft-card transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">3. Optimistic Checkout</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Cart state committed to local storage cache while dispatching idempotent background checkout mutations.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-black/[0.04] dark:border-white/[0.06] space-y-2 shadow-sm hover:shadow-craft-card transition-all duration-150">
                                                        <div className="text-[#ff1744] font-bold">4. Telemetry Log</div>
                                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                                                            Error boundaries capture conversion anomalies and push diagnostic traces to remote monitoring sinks.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {activeStage === "flow" && (
                                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        {currentStage.highlights?.map((step, idx) => (
                                            <div
                                                key={idx}
                                                className="p-5 rounded-xl bg-stone-50/70 dark:bg-neutral-950/60 border border-black/[0.04] dark:border-white/[0.06] space-y-2 shadow-sm hover:shadow-craft-card transition-all duration-150"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 rounded-full bg-[#ff1744]/10 text-[#ff1744] flex items-center justify-center text-xs font-semibold">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                                                        Flow Step {idx + 1}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeStage === "code" && (() => {
                                    const codeSnippetText =
                                        typeof currentStage.codeSnippet === "string"
                                            ? currentStage.codeSnippet
                                            : currentStage.codeSnippet?.code || "";
                                    const fileName =
                                        typeof currentStage.codeSnippet === "object" && currentStage.codeSnippet?.filename
                                            ? currentStage.codeSnippet.filename
                                            : project.id === "tutor-lms"
                                            ? "useTutorLessonCockpit.ts"
                                            : "useEasyStoreVariantSolver.ts";

                                    return (
                                        <div className="relative rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-neutral-950 font-mono text-xs shadow-craft-elevated">
                                            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                                    <span className="ml-2 text-xs text-neutral-300 font-mono">
                                                        {fileName}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => copyCode(codeSnippetText)}
                                                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                                                    aria-label="Copy code snippet"
                                                >
                                                    {copied ? (
                                                        <>
                                                            <Check className="w-3 h-3 text-emerald-400" />
                                                            <span className="text-emerald-400">Copied</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="w-3 h-3" />
                                                            <span>Copy</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                            <pre className="p-4 sm:p-6 overflow-x-auto text-neutral-200 leading-relaxed">
                                                <code>{codeSnippetText}</code>
                                            </pre>
                                        </div>
                                    );
                                })()}

                                {activeStage === "live" && (
                                    <div className="p-6 rounded-xl bg-stone-50/70 dark:bg-neutral-950 border border-black/[0.06] dark:border-white/[0.08] space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                                                <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                                    Production Health Status: 100% Operational
                                                </span>
                                            </div>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-semibold text-[#ff1744] hover:text-rose-500 inline-flex items-center gap-1.5"
                                                >
                                                    <span>Open Live Site</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {currentStage.description}
                                        </p>

                                        <div className="pt-2 flex flex-wrap gap-2 text-xs">
                                            {currentStage.highlights?.map((h, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 rounded-md bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] font-medium"
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
