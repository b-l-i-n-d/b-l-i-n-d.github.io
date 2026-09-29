"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, GitPullRequest } from "lucide-react";
import type { ShowcaseGraph, ShowcaseGraphNode } from "@/types/portfolio";

interface ArchitectureGraphProps {
  data: ShowcaseGraph;
}

export const ArchitectureGraph: React.FC<ArchitectureGraphProps> = ({ data }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    () => data.columns[0]?.nodeIds[0] ?? ""
  );

  const selectedNode: ShowcaseGraphNode =
    data.nodes.find((n) => n.id === selectedNodeId) || data.nodes[0];

  return (
    <div className="space-y-6">
      {/* Interactive 3-Column Architectural Systems Grid */}
      <div className="relative rounded-2xl bg-stone-100/70 dark:bg-neutral-950 p-4 sm:p-6 border border-black/6 dark:border-white/8 overflow-hidden shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {data.columns.map((column, colIdx) => {
            const cleanTitle = column.title.replace(/^\d+\s*·\s*/, "");
            const nodes = column.nodeIds
              .map((id) => data.nodes.find((n) => n.id === id))
              .filter((node): node is ShowcaseGraphNode => Boolean(node));

            return (
              <div key={colIdx} className="space-y-3">
                <div className="pb-1">
                  <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                    {cleanTitle}
                  </div>
                </div>
                <div className="space-y-2.5">
                  {nodes.map((node) => {
                    const isSelected = selectedNodeId === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-white dark:bg-neutral-900 border-accent ring-1 ring-accent/30 shadow-[0_0_15px_rgba(255,23,68,0.18)] scale-[1.01]"
                            : "bg-white/80 dark:bg-neutral-900/60 border-black/6 dark:border-white/8 hover:border-black/15 dark:hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-mono px-2 py-0.5 rounded font-semibold shrink-0 ${
                              isSelected
                                ? "bg-accent/10 text-accent border border-accent/20"
                                : "bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/5"
                            }`}
                          >
                            {node.badge}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-accent shrink-0">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 mt-2">
                          {node.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Deep-Dive Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-black/6 dark:border-white/8 shadow-sm space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/6 dark:border-white/8 pb-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {selectedNode.label}
              </h4>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-black/4 dark:bg-white/6 font-semibold text-neutral-700 dark:text-neutral-300 shrink-0">
                {selectedNode.version}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-mono bg-black/[0.04] dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 border border-black/6 dark:border-white/8 font-semibold shrink-0">
                {selectedNode.metrics}
              </span>
              {selectedNode.prUrl && (
                <a
                  href={selectedNode.prUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono border border-black/6 dark:border-white/8 transition-colors inline-flex items-center gap-1.5 shrink-0 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
                >
                  <GitPullRequest className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 shrink-0" />
                  <span>{data.inspectLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="p-3 rounded-xl bg-stone-100/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 text-xs sm:text-sm font-mono flex flex-wrap items-center justify-between gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">Primary Contribution:</span>
            {selectedNode.prUrl && selectedNode.prHighlight ? (
              <a
                href={selectedNode.prUrl}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-900 dark:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 hover:decoration-neutral-900 dark:hover:decoration-white font-semibold flex items-center gap-1 transition-colors"
              >
                <span>{selectedNode.prHighlight}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            ) : selectedNode.prHighlight ? (
              <span className="text-neutral-900 dark:text-white font-semibold">
                {selectedNode.prHighlight}
              </span>
            ) : (
              <span className="text-neutral-500 dark:text-neutral-500 italic">
                Proprietary product architecture — private source
              </span>
            )}
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">
              {data.commitsHeading}
            </div>
            <div className="space-y-1.5">
              {selectedNode.commits?.length ? (
                selectedNode.commits.map((commit, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-stone-50/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 flex items-center gap-2"
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 font-mono font-semibold shrink-0">
                      {data.commitPrefix}
                    </span>
                    <span className="truncate">{commit}</span>
                  </div>
                ))
              ) : (
                <div className="p-2.5 rounded-lg bg-stone-50/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 italic">
                  No public source commit mapping available.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
