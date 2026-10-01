"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { ViewTransitionLink } from "./ViewTransitionLink";

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
      className="mt-12 sm:mt-20 pt-8 sm:pt-12 pb-12 sm:pb-16 border-t border-black/[0.08] dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
            Case Study Navigation
          </span>
          <ViewTransitionLink
            href="/#case-study"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </ViewTransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {/* Previous Case Study */}
          <ViewTransitionLink
            href={`/case-study/${prevProject.id}`}
            transitionDirection="prev"
            className="group relative p-4 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-neutral-400 group-hover:text-accent text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Case Study</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-bold">
                {prevProject.category}
              </span>
              <h4 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-accent transition-colors truncate">
                {prevProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
                {prevProject.tagline}
              </p>
            </div>
          </ViewTransitionLink>

          {/* Next Case Study */}
          <ViewTransitionLink
            href={`/case-study/${nextProject.id}`}
            transitionDirection="next"
            className="group relative p-4 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-craft-card transition-all duration-200 flex flex-col justify-between text-left sm:text-right"
          >
            <div className="flex items-center justify-start sm:justify-end gap-2 text-neutral-400 group-hover:text-accent text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4 transition-colors">
              <span>Next Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-bold">
                {nextProject.category}
              </span>
              <h4 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-accent transition-colors truncate">
                {nextProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
                {nextProject.tagline}
              </p>
            </div>
          </ViewTransitionLink>
        </div>
      </div>
    </nav>
  );
};
