"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyProject } from "@/types/portfolio";
import { TutorArchitectureGraph } from "./TutorArchitectureGraph";
import { ComplexCodeStudio } from "./ComplexCodeStudio";
import { portfolioData } from "@/config/portfolio-data";
import { InteractiveFlowVisualizer } from "./InteractiveFlowVisualizer";
import { HybridGallery } from "../gallery/HybridGallery";
import { GithubIcon } from "../icons";
import { 
    GitPullRequest, 
    Network, 
    Layers, 
    LayoutTemplate, 
    ExternalLink, 
    Lock
} from "lucide-react";

type StageType = "architecture" | "code" | "flow" | "gallery";

interface ProjectCaseStudySectionProps {
    project: any;
}

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({ project }) => {
    const [activeStage, setActiveStage] = useState<StageType>("architecture");
    const [hoveredTab, setHoveredTab] = useState<StageType | null>(null);

    const tabs: { type: StageType; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
        { type: "architecture", label: "Architecture Graph", Icon: Network },
        { type: "code", label: "Production Source", Icon: GitPullRequest },
        { type: "flow", label: "Interactive Flow", Icon: Layers },
        { type: "gallery", label: "Product Blueprints", Icon: LayoutTemplate },
    ];

    // Curated blueprints matching the project domain so blueprints are never empty
    const getProjectGallery = () => {
        if (project.gallery && project.gallery.length > 0) return project.gallery;
        const projectGalleryMap: Record<string, string[]> = {
            "tutor-lms": ["tutor-telemetry", "folder-tree-node", "drag-flip-engine", "3d-card-flip"],
            "enclave": ["enclave-vault", "stripe-webhook-idempotency", "kinetic-friction", "drag-flip-engine"],
            "edtech": ["edtech-lms", "folder-tree-node", "tutor-telemetry", "temporal-calendar"],
            "docapp": ["docapp-clinic", "temporal-calendar", "sust-thesis", "stripe-webhook-idempotency"],
        };
        const targetIds = projectGalleryMap[project.id] || [];
        const matched = portfolioData.hybridGallery.filter((item) => targetIds.includes(item.id));
        return matched.length > 0 ? matched : portfolioData.hybridGallery.slice(0, 4);
    };

    return (
        <section
            id={project.id}
            data-chapter-id="case-study"
            data-project-id={project.id}
            className="relative py-20 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#080808] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="relative z-10 max-w-7xl mx-auto space-y-8">
                {/* Section Narrative Banner */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                            Engineering Case Study
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                            {project.stats?.[0]?.value || ""}
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                                {project.tagline}
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto shrink-0">
                            {project.isPrivate ? (
                                <div className="px-4 py-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm shrink-0">
                                    <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                    <span>Private Repository</span>
                                </div>
                            ) : (
                                project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/[0.08] dark:border-white/[0.10] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 group shrink-0"
                                    >
                                        <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-[#ff1744] transition-colors shrink-0" />
                                        <span>GitHub</span>
                                    </a>
                                )
                            )}
                            {project.liveUrl && !project.isPrivate && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/[0.08] dark:border-white/[0.10] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out group shrink-0"
                                >
                                    <span>{project.title} Production</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#ff1744] transition-colors shrink-0" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Architecture Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((item: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] text-xs sm:text-sm font-medium shadow-sm shrink-0"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quick Architecture Stat Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.stats.map((stat: any, idx: number) => (
                        <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.06] flex flex-col justify-center shadow-sm hover:shadow-craft-card transition-all duration-150"
                        >
                            <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
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
                                    className={`relative z-10 flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 select-none shrink-0 ${
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

                                    <TabIcon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#ff1744]" : "text-neutral-600 dark:text-neutral-400"}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Stage Presentation Viewports */}
                    <div className="p-4 sm:p-8 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {activeStage === "architecture" && (
                                <motion.div
                                    key="architecture"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                                Interactive Architecture Map
                                            </h3>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                Inspect modular boundaries, cache hierarchies, and transactional pipelines
                                            </p>
                                        </div>
                                    </div>
                                    <TutorArchitectureGraph />
                                </motion.div>
                            )}

                            {activeStage === "code" && (
                                <motion.div
                                    key="code"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ComplexCodeStudio />
                                </motion.div>
                            )}

                            {activeStage === "flow" && (
                                <motion.div
                                    key="flow"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <InteractiveFlowVisualizer />
                                </motion.div>
                            )}

                            {activeStage === "gallery" && (
                                <motion.div
                                    key="gallery"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <HybridGallery items={getProjectGallery()} isEmbedded />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
