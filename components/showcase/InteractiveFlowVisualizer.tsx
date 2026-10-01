"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import { m } from "motion/react";
import { useTheme } from "next-themes";
import {
  Play,
  Pause,
  RotateCcw,
  Check,
  Code,
  Network,
  GitCommit,
  ZoomIn,
  ZoomOut,
  Move,
  Activity,
  FileCode2,
} from "lucide-react";
import type { ShowcaseFlow, ShowcaseFlowStep } from "@/types/portfolio";
import { SmoothCopyButton } from "@/components/showcase/SmoothCopyButton";
import { Highlight } from "prism-react-renderer";
import { cssPrismTheme, getPrismLanguage } from "./prism-theme";

interface InteractiveFlowVisualizerProps {
  flow: ShowcaseFlow;
}

const MIN_ZOOM = 0.25; // 25% min zoom (bird's-eye view)
const MAX_ZOOM = 8.0; // 800% max zoom (deep sequence diagram inspection)

// Standalone Mermaid diagram renderer extracted outside React components
// so React Compiler does not choke on dynamic import() statements in hook closures
async function renderMermaidDiagram(id: string, diagram: string, isDark: boolean): Promise<string> {
  const mermaid = (await import("mermaid")).default;
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark ? "dark" : "neutral",
    securityLevel: "loose",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
    themeVariables: {
      fontSize: "13px",
      primaryColor: isDark ? "#1f1f23" : "#ffffff",
      primaryTextColor: isDark ? "#ffffff" : "#171717",
      primaryBorderColor: isDark ? "#3f3f46" : "#e5e5e5",
      lineColor: isDark ? "#ff1744" : "#ff1744",
      secondaryColor: isDark ? "#27272a" : "#fafafa",
      tertiaryColor: isDark ? "#18181b" : "#f4f4f5",
    },
  });

  const { svg } = await mermaid.render(id, diagram);
  return svg;
}

interface FlowSimulatorTabProps {
  steps: ShowcaseFlowStep[];
}

const FlowSimulatorTab: React.FC<FlowSimulatorTabProps> = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Auto-play timer loop for simulator
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
      if (currentStepIndex + 1 >= steps.length - 1) {
        setIsPlaying(false);
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, steps.length]);

  const currentStep: ShowcaseFlowStep = steps[currentStepIndex] || steps[0];
  const stepLanguage = getPrismLanguage(currentStep?.codeFile);

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      {/* Horizontal Pipeline Steps Track */}
      <div className="flex overflow-x-auto gap-2.5 pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
        {steps.map((step, idx) => {
          const isCurrent = idx === currentStepIndex;
          const isPassed = idx < currentStepIndex;
          return (
            <button
              key={step.number ?? step.title}
              onClick={() => {
                setIsPlaying(false);
                setCurrentStepIndex(idx);
              }}
              className={`group relative p-3 sm:p-3.5 rounded-xl text-left border flex flex-col justify-between min-h-[88px] sm:min-h-[96px] min-w-[150px] max-w-[180px] shrink-0 snap-start sm:min-w-0 sm:max-w-none transition-[background-color,border-color,transform] duration-150 active:scale-[0.97] ease-out ${
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
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                )}
              </div>

              <div className="mt-2 min-w-0">
                <div className="font-semibold text-xs truncate leading-snug">{step.title}</div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 truncate mt-0.5 font-mono">
                  {step.tech}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Primary Simulator Workspace Area */}
      <m.div
        key={currentStepIndex}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        className="rounded-2xl border border-black/8 dark:border-white/10 bg-white dark:bg-neutral-900/60 shadow-craft-card overflow-hidden min-w-0"
      >
        {/* Step Header & Telemetry Bar */}
        <div className="p-4 sm:p-6 border-b border-black/6 dark:border-white/8 bg-stone-50/50 dark:bg-neutral-900/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-accent/10 text-accent font-semibold">
                  Stage {currentStep.number} of {steps.length}
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {currentStep.tech}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                {currentStep.title}
              </h4>
            </div>

            {/* Play/Pause Scrubber Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-[background-color,color] ${
                  isPlaying
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-stone-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-black dark:hover:bg-neutral-100"
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Auto Play</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(0);
                }}
                className="p-2 rounded-xl border border-black/8 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Reset simulation to step 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {currentStep.description}
          </p>
        </div>

        {/* Two-Column Diagnostic Spread: Code Snippet & Live Execution Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-w-0">
          {/* Left Column: Focused Code Snapshot */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-black/6 dark:border-white/8 flex flex-col min-w-0">
            <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 bg-stone-100 dark:bg-neutral-950 border-b border-black/6 dark:border-white/6 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <FileCode2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 truncate">
                  {currentStep.codeFile}
                </span>
              </div>
              <SmoothCopyButton
                textToCopy={currentStep.codeSnippet}
                idleLabel="Copy Code"
                copiedLabel="Copied"
                size="xs"
                className="p-1 sm:px-2 sm:py-0.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] border border-black/6 dark:border-white/8 shrink-0 shadow-xs"
              />
            </div>

            <div className="p-3 sm:p-4 bg-stone-50/50 dark:bg-[#0d1117] overflow-x-auto max-h-[360px] min-w-0">
              <Highlight
                code={currentStep.codeSnippet}
                language={stepLanguage}
                theme={cssPrismTheme}
              >
                {({ style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className="text-xs font-mono leading-relaxed min-w-0 max-w-full"
                    style={{ ...style, backgroundColor: "transparent", margin: 0 }}
                  >
                    {tokens.map((line, lineNumber) => (
                      <div
                        key={`line-${lineNumber + 1}`}
                        {...getLineProps({ line })}
                        className="min-h-[1.4em] py-0.5"
                      >
                        <span className="select-none inline-block w-6 sm:w-8 mr-2 sm:mr-3 text-right text-neutral-400 dark:text-[#484f58]">
                          {lineNumber + 1}
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

          {/* Right Column: Execution Telemetry & Reactive Stream */}
          <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between gap-4 bg-stone-50/20 dark:bg-neutral-900/30 min-w-0">
            <div className="space-y-3 min-w-0">
              {/* Reactive Stream Badge */}
              <div className="flex items-center justify-between border-b border-black/6 dark:border-white/8 pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-accent" />
                  Reactive Event Stream
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                  Live
                </span>
              </div>
              <div className="space-y-2 text-[11px] min-w-0">
                {currentStep.logs.map((log: string, logIndex: number) => (
                  <div
                    key={`log-${logIndex}-${log.slice(0, 20)}`}
                    className="flex items-start gap-2 leading-relaxed min-w-0"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 shrink-0 font-bold select-none">
                      ›
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300 break-words min-w-0 flex-1">
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

// Extracted Sub-Components and Hook for FlowDiagramCanvasTab

const CanvasHeaderBadge: React.FC = () => (
  <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2">
    <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/8 dark:border-white/10 text-[11px] font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 shadow-sm">
      <Move className="w-3.5 h-3.5 text-accent" />
      <span className="hidden sm:inline">
        Open Canvas • Click & drag anywhere to pan • Scroll to zoom (25% – 800%)
      </span>
      <span className="sm:hidden">Pan & zoom canvas</span>
    </span>
  </div>
);

interface CanvasZoomControlsProps {
  zoom: number;
  onReset: () => void;
  onZoomOut: () => void;
  onZoomIn: () => void;
  onCyclePreset: () => void;
  onSelectZoom: (level: number) => void;
}

const CanvasZoomControls: React.FC<CanvasZoomControlsProps> = ({
  zoom,
  onReset,
  onZoomOut,
  onZoomIn,
  onCyclePreset,
  onSelectZoom,
}) => (
  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/8 dark:border-white/10 p-1 sm:p-1.5 rounded-xl shadow-sm">
    <button
      onClick={onReset}
      className="p-1 sm:p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
      title="Reset pan and zoom (100%)"
    >
      <RotateCcw className="w-3.5 h-3.5" />
    </button>
    <button
      onClick={onZoomOut}
      className="p-1 sm:p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
      title="Zoom Out"
    >
      <ZoomOut className="w-3.5 h-3.5" />
    </button>
    <button
      onClick={onCyclePreset}
      className="text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-300 hover:text-accent hover:bg-neutral-200/50 dark:hover:bg-neutral-800/80 transition-colors"
      title="Click to cycle zoom presets (100% → 200% → 350% → 500% → 700%)"
    >
      {Math.round(zoom * 100)}%
    </button>
    <button
      onClick={onZoomIn}
      className="p-1 sm:p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
      title="Zoom In (up to 800%)"
    >
      <ZoomIn className="w-3.5 h-3.5" />
    </button>

    <div className="hidden sm:flex items-center gap-0.5 pl-1 border-l border-black/8 dark:border-white/10">
      {[1.0, 2.5, 5.0, 8.0].map((level) => (
        <button
          key={level}
          onClick={() => onSelectZoom(level)}
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
);

interface CanvasErrorNoticeProps {
  error: string;
  onViewCode: () => void;
}

const CanvasErrorNotice: React.FC<CanvasErrorNoticeProps> = ({ error, onViewCode }) => (
  <div className="text-center p-6 sm:p-8 space-y-3 z-10">
    <div className="text-rose-500 font-semibold text-sm">Mermaid Diagram Rendering Notice</div>
    <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto font-mono">
      {error}
    </p>
    <button
      onClick={onViewCode}
      className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-mono"
    >
      View Raw Mermaid Syntax
    </button>
  </div>
);

function useCanvasPanZoom() {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef<{ x: number; y: number; startPanX: number; startPanY: number }>({
    x: 0,
    y: 0,
    startPanX: 0,
    startPanY: 0,
  });

  const handleResetCanvas = useCallback(() => {
    setPan({ x: 0, y: 0 });
    setZoom(1);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => {
      const step = z >= 3.0 ? 0.5 : z >= 1.5 ? 0.25 : 0.15;
      return Math.min(MAX_ZOOM, Number((z + step).toFixed(2)));
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => {
      const step = z > 3.0 ? 0.5 : z > 1.5 ? 0.25 : 0.15;
      return Math.max(MIN_ZOOM, Number((z - step).toFixed(2)));
    });
  }, []);

  const cycleZoomPreset = useCallback(() => {
    setZoom((z) => {
      if (z < 1.0) return 1.0;
      if (z < 2.0) return 2.0;
      if (z < 3.5) return 3.5;
      if (z < 5.0) return 5.0;
      if (z < 7.0) return 7.0;
      return 1.0;
    });
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
    },
    [pan.x, pan.y]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      setPan({
        x: dragStartRef.current.startPanX + dx,
        y: dragStartRef.current.startPanY + dy,
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
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
    },
    [pan.x, pan.y]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const dx = touch.clientX - dragStartRef.current.x;
      const dy = touch.clientY - dragStartRef.current.y;
      setPan({
        x: dragStartRef.current.startPanX + dx,
        y: dragStartRef.current.startPanY + dy,
      });
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.88;
    setZoom((prev) =>
      Math.min(Math.max(MIN_ZOOM, Number((prev * zoomFactor).toFixed(2))), MAX_ZOOM)
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = 32;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setPan((prev) => ({ ...prev, y: prev.y + step }));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setPan((prev) => ({ ...prev, y: prev.y - step }));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPan((prev) => ({ ...prev, x: prev.x + step }));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPan((prev) => ({ ...prev, x: prev.x - step }));
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setZoom((prev) => Math.min(MAX_ZOOM, Number((prev * 1.15).toFixed(2))));
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setZoom((prev) => Math.max(MIN_ZOOM, Number((prev * 0.85).toFixed(2))));
      } else if (e.key === "0" || e.key === "r" || e.key === "R") {
        e.preventDefault();
        handleResetCanvas();
      }
    },
    [handleResetCanvas]
  );

  return {
    zoom,
    setZoom,
    pan,
    isDragging,
    canvasContainerRef,
    handleResetCanvas,
    handleZoomIn,
    handleZoomOut,
    cycleZoomPreset,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleWheel,
    handleKeyDown,
  };
}

interface FlowDiagramCanvasTabProps {
  currentDiagram: string;
  activeTab: "architecture" | "sequence";
  setActiveTab: (tab: "simulator" | "architecture" | "sequence" | "code") => void;
}

const FlowDiagramCanvasTab: React.FC<FlowDiagramCanvasTabProps> = ({
  currentDiagram,
  activeTab,
  setActiveTab,
}) => {
  const [renderedSvg, setRenderedSvg] = useState<string>("");
  const [renderError, setRenderError] = useState<string | null>(null);

  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || theme === "dark";

  const {
    zoom,
    setZoom,
    pan,
    isDragging,
    canvasContainerRef,
    handleResetCanvas,
    handleZoomIn,
    handleZoomOut,
    cycleZoomPreset,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleWheel,
    handleKeyDown,
  } = useCanvasPanZoom();

  // Dynamic Mermaid rendering on client side with theme-adaptive SVG
  useEffect(() => {
    let isMounted = true;

    const renderMermaid = async () => {
      try {
        const id = `mermaid-canvas-${activeTab}-${Date.now()}`;
        const svg = await renderMermaidDiagram(id, currentDiagram, isDark);
        if (isMounted) {
          setRenderError(null);
          setRenderedSvg(svg);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Mermaid Render Error:", err);
          setRenderError(
            err?.message || "Failed to render Mermaid diagram. Check raw syntax below."
          );
          setRenderedSvg("");
        }
      }
    };

    renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [activeTab, currentDiagram, isDark]);

  return (
    <div
      ref={canvasContainerRef}
      role="region"
      tabIndex={0}
      aria-label="Interactive architecture flow canvas: use arrow keys to pan, plus and minus to zoom, or drag with mouse"
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className={`relative select-none rounded-2xl bg-[#fafafa] dark:bg-[#0a0a0c] bg-[radial-gradient(rgba(0,0,0,0.12)_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1.2px,transparent_1.2px)] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-elevated min-h-[380px] h-[440px] sm:h-[520px] md:h-[600px] flex items-center justify-center ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        backgroundSize: "24px 24px",
        backgroundPosition: `${pan.x}px ${pan.y}px`,
      }}
    >
      {/* Floating Canvas Mode Header Badge */}
      <CanvasHeaderBadge />

      {/* Floating HUD Quick Zoom Controls */}
      <CanvasZoomControls
        zoom={zoom}
        onReset={handleResetCanvas}
        onZoomOut={handleZoomOut}
        onZoomIn={handleZoomIn}
        onCyclePreset={cycleZoomPreset}
        onSelectZoom={setZoom}
      />

      {renderError ? (
        <CanvasErrorNotice error={renderError} onViewCode={() => setActiveTab("code")} />
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
            className="pointer-events-auto p-4 sm:p-8 select-none"
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
  );
};

interface FlowCodeTabProps {
  currentDiagram: string;
}

const FlowCodeTab: React.FC<FlowCodeTabProps> = ({ currentDiagram }) => {
  return (
    <div className="h-[400px] sm:h-[500px] md:h-[600px] flex flex-col rounded-2xl bg-stone-100/90 dark:bg-[#0e0e12] border border-black/8 dark:border-white/10 overflow-hidden shadow-craft-elevated min-w-0">
      <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-stone-200/70 dark:bg-[#14141a] border-b border-black/6 dark:border-white/6 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Code className="w-4 h-4 text-accent shrink-0" />
          <span className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 truncate">
            Mermaid-Specification.mmd
          </span>
        </div>
        <SmoothCopyButton
          textToCopy={currentDiagram}
          idleLabel="Copy Mermaid Spec"
          copiedLabel="Copied"
          size="xs"
          className="p-1.5 sm:px-3 sm:py-1 bg-white dark:bg-white/10 hover:bg-stone-100 dark:hover:bg-white/20 text-neutral-700 dark:text-white font-mono text-xs border border-black/8 dark:border-white/10 shadow-sm shrink-0"
        />
      </div>
      <pre className="flex-1 p-3.5 sm:p-5 text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-stone-50/50 dark:bg-[#0e0e12] overflow-auto leading-relaxed select-text min-w-0">
        <code>{currentDiagram}</code>
      </pre>
    </div>
  );
};

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

  const currentDiagram =
    activeTab === "architecture" ? archDiagram : activeTab === "sequence" ? seqDiagram : "";

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      {/* Navigation & Mode Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/6 dark:border-white/8 min-h-[56px] min-w-0">
        {/* Tabs with Anchor Positioning & Spring Glider Pill */}
        <div
          className="relative flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-neutral-950 border border-black/4 dark:border-white/6 text-xs overflow-x-auto scrollbar-none w-full sm:w-auto min-w-0"
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
                className={`relative z-10 px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-[background-color,color,transform] duration-150 active:scale-[0.96] flex items-center gap-1.5 select-none shrink-0 text-xs ${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {/* Active Glider Pill with Spring Physics */}
                {isSelected && (
                  <m.div
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
                  <m.div
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

        {/* Global Toolbar: Quick Actions */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <SmoothCopyButton
            textToCopy={currentDiagram}
            idleLabel="Copy Mermaid"
            copiedLabel="Copied"
            size="sm"
            className="p-1.5 sm:px-2.5 sm:py-1.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 hover:text-neutral-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-neutral-700/60 hover:border-black/20 dark:hover:border-white/20 font-mono text-xs shrink-0 shadow-sm"
          />
        </div>
      </div>

      {/* Dynamic Tab Content Area with View Transitions */}
      <div
        className="flow-stage-content-viewport min-w-0"
        style={{
          // @ts-ignore - CSS View Transitions
          viewTransitionName: "interactive-flow-tab-content",
        }}
      >
        {/* TAB 1: INTERACTIVE FLOW SIMULATOR */}
        {activeTab === "simulator" && <FlowSimulatorTab steps={steps} />}

        {/* TAB 2 & 3: OPEN CANVAS RENDERED MERMAID DIAGRAM (DRAG & PAN FREELY) */}
        {(activeTab === "architecture" || activeTab === "sequence") && (
          <FlowDiagramCanvasTab
            currentDiagram={currentDiagram}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {/* TAB 4: RAW MERMAID SYNTAX */}
        {activeTab === "code" && <FlowCodeTab currentDiagram={currentDiagram} />}
      </div>
    </div>
  );
};
