"use client";

import React, { useState, useRef } from "react";
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
  const [mobileActiveColIdx, setMobileActiveColIdx] = useState<number>(0);

  const selectedNode: ShowcaseGraphNode =
    data.nodes.find((n) => n.id === selectedNodeId) || data.nodes[0];

  const handleSelectNode = (nodeId: string, colIdx?: number) => {
    setSelectedNodeId(nodeId);
    if (colIdx !== undefined) {
      setMobileActiveColIdx(colIdx);
    }
  };

  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleMobileTabChange = (colIdx: number) => {
    setMobileActiveColIdx(colIdx);
    tabButtonRefs.current[colIdx]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    const col = data.columns[colIdx];
    if (col && !col.nodeIds.includes(selectedNodeId)) {
      const firstNodeId = col.nodeIds[0];
      if (firstNodeId) {
        setSelectedNodeId(firstNodeId);
      }
    }
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Interactive 3-Column Architectural Systems Grid */}
      <div className="relative rounded-2xl bg-stone-100/70 dark:bg-neutral-950 p-3.5 sm:p-6 border border-black/6 dark:border-white/8 overflow-hidden shadow-inner">
        {/* Mobile Category Switcher Pills (< md) */}
        <div className="md:hidden mb-3.5">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/80 dark:bg-neutral-900 border border-black/4 dark:border-white/6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
            {data.columns.map((column, idx) => {
              const cleanTitle = column.title.replace(/^\d+\s*·\s*/, "");
              const isActive = mobileActiveColIdx === idx;
              return (
                <button
                  key={idx}
                  ref={(el) => {
                    tabButtonRefs.current[idx] = el;
                  }}
                  onClick={() => handleMobileTabChange(idx)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 text-center whitespace-nowrap active:scale-[0.97] ${
                    isActive
                      ? "bg-stone-900 dark:bg-white text-white dark:text-neutral-950 shadow-sm font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/4"
                  }`}
                >
                  {cleanTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop View (All 3 Columns) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 relative z-10">
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
                        onClick={() => handleSelectNode(node.id, colIdx)}
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

        {/* Mobile View (Active Category Nodes Only - Compact & Accessible) */}
        <div className="md:hidden space-y-2 relative z-10">
          {(() => {
            const currentColumn = data.columns[mobileActiveColIdx];
            if (!currentColumn) return null;
            const nodes = currentColumn.nodeIds
              .map((id) => data.nodes.find((n) => n.id === id))
              .filter((node): node is ShowcaseGraphNode => Boolean(node));

            return nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => handleSelectNode(node.id, mobileActiveColIdx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-white dark:bg-neutral-900 border-accent ring-1 ring-accent/30 shadow-[0_0_12px_rgba(255,23,68,0.15)]"
                      : "bg-white/80 dark:bg-neutral-900/60 border-black/6 dark:border-white/8 active:bg-white dark:active:bg-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded font-semibold truncate ${
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
                  <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-1.5">
                    {node.label}
                  </div>
                </button>
              );
            });
          })()}
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
          className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-black/6 dark:border-white/8 shadow-sm space-y-4 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/6 dark:border-white/8 pb-4">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {selectedNode.label}
              </h4>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-black/4 dark:bg-white/6 font-semibold text-neutral-700 dark:text-neutral-300 shrink-0">
                {selectedNode.version}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono bg-black/[0.04] dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 border border-black/6 dark:border-white/8 font-semibold">
                {selectedNode.metrics}
              </span>
              {selectedNode.prUrl && (
                <a
                  href={selectedNode.prUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono border border-black/6 dark:border-white/8 transition-colors inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 active:scale-95"
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

          <div className="p-3 rounded-xl bg-stone-100/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 text-xs sm:text-sm font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
            <span className="text-neutral-600 dark:text-neutral-400 shrink-0">
              Primary Contribution:
            </span>
            {selectedNode.prUrl && selectedNode.prHighlight ? (
              <a
                href={selectedNode.prUrl}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-900 dark:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 hover:decoration-neutral-900 dark:hover:text-white font-semibold flex items-center gap-1 transition-colors min-w-0 break-words"
              >
                <span className="break-all sm:break-normal line-clamp-2">
                  {selectedNode.prHighlight}
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            ) : selectedNode.prHighlight ? (
              <span className="text-neutral-900 dark:text-white font-semibold break-words">
                {selectedNode.prHighlight}
              </span>
            ) : (
              <span className="text-neutral-500 dark:text-neutral-500 italic">
                Proprietary product architecture — private source
              </span>
            )}
          </div>

          <div className="space-y-2 pt-1 sm:pt-2">
            <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">
              {data.commitsHeading}
            </div>
            <div className="space-y-1.5">
              {selectedNode.commits?.length ? (
                selectedNode.commits.map((commit, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-lg bg-stone-50/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 flex items-start gap-2 min-w-0"
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 font-mono font-semibold shrink-0 mt-0.5">
                      {data.commitPrefix}
                    </span>
                    <span className="break-words min-w-0 flex-1">{commit}</span>
                  </div>
                ))
              ) : (
                <div className="p-2 sm:p-2.5 rounded-lg bg-stone-50/70 dark:bg-neutral-950 border border-black/4 dark:border-white/6 font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 italic">
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
