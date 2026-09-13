import React from "react";
import { MotionExperiment } from "@/types/portfolio";
import { Check, Lock, ExternalLink } from "lucide-react";
import { cn as clsx } from "@/lib/utils";

interface InteractiveMotionLabProps {
  experiments?: MotionExperiment[];
  items?: MotionExperiment[];
}

export const InteractiveMotionLab: React.FC<InteractiveMotionLabProps> = ({
  experiments: propExp,
  items: propItems,
}) => {
  const experiments = propExp || propItems || [];
  return (
    <section
      id="motion-lab"
      data-chapter-id="motion-lab"
      className="relative py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#060606] text-neutral-900 dark:text-white border-t border-black/6 dark:border-white/8 transition-colors duration-200"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/6 dark:border-white/8 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Motion Architecture & Micro-Interactions
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Interactive Motion Lab
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              A curated suite of high-fidelity interaction prototypes, spatial physics engines, and
              120 FPS hardware-composited interface demonstrations.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400">
            {experiments.length} Experimental Prototypes
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {experiments.map((item, idx) => {
            const isLastRowTwoItemsFirst =
              experiments.length % 3 === 2 && idx === experiments.length - 2;
            const isLastRowSingleItem =
              experiments.length % 3 === 1 && idx === experiments.length - 1;

            return (
              <div
                key={item.id}
                className={clsx(
                  "group relative rounded-2xl border border-black/6 dark:border-white/8 bg-stone-50/70 dark:bg-neutral-900/50 p-6 flex flex-col justify-between hover:border-[#ff1744]/40 transition-all duration-300 shadow-craft-card hover:shadow-craft-elevated",
                  "col-span-1 md:col-span-2",
                  isLastRowTwoItemsFirst && "md:col-start-2",
                  isLastRowSingleItem && "md:col-start-3"
                )}
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                        Hardware Accelerated
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff1744] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/6 dark:border-white/8 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-stone-100/70 dark:bg-white/4 text-neutral-600 dark:text-neutral-400 rounded border border-black/4 dark:border-white/6 shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    {item.isPrivate ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-mono font-medium shrink-0">
                        <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Private Repository (Under NDA)</span>
                      </div>
                    ) : (
                      item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#ff1744] hover:text-rose-500 font-semibold transition-colors group/link shrink-0"
                        >
                          <span>Test Interactive Prototype</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
