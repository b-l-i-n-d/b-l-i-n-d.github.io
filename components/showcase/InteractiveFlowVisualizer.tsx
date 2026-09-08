"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Play,
    Pause,
    ChevronRight,
    ChevronLeft,
    RotateCcw,
    Copy,
    Check,
    ZoomIn,
    ZoomOut,
    Maximize2,
    Cpu,
    Database,
    ShieldCheck,
    Layers,
    Activity,
    Network,
    FileCode,
    Workflow,
    GitBranch,
} from "lucide-react";
import { useTheme } from "next-themes";

interface InteractiveFlowVisualizerProps {
    projectId: string;
}

interface FlowStep {
    number: number;
    title: string;
    subsystem: string;
    tech: string;
    latency: string;
    description: string;
    guard: string;
    payload: Record<string, any>;
}

const TUTOR_STEPS: FlowStep[] = [
    {
        number: 1,
        title: "Registry Mount & 3rd-Party Field Injection",
        subsystem: "Tutor Core Registry Engine",
        tech: "React 19 · TypeScript 7 · Rsbuild",
        latency: "< 1.5ms initialization",
        description:
            "Tutor Core Component Registry initializes. Executes external plugin hooks (`apply_filters('tutor_builder_fields')`), compositing 3rd-party custom question types, math renderers, and billing meta into the builder tree with strict schema contracts.",
        guard: "Strict Type Schema & Null-Safe Injection",
        payload: {
            event: "REGISTRY_MOUNT",
            activeDeployments: "120,000+",
            registeredAddons: ["certificate-pro", "quiz-latex-engine", "gradebook-sync"],
            injectionStatus: "COMPOSITED_SUCCESS",
        },
    },
    {
        number: 2,
        title: "Atomic Form Mutation & Zero-CLS FLIP Layout",
        subsystem: "In-House Form & Layout Engine",
        tech: "Custom Reactive State · FLIP Matrix",
        latency: "< 4.0ms layout compositor",
        description:
            "Instructor edits curriculum or reorders quiz questions via drag-and-drop. In-house form library notifies atomic field subscribers in O(1) time. The FLIP layout calculator pre-computes geometry differences to guarantee zero Cumulative Layout Shift (0.00 CLS).",
        guard: "Zero-CLS Inverted Transform Lock",
        payload: {
            action: "REORDER_TOPIC_LESSONS",
            topicId: "topic_react_arch",
            sourceIndex: 1,
            targetIndex: 0,
            clsCalculated: 0.0,
            frameRenderTime: "3.2ms",
        },
    },
    {
        number: 3,
        title: "Client-Side LRU Query Caching & Optimistic Commit",
        subsystem: "Client Cache & Memory Store",
        tech: "Tag-based LRU Cache · IndexedDB Fallback",
        latency: "< 0.8ms in-memory commit",
        description:
            "State is immediately committed to client LRU cache under tags `['course:curriculum', 'quiz:builder']`. UI renders updated state with zero perceived latency. An immutable memory snapshot is queued for instant rollback if downstream network trips fail.",
        guard: "Auto-Rollback Memory Snapshot Guard",
        payload: {
            cacheTags: ["course:curriculum:v4", "user:instructor_102"],
            optimisticState: "COMMITTED_LOCALLY",
            rollbackSnapshotId: "snap_948f21e",
            indexedDbBuffered: true,
        },
    },
    {
        number: 4,
        title: "REST API Gateway Verification & LaTeX Sanitization",
        subsystem: "Cryptographic REST Gateway",
        tech: "WordPress REST API · Nonce Security",
        latency: "14ms network batch transit",
        description:
            "Debounced batch payload dispatched to `/wp-json/tutor/v1/curriculum/sync`. Verifies dynamic `_wpnonce` cryptographic tokens, scrubs XSS injection vectors, and safely sanitizes LaTeX math symbols and markdown content.",
        guard: "Nonce Cryptographic Token & LaTeX Sanitizer",
        payload: {
            endpoint: "/wp-json/tutor/v1/curriculum/sync",
            method: "POST",
            nonce: "a84f93c02d",
            sanitizedFields: ["quiz_question_latex", "lesson_title"],
            serverTrip: "HTTP/2 Encrypted",
        },
    },
    {
        number: 5,
        title: "WordPress PHP Core & MySQL Transaction Commit",
        subsystem: "Tutor PHP Core Backend",
        tech: "PHP 8.x (namespace TUTOR) · MySQL ($wpdb)",
        latency: "18ms atomic DB transaction",
        description:
            "Tutor LMS backend (`namespace TUTOR;`) accepts verified payload. Executes `$wpdb->prepare()` with atomic transactions across custom tables (`tutor_quiz_questions`, `tutor_earnings`). Emits WordPress action hooks and returns 200 ACK with updated timestamp.",
        guard: "ACID Database Transaction & Reconcile ACK",
        payload: {
            phpNamespace: "TUTOR\\Backend\\Controllers",
            dbTablesUpdated: ["wp_tutor_curriculum", "wp_tutor_quiz_questions"],
            transactionStatus: "COMMITTED",
            httpResponse: 200,
            reconcileTimestamp: "2026-09-08T03:59:12Z",
        },
    },
];

const EASYSTORE_STEPS: FlowStep[] = [
    {
        number: 1,
        title: "Attribute Graph Traversal",
        subsystem: "DAG Catalog Navigator",
        tech: "React 19 · Directed Acyclic Graph",
        latency: "< 1.0ms memory lookup",
        description:
            "User interacts with product configurator (Color, Size, Material). The system traverses the attribute DAG to determine combinatorial compatibility without re-querying backend.",
        guard: "O(1) Bitmask Graph Validation",
        payload: {
            attributesSelected: { color: "Obsidian", size: "XL", finish: "Matte" },
            dagDepth: 3,
            evaluatedCombinations: 48,
        },
    },
    {
        number: 2,
        title: "Matrix Constraint Solver",
        subsystem: "Combinatorial SKU Solver",
        tech: "Bitwise Masking · WASM Optimizer",
        latency: "< 2.5ms constraint solving",
        description:
            "Instantly prunes out-of-stock combinations, computes dynamic quantity limits, and recalculates real-time price tiers before layout paint.",
        guard: "Inventory Stock Guard",
        payload: {
            targetSku: "ES-OBS-XL-09",
            stockAvailability: 14,
            unitPrice: "$189.00",
            status: "IN_STOCK",
        },
    },
    {
        number: 3,
        title: "Optimistic Cart & Local Storage Mirror",
        subsystem: "Cart State Engine",
        tech: "Fine-Grained Reactive Store",
        latency: "< 0.5ms local commit",
        description:
            "Cart count micro-badge updates immediately with spring animation. Local mirror persists cart state for offline resilience.",
        guard: "Idempotent Mutation Lock",
        payload: {
            cartItemsCount: 3,
            cartSubtotal: "$567.00",
            optimisticAck: true,
        },
    },
    {
        number: 4,
        title: "Single-Page Checkout Pipeline",
        subsystem: "Checkout Mutation Gateway",
        tech: "Stripe Webhooks · REST Gateway",
        latency: "22ms secure checkout pipeline",
        description:
            "Dispatches background cart synchronization, verifies merchant stock locks, and initializes secure payment intent with sub-100ms total transaction loop.",
        guard: "Cryptographic Order Token & Nonce",
        payload: {
            checkoutSessionId: "cs_live_948f302",
            paymentProcessor: "Stripe_Intent",
            pipelineStatus: "CHECKOUT_READY",
        },
    },
];

const TUTOR_MERMAID_ARCH = `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef gateway fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;
    classDef backend fill:#241818,stroke:#f59e0b,stroke-width:1.5px,color:#fff;

    subgraph Client_120K["120,000+ Active Client Deployments (React 19 + TypeScript 7)"]
        CB["Course & Quiz Builder Tree\\n(0.00 CLS / FLIP Compositor)"]:::client
        CR["Tutor Core Component Registry\\n(Modular Decoupling & Lifecycle)"]:::client
        AF["3rd-Party Addon Field Injection\\n(apply_filters Hook Pipeline)"]:::client
    end

    subgraph Reactive_Core["In-House Reactive Form & Query Engine"]
        QE["Atomic Form & Mutation Engine\\n(Zero-Dependency Fine-Grained Store)"]:::engine
        LC["Client-Side LRU Query Cache\\n(Tag Invalidation + Memory Snapshot)"]:::engine
        IDB[("IndexedDB Fallback Storage\\n(Offline Resilience Buffer)")]:::engine
    end

    subgraph Rest_Barrier["REST API Gateway & Security Barrier"]
        GW["REST API Gateway\\n(/wp-json/tutor/v1/curriculum)"]:::gateway
        NC["Cryptographic Nonce Validator\\n(wp_verify_nonce CSRF Shield)"]:::gateway
        SN["LaTeX & HTML Content Sanitizer\\n(XSS & Pointer-Event Defense)"]:::gateway
    end

    subgraph WP_Backend["WordPress PHP Core & Persistent Storage"]
        PC["Tutor PHP Core Controllers\\n(namespace TUTOR; PHP 8.x)"]:::backend
        DB[("MySQL Database Tables\\n($wpdb Prepared Transactions)")]:::backend
    end

    CB <--> CR
    CR <--> AF
    CB --> QE
    QE <--> LC
    LC -.-> IDB
    QE --> GW
    GW --> NC
    NC --> SN
    SN --> PC
    PC <--> DB`;

const TUTOR_MERMAID_SEQ = `sequenceDiagram
    autonumber
    actor Instructor as Instructor / Student
    participant Builder as Course & Quiz Builder (React 19 / TS 7)
    participant Registry as Tutor Core Component Registry
    participant Addons as 3rd-Party Addons & Plugins
    participant Reactive as In-House Form & Query Engine
    participant Cache as Client LRU Cache & IndexedDB
    participant Gateway as WP REST Gateway (_wpnonce)
    participant PHP as Tutor PHP Core (namespace TUTOR)
    participant DB as MySQL Database ($wpdb)

    Note over Instructor,Registry: 120,000+ Active Deployments Worldwide
    Instructor->>Builder: Mount Course / Quiz Builder View
    Builder->>Registry: Request Registered Field Schemas
    Registry->>Addons: Execute Injection Hooks (apply_filters)
    Addons-->>Registry: Inject Custom Question Types & Math Meta
    Registry-->>Builder: Composite Typed Component Tree

    Instructor->>Builder: Reorder Topics (Drag-and-Drop) / Edit Quiz
    Builder->>Reactive: Dispatch Atomic Mutation Event
    Note over Reactive,Cache: Sub-16ms FLIP Calculation (0.00 CLS)
    Reactive->>Cache: Commit Optimistic UI State (Tag: course:curriculum)
    Cache-->>Builder: Update DOM Instantly (0ms perceived latency)

    Reactive->>Gateway: Debounced Batch Payload (POST /wp-json/tutor/v1)
    Gateway->>Gateway: Verify WP Nonce & Sanitize LaTeX Content
    Gateway->>PHP: Route to TUTOR Controller (PHP 8.x)
    PHP->>DB: $wpdb->prepare() & Atomic SQL Transaction
    alt Transaction Succeeded
        DB-->>PHP: Commit ACK
        PHP-->>Gateway: HTTP 200 { success: true, updated_at }
        Gateway-->>Reactive: Reconcile State & Clear Rollback Snapshot
    else Connection Drop / Database Conflict
        DB--xPHP: Lock Timeout / Error
        PHP-->>Gateway: HTTP 500 / Network Error
        Gateway-->>Reactive: Trigger Automatic Rollback
        Reactive->>Cache: Restore Memory Snapshot & Buffer into IndexedDB
        Cache-->>Builder: Revert DOM State with Emil-Polish Alert
    end`;

const EASYSTORE_MERMAID_ARCH = `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef gateway fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;
    classDef backend fill:#241818,stroke:#f59e0b,stroke-width:1.5px,color:#fff;

    subgraph Store_Frontend["EasyStore Headless Presentation Layer"]
        UI["Product Configurator & Variant Matrix\\n(Sub-16ms Reactive State)"]:::client
        DAG["Attribute Directed Acyclic Graph\\n(O(1) In-Memory Adjacency)"]:::client
    end

    subgraph Solver_Engine["Combinatorial Constraint Solver"]
        MS["Bitmask Variant Matrix Solver\\n(Instant Stock Availability Pruning)"]:::engine
        PR["Dynamic Pricing & Tier Calculator\\n(Zero Network Roundtrips)"]:::engine
    end

    subgraph Cart_Storage["Cart Synchronization & Local Cache"]
        OC["Optimistic Cart State Manager\\n(Idempotent Mutation Pipeline)"]:::gateway
        LS[("Local Storage Persistent Mirror\\n(Offline Basket Guard)")]:::gateway
    end

    subgraph Checkout_Core["Single-Page Instant Checkout"]
        CO["Headless Checkout REST Gateway\\n(Stripe Webhooks & Nonce)"]:::backend
        DB[("Order Management & Inventory DB")]:::backend
    end

    UI <--> DAG
    DAG <--> MS
    MS --> PR
    PR --> UI
    UI --> OC
    OC <--> LS
    OC --> CO
    CO <--> DB`;

const EASYSTORE_MERMAID_SEQ = `sequenceDiagram
    autonumber
    actor Shopper as Customer
    participant UI as Product Configurator (React)
    participant Graph as Attribute Directed Acyclic Graph (DAG)
    participant Solver as Variant Matrix Constraint Solver
    participant Cart as Optimistic Cart & Cache Layer
    participant Checkout as Headless Checkout REST Gateway

    Shopper->>UI: Select Attribute (e.g. Color: Obsidian, Size: XL)
    UI->>Graph: Query Adjacency Matrix
    Graph->>Solver: Evaluate Combinatorial Constraints (O(1) bitmask)
    Solver-->>UI: Prune Out-of-Stock Variants & Calculate Dynamic Price
    Shopper->>UI: Click "Instant Add to Cart"
    UI->>Cart: Commit Optimistic Cart State & Animate Micro-Badge
    Cart->>Checkout: Dispatch Idempotent Background Mutation
    Checkout-->>Cart: Session Reconciled & Token Verified`;

export const InteractiveFlowVisualizer: React.FC<InteractiveFlowVisualizerProps> = ({ projectId }) => {
    const isTutor = projectId === "tutor-lms";
    const steps = isTutor ? TUTOR_STEPS : EASYSTORE_STEPS;
    const archDiagram = isTutor ? TUTOR_MERMAID_ARCH : EASYSTORE_MERMAID_ARCH;
    const seqDiagram = isTutor ? TUTOR_MERMAID_SEQ : EASYSTORE_MERMAID_SEQ;

    const [activeTab, setActiveTab] = useState<"simulator" | "architecture" | "sequence" | "code">("simulator");
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);
    const [zoom, setZoom] = useState<number>(1);
    const [renderedSvg, setRenderedSvg] = useState<string>("");
    const [renderError, setRenderError] = useState<string | null>(null);

    const { theme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark" || theme === "dark";
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const currentStep = steps[currentStepIndex];

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
                if (isMounted) {
                    setRenderedSvg(svg);
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

    const copyCode = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-6">
            {/* Navigation & Mode Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08]">
                {/* Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-neutral-950 border border-black/[0.04] dark:border-white/[0.06] text-xs">
                    <button
                        onClick={() => setActiveTab("simulator")}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "simulator"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <Workflow className="w-3.5 h-3.5" />
                        <span>Interactive Flow Simulator</span>
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("architecture");
                            setZoom(1);
                        }}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "architecture"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Mermaid Architecture</span>
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("sequence");
                            setZoom(1);
                        }}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "sequence"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Mermaid Sequence</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "code"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <FileCode className="w-3.5 h-3.5" />
                        <span>Raw Mermaid Syntax</span>
                    </button>
                </div>

                {/* Sub-Actions */}
                <div className="flex items-center gap-2 text-xs">
                    {activeTab === "simulator" && (
                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${
                                    isPlaying
                                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
                                        : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-black/[0.06] dark:border-white/[0.08] hover:border-[#ff1744]"
                                }`}
                            >
                                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#ff1744]" />}
                                <span>{isPlaying ? "Pause Simulation" : "Auto-Run Flow"}</span>
                            </button>
                            <button
                                onClick={() => {
                                    setIsPlaying(false);
                                    setCurrentStepIndex(0);
                                }}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-[#ff1744] transition-colors"
                                title="Reset Simulation"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    )}

                    {(activeTab === "architecture" || activeTab === "sequence") && (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setZoom((z) => Math.max(0.6, z - 0.15))}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-neutral-900 dark:hover:text-white"
                                title="Zoom Out"
                            >
                                <ZoomOut className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-[11px] font-mono px-2 text-neutral-500">
                                {Math.round(zoom * 100)}%
                            </span>
                            <button
                                onClick={() => setZoom((z) => Math.min(1.8, z + 0.15))}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-neutral-900 dark:hover:text-white"
                                title="Zoom In"
                            >
                                <ZoomIn className="w-3.5 h-3.5" />
                            </button>
                            <button
                                onClick={() => setZoom(1)}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-neutral-900 dark:hover:text-white"
                                title="Reset Zoom"
                            >
                                <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    )}

                    <button
                        onClick={() => copyCode(currentDiagram)}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] hover:border-[#ff1744] transition-colors flex items-center gap-1.5 font-mono"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span className="text-emerald-500">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Mermaid</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

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
                                    className={`relative p-3.5 rounded-xl text-left border transition-all ${
                                        isCurrent
                                            ? "bg-white dark:bg-neutral-900 border-[#ff1744] shadow-[0_0_16px_rgba(255,23,68,0.2)] scale-[1.02]"
                                            : isPassed
                                            ? "bg-stone-100/80 dark:bg-neutral-900/50 border-emerald-500/30 text-neutral-700 dark:text-neutral-300"
                                            : "bg-white/60 dark:bg-neutral-900/30 border-black/[0.06] dark:border-white/[0.06] opacity-75 hover:opacity-100"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                                isCurrent
                                                    ? "bg-[#ff1744] text-white shadow-[0_0_8px_rgba(255,23,68,0.8)]"
                                                    : isPassed
                                                    ? "bg-emerald-500 text-white"
                                                    : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                            }`}
                                        >
                                            {idx + 1}
                                        </span>
                                        {isCurrent && (
                                            <span className="w-2 h-2 rounded-full bg-[#ff1744] animate-ping" />
                                        )}
                                    </div>
                                    <div className="font-bold text-xs text-neutral-900 dark:text-neutral-100 mt-2.5 line-clamp-1">
                                        {step.title}
                                    </div>
                                    <div className="text-[10px] font-mono text-neutral-500 mt-1 line-clamp-1">
                                        {step.subsystem}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Step Deep-Dive Inspector Box */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.number}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-black/[0.08] dark:border-white/[0.10] shadow-craft-elevated space-y-6"
                        >
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ff1744]/10 text-[#ff1744]">
                                            PIPELINE STAGE 0{currentStep.number}
                                        </span>
                                        <span className="text-xs font-mono text-neutral-500">
                                            {currentStep.subsystem}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                        {currentStep.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                                        <Activity className="w-3.5 h-3.5" />
                                        <span>{currentStep.latency}</span>
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => {
                                                setIsPlaying(false);
                                                setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                                            }}
                                            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:text-[#ff1744] transition-colors"
                                            title="Previous Step"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsPlaying(false);
                                                setCurrentStepIndex((prev) => (prev + 1) % steps.length);
                                            }}
                                            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:text-[#ff1744] transition-colors"
                                            title="Next Step"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Two-Column Grid: Architecture Logic & Real-Time Payload */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                {/* Left Column: Logic Breakdown */}
                                <div className="lg:col-span-7 space-y-4">
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        {currentStep.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                                            <div className="text-[10px] font-mono text-neutral-500 uppercase">
                                                Active Technology
                                            </div>
                                            <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                                {currentStep.tech}
                                            </div>
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-neutral-900/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                                            <div className="text-[10px] font-mono text-neutral-500 uppercase">
                                                Safety & Invariant Guard
                                            </div>
                                            <div className="text-xs font-semibold text-[#ff1744]">
                                                {currentStep.guard}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Real-Time Telemetry & Payload Inspector */}
                                <div className="lg:col-span-5 space-y-2">
                                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                                        <span>Simulated State Payload:</span>
                                        <span className="text-emerald-500 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            Active Dispatch
                                        </span>
                                    </div>
                                    <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                                        <code>{JSON.stringify(currentStep.payload, null, 2)}</code>
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            {/* TAB 2 & 3: RENDERED MERMAID DIAGRAM (SVG) */}
            {(activeTab === "architecture" || activeTab === "sequence") && (
                <div className="relative rounded-2xl bg-white dark:bg-neutral-950 border border-black/[0.08] dark:border-white/[0.10] p-6 overflow-hidden shadow-craft-elevated min-h-[420px] flex items-center justify-center">
                    {renderError ? (
                        <div className="text-center p-8 space-y-3">
                            <div className="text-rose-500 font-semibold text-sm">
                                Mermaid Diagram Rendering Notice
                            </div>
                            <p className="text-xs text-neutral-500 max-w-md mx-auto font-mono">
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
                                transform: `scale(${zoom})`,
                                transformOrigin: "center center",
                                transition: "transform 0.15s ease-out",
                            }}
                            className="w-full flex justify-center items-center overflow-x-auto py-4"
                            dangerouslySetInnerHTML={{ __html: renderedSvg }}
                        />
                    ) : (
                        <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
                            <span className="w-3 h-3 rounded-full border-2 border-[#ff1744] border-t-transparent animate-spin" />
                            <span>Compiling Mermaid Vector SVG...</span>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 4: RAW MERMAID SYNTAX */}
            {activeTab === "code" && (
                <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-neutral-950 font-mono text-xs shadow-craft-elevated">
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-2 text-xs text-neutral-300 font-mono">
                                {isTutor ? "tutor-lms-architecture.mmd" : "easystore-architecture.mmd"}
                            </span>
                        </div>
                        <button
                            onClick={() => copyCode(currentDiagram)}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">Copied</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy MMD</span>
                                </>
                            )}
                        </button>
                    </div>
                    <pre className="p-6 overflow-x-auto text-neutral-200 leading-relaxed text-xs">
                        <code>{currentDiagram}</code>
                    </pre>
                </div>
            )}
        </div>
    );
};
