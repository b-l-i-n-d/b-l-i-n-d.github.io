"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { ProjectStage } from "@/types/portfolio";
import { portfolioData } from "@/config/portfolio-data";
import { caseStudyShowcase } from "@/config/case-study-data";
import { GithubIcon } from "../icons";
import { GitPullRequest, Network, Layers, LayoutTemplate, ExternalLink, Lock } from "lucide-react";

// Dynamically load heavy interactive stages on demand
const ArchitectureGraph = dynamic(
  () => import("./ArchitectureGraph").then((m) => m.ArchitectureGraph),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/6 dark:border-white/8 flex items-center justify-center text-xs font-mono text-neutral-400">
        Loading architecture topology...
      </div>
    ),
  }
);

const HybridGallery = dynamic(
  () => import("../gallery/HybridGallery").then((m) => m.HybridGallery),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/6 dark:border-white/8 flex items-center justify-center text-xs font-mono text-neutral-400">
        Loading production specs...
      </div>
    ),
  }
);

const ComplexCodeStudio = dynamic(
  () => import("./ComplexCodeStudio").then((m) => m.ComplexCodeStudio),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/6 dark:border-white/8 flex items-center justify-center text-xs font-mono text-neutral-400">
        Loading production source studio...
      </div>
    ),
  }
);

const InteractiveFlowVisualizer = dynamic(
  () => import("./InteractiveFlowVisualizer").then((m) => m.InteractiveFlowVisualizer),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/6 dark:border-white/8 flex items-center justify-center text-xs font-mono text-neutral-400">
        Loading interactive state flow visualizer...
      </div>
    ),
  }
);

type StageType = "architecture" | "code" | "flow" | "gallery";

interface ProjectCaseStudySectionProps {
  project: any;
}

// Data-driven stage panel: renders a project's own stages content
// (description, highlights, optional code snippet) for non-Tutor projects.
const DataDrivenStageView: React.FC<{ stage: ProjectStage }> = ({ stage }) => {
  const [copied, setCopied] = useState(false);
  const snippet = stage.codeSnippet;

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{stage.title}</h3>
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {stage.subtitle}
        </p>
      </div>

      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {stage.description}
      </p>

      <ul className="grid gap-2.5">
        {stage.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 dark:bg-white/2 border border-black/4 dark:border-white/6 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
          >
            <span className="w-6 h-6 rounded-full bg-[#ff1744]/10 text-[#ff1744] flex items-center justify-center text-[11px] font-bold shrink-0">
              {idx + 1}
            </span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>

      {snippet && (
        <div className="rounded-2xl bg-[#0d1117] border border-black/8 dark:border-white/10 overflow-hidden shadow-2xl select-text">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] shrink-0" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shrink-0" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] shrink-0" />
              <span className="text-xs text-[#8b949e] ml-2 font-mono">{snippet.filename}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#ff1744]/15 text-[#ff1744] font-semibold">
                {snippet.language}
              </span>
            </div>
            <button
              onClick={() => copyCode(snippet.code)}
              className="px-2.5 py-1 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] flex items-center gap-1.5 transition-colors active:scale-95 text-xs shrink-0"
            >
              {copied ? (
                <span className="text-emerald-400 font-semibold">Copied</span>
              ) : (
                <span>Copy Code</span>
              )}
            </button>
          </div>
          <pre className="p-5 text-xs sm:text-sm text-[#e6edf3] font-mono leading-relaxed overflow-x-auto max-h-[500px]">
            <code>{snippet.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({ project }) => {
  const [activeStage, setActiveStage] = useState<StageType>("architecture");
  const [hoveredTab, setHoveredTab] = useState<StageType | null>(null);

  // Rich Tutor-format showcase data for this project (graph, flow, code studio).
  // Falls back to the data-driven stage view when a project has no showcase data.
  const showcase = caseStudyShowcase[project.id];

  const tabs: {
    type: StageType;
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
  }[] = [
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
      enclave: [
        "enclave-vault",
        "stripe-webhook-idempotency",
        "kinetic-friction",
        "drag-flip-engine",
      ],
      edtech: ["edtech-lms", "folder-tree-node", "tutor-telemetry", "temporal-calendar"],
      docapp: ["docapp-clinic", "temporal-calendar", "sust-thesis", "stripe-webhook-idempotency"],
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
      className="relative py-20 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#080808] text-neutral-900 dark:text-white border-t border-black/6 dark:border-white/8 transition-colors duration-200"
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
                    className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 group shrink-0"
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
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out group shrink-0"
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
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/4 text-neutral-700 dark:text-neutral-300 border border-black/4 dark:border-white/6 text-xs sm:text-sm font-medium shadow-sm shrink-0"
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
              className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/4 dark:border-white/6 flex flex-col justify-center shadow-sm hover:shadow-craft-card transition-all duration-150"
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
        <div className="rounded-2xl border border-black/6 dark:border-white/8 bg-white dark:bg-neutral-900/50 overflow-hidden shadow-craft-elevated dark:shadow-2xl">
          {/* Stage Navigation Tab Bar with Anchor Positioning */}
          <div
            className="relative flex p-1.5 border-b border-black/6 dark:border-white/8 bg-stone-100/90 dark:bg-neutral-900/90 overflow-x-auto scrollbar-none gap-1"
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
                      className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-xl shadow-craft-card border border-black/4 dark:border-white/6 -z-10"
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

                  <TabIcon
                    className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#ff1744]" : "text-neutral-600 dark:text-neutral-400"}`}
                  />
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
                        {showcase?.graph.navTitle ?? "Interactive Architecture Map"}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {showcase?.graph.navSubtitle ??
                          "Inspect modular boundaries, cache hierarchies, and transactional pipelines"}
                      </p>
                    </div>
                  </div>
                  {showcase ? (
                    <ArchitectureGraph data={showcase.graph} />
                  ) : (
                    <DataDrivenStageView stage={project.stages.architecture} />
                  )}
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
                  {showcase ? (
                    <ComplexCodeStudio modules={showcase.codeModules} />
                  ) : (
                    <DataDrivenStageView stage={project.stages.code} />
                  )}
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
                  {showcase ? (
                    <InteractiveFlowVisualizer flow={showcase.flow} />
                  ) : (
                    <DataDrivenStageView stage={project.stages.flow} />
                  )}
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
