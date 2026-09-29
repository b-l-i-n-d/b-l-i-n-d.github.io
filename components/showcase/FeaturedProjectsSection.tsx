"use client";

import React, { useState } from "react";
import { ViewTransitionLink } from "@/components/navigation/ViewTransitionLink";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Lock, Sparkles } from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { GithubIcon } from "../icons";
import { ProjectBrandIcon } from "./ProjectBrandIcon";

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
  omnicommerce: {
    label: "Headless E-Commerce · Decoupled Pair",
    accent: "from-sky-500/20 via-sky-500/5 to-transparent",
    sub: "Multi-Tenant SaaS Control Plane & Stripe Webhook Pipeline",
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
            <span>FLAGSHIP WORKS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Featured Case Studies
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mt-3 leading-relaxed">
                Architectural blueprints, interactive state machines, and verified production source
                code across high-scale enterprise platforms and local-first software.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <span>4 Flagship Deployments Verified</span>
            </div>
          </div>
        </div>

        {/* Architectural Monograph Feature Spreads */}
        <div className="space-y-0 divide-y divide-black/[0.08] dark:divide-white/[0.08]">
          {projects.map((project, index) => {
            const badgeMeta = PROJECT_BADGES[project.id] || {
              label: project.category,
              accent: "from-accent/20 to-transparent",
              sub: project.role,
            };
            const isHovered = hoveredCard === project.id;
            const chapterIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative py-16 sm:py-24 first:pt-0 last:pb-8 transition-colors duration-300"
              >
                {/* Subtle Ambient Radial Highlight */}
                <div
                  className={`absolute top-1/4 -right-1/4 w-[600px] h-[350px] bg-gradient-to-br ${badgeMeta.accent} blur-[120px] opacity-25 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none -z-10`}
                />

                {/* Top Monograph Ledger Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <ProjectBrandIcon slug={project.id} className="w-full h-full" />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-accent tracking-wider px-2 py-0.5 rounded-md bg-accent/10">
                        {chapterIndex}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {badgeMeta.label}
                      </span>
                    </div>
                  </div>

                  {/* Minimalist Ghost Actions */}
                  <div className="flex items-center gap-3 font-mono text-xs">
                    {project.isPrivate ? (
                      <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1.5 text-xs font-medium">
                        <Lock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Private Repository</span>
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                      )
                    )}

                    {project.liveUrl && !project.isPrivate && (
                      <>
                        <span className="text-neutral-300 dark:text-neutral-700">/</span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 dark:text-neutral-400 hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          <span>Live Deployment</span>
                          <ExternalLink className="w-3 h-3 text-neutral-400" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Main Two-Column Editorial Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 items-start">
                  {/* Left Column: Story, Title, Summary & CTA */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                        {badgeMeta.sub}
                      </span>
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-300 leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                      {project.summary ||
                        project.stages.architecture.description.slice(0, 240) + "..."}
                    </p>

                    {/* Technology Stack Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Prominent Architectural Monograph Exploration CTA */}
                    <div className="pt-4">
                      <ViewTransitionLink
                        href={`/case-study/${project.id}`}
                        className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm sm:text-base shadow-craft-card hover:shadow-craft-elevated active:scale-[0.97] transition-all duration-200"
                      >
                        <span>Explore Technical Case Study</span>
                        <motion.div
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="flex items-center"
                        >
                          <ArrowRight className="w-4 h-4 text-accent transition-colors" />
                        </motion.div>
                      </ViewTransitionLink>
                    </div>
                  </div>

                  {/* Right Column: Architectural Blueprint Schematic */}
                  <div className="lg:col-span-5">
                    {/* Artistic Architectural Schematic Canvas */}
                    <div className="relative rounded-2xl bg-stone-100/50 dark:bg-neutral-900/30 p-5 sm:p-6 border border-black/[0.04] dark:border-white/[0.05] overflow-hidden group/schematic">
                      {/* Graph-Paper Blueprint Grid Texture */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 transition-opacity group-hover/schematic:opacity-60"
                        style={{
                          backgroundImage: `radial-gradient(circle, currentColor 0.75px, transparent 0.75px)`,
                          backgroundSize: "16px 16px",
                        }}
                      />

                      {/* Blueprint Header */}
                      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-black/[0.04] dark:border-white/[0.06] text-xs font-mono">
                        <span className="text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider text-[11px] uppercase">
                          System Blueprint
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold px-2 py-0.5 rounded-md bg-black/4 dark:bg-white/6">
                          3 Verified Stages
                        </span>
                      </div>

                      {/* 3 Flowing Stages with Serpentine Path */}
                      <div className="relative z-10 pt-4 space-y-2">
                        {/* Stage 1: Topology */}
                        <ViewTransitionLink
                          href={`/case-study/${project.id}#chapter-topology`}
                          className="group/stage flex items-center justify-between p-2.5 rounded-xl hover:bg-white/80 dark:hover:bg-neutral-800/60 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                              01
                            </span>
                            <div className="min-w-0">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                                Modular Topology
                              </div>
                              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate group-hover/stage:text-accent transition-colors">
                                {project.stages.architecture.title}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/stage:text-accent group-hover/stage:translate-x-1 transition-all shrink-0 ml-2" />
                        </ViewTransitionLink>

                        {/* Stage 2: Flow Engine */}
                        <ViewTransitionLink
                          href={`/case-study/${project.id}#chapter-flow`}
                          className="group/stage flex items-center justify-between p-2.5 rounded-xl hover:bg-white/80 dark:hover:bg-neutral-800/60 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                              02
                            </span>
                            <div className="min-w-0">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                                Execution Flow Engine
                              </div>
                              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate group-hover/stage:text-accent transition-colors">
                                {project.stages.flow.title}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/stage:text-accent group-hover/stage:translate-x-1 transition-all shrink-0 ml-2" />
                        </ViewTransitionLink>

                        {/* Stage 3: Source Studio */}
                        <ViewTransitionLink
                          href={`/case-study/${project.id}#chapter-source`}
                          className="group/stage flex items-center justify-between p-2.5 rounded-xl hover:bg-white/80 dark:hover:bg-neutral-800/60 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                              03
                            </span>
                            <div className="min-w-0">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                                Verified Source Studio
                              </div>
                              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate group-hover/stage:text-accent transition-colors">
                                {project.stages.code.title}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/stage:text-accent group-hover/stage:translate-x-1 transition-all shrink-0 ml-2" />
                        </ViewTransitionLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2nd Row: Full-Width Architectural Telemetry Strip */}
                <div className="mt-10 pt-6 border-t border-black/[0.05] dark:border-white/[0.06]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {project.stats.map((stat, idx) => {
                      const isLong = stat.value.length > 14;
                      return (
                        <div key={idx} className="space-y-1.5">
                          <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500 font-medium truncate">
                            {stat.label}
                          </div>
                          <div
                            className={`${
                              isLong
                                ? "text-base sm:text-lg font-bold"
                                : "text-xl sm:text-2xl font-black"
                            } text-neutral-900 dark:text-white tracking-tight font-sans leading-snug`}
                          >
                            {stat.value}
                          </div>
                        </div>
                      );
                    })}
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
