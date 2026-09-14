"use client";

import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import {
  Activity,
  Layers,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Server,
  Database,
  Shield,
  Terminal,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Move,
  Code,
  Network,
  GitCommit,
  Check,
  Copy,
} from "lucide-react";

import { Highlight, themes } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import type { ShowcaseFlow, ShowcaseFlowStep } from "@/types/portfolio";
import { SmoothCopyButton } from "./SmoothCopyButton";

const langFromFilename = (filename?: string): Language => {
  if (!filename) return "typescript";
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  switch (ext) {
    case "ts":
      return "typescript";
    case "tsx":
      return "tsx";
    case "js":
      return "javascript";
    case "jsx":
      return "jsx";
    case "sql":
      return "sql";
    case "json":
      return "json";
    case "css":
      return "css";
    case "py":
      return "python";
    case "sh":
    case "bash":
      return "bash";
    default:
      return "typescript";
  }
};

interface InteractiveFlowVisualizerProps {
  flow: ShowcaseFlow;
}

const MIN_ZOOM = 0.25; // 25% min zoom (bird's-eye view)
const MAX_ZOOM = 8.0; // 800% max zoom (deep sequence diagram inspection)

export const InteractiveFlowVisualizer: React.FC<InteractiveFlowVisualizerProps> = ({ flow }) => {
  const steps = flow.steps;
  const archDiagram = flow.archMermaid;
  const seqDiagram = flow.seqMermaid;

  const [activeTab, setActiveTab] = useState<"simulator" | "architecture" | "sequence" | "code">(
    "simulator"
  );
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const flowTabs: {
    id: "simulator" | "architecture" | "sequence" | "code";
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "simulator", label: "Flow Simulator", Icon: Play },
    { id: "architecture", label: "Mermaid Architecture", Icon: Network },
    { id: "sequence", label: "Mermaid Sequence", Icon: GitCommit },
    { id: "code", label: "Raw Mermaid Syntax", Icon: Code },
  ];

  const handleTabChange = (nextTab: "simulator" | "architecture" | "sequence" | "code") => {
    if (nextTab === activeTab) return;
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.startViewTransition(() => {
        flushSync(() => {
          setActiveTab(nextTab);
        });
      });
    } else {
      setActiveTab(nextTab);
    }
  };
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Open Canvas State for Rendered Diagrams
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [renderedSvg, setRenderedSvg] = useState<string>("");
  const [renderError, setRenderError] = useState<string | null>(null);

  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || theme === "dark";
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef<{ x: number; y: number; startPanX: number; startPanY: number }>({
    x: 0,
    y: 0,
    startPanX: 0,
    startPanY: 0,
  });
  const currentStep = steps[currentStepIndex];
  const stepLanguage = langFromFilename(currentStep?.codeFile);

  const handleResetCanvas = () => {
    setPan({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((z) => {
      const step = z >= 3.0 ? 0.5 : z >= 1.5 ? 0.25 : 0.15;
      return Math.min(MAX_ZOOM, Number((z + step).toFixed(2)));
    });
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const step = z > 3.0 ? 0.5 : z > 1.5 ? 0.25 : 0.15;
      return Math.max(MIN_ZOOM, Number((z - step).toFixed(2)));
    });
  };

  const cycleZoomPreset = () => {
    setZoom((z) => {
      if (z < 1.0) return 1.0;
      if (z < 2.0) return 2.0;
      if (z < 3.5) return 3.5;
      if (z < 5.0) return 5.0;
      if (z < 7.0) return 7.0;
      return 1.0;
    });
  };

  // Auto-advance player in simulation mode
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % steps.length);
      }, 3200);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  // Render Mermaid diagrams dynamically
  const currentDiagram = activeTab === "architecture" ? archDiagram : seqDiagram;
  useEffect(() => {
    if (activeTab !== "architecture" && activeTab !== "sequence") return;

    let isMounted = true;
    const renderDiagram = async () => {
      try {
        setRenderError(null);
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "neutral",
          securityLevel: "loose",
          fontFamily: "var(--font-sans), monospace",
          themeVariables: isDark
            ? {
                primaryColor: "#1e1e24",
                primaryBorderColor: "#ff1744",
                primaryTextColor: "#ffffff",
                lineColor: "#ff1744",
                secondaryColor: "#131d1b",
                tertiaryColor: "#131a26",
              }
            : {
                primaryColor: "#ffffff",
                primaryBorderColor: "#ff1744",
                primaryTextColor: "#171717",
                lineColor: "#ff1744",
              },
        });

        const id = `mermaid-${activeTab}-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, currentDiagram);

        // Strip out Mermaid v12 inline stroke-dash styles so CSS direction-aware animation takes full effect
        const cleanedSvg = svg
          .replace(/stroke-dasharray:\s*[^;"]+;?/gi, "")
          .replace(/stroke-dashoffset:\s*[^;"]+;?/gi, "");

        if (isMounted) {
          setRenderedSvg(cleanedSvg);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Mermaid render error:", err);
          setRenderError(err.message || "Failed to render Mermaid diagram");
        }
      }
    };

    renderDiagram();
    return () => {
      isMounted = false;
    };
  }, [activeTab, currentDiagram, isDark]);

  // Mouse drag handlers for open canvas
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.startPanX + dx,
      y: dragStartRef.current.startPanY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag handlers for mobile open canvas
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragStartRef.current.x;
    const dy = touch.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.startPanX + dx,
      y: dragStartRef.current.startPanY + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse wheel zoom up to MAX_ZOOM (800%)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.88;
    setZoom((prev) =>
      Math.min(Math.max(MIN_ZOOM, Number((prev * zoomFactor).toFixed(2))), MAX_ZOOM)
    );
  };

  return (
    <div className="space-y-6">
      {/* Navigation & Mode Switcher Bar */}
      <div className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 min-h-[56px]">
        {/* Tabs with Anchor Positioning & Spring Glider Pill */}
        <div
          className="relative flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-neutral-950 border border-black/4 dark:border-white/6 text-xs overflow-x-auto scrollbar-none"
          style={{ position: "relative" }}
        >
          {flowTabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            const TabIcon = tab.Icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{
                  // @ts-ignore - CSS Anchor Positioning
                  anchorName: `--flow-tab-${tab.id}`,
                }}
                className={`relative z-10 px-3 py-1.5 rounded-lg font-medium transition-all duration-150 active:scale-[0.96] flex items-center gap-1.5 select-none shrink-0 ${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {/* Active Glider Pill with Spring Physics */}
                {isSelected && (
                  <motion.div
                    layoutId="interactive-flow-tab-active-pill"
                    className="absolute inset-0 bg-accent rounded-lg shadow-[0_0_14px_rgba(255,23,68,0.45)] -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                {/* Hover Ghost Pill */}
                {isHovered && !isSelected && (
                  <motion.div
                    layoutId="interactive-flow-tab-hover-pill"
                    className="absolute inset-0 bg-neutral-200/60 dark:bg-neutral-800/50 rounded-lg -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Play/Pause in Simulator OR Zoom HUD in Canvas */}
        <div className="flex items-center gap-2 h-9 shrink-0">
          {activeTab === "simulator" && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all active:scale-[0.96] duration-150 ${
                  isPlaying
                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                    : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 hover:text-accent"
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause Stream" : "Live Replay"}</span>
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(0);
                }}
                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/6 dark:border-white/8 hover:text-accent transition-all active:scale-[0.92] duration-150"
                title="Reset Simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {(activeTab === "architecture" || activeTab === "sequence") && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/6 dark:border-white/8 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5 shrink-0" />
              </button>
              <button
                onClick={cycleZoomPreset}
                className="text-xs font-mono px-2 py-1 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-accent hover:bg-neutral-200/50 dark:hover:bg-neutral-800/80 transition-colors shrink-0"
                title="Click to cycle zoom presets (100% → 200% → 350% → 500% → 700%)"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/6 dark:border-white/8 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Zoom In (up to 800%)"
              >
                <ZoomIn className="w-3.5 h-3.5 shrink-0" />
              </button>
              <button
                onClick={handleResetCanvas}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/6 dark:border-white/8 hover:text-accent hover:border-accent/40 transition-colors flex items-center gap-1 font-mono text-xs"
                title="Reset Canvas View"
              >
                <RotateCcw className="w-3 h-3 shrink-0" />
                <span className="hidden sm:inline">Reset View</span>
              </button>
            </div>
          )}

          <SmoothCopyButton
            textToCopy={currentDiagram}
            idleLabel="Copy Mermaid"
            copiedLabel="Copied"
            size="sm"
            className="px-2.5 py-1.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 hover:text-neutral-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-neutral-700/60 hover:border-black/20 dark:hover:border-white/20 font-mono text-xs sm:text-sm shrink-0 shadow-sm"
          />
        </div>
      </div>

      {/* Dynamic Tab Content Area with View Transitions */}
      <div
        className="flow-stage-content-viewport"
        style={{
          // @ts-ignore - CSS View Transitions
          viewTransitionName: "interactive-flow-tab-content",
        }}
      >
        {/* TAB 1: INTERACTIVE FLOW SIMULATOR */}
        {activeTab === "simulator" && (
          <div className="space-y-6">
            {/* Horizontal Pipeline Steps Track */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {steps.map((step, idx) => {
                const isCurrent = idx === currentStepIndex;
                const isPassed = idx < currentStepIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentStepIndex(idx);
                    }}
                    className={`group relative p-3.5 rounded-xl text-left border flex flex-col justify-between min-h-[96px] transition-all duration-150 active:scale-[0.97] ease-out ${
                      isCurrent
                        ? "bg-white dark:bg-neutral-900 border-accent/80 shadow-[0_0_12px_rgba(255,23,68,0.1)] ring-1 ring-accent/30 text-neutral-900 dark:text-white"
                        : isPassed
                          ? "bg-stone-50/90 dark:bg-neutral-900/50 border-emerald-500/25 dark:border-emerald-500/20 text-neutral-800 dark:text-neutral-200 hover:border-emerald-500/40"
                          : "bg-white/60 dark:bg-neutral-900/30 border-black/6 dark:border-white/6 text-neutral-600 dark:text-neutral-400 opacity-70 hover:opacity-100 hover:border-black/15 dark:hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                          isCurrent
                            ? "bg-accent text-white shadow-[0_0_8px_rgba(255,23,68,0.4)]"
                            : isPassed
                              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                              : "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                        }`}
                      >
                        {step.number}
                      </span>

                      {isCurrent ? (
                        <span className="relative flex h-2 w-2">
                          {isPlaying && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                          )}
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_6px_rgba(255,23,68,0.6)]" />
                        </span>
                      ) : isPassed ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-transparent" />
                      )}
                    </div>

                    <div className="mt-3 w-full">
                      <span className="text-xs font-semibold block truncate text-neutral-900 dark:text-white">
                        {step.title}
                      </span>
                      <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono block truncate mt-0.5">
                        {step.tech}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Deep Dive Workbench */}
            <div className="relative min-h-[360px]">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left Col (8): Narrative, Architecture Diagram, Code Execution */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-black/6 dark:border-white/8 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-black/4 dark:border-white/6 pb-3">
                      <div>
                        <span className="text-xs font-mono text-accent font-semibold">
                          STAGE {currentStep.number} OF {String(steps.length).padStart(2, "0")}
                        </span>
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                          {currentStep.title}
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-stone-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        {currentStep.tech}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Interactive Code Snippet with Prism Syntax Highlighting */}
                  <div className="rounded-2xl bg-stone-100/90 dark:bg-[#0d1117] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-sm">
                    {/* Window Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-stone-200/60 dark:bg-[#161b22] border-b border-black/6 dark:border-[#30363d] text-xs font-mono">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span
                          className="text-neutral-700 dark:text-[#8b949e] font-medium ml-1 truncate"
                          title={currentStep.codeFile}
                        >
                          {currentStep.codeFile}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 font-semibold shrink-0">
                          {stepLanguage}
                        </span>
                      </div>
                      <SmoothCopyButton
                        textToCopy={currentStep.codeSnippet}
                        idleLabel="Copy"
                        copiedLabel="Copied"
                        size="xs"
                        className="px-2 py-1 rounded-md bg-white dark:bg-[#21262d] hover:bg-stone-100 dark:hover:bg-[#30363d] text-neutral-700 dark:text-[#c9d1d9] border border-black/8 dark:border-[#30363d] text-[11px] shrink-0 shadow-sm"
                      />
                    </div>

                    {/* Syntax Highlighted Code Body */}
                    <div className="p-4 overflow-x-auto bg-stone-50/50 dark:bg-[#0d1117] select-text">
                      <Highlight
                        code={currentStep.codeSnippet}
                        language={stepLanguage}
                        theme={isDark ? themes.oneDark : themes.oneLight}
                      >
                        {({ style, tokens, getLineProps, getTokenProps }) => (
                          <pre
                            className="text-xs font-mono leading-relaxed min-w-max"
                            style={{ ...style, backgroundColor: "transparent", margin: 0 }}
                          >
                            {tokens.map((line, i) => (
                              <div
                                key={i}
                                {...getLineProps({ line })}
                                className="min-h-[1.4em] py-0.5"
                              >
                                <span className="select-none inline-block w-6 mr-3 text-right text-neutral-400 dark:text-[#484f58]">
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

                {/* Right Col (4): Live Telemetry, Logs & Performance Matrix */}
                <div className="lg:col-span-4 space-y-5">
                  {/* Telemetry Card */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-black/6 dark:border-white/8 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
                        <Zap className="w-3.5 h-3.5 text-accent" />
                        <span>Telemetry Specs</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-black/4 dark:border-white/4">
                        <span className="text-[10px] uppercase font-mono text-neutral-600 dark:text-neutral-400 block">
                          Latency
                        </span>
                        <span className="text-base font-bold text-neutral-900 dark:text-white font-mono mt-0.5 block">
                          {currentStep.systemMetrics.latency}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-black/4 dark:border-white/4">
                        <span className="text-[10px] uppercase font-mono text-neutral-600 dark:text-neutral-400 block">
                          Throughput
                        </span>
                        <span className="text-base font-bold text-neutral-900 dark:text-white font-mono mt-0.5 block">
                          {currentStep.systemMetrics.ops}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-black/4 dark:border-white/6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-400">Node Status:</span>
                        <span className="font-mono font-semibold text-emerald-500 flex items-center gap-1.5">
                          <Check className="w-3 h-3" />
                          Active & Synchronized
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Live Trace Logs Console */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0c0c10] border border-black/6 dark:border-white/8 shadow-sm space-y-3 font-mono">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium text-neutral-800 dark:text-neutral-300">
                        <Terminal className="w-3.5 h-3.5 text-accent" />
                        <span>Pipeline Audit Stream</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    </div>
                    <div className="space-y-2 text-[11px]">
                      {currentStep.logs.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-600 dark:text-emerald-400 shrink-0 font-bold select-none">
                            ›
                          </span>
                          <span className="text-neutral-700 dark:text-neutral-300">{log}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 2 & 3: OPEN CANVAS RENDERED MERMAID DIAGRAM (DRAG & PAN FREELY) */}
        {(activeTab === "architecture" || activeTab === "sequence") && (
          <div
            ref={canvasContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            className={`relative select-none rounded-2xl bg-[#fafafa] dark:bg-[#0a0a0c] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-elevated min-h-[500px] h-[600px] flex items-center justify-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              backgroundImage: `radial-gradient(${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"} 1.2px, transparent 1.2px)`,
              backgroundSize: "24px 24px",
              backgroundPosition: `${pan.x}px ${pan.y}px`,
            }}
          >
            {/* Floating Canvas Mode Header Badge */}
            <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/8 dark:border-white/10 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 shadow-sm">
                <Move className="w-3.5 h-3.5 text-accent" />
                <span>
                  Open Canvas • Click &amp; drag anywhere to pan • Scroll to zoom (25% – 800%)
                </span>
              </span>
            </div>

            {/* Floating HUD Quick Zoom Controls */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/8 dark:border-white/10 p-1.5 rounded-xl shadow-sm">
              <button
                onClick={handleResetCanvas}
                className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
                title="Reset pan and zoom (100%)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={cycleZoomPreset}
                className="text-[11px] font-mono px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-300 hover:text-accent hover:bg-neutral-200/50 dark:hover:bg-neutral-800/80 transition-colors"
                title="Click to cycle zoom presets (100% → 200% → 350% → 500% → 700%)"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Zoom In (up to 800%)"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              {/* Quick preset pills for instant jump */}
              <div className="hidden sm:flex items-center gap-0.5 pl-1 border-l border-black/8 dark:border-white/10">
                {[1.0, 2.5, 5.0, 8.0].map((level) => (
                  <button
                    key={level}
                    onClick={() => setZoom(level)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      Math.abs(zoom - level) < 0.1
                        ? "bg-accent text-white font-bold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    {Math.round(level * 100)}%
                  </button>
                ))}
              </div>
            </div>

            {renderError ? (
              <div className="text-center p-8 space-y-3 z-10">
                <div className="text-rose-500 font-semibold text-sm">
                  Mermaid Diagram Rendering Notice
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto font-mono">
                  {renderError}
                </p>
                <button
                  onClick={() => setActiveTab("code")}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-mono"
                >
                  View Raw Mermaid Syntax
                </button>
              </div>
            ) : renderedSvg ? (
              <div
                style={{
                  transform: `translate3d(${pan.x}px, ${pan.y}px, 0px) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isDragging ? "none" : "transform 0.12s ease-out",
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="pointer-events-auto p-8 select-none"
                  dangerouslySetInnerHTML={{ __html: renderedSvg }}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs z-10">
                <span className="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                <span>Compiling Mermaid Vector SVG...</span>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: RAW MERMAID SYNTAX */}
        {activeTab === "code" && (
          <div className="h-[600px] flex flex-col rounded-2xl bg-stone-100/90 dark:bg-[#0e0e12] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-elevated">
            <div className="flex items-center justify-between px-5 py-3 bg-stone-200/70 dark:bg-[#14141a] border-b border-black/6 dark:border-white/6 shrink-0">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300">
                  Mermaid-Specification.mmd
                </span>
              </div>
              <SmoothCopyButton
                textToCopy={currentDiagram}
                idleLabel="Copy Mermaid Spec"
                copiedLabel="Copied"
                size="xs"
                className="px-3 py-1 bg-white dark:bg-white/10 hover:bg-stone-100 dark:hover:bg-white/20 text-neutral-700 dark:text-white font-mono text-xs border border-black/8 dark:border-white/10 shadow-sm"
              />
            </div>
            <pre className="flex-1 p-5 text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-stone-50/50 dark:bg-[#0e0e12] overflow-auto leading-relaxed select-text">
              <code>{currentDiagram}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
