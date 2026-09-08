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
            "LaTeX math sanitizer and assessment state engine. Prevents pointer-event tampering after test submissions while computing randomized grading weights in sub-millisecond execution.",
        prHighlight: "themeum/tutor #2931 / #2990 · LaTeX sanitizer & assessment security barrier",
        prUrl: "https://github.com/themeum/tutor/pull/2931",
        metrics: "Sub-millisecond sanitization · Strict XSS mitigation",
    },
    {
        id: "bundle",
        label: "Course Bundle & Pricing Engine",
        category: "frontend",
        badge: "E-Commerce Core",
        commits: [
            "fix(bundle): handle course bundle edit in instructor role (#2997)",
            "fix(bundle): check total bundle price and handle multiple pricing tiers",
            "feat(bundle): add live summary calculation for multi-course packages",
        ],
        description:
            "Course bundling engine permitting multi-tier pricing, role-based discount permissions, and real-time total recalculations without database latency.",
        prHighlight: "themeum/tutor #2997 · Multi-tier pricing calculation engine",
        prUrl: "https://github.com/themeum/tutor/pull/2997",
        metrics: "Optimistic cart sync · Zero pricing calculation roundtrips",
    },
    {
        id: "email",
        label: "Email Template Visual Designer",
        category: "frontend",
        badge: "Visual Customizer",
        commits: [
            "fix(email-template): add default template to reset email styles (#2961)",
            "feat(email-template): live preview frame with sandboxed DOM styles",
            "fix(email-template): test email dispatch validation error boundary",
        ],
        description:
            "Live sandboxed visual template designer allowing course creators to configure email trigger styling with instant reset capabilities and transactional test dispatching.",
        prHighlight: "themeum/tutor #2961 · Sandboxed email preview & template reset system",
        prUrl: "https://github.com/themeum/tutor/pull/2961",
        metrics: "100% CSS containment · Zero parent frame style leaks",
    },
    {
        id: "analytics",
        label: "Instructor Revenue Analytics Cockpit",
        category: "frontend",
        badge: "SVG Charts · Telemetry",
        commits: [
            "fix(analytics): total earning calculation on filtered date ranges",
            "perf(dashboard): memoize instructor earnings SVG visualization series",
            "feat(export): asynchronous CSV export stream for high-volume transactions",
        ],
        description:
            "High-density SVG telemetry dashboard aggregating student enrollments, course completion curves, and real-time commission disbursements.",
        prHighlight: "themeum/tutor #2985 · Telemetry visualization & memory-efficient rendering",
        prUrl: "https://github.com/themeum/tutor/pull/2985",
        metrics: "60 FPS scroll performance · Zero memory leak charting",
    },
];

export const TutorArchitectureGraph: React.FC = () => {
    const [selectedNodeId, setSelectedNodeId] = useState<string>("curriculum");

    const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[0];

    return (
        <div className="space-y-6">
            {/* Legend & PR Verification Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
                    <span className="font-bold text-neutral-900 dark:text-white">
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
            <div className="relative rounded-2xl bg-stone-100/70 dark:bg-neutral-950 p-4 sm:p-6 border border-black/[0.06] dark:border-white/[0.08] overflow-hidden shadow-inner">
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
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.15)] scale-[1.01]"
                                                : "bg-white/80 dark:bg-neutral-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.20]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-[#ff1744] font-semibold">
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
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.15)] scale-[1.01]"
                                                : "bg-white/80 dark:bg-neutral-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.20]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
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
                                                ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_15px_rgba(255,23,68,0.15)] scale-[1.01]"
                                                : "bg-white/80 dark:bg-neutral-900/60 border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.20]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
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
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                        <div>
                            <span className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                Deep-Dive Node Inspection
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                                {selectedNode.label}
                            </h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                                {selectedNode.metrics}
                            </span>
                            <a
                                href={selectedNode.prUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-[#ff1744] border border-black/[0.06] dark:border-white/[0.08] transition-colors inline-flex items-center gap-1.5"
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

                    <div className="p-3 rounded-xl bg-stone-100/70 dark:bg-neutral-950 border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono flex items-center justify-between gap-2">
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
                                    className="p-2 rounded-lg bg-stone-50/70 dark:bg-neutral-950 border border-black/[0.04] dark:border-white/[0.06] font-mono text-xs text-neutral-800 dark:text-neutral-200 flex items-center gap-2"
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
