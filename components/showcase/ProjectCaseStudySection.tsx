"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ProjectStage, ProjectCaseStudy } from "@/types/portfolio";
import { caseStudyShowcase } from "@/config/case-study-data";
import { GithubIcon } from "../icons";
import {
  GitPullRequest,
  Network,
  Layers,
  ExternalLink,
  Lock,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";
import { CaseStudyChapterRail } from "@/components/navigation/CaseStudyChapterRail";
import { SmoothCopyButton } from "@/components/showcase/SmoothCopyButton";
import { Highlight, themes } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import { useTheme } from "next-themes";

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

interface ProjectCaseStudySectionProps {
  project: ProjectCaseStudy;
}

// Data-driven stage panel: renders a project's own stages content
// (description, highlights, optional code snippet) for non-showcase fallback.
const DataDrivenStageView: React.FC<{ stage: ProjectStage }> = ({ stage }) => {
  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || theme === "dark";
  const snippet = stage.codeSnippet;

  const getLang = (l?: string): Language => {
    if (!l) return "typescript";
    const low = l.toLowerCase();
    if (low === "ts" || low === "typescript") return "typescript";
    if (low === "tsx") return "tsx";
    if (low === "js" || low === "javascript") return "javascript";
    if (low === "jsx") return "jsx";
    if (low === "sql") return "sql";
    if (low === "json") return "json";
    if (low === "css") return "css";
    if (low === "py" || low === "python") return "python";
    if (low === "sh" || low === "bash") return "bash";
    return "typescript";
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h4 className="text-xl font-bold text-neutral-900 dark:text-white">{stage.title}</h4>
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 font-mono">
          {stage.subtitle}
        </p>
      </div>

      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
        {stage.description}
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {stage.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900/70 border border-black/6 dark:border-white/8 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-sm"
          >
            <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[11px] font-bold shrink-0">
              {idx + 1}
            </span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>

      {snippet && (
        <div className="rounded-2xl bg-stone-100/90 dark:bg-[#0d1117] border border-black/8 dark:border-white/10 overflow-hidden shadow-2xl select-text">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-200/70 dark:bg-[#161b22] border-b border-black/6 dark:border-[#30363d]">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] shrink-0" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shrink-0" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] shrink-0" />
              <span className="text-xs text-neutral-700 dark:text-[#8b949e] ml-2 font-mono font-medium truncate">
                {snippet.filename}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold shrink-0">
                {snippet.language}
              </span>
            </div>
            <SmoothCopyButton
              textToCopy={snippet.code}
              idleLabel="Copy Code"
              copiedLabel="Copied"
              size="xs"
              className="px-2.5 py-1 bg-white dark:bg-[#21262d] hover:bg-stone-100 dark:hover:bg-[#30363d] text-neutral-700 dark:text-[#c9d1d9] border border-black/8 dark:border-[#30363d] shadow-sm"
            />
          </div>
          <div className="p-5 overflow-x-auto max-h-[500px] bg-stone-50/50 dark:bg-[#0d1117]">
            <Highlight
              code={snippet.code}
              language={getLang(snippet.language)}
              theme={isDark ? themes.oneDark : themes.oneLight}
            >
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className="text-xs sm:text-sm font-mono leading-relaxed min-w-max"
                  style={{ ...style, backgroundColor: "transparent", margin: 0 }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="min-h-[1.4em] py-0.5">
                      <span className="select-none inline-block w-8 mr-4 text-right text-neutral-400 dark:text-[#484f58]">
                        {i + 1}
                      </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({ project }) => {
  // Rich showcase data for this project (graph, flow, code studio).
  // Falls back to data-driven stage view if project has no custom showcase.
  const showcase = caseStudyShowcase[project.id];

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarOffset = 124; // navbar (64) + breadcrumb (48) + offset
    const top = Math.max(0, el.offsetTop - navbarOffset);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Floating Desktop Chapter Scrubber Rail */}
      <CaseStudyChapterRail />

      <article
        id="overview"
        data-chapter-id="case-study"
        data-project-id={project.id}
        className="relative pt-6 sm:pt-10 pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 sm:space-y-24 transition-colors duration-200"
      >
        {/* ========================================================= */}
        {/* MASTHEAD: HERO & ENGINEERING SPECIFICATION               */}
        {/* ========================================================= */}
        <header className="space-y-8">
          {/* Chapter Metadata Ribbon */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>FLAGSHIP ENGINEERING DEEP-DIVE</span>
            </div>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 hidden sm:inline">
              /
            </span>
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
              {project.category}
            </span>
            {project.timeline && (
              <>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 hidden sm:inline">
                  /
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {project.timeline}
                </span>
              </>
            )}
          </div>

          {/* Title & Tagline with Production Actions */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.12]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Action Buttons: GitHub & Live URLs */}
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto shrink-0">
              {project.isPrivate ? (
                <div className="px-4 py-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm shrink-0">
                  <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Private Repository</span>
                </div>
              ) : (
                project.githubUrl &&
                (project.secondaryGithubUrl ? (
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-neutral-900 border border-black/8 dark:border-white/10 shadow-sm shrink-0">
                    <span className="text-xs font-semibold px-2 text-neutral-500 dark:text-neutral-400 font-mono">
                      Source:
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                      <span>{project.id === "omnicommerce" ? "Admin" : "App"}</span>
                    </a>
                    <a
                      href={project.secondaryGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                      <span>{project.id === "omnicommerce" ? "Store" : "Extension"}</span>
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 group shrink-0"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                    <span>GitHub Source</span>
                  </a>
                ))
              )}

              {project.liveUrl &&
                !project.isPrivate &&
                (project.secondaryLiveUrl ? (
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-neutral-900 border border-black/8 dark:border-white/10 shadow-sm shrink-0">
                    <span className="text-xs font-semibold px-2 text-neutral-500 dark:text-neutral-400 font-mono">
                      Live:
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
                    >
                      <span>Storefront</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                    </a>
                    <a
                      href={project.secondaryLiveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
                    >
                      <span>Admin</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out group shrink-0"
                  >
                    <span>{project.title} Production</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                  </a>
                ))}
            </div>
          </div>

          {/* Architecture Technology Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((item: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 text-xs sm:text-sm font-mono shadow-sm shrink-0"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Architectural Telemetry Specification Strip */}
          <div className="rounded-2xl bg-stone-100/60 dark:bg-neutral-900/40 border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md p-1.5 shadow-craft-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06] dark:divide-white/[0.08]">
              {project.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="px-4 sm:px-5 py-3.5 flex flex-col justify-center min-h-[68px] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors first:rounded-l-xl last:rounded-r-xl"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                    <span className="truncate">{stat.label}</span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1 font-sans leading-snug tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Chapter Directory Index Strip */}
          <nav
            aria-label="Case study chapters directory"
            className="pt-6 border-t border-black/8 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                Editorial Blueprint Index
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                Continuous Reading Flow
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => scrollToChapter("chapter-topology")}
                className="group p-4 rounded-xl text-left bg-white dark:bg-neutral-900/50 border border-black/6 dark:border-white/8 hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-accent font-bold">TOPOLOGY</span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                </div>
                <div className="font-bold text-sm text-neutral-900 dark:text-white">
                  System Boundaries
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
                  {showcase?.graph.title ?? "Modular Boundaries & Topology"}
                </div>
              </button>

              <button
                onClick={() => scrollToChapter("chapter-flow")}
                className="group p-4 rounded-xl text-left bg-white dark:bg-neutral-900/50 border border-black/6 dark:border-white/8 hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-accent font-bold">FLOW ENGINE</span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                </div>
                <div className="font-bold text-sm text-neutral-900 dark:text-white">
                  Interactive Simulator
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
                  {showcase
                    ? `${showcase.flow.steps.length}-Step Lifecycle Simulator`
                    : "State Machine & Mermaid Flows"}
                </div>
              </button>

              <button
                onClick={() => scrollToChapter("chapter-source")}
                className="group p-4 rounded-xl text-left bg-white dark:bg-neutral-900/50 border border-black/6 dark:border-white/8 hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-accent font-bold">SOURCE STUDIO</span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                </div>
                <div className="font-bold text-sm text-neutral-900 dark:text-white">
                  Production Source
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
                  {showcase ? `${showcase.codeModules.length} Verified Modules` : "Source Snippets"}
                </div>
              </button>
            </div>
          </nav>
        </header>

        {/* ========================================================= */}
        {/* CHAPTER 01: SYSTEM TOPOLOGY & MODULAR BOUNDARIES         */}
        {/* ========================================================= */}
        <section
          id="chapter-topology"
          aria-labelledby="chapter-topology-heading"
          className="scroll-mt-32 space-y-6"
        >
          <div className="space-y-3 pt-6 border-t border-black/8 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-wider font-bold">
                <Network className="w-3.5 h-3.5" />
                <span>Architecture Topology</span>
              </div>
              {showcase && (
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {showcase.graph.countLabel}
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2
                  id="chapter-topology-heading"
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
                >
                  {showcase?.graph.title ?? "System Topology & Modular Boundaries"}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-3xl leading-relaxed">
                  {showcase?.graph.navSubtitle ??
                    "Decomposed modular boundaries, cache hierarchies, and transactional pipelines verified against production PRs."}
                </p>
              </div>

              {showcase?.graph.verifyUrl && (
                <a
                  href={showcase.graph.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-accent flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>{showcase.graph.verifyLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Architecture Topology Presentation Canvas */}
          <div className="pt-2">
            {showcase ? (
              <ArchitectureGraph data={showcase.graph} />
            ) : (
              <DataDrivenStageView stage={project.stages.architecture} />
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER 02: INTERACTIVE EXECUTION FLOW & STATE MACHINE   */}
        {/* ========================================================= */}
        <section
          id="chapter-flow"
          aria-labelledby="chapter-flow-heading"
          className="scroll-mt-32 space-y-6"
        >
          <div className="space-y-3 pt-12 border-t border-black/8 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-wider font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>Execution Flow & State Machine</span>
              </div>
              {showcase && (
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {showcase.flow.steps.length} Lifecycle Pipeline Stages
                </span>
              )}
            </div>

            <div>
              <h2
                id="chapter-flow-heading"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
              >
                Interactive Execution Flow & State Machine
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-3xl leading-relaxed">
                Simulate asynchronous event cascades, inspect reactive state transitions, and pan
                freely across dynamic Mermaid topology graphs.
              </p>
            </div>
          </div>

          {/* Flow Visualizer Presentation Canvas */}
          <div className="pt-2">
            {showcase ? (
              <InteractiveFlowVisualizer flow={showcase.flow} />
            ) : (
              <DataDrivenStageView stage={project.stages.flow} />
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER 03: PRODUCTION SOURCE CODE STUDIO                */}
        {/* ========================================================= */}
        <section
          id="chapter-source"
          aria-labelledby="chapter-source-heading"
          className="scroll-mt-32 space-y-6"
        >
          <div className="space-y-3 pt-12 border-t border-black/8 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-wider font-bold">
                <GitPullRequest className="w-3.5 h-3.5" />
                <span>Production Source Code Studio</span>
              </div>
              {showcase && (
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {showcase.codeModules.length} Verified Modules
                </span>
              )}
            </div>

            <div>
              <h2
                id="chapter-source-heading"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
              >
                Verified Production Source Code Studio
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-3xl leading-relaxed">
                Direct source modules extracted from release branches with syntax highlighting,
                architectural context, and verified pull-request traceability.
              </p>
            </div>
          </div>

          {/* Production Code Presentation Canvas */}
          <div className="pt-2">
            {showcase ? (
              <ComplexCodeStudio modules={showcase.codeModules} />
            ) : (
              <DataDrivenStageView stage={project.stages.code} />
            )}
          </div>
        </section>
      </article>
    </div>
  );
};
