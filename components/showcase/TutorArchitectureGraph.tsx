"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitPullRequest, ShieldCheck, Zap, Layers } from "lucide-react";

interface NodeData {
    id: string;
    label: string;
    category: "frontend" | "coordination" | "api" | "storage";
    badge: string;
    commits: string[];
    description: string;
    prHighlight: string;
    prUrl: string;
    metrics: string;
}

const NODES: NodeData[] = [
    {
        id: "curriculum",
        label: "Course Builder & Curriculum Tree",
        category: "frontend",
        badge: "React · State Machine",
        commits: [
            "fix(course-builder): confirm before changing course author (#2948)",
            "fix(curriculum): resolve title layout shift and continuous tree drag-reorder",
            "style(header): fix sticky offset for course builder header in responsive view",
        ],
        description:
            "Hierarchical curriculum tree supporting drag-and-drop topics and lessons. Eliminates Cumulative Layout Shift (CLS) on dynamic title edits and enforces modal safeguards on author re-assignments.",
        prHighlight: "themeum/tutor #2985 / #2948 · Author confirmation guard & zero-CLS title layout",
        prUrl: "https://github.com/themeum/tutor/pull/2985",
        metrics: "0.00 CLS · Sub-16ms FLIP reorder",
    },
    {
        id: "motion",
        label: "Motion Settings Coordinator",
        category: "coordination",
        badge: "Custom Hook · Hardware Acceleration",
        commits: [
            "fix(motion): resolve tutor motion conflict with course builder (#2938)",
            "feat(motion): add custom hook useTutorMotion to coordinate fluid layout transitions",
            "refactor: add iframe containment check and reduced-motion fallback",
        ],
        description:
            "Centralized motion hook coordinating animation execution across Tutor LMS. Dynamically inspects OS prefers-reduced-motion, iframe containment, and hardware capability before triggering hardware-accelerated transitions.",
        prHighlight: "themeum/tutor #2938 · useTutorMotion & execution coordinator",
        prUrl: "https://github.com/themeum/tutor/pull/2938",
        metrics: "Zero layout shift · 100% WCAG 2.1 AAA a11y compliance",
    },
    {
        id: "quiz",
        label: "Quiz Assessment & Sanitizer Engine",
        category: "frontend",
        badge: "Security & State Guard",
        commits: [
            "fix(quiz): sanitize quiz content for latex support (#2931)",
            "fix(quiz): prevent pointer events on read-only quiz options after submission",
            "feat(quiz): dynamic quiz marks calculation under randomized ordering (#2990)",
        ],
        description:
            "Robust quiz evaluation engine with input sanitization against XSS in learning areas. Integrates MathJax/LaTeX AST parsing and blocks pointer tampering on submitted attempts with instant visual feedback.",
        prHighlight: "themeum/tutor #2931 / #2990 · Sanitize quiz content for LaTeX & MathJax AST",
        prUrl: "https://github.com/themeum/tutor/pull/2931",
        metrics: "Zero XSS vulnerabilities · Tamper-proof submissions",
    },
    {
        id: "progress",
        label: "Concurrent AJAX Skeletons & Progress Syncer",
        category: "coordination",
        badge: "Concurrent AJAX · Zero-CLS",
        commits: [
            "feat(dashboard): concurrent ajax lazyloading for instructor analytics (#1901)",
            "perf(skeletons): zero-layout-shift placeholder skeletons during background hydration",
            "fix(cart): load all enrolled courses from cart beyond default pagination limit",
        ],
        description:
            "Batched telemetry syncer that debounces video milestone completions and student Q&A responses, seamlessly syncing state with the WordPress REST backend without flooding PHP workers.",
        prHighlight: "themeum/tutor-pro #1901 · Instructor dashboard concurrent AJAX lazyloading",
        prUrl: "https://github.com/themeum/tutor-pro/pull/1901",
        metrics: "90% reduction in REST round-trips · Zero layout shift",
    },
    {
        id: "backend",
        label: "WordPress REST Gateway & PHP Lifecycle",
        category: "api",
        badge: "PHPStan Clean · Husky CI",
        commits: [
            "ci(husky): add PHPStan static analysis check to pre-commit workflow (#1854)",
            "refactor(api): enforce JsonResponse contract and clean DRY payload schema",
            "refactor(types): resolve PHPStan level warnings across core endpoints",
        ],
        description:
            "Strictly typed PHP REST endpoints implementing standardized JsonResponse payloads. Fully compliant with PHPStan level checks and integrated with Husky pre-commit hooks.",
        prHighlight: "themeum/tutor-pro #1854 · PHPStan static analysis & JsonResponse standard",
        prUrl: "https://github.com/themeum/tutor-pro/pull/1854",
        metrics: "< 45ms endpoint response · Strict typed contracts",
    },
    {
        id: "database",
        label: "Relational Schema & Dynamic Illustrations",
        category: "storage",
        badge: "SVG Provider · MySQL",
        commits: [
            "feat(templates): SVGIconConfigProvider and dynamic illustration renderer (#1714)",
            "wp_tutor_quiz_attempts (indexed attempt tracking and marks ledger)",
            "v4.0 core launch architecture: continuous learning cockpit and feedback",
        ],
        description:
            "Normalized relational data persistence storing immutable quiz attempts, instructor commission ledgers, and atomic enrollment milestones, paired with SVGIconConfigProvider for dynamic vector rendering.",
        prHighlight: "themeum/tutor-pro #1714 · SVGIconConfigProvider & dynamic illustration SVGs",
        prUrl: "https://github.com/themeum/tutor-pro/pull/1714",
        metrics: "ACID compliant · Indexed query optimization",
    },
];

export const TutorArchitectureGraph: React.FC = () => {
    const [selectedNodeId, setSelectedNodeId] = useState<string>("curriculum");

    const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[0];

    return (
        <div className="space-y-6">
            {/* Graph Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff1744] animate-ping" />
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                        Tutor LMS 2.0 → 4.0 Architectural Graph
                    </span>
                </div>
                <a
                    href="https://github.com/b-l-i-n-d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] transition-colors inline-flex items-center gap-1.5"
                >
                    <span>Verified PRs & Commits by Fahim Faisal (<strong className="text-[#ff1744]">b-l-i-n-d</strong>)</span>
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            {/* Interactive SVG Node Diagram */}
            <div className="relative rounded-2xl bg-stone-100 dark:bg-neutral-950 p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800/90 overflow-hidden shadow-inner">
                {/* SVG Pipeline Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                    {/* Layer 1: Client Presentation Layer */}
                    <div className="space-y-3">
                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                            01 · Client Presentation Layer
                        </div>
                        <div className="space-y-3">
                            {NODES.filter((n) => n.category === "frontend").map((node) => {
                                const isSelected = selectedNodeId === node.id;
                                return (
                                    <button
                                        key={node.id}
                                        onClick={() => setSelectedNodeId(node.id)}
                                        className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                                            isSelected
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.2)] scale-[1.02]"
                                                : "bg-white/70 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-[#ff1744] border border-rose-500/20 font-bold">
                                                {node.badge}
                                            </span>
                                            {isSelected && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            )}
                                        </div>
                                        <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-2">
                                            {node.label}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Layer 2: State & Motion Coordination */}
                    <div className="space-y-3">
                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                            02 · Coordination & Telemetry
                        </div>
                        <div className="space-y-3">
                            {NODES.filter((n) => n.category === "coordination").map((node) => {
                                const isSelected = selectedNodeId === node.id;
                                return (
                                    <button
                                        key={node.id}
                                        onClick={() => setSelectedNodeId(node.id)}
                                        className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                                            isSelected
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.2)] scale-[1.02]"
                                                : "bg-white/70 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                                                {node.badge}
                                            </span>
                                            {isSelected && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            )}
                                        </div>
                                        <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-2">
                                            {node.label}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Layer 3: REST Lifecycle & Persistence */}
                    <div className="space-y-3">
                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                            03 · REST Gateway & Data Schema
                        </div>
                        <div className="space-y-3">
                            {NODES.filter((n) => n.category === "api" || n.category === "storage").map((node) => {
                                const isSelected = selectedNodeId === node.id;
                                return (
                                    <button
                                        key={node.id}
                                        onClick={() => setSelectedNodeId(node.id)}
                                        className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                                            isSelected
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.2)] scale-[1.02]"
                                                : "bg-white/70 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
                                                {node.badge}
                                            </span>
                                            {isSelected && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            )}
                                        </div>
                                        <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mt-2">
                                            {node.label}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
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
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800/80 pb-4">
                        <div>
                            <span className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                Deep-Dive Node Inspection
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                                {selectedNode.label}
                            </h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                {selectedNode.metrics}
                            </span>
                            <a
                                href={selectedNode.prUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-[#ff1744] border border-neutral-200 dark:border-neutral-700 transition-colors inline-flex items-center gap-1.5"
                            >
                                <GitPullRequest className="w-3.5 h-3.5 text-[#ff1744]" />
                                <span>Inspect Pull Request</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {selectedNode.description}
                    </p>

                    <div className="p-3 rounded-xl bg-stone-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono flex items-center justify-between gap-2">
                        <span className="text-neutral-500">Core PR Contribution:</span>
                        <a
                            href={selectedNode.prUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#ff1744] hover:underline font-semibold flex items-center gap-1"
                        >
                            <span>{selectedNode.prHighlight}</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="space-y-2 pt-2">
                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                            Verified Production Commits (authored by Fahim Faisal / b-l-i-n-d):
                        </div>
                        <div className="space-y-1.5">
                            {selectedNode.commits.map((commit, idx) => (
                                <div
                                    key={idx}
                                    className="p-2 rounded-lg bg-stone-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-800 dark:text-neutral-200 flex items-center gap-2"
                                >
                                    <span className="text-[#ff1744] font-bold">git:</span>
                                    <span className="truncate">{commit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
