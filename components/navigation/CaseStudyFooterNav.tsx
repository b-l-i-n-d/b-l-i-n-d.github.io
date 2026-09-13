"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ProjectCaseStudy } from "@/types/portfolio";

interface CaseStudyFooterNavProps {
  prevProject: ProjectCaseStudy;
  nextProject: ProjectCaseStudy;
}

export const CaseStudyFooterNav: React.FC<CaseStudyFooterNavProps> = ({
  prevProject,
  nextProject,
}) => {
  return (
    <nav
      aria-label="Case Study Pagination"
      className="mt-20 pt-12 pb-16 border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
              Chapter Navigation
            </span>
          </div>
          <Link
            href="/#case-study"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Previous Case Study */}
          <Link
            href={`/case-study/${prevProject.id}`}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-neutral-400 group-hover:text-accent text-xs font-mono uppercase tracking-wider mb-4 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Case Study</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-bold">
                Chapter {prevProject.chapterNumber}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-accent transition-colors">
                {prevProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                {prevProject.tagline}
              </p>
            </div>
          </Link>

          {/* Next Case Study */}
          <Link
            href={`/case-study/${nextProject.id}`}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all duration-200 flex flex-col justify-between text-right"
          >
            <div className="flex items-center justify-end gap-2 text-neutral-400 group-hover:text-accent text-xs font-mono uppercase tracking-wider mb-4 transition-colors">
              <span>Next Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-bold">
                Chapter {nextProject.chapterNumber}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-accent transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                {nextProject.tagline}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
