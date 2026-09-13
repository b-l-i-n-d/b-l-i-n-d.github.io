"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ProjectCaseStudy } from "@/types/portfolio";

interface CaseStudyBreadcrumbBarProps {
  currentProject: ProjectCaseStudy;
  currentIndex: number;
  totalProjects: number;
  nextProject?: ProjectCaseStudy;
}

export const CaseStudyBreadcrumbBar: React.FC<CaseStudyBreadcrumbBarProps> = ({
  currentProject,
  currentIndex,
  totalProjects,
  nextProject,
}) => {
  return (
    <div className="sticky top-16 z-40 w-full backdrop-blur-xl bg-stone-50/85 dark:bg-neutral-950/85 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs sm:text-sm font-medium">
        {/* Left: Back to Homepage link */}
        <Link
          href="/#case-study"
          className="group inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="flex items-center"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent transition-colors" />
          </motion.div>
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">Overview</span>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">/</span>
          <span className="text-neutral-500 dark:text-neutral-400 hidden sm:inline">
            Flagship Engineering
          </span>
        </Link>

        {/* Center: Current Project Indicator */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[11px] font-bold">
            <Sparkles className="w-3 h-3 animate-pulse" />
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
          </span>
          <span className="font-semibold text-neutral-900 dark:text-neutral-100 hidden md:inline truncate max-w-[200px]">
            {currentProject.title}
          </span>
        </div>

        {/* Right: Quick Next Link */}
        {nextProject ? (
          <Link
            href={`/case-study/${nextProject.id}`}
            className="group inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline">
              Next:
            </span>
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 max-w-[120px] truncate">
              {nextProject.title}
            </span>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="flex items-center"
            >
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-accent transition-colors" />
            </motion.div>
          </Link>
        ) : (
          <div className="w-16" />
        )}
      </div>
    </div>
  );
};
