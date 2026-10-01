"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectBrandIcon } from "@/components/showcase/ProjectBrandIcon";
import { ProjectCaseStudy } from "@/types/portfolio";
import { ViewTransitionLink } from "./ViewTransitionLink";
import { motion } from "framer-motion";

interface CaseStudyBreadcrumbBarProps {
  currentProject: ProjectCaseStudy;
  currentIndex: number;
  totalProjects: number;
  nextProject: ProjectCaseStudy;
}

export function CaseStudyBreadcrumbBar({
  currentProject,
  currentIndex,
  totalProjects,
  nextProject,
}: CaseStudyBreadcrumbBarProps) {
  return (
    <div className="fixed top-16 inset-x-0 z-40 w-full backdrop-blur-xl bg-stone-50/90 dark:bg-neutral-950/90 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200 vt-breadcrumb">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-11 sm:h-12 flex items-center justify-between gap-2 text-xs">
        {/* Left: Back to Home / Portfolio Overview */}
        <ViewTransitionLink
          href="/#case-study"
          className="group inline-flex items-center gap-1.5 py-1.5 px-1 -ml-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0"
        >
          <motion.div
            whileHover={{ x: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent group-hover:-translate-x-0.5 transition-transform duration-150 shrink-0" />
          </motion.div>
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
            Overview
          </span>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">/</span>
          <span className="hidden sm:inline text-neutral-500 font-medium truncate max-w-[120px] lg:max-w-none">
            Flagship Engineering
          </span>
        </ViewTransitionLink>

        {/* Center: Current Project Indicator */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 font-mono text-[11px] text-neutral-500 min-w-0 flex-1 px-1">
          <span className="text-accent font-semibold shrink-0">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="shrink-0">/</span>
          <span className="shrink-0">{String(totalProjects).padStart(2, "0")}</span>
          <span className="text-neutral-300 dark:text-neutral-700 shrink-0">•</span>
          <span className="flex items-center gap-1.5 font-sans font-bold text-neutral-900 dark:text-white truncate min-w-0">
            <ProjectBrandIcon
              slug={currentProject.id}
              className="w-3.5 h-3.5 text-accent shrink-0"
              size={14}
            />
            <span className="truncate">{currentProject.title}</span>
          </span>
        </div>

        {/* Right: Next Project Shortcut */}
        <ViewTransitionLink
          href={`/case-study/${nextProject.id}`}
          transitionDirection="next"
          className="group inline-flex items-center gap-1 py-1.5 px-1 -mr-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 text-right"
        >
          <span className="text-[11px] font-mono text-neutral-400 uppercase hidden sm:inline">
            Next:
          </span>
          <span className="font-medium text-[11px] truncate max-w-[80px] sm:max-w-[130px] group-hover:text-accent transition-colors hidden xs:inline">
            {nextProject.title}
          </span>
          <span className="font-medium text-[11px] group-hover:text-accent transition-colors xs:hidden">
            Next
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
        </ViewTransitionLink>
      </div>
    </div>
  );
}
