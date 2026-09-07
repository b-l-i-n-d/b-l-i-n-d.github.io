"use client";

import React, { useState } from "react";
import { ProjectCaseStudy, ProjectStageType } from "@/types/portfolio";

interface ProjectCaseStudyProps {
    project: ProjectCaseStudy;
}

export const ProjectCaseStudySection: React.FC<ProjectCaseStudyProps> = ({ project }) => {
    const [activeStage, setActiveStage] = useState<ProjectStageType>("architecture");
    const [copied, setCopied] = useState(false);

    const currentStage = project.stages[activeStage];

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id={project.id}
            data-chapter-id={project.id}
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-800/60 bg-neutral-950 text-white"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Chapter Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-amber-400 font-bold px-2.5 py-0.5 bg-amber-400/10 border border-amber-400/30 rounded">
                                CHAPTER {project.chapterNumber}
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                {project.category}
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight">
                            {project.title}
                        </h2>
                        <p className="text-base sm:text-lg text-neutral-400 max-w-3xl">
                            {project.tagline}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
                            >
                                <span>Live Portal ↗</span>
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-mono flex items-center gap-1.5 transition-all"
                            >
                                <span>Source Code</span>
                            </a>
                        )}
                        {project.secondaryGithubUrl && (
                            <a
                                href={project.secondaryGithubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 border border-neutral-800 text-xs font-mono flex items-center gap-1.5 transition-all"
                            >
                                <span>Storefront Repo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Quick Architecture Stat Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col justify-center"
                        >
                            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                                {stat.label}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-neutral-200 mt-0.5">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4-STAGE INTERACTIVE SWITCHER */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden shadow-2xl">
                    {/* Stage Navigation Tab Bar */}
                    <div className="flex border-b border-neutral-800/80 bg-neutral-900 overflow-x-auto scrollbar-none">
                        {(
                            [
                                { type: "architecture", label: "01. Architecture Schema", icon: "📐" },
                                { type: "flow", label: "02. Interaction Flow", icon: "⚡" },
                                { type: "code", label: "03. Code Deep-Dive", icon: "💻" },
                                { type: "live", label: "04. Live Verification", icon: "🚀" },
                            ] as const
                        ).map((tab) => {
                            const isSelected = activeStage === tab.type;
                            return (
                                <button
                                    key={tab.type}
                                    onClick={() => setActiveStage(tab.type)}
                                    className={`flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-mono whitespace-nowrap transition-all border-b-2 ${
                                        isSelected
                                            ? "border-amber-400 text-amber-400 bg-neutral-950 font-bold"
                                            : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850"
                                    }`}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Stage Viewport */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <div className="space-y-1">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                                {currentStage.subtitle}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
                                {currentStage.title}
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-400 pt-1 leading-relaxed">
                                {currentStage.description}
                            </p>
                        </div>

                        {/* Stage Highlights List */}
                        <div className="grid sm:grid-cols-3 gap-3 pt-2">
                            {currentStage.highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2"
                                >
                                    <span className="text-amber-400 font-bold">•</span>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* STAGE-SPECIFIC CONTENT DISPLAY */}
                        {activeStage === "architecture" && (
                            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/90 font-mono text-xs text-neutral-300 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-neutral-400">
                                    <span>Blueprint View: {project.title}</span>
                                    <span className="text-amber-400">Normalized ER & Data Flow</span>
                                </div>

                                {/* ASCII / SVG Visual System Blueprint */}
                                <div className="py-4 overflow-x-auto text-neutral-300 bg-neutral-900/70 p-4 rounded-lg border border-neutral-800/60 leading-5">
                                    <pre className="text-xs text-amber-300">
{`+-----------------------+         1:N         +------------------------+
|    Merchant Account   | ------------------> |      Store Instance    |
| (Clerk User Auth ID)  |                     |  (Store Partition ID)  |
+-----------------------+                     +------------------------+
                                                           | 1:N
               +-------------------------------------------+-----------------------------------+
               |                                           |                                   |
    +--------------------+                       +--------------------+              +--------------------+
    |     Billboards     |                       |     Categories     |              |     Products       |
    | (Cloudinary Media) |                       | (Faceted Filter)   |              | (Inventory + SKUs) |
    +--------------------+                       +--------------------+              +--------------------+
                                                           |                                   |
                                                           +------------------+----------------+
                                                                              |
                                                                   +--------------------+
                                                                   |  Order & Checkout  |
                                                                   |  (Stripe Webhook)  |
                                                                   +--------------------+`}
                                    </pre>
                                </div>
                            </div>
                        )}

                        {activeStage === "flow" && (
                            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/90 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-neutral-400 text-xs font-mono">
                                    <span>Interaction Sequence</span>
                                    <span className="text-emerald-400">60 FPS Hardware Composited</span>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-4 text-center">
                                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                                        <div className="text-2xl">⚡</div>
                                        <h4 className="font-bold text-sm text-neutral-200">1. Instant Filtering</h4>
                                        <p className="text-xs text-neutral-400">
                                            Faceted URL search syncs categories, colors, and sizes with zero layout reflow.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                                        <div className="text-2xl">🛒</div>
                                        <h4 className="font-bold text-sm text-neutral-200">2. Zustand Cart Sync</h4>
                                        <p className="text-xs text-neutral-400">
                                            Stateful hydration persists user selections across browser navigation sessions.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                                        <div className="text-2xl">🔒</div>
                                        <h4 className="font-bold text-sm text-neutral-200">3. Secure Handoff</h4>
                                        <p className="text-xs text-neutral-400">
                                            Redirect to localized Stripe payment session with cryptographic webhook verification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStage === "code" && currentStage.codeSnippet && (
                            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 font-mono text-xs">
                                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
                                    <span className="text-amber-400 font-semibold">
                                        {currentStage.codeSnippet.filename}
                                    </span>
                                    <button
                                        onClick={() => copyCode(currentStage.codeSnippet!.code)}
                                        className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all text-xs flex items-center gap-1"
                                    >
                                        {copied ? "✓ Copied" : "Copy Code"}
                                    </button>
                                </div>
                                <pre className="p-4 overflow-x-auto text-neutral-200 leading-relaxed scrollbar-thin">
                                    <code>{currentStage.codeSnippet.code}</code>
                                </pre>
                            </div>
                        )}

                        {activeStage === "live" && (
                            <div className="p-8 rounded-xl bg-neutral-950 border border-neutral-800 text-center space-y-4">
                                <div className="text-4xl">🚀</div>
                                <h4 className="text-lg font-bold text-neutral-100">
                                    Ready for Live Inspection
                                </h4>
                                <p className="text-sm text-neutral-400 max-w-xl mx-auto">
                                    This system is continuously deployed with automated checks and live database endpoints.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs font-mono transition-all shadow-lg"
                                        >
                                            Launch Live Application ↗
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 font-semibold text-xs font-mono transition-all"
                                        >
                                            View Source Repository ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
                        Technologies & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
