"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ProjectStage, ProjectCaseStudy, ProjectShowcase } from "@/types/portfolio";
import { GithubIcon } from "../icons";
import { ProjectBrandIcon } from "./ProjectBrandIcon";
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
import { Highlight } from "prism-react-renderer";
import { cssPrismTheme, getPrismLanguage } from "./prism-theme";

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
  showcase: ProjectShowcase | undefined;
}

// Data-driven stage panel: renders a project's own stages content
// (description, highlights, optional code snippet) for non-showcase fallback.
const DataDrivenStageView: React.FC<{ stage: ProjectStage }> = ({ stage }) => {
  const snippet = stage.codeSnippet;

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
        {stage.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900/70 border border-black/6 dark:border-white/8 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-sm"
          >
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
              className="p-1.5 sm:px-2.5 sm:py-1 bg-white dark:bg-[#21262d] hover:bg-stone-100 dark:hover:bg-[#30363d] text-neutral-700 dark:text-[#c9d1d9] border border-black/8 dark:border-[#30363d] shadow-sm text-xs font-mono shrink-0"
            />
          </div>
          <div className="p-5 overflow-x-auto max-h-[500px] bg-stone-50/50 dark:bg-[#0d1117]">
            <Highlight
              code={snippet.code}
              language={getPrismLanguage(snippet.language)}
              theme={cssPrismTheme}
            >
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className="text-xs sm:text-sm font-mono leading-relaxed min-w-max"
                  style={{ ...style, backgroundColor: "transparent", margin: 0 }}
                >
                  {tokens.map((line, lineNumber) => (
                    <div
                      key={`line-${lineNumber + 1}`}
                      {...getLineProps({ line })}
                      className="min-h-[1.4em] py-0.5"
                    >
                      <span className="select-none inline-block w-8 mr-4 text-right text-neutral-400 dark:text-[#484f58]">
                        {lineNumber + 1}
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

interface ProjectCaseStudyGithubActionProps {
  project: ProjectCaseStudy;
}

const ProjectCaseStudyGithubAction: React.FC<ProjectCaseStudyGithubActionProps> = ({ project }) => {
  if (project.isPrivate) {
    return (
      <div className="px-4 py-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm shrink-0">
        <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>Private Repository</span>
      </div>
    );
  }

  if (!project.githubUrl) {
    return null;
  }

  if (project.secondaryGithubUrl) {
    const primaryLabel = project.id === "omnicommerce" ? "Admin" : "App";
    const secondaryLabel = project.id === "omnicommerce" ? "Store" : "Extension";

    return (
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
          <span>{primaryLabel}</span>
        </a>
        <a
          href={project.secondaryGithubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold flex items-center gap-1.5 transition-colors group shrink-0"
        >
          <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
          <span>{secondaryLabel}</span>
        </a>
      </div>
    );
  }

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-[box-shadow,transform,background-color] duration-150 group shrink-0"
    >
      <GithubIcon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
      <span>GitHub Source</span>
    </a>
  );
};

interface ProjectCaseStudyLiveActionProps {
  project: ProjectCaseStudy;
}

const ProjectCaseStudyLiveAction: React.FC<ProjectCaseStudyLiveActionProps> = ({ project }) => {
  if (project.isPrivate || !project.liveUrl) {
    return null;
  }

  if (project.secondaryLiveUrl) {
    return (
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
    );
  }

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-black/8 dark:border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-[box-shadow,transform,background-color] duration-150 ease-out group shrink-0"
    >
      <span>{project.title} Production</span>
      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
    </a>
  );
};

interface ProjectChapterDirectoryNavProps {
  showcase: ProjectShowcase | undefined;
  scrollToChapter: (id: string) => void;
}

const ProjectChapterDirectoryNav: React.FC<ProjectChapterDirectoryNavProps> = ({
  showcase,
  scrollToChapter,
}) => {
  const topologySubtitle = showcase?.graph.title ?? "Modular Boundaries & Topology";
  const flowSubtitle = showcase
    ? `${showcase.flow.steps.length}-Step Lifecycle Simulator`
    : "State Machine & Mermaid Flows";
  const sourceSubtitle = showcase
    ? `${showcase.codeModules.length} Verified Modules`
    : "Source Snippets";

  return (
    <nav aria-label="Case study chapters directory" className="pt-2">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
          Chapter Directory
        </span>
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
          Continuous Reading Flow
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => scrollToChapter("chapter-topology")}
          className="group p-4 rounded-xl text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-b-2 border-transparent hover:border-accent/40 transition-[border-color,background-color]"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-accent font-bold tracking-wider">01 Topology</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-[color,transform]" />
          </div>
          <div className="font-bold text-sm text-neutral-900 dark:text-white">
            System Boundaries
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
            {topologySubtitle}
          </div>
        </button>

        <button
          onClick={() => scrollToChapter("chapter-flow")}
          className="group p-4 rounded-xl text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-b-2 border-transparent hover:border-accent/40 transition-[border-color,background-color]"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-accent font-bold tracking-wider">02 Flow Engine</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-[color,transform]" />
          </div>
          <div className="font-bold text-sm text-neutral-900 dark:text-white">
            Interactive Simulator
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
            {flowSubtitle}
          </div>
        </button>

        <button
          onClick={() => scrollToChapter("chapter-source")}
          className="group p-4 rounded-xl text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-b-2 border-transparent hover:border-accent/40 transition-[border-color,background-color]"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-accent font-bold tracking-wider">03 Source Studio</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-[color,transform]" />
          </div>
          <div className="font-bold text-sm text-neutral-900 dark:text-white">
            Production Source
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
            {sourceSubtitle}
          </div>
        </button>
      </div>
    </nav>
  );
};

interface ProjectCaseStudyHeaderProps {
  project: ProjectCaseStudy;
  showcase: ProjectShowcase | undefined;
  scrollToChapter: (id: string) => void;
}

const ProjectCaseStudyHeader: React.FC<ProjectCaseStudyHeaderProps> = ({
  project,
  showcase,
  scrollToChapter,
}) => {
  return (
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
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800/90 border border-black/[0.08] dark:border-white/[0.1] shadow-craft-subtle dark:shadow-md flex items-center justify-center p-3 text-neutral-900 dark:text-white shrink-0 group-hover:border-accent/40 transition-colors">
              <ProjectBrandIcon slug={project.id} className="w-full h-full" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.12]">
              {project.title}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action Buttons: GitHub & Live URLs */}
        <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto shrink-0">
          <ProjectCaseStudyGithubAction project={project} />
          <ProjectCaseStudyLiveAction project={project} />
        </div>
      </div>

      {/* Architecture Technology Stack Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        {project.stack.map((item: string) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Architectural Telemetry Specification Spread (De-boxed) */}
      <div className="py-6 sm:py-8 border-y border-black/[0.06] dark:border-white/[0.08]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {project.stats.map((stat: { label: string; value: string }) => (
            <div key={stat.label} className="space-y-1.5 min-w-0">
              <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500 font-medium truncate">
                {stat.label}
              </div>
              <div className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight font-sans leading-snug truncate">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Chapter Directory Index Strip */}
      <ProjectChapterDirectoryNav showcase={showcase} scrollToChapter={scrollToChapter} />
    </header>
  );
};

export const ProjectCaseStudySection: React.FC<ProjectCaseStudySectionProps> = ({
  project,
  // Rich showcase data for this project (graph, flow, code studio).
  // Falls back to data-driven stage view if project has no custom showcase.
  showcase,
}) => {
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
        <ProjectCaseStudyHeader
          project={project}
          showcase={showcase}
          scrollToChapter={scrollToChapter}
        />

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

              {showcase?.graph.verifyUrl && !project.isPrivate && (
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
