"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Lock,
  Cpu,
  Sparkles,
  Layers,
  ShieldCheck,
  FileCode,
  CheckCircle2,
} from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { GithubIcon } from "../icons";

interface FeaturedProjectsSectionProps {
  projects: ProjectCaseStudy[];
}

const PROJECT_BADGES: Record<string, { label: string; accent: string; sub: string }> = {
  "tutor-lms": {
    label: "Enterprise Flagship · 120,000+ Academies",
    accent: "from-rose-500/20 via-rose-500/5 to-transparent",
    sub: "Core Frontend & Lesson Cockpit Architecture",
  },
  enclave: {
    label: "Mobile Cryptography · Zero-Knowledge",
    accent: "from-amber-500/20 via-amber-500/5 to-transparent",
    sub: "Local-First Vault & RFC 6238 TOTP Engine",
  },
  edtech: {
    label: "Full-Stack LMS · Client + Server Monorepo",
    accent: "from-sky-500/20 via-sky-500/5 to-transparent",
    sub: "Automated Evaluation & Aggregated Leaderboard",
  },
  docapp: {
    label: "Healthcare Suite · Multi-Role State Machine",
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    sub: "Rotating Cookie-JWT & React-PDF Dossier",
  },
};

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ projects }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="case-study"
      data-chapter-id="case-study"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 dark:bg-accent/[0.03] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>CHAPTER 04 // FLAGSHIP WORKS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Featured Case Studies
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mt-3 leading-relaxed">
                Architectural blueprints, interactive state machines, and verified production source
                code across high-scale enterprise platforms and local-first software.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4 Flagship Deployments Verified</span>
            </div>
          </div>
        </div>

        {/* Editorial Feature Spread Cards */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const badgeMeta = PROJECT_BADGES[project.id] || {
              label: project.category,
              accent: "from-accent/20 to-transparent",
              sub: project.role,
            };
            const isHovered = hoveredCard === project.id;
            const chapterIndex = `04.${index + 1}`;

            return (
              <motion.article
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl bg-white dark:bg-neutral-900/70 border border-black/[0.08] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 shadow-craft-elevated dark:shadow-2xl overflow-hidden transition-all duration-300"
              >
                {/* Subtle Card Ambient Glow */}
                <div
                  className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${badgeMeta.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative p-6 sm:p-10 lg:p-12">
                  {/* Top Bar: Chapter Number, Badge, and External Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-accent px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20">
                        {chapterIndex}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium text-neutral-500 dark:text-neutral-400">
                        {badgeMeta.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.isPrivate ? (
                        <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                          <Lock className="w-3.5 h-3.5 text-amber-500" />
                          <span>Private Repository</span>
                        </div>
                      ) : (
                        project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                          >
                            <GithubIcon size={14} />
                            <span className="hidden sm:inline">Source</span>
                          </a>
                        )
                      )}

                      {project.liveUrl && !project.isPrivate && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3 text-neutral-400" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Main Two-Column Editorial Spread */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
                    {/* Left Column: Story, Title, Summary & CTA */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                          {badgeMeta.sub}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300 leading-snug">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.summary ||
                          project.stages.architecture.description.slice(0, 240) + "..."}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.stack.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 6 && (
                          <span className="px-2.5 py-1 rounded-md bg-transparent text-neutral-400 text-xs font-mono">
                            +{project.stack.length - 6} more
                          </span>
                        )}
                      </div>

                      {/* Prominent Case Study Exploration CTA */}
                      <div className="pt-4">
                        <Link
                          href={`/case-study/${project.id}`}
                          className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm sm:text-base shadow-craft-card hover:shadow-craft-elevated active:scale-[0.98] transition-all duration-200"
                        >
                          <span>Explore Case Study (Architecture & Code)</span>
                          <motion.div
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="flex items-center"
                          >
                            <ArrowRight className="w-4 h-4 text-accent transition-colors" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Telemetry Specs & Architecture Teaser */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                      {/* Telemetry Metrics 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {project.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-stone-50/80 dark:bg-neutral-800/40 border border-black/[0.04] dark:border-white/[0.06] flex flex-col justify-center"
                          >
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                              {stat.label}
                            </span>
                            <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-1">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Deep-Dive Preview Window */}
                      <div className="rounded-2xl bg-stone-100/80 dark:bg-neutral-950/80 border border-black/[0.06] dark:border-white/[0.08] p-5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 pb-2 border-b border-black/[0.04] dark:border-white/[0.06]">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-1 text-[11px]">production-specs.ts</span>
                          </div>
                          <span className="text-accent font-semibold">4 Synchronized Stages</span>
                        </div>

                        <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                          <div className="flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="truncate">
                              <strong>01 Architecture:</strong> {project.stages.architecture.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">
                              <strong>02 State Flow:</strong> {project.stages.flow.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileCode className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                            <span className="truncate">
                              <strong>03 Code Studio:</strong> {project.stages.code.title}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            href={`/case-study/${project.id}`}
                            className="w-full py-2 px-3 rounded-xl bg-white dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:text-accent dark:hover:text-accent text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                          >
                            <span>Open Full Interactive Studio</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
