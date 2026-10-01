"use client";

import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";
import { Check, FileCode, Sparkles, Terminal } from "lucide-react";
import { SmoothCopyButton } from "./SmoothCopyButton";
import { cssPrismTheme, getPrismLanguage } from "./prism-theme";
import type { ShowcaseCodeModule } from "@/types/portfolio";

interface ComplexCodeStudioProps {
  modules: ShowcaseCodeModule[];
}

export const ComplexCodeStudio: React.FC<ComplexCodeStudioProps> = ({ modules }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(() => modules[0]?.id ?? "");

  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];
  const language = getPrismLanguage(activeModule.filename);

  return (
    <div className="space-y-3 sm:space-y-4 min-w-0">
      {/* File Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-2 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 min-w-0">
        <div className="min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full sm:w-auto flex-1">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap">
            {modules.map((mod) => {
              const isActive = mod.id === activeModule.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all duration-150 active:scale-[0.96] flex items-center gap-1.5 shrink-0 select-none ${
                    isActive
                      ? "bg-white dark:bg-neutral-800 text-accent font-semibold shadow-sm border border-black/8 dark:border-white/10"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-neutral-800/40"
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{mod.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Verified Badge / Language Badge */}
        <div className="flex items-center gap-2 shrink-0 px-1 sm:px-0">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            <Check className="w-3 h-3 shrink-0" />
            <span>Production Verified</span>
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400">
            {language}
          </span>
        </div>
      </div>

      {/* Module Narrative Header */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-black/6 dark:border-white/8 shadow-sm space-y-3 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4 border-b border-black/4 dark:border-white/6 pb-2.5">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white truncate">
            {activeModule.title}
          </h3>
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 truncate">
            {activeModule.filename}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {activeModule.description}
        </p>

        {/* Architectural Context & PR Citation */}
        {activeModule.prHighlight && (
          <div className="pt-1">
            <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-neutral-800/40 border border-black/4 dark:border-white/4 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block font-medium">
                  PR & Architecture Context
                </span>
                <span className="leading-snug font-mono text-[11px] text-neutral-800 dark:text-neutral-200 break-words">
                  {activeModule.prHighlight}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Window Frame */}
      <div className="rounded-2xl bg-stone-100/90 dark:bg-[#0d1117] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-sm min-w-0">
        {/* Chrome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-stone-200/60 dark:bg-[#161b22] border-b border-black/6 dark:border-[#30363d] text-xs font-mono min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-neutral-700 dark:text-[#8b949e] font-medium ml-1 truncate">
              <span className="inline-flex items-center gap-1.5 truncate">
                <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">{activeModule.title}</span>
                <span className="text-neutral-500 dark:text-neutral-500 text-[11px] hidden sm:inline">
                  ({activeModule.filename})
                </span>
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <SmoothCopyButton
              textToCopy={activeModule.code}
              idleLabel="Copy Code"
              copiedLabel="Copied"
              size="xs"
              className="p-1.5 sm:px-2.5 sm:py-1 bg-white dark:bg-[#21262d] hover:bg-stone-100 dark:hover:bg-[#30363d] text-neutral-700 dark:text-[#c9d1d9] border border-black/8 dark:border-[#30363d] shadow-sm text-xs font-mono shrink-0"
            />
          </div>
        </div>

        {/* Code Body */}
        <div className="p-3 sm:p-4 overflow-auto h-[360px] sm:h-[480px] lg:h-[580px] leading-relaxed select-text bg-stone-50/50 dark:bg-[#0d1117] min-w-0">
          <Highlight code={activeModule.code} language={language} theme={cssPrismTheme}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className="text-xs sm:text-sm font-mono leading-relaxed min-w-0 max-w-full"
                style={{ ...style, backgroundColor: "transparent", margin: 0 }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })} className="min-h-[1.4em] py-0.5">
                    <span className="select-none inline-block w-6 sm:w-8 mr-2 sm:mr-4 text-right text-neutral-400 dark:text-[#484f58]">
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};
