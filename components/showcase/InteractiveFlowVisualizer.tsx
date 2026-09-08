"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface InteractiveFlowVisualizerProps {
    projectId?: string;
}

interface PipelineStep {
    id: string;
    number: string;
    title: string;
    description: string;
    tech: string;
    codeSnippet: string;
    systemMetrics: {
        latency: string;
        ops: string;
        status: "healthy" | "processing" | "ready";
    };
    logs: string[];
}

const MIN_ZOOM = 0.25; // 25% min zoom (bird's-eye view)
const MAX_ZOOM = 8.0;  // 800% max zoom (deep sequence diagram inspection)

const TUTOR_LMS_STEPS: PipelineStep[] = [
    {
        id: "mount",
        number: "01",
        title: "Micro-Front Mount & Registry",
        description:
            "Course Builder boots inside WordPress dashboard. React micro-front mounts to targeted host DOM node with zero conflict with legacy jQuery/TinyMCE scripts.",
        tech: "React 18 · Dynamic Import · Custom Event Bus",
        codeSnippet: `// Isolated micro-frontend bootstrap
const mountPoint = document.getElementById("tutor-course-builder-root");
if (mountPoint && !window.__TUTOR_BUILDER_INITIALIZED__) {
  window.__TUTOR_BUILDER_INITIALIZED__ = true;
  const root = createRoot(mountPoint);
  root.render(
    <StrictMode>
      <TutorStoreProvider initialCourseId={mountPoint.dataset.courseId}>
        <CurriculumBuilderApp telemetry={window.TutorTelemetry} />
      </TutorStoreProvider>
    </StrictMode>
  );
}`,
        systemMetrics: {
            latency: "4.2ms",
            ops: "1.2k req/s",
            status: "ready",
        },
        logs: [
            "Mounted React micro-front #tutor-course-builder-root",
            "Loaded 14 custom question plugin extensions from Registry",
            "IndexedDB local curriculum cache hot (1.8MB state validated)",
        ],
    },
    {
        id: "drag-flip",
        number: "02",
        title: "60 FPS Drag & FLIP Engine",
        description:
            "Instructor drags lessons across multi-topic chapters. Custom RAF FLIP calculation interpolates physical transforms without triggering browser layout thrashing.",
        tech: "FLIP Animation · requestAnimationFrame · Transform Matrix",
        codeSnippet: `// 60 FPS FLIP drag reordering engine
function onLessonDragDrop(draggedId: string, targetTopicId: string, newIndex: number) {
  const firstRects = captureNodeRects(topicTree);
  // Atomic Reducer State Reordering
  dispatch({ type: 'MOVE_LESSON', payload: { draggedId, targetTopicId, newIndex } });
  requestAnimationFrame(() => {
    const lastRects = captureNodeRects(topicTree);
    applyInvertedTransforms(firstRects, lastRects, {
      duration: 220,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    });
  });
}`,
        systemMetrics: {
            latency: "0.8ms",
            ops: "60 FPS Locked",
            status: "healthy",
        },
        logs: [
            "Lesson #204 picked up from Topic #12 ('PHP Concurrency')",
            "Hovering over Topic #14 ('Event Driven Architecture')",
            "FLIP invert vector: dx: 0px, dy: -84px, scaleY: 1.0 (Zero CLS)",
        ],
    },
    {
        id: "optimistic",
        number: "03",
        title: "Optimistic State & Undo History",
        description:
            "Local state updates instantly with 0ms perceived latency. Action is pushed to time-travel undo stack while mutation is enqueued for debounced background sync.",
        tech: "Immer.js · Redux Toolkit · Snapshot Buffer",
        codeSnippet: `// Optimistic state change with automatic rollback snapshot
function executeOptimisticMutation(state: CourseState, action: CurriculumAction) {
  const rollbackSnapshot = cloneDeep(state.curriculum);
  historyStack.push({ type: action.type, snapshot: rollbackSnapshot });
  try {
    applyMutation(state.curriculum, action);
    syncQueue.enqueue({ action, timestamp: Date.now(), retryCount: 0 });
  } catch (err) {
    state.curriculum = rollbackSnapshot;
    Sonner.error("State mutation failed; rolled back to previous checkpoint");
  }
}`,
        systemMetrics: {
            latency: "0.2ms",
            ops: "3.4k ops/s",
            status: "healthy",
        },
        logs: [
            "Optimistic state applied: Topic #14 now contains 6 lessons",
            "History checkpoint created (Undo Stack: 8 actions deep)",
            "SyncQueue: payload staged, waiting 400ms debounce interval",
        ],
    },
    {
        id: "rest-sync",
        number: "04",
        title: "Debounced REST Batch Pipeline",
        description:
            "Network payload is batched and compressed to prevent API spam. Authenticated via WordPress nonce with SHA-256 idempotency header.",
        tech: "WordPress REST API · Fetch KeepAlive · Idempotency Key",
        codeSnippet: `// Debounced batch synchronization to WordPress core
const debouncedSync = debounce(async (batchPayload: SyncPayload) => {
  const response = await fetch('/wp-json/tutor/v1/course-builder/batch-sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': window.tutorBuilderConfig.nonce,
      'X-Idempotency-Key': generatePayloadHash(batchPayload)
    },
    body: JSON.stringify(batchPayload)
  });
  if (!response.ok) throw new Error("Batch sync rejected by WP REST API");
  return response.json();
}, 400);`,
        systemMetrics: {
            latency: "18.4ms",
            ops: "54 req/s",
            status: "processing",
        },
        logs: [
            "Debounce resolved: sending payload of 3 mutated topics",
            "POST /wp-json/tutor/v1/course-builder/batch-sync (HTTP 200 OK)",
            "Idempotency verified: 8f2c9e... (Duplicate request rejected)",
        ],
    },
    {
        id: "sql-commit",
        number: "05",
        title: "Atomic PHP/SQL DB Transaction",
        description:
            "Tutor LMS backend initiates SQL transaction, verifies user capabilities, updates nested topics/lessons order indexes, and flushes persistent object caches.",
        tech: "PHP 8.2 · $wpdb Transaction · Redis Object Cache",
        codeSnippet: `// PHP backend atomic write with cache invalidation
function tutor_atomic_reorder_curriculum(WP_REST_Request $request) {
    global $wpdb;
    $wpdb->query('START TRANSACTION');
    try {
        foreach ($request->get_param('topics') as $topic) {
            $wpdb->update($wpdb->posts, ['menu_order' => $topic['order']], ['ID' => $topic['id']]);
            tutor_sync_lesson_order_recursive($topic['lessons']);
        }
        $wpdb->query('COMMIT');
        wp_cache_delete('tutor_course_curriculum_' . $request['course_id'], 'tutor');
        return new WP_REST_Response(['status' => 'synced', 'ts' => microtime(true)], 200);
    } catch (Exception $e) {
        $wpdb->query('ROLLBACK');
        return new WP_Error('tutor_db_sync_failed', $e->getMessage(), ['status' => 500]);
    }
}`,
        systemMetrics: {
            latency: "12.8ms",
            ops: "980 tx/s",
            status: "healthy",
        },
        logs: [
            "SQL START TRANSACTION across 34 post rows",
            "Updated menu_order indexes for 6 lessons in Topic #14",
            "Redis wp_cache_delete executed; SQL COMMIT ACK received",
        ],
    },
];

const TUTOR_MERMAID_ARCH = `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef gateway fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;
    classDef backend fill:#241818,stroke:#f59e0b,stroke-width:1.5px,color:#fff;

    subgraph Client["React Client Application (Course Builder)"]
        UI["Builder DOM UI"]:::client
        Reg["Plugin Registry & Hooks"]:::client
        FLIP["60 FPS FLIP Drag Engine"]:::engine
        Store["Atomic Redux/Immer Store"]:::client
        Cache["IndexedDB Local Cache"]:::client
    end

    subgraph Transport["Network & Middleware Layer"]
        Queue["Debounced Action Queue (400ms)"]:::gateway
        Idemp["Idempotency SHA-256 Hashing"]:::gateway
        Fetcher["Fetch API KeepAlive Client"]:::gateway
    end

    subgraph Server["WordPress Core & Tutor LMS Backend"]
        WPN["WP REST API Gateway & Nonce"]:::backend
        Sanitizer["LaTeX & Content Sanitizer"]:::backend
        PHP["Tutor PHP 8.x Controller"]:::backend
        DB[("MySQL Database ($wpdb)")]:::backend
        Hooks["apply_filters Action Hooks"]:::backend
    end

    UI --> FLIP
    FLIP --> Store
    Store --> Cache
    Store --> Queue
    Reg --> UI
    Queue --> Idemp
    Idemp --> Fetcher
    Fetcher --> WPN
    WPN --> Sanitizer
    Sanitizer --> PHP
    PHP --> DB
    PHP --> Hooks`;

const TUTOR_MERMAID_SEQ = `sequenceDiagram
    autonumber
    actor Instructor as Course Creator / Admin
    participant Builder as Tutor Builder React UI
    participant Registry as Component Registry
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

    subgraph Client["React / Next.js Admin & POS Interface"]
        POS["Cashier POS & Cart Engine"]:::client
        Scan["Hardware Barcode Scanner"]:::client
        State["Optimistic IndexedDB Store"]:::client
    end

    subgraph Engine["Offline Engine & Sync Manager"]
        Worker["Web Worker Sync Daemon"]:::engine
        Conflict["CRDT Conflict Resolver"]:::engine
        Crypto["AES-256 Payload Encryption"]:::engine
    end

    subgraph Backend["Multi-Tenant Backend & Microservices"]
        Gate["Kong API Gateway & JWT Auth"]:::gateway
        OrderSvc["Node.js Order Processing Service"]:::backend
        PG[("PostgreSQL Multi-Tenant DB")]:::backend
        Redis[("Redis Distributed Cache")]:::backend
    end

    POS --> State
    Scan --> POS
    State --> Worker
    Worker --> Conflict
    Conflict --> Crypto
    Crypto --> Gate
    Gate --> OrderSvc
    OrderSvc --> Redis
    OrderSvc --> PG`;

const EASYSTORE_MERMAID_SEQ = `sequenceDiagram
    autonumber
    actor Cashier as Store Associate / Cashier
    participant Terminal as POS Terminal UI
    participant Worker as Sync Worker Daemon
    participant Gateway as API Gateway (mTLS)
    participant Engine as Order & Inventory Engine
    participant DB as PostgreSQL Cluster

    Cashier->>Terminal: Scan Item Barcode (USB HID)
    Terminal->>Terminal: Evaluate Tax, Coupons & Local Price Rules
    Terminal->>Worker: Enqueue Transaction with Offline Signature
    Worker->>Gateway: Flush Enqueued Batches (gRPC Streaming)
    Gateway->>Engine: Validate Inventory Lock & Merchant Quota
    Engine->>DB: Atomic Serializable Transaction
    DB-->>Engine: Transaction Committed
    Engine-->>Gateway: Ingestion Acknowledged
    Gateway-->>Worker: Sync Receipt Confirmed
    Worker-->>Terminal: Mark Order Synced & Print Thermal Receipt`;

export const InteractiveFlowVisualizer: React.FC<InteractiveFlowVisualizerProps> = ({ projectId = "tutor-lms" }) => {
    const isTutor = projectId === "tutor-lms";
    const steps = TUTOR_LMS_STEPS;
    const archDiagram = isTutor ? TUTOR_MERMAID_ARCH : EASYSTORE_MERMAID_ARCH;
    const seqDiagram = isTutor ? TUTOR_MERMAID_SEQ : EASYSTORE_MERMAID_SEQ;

    const [activeTab, setActiveTab] = useState<"simulator" | "architecture" | "sequence" | "code">("simulator");
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);

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
        setZoom((prev) => Math.min(Math.max(MIN_ZOOM, Number((prev * zoomFactor).toFixed(2))), MAX_ZOOM));
    };

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
                        <Play className="w-3.5 h-3.5" />
                        <span>Flow Simulator</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("architecture")}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "architecture"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <Network className="w-3.5 h-3.5" />
                        <span>Mermaid Architecture</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("sequence")}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                            activeTab === "sequence"
                                ? "bg-[#ff1744] text-white font-semibold shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                        <GitCommit className="w-3.5 h-3.5" />
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
                        <Code className="w-3.5 h-3.5" />
                        <span>Raw Mermaid Syntax</span>
                    </button>
                </div>

                {/* Right Controls: Play/Pause in Simulator OR Zoom HUD in Canvas */}
                <div className="flex items-center gap-2">
                    {activeTab === "simulator" && (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all ${
                                    isPlaying
                                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                                        : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] hover:text-[#ff1744]"
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
                                onClick={handleZoomOut}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-neutral-900 dark:hover:text-white transition-colors"
                                title="Zoom Out"
                            >
                                <ZoomOut className="w-3.5 h-3.5 shrink-0" />
                            </button>
                            <button
                                onClick={cycleZoomPreset}
                                className="text-xs font-mono px-2 py-1 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] hover:bg-neutral-200/50 dark:hover:bg-neutral-800/80 transition-colors shrink-0"
                                title="Click to cycle zoom presets (100% → 200% → 350% → 500% → 700%)"
                            >
                                {Math.round(zoom * 100)}%
                            </button>
                            <button
                                onClick={handleZoomIn}
                                className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-neutral-900 dark:hover:text-white transition-colors"
                                title="Zoom In (up to 800%)"
                            >
                                <ZoomIn className="w-3.5 h-3.5 shrink-0" />
                            </button>
                            <button
                                onClick={handleResetCanvas}
                                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/[0.06] dark:border-white/[0.08] hover:text-[#ff1744] hover:border-[#ff1744]/40 transition-colors flex items-center gap-1 font-mono text-xs"
                                title="Reset Canvas View"
                            >
                                <RotateCcw className="w-3 h-3 shrink-0" />
                                <span className="hidden sm:inline">Reset View</span>
                            </button>
                        </div>
                    )}

                    <button
                        onClick={() => copyCode(currentDiagram)}
                        className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] hover:border-[#ff1744] transition-colors flex items-center gap-1.5 font-mono text-xs sm:text-sm shrink-0"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span className="text-emerald-500">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5 shrink-0" />
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
                                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                                isCurrent
                                                    ? "bg-[#ff1744] text-white shadow-[0_0_8px_rgba(255,23,68,0.8)]"
                                                    : isPassed
                                                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                                    : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                                            }`}
                                        >
                                            {step.number}
                                        </span>
                                        {isCurrent && (
                                            <span className="flex h-2 w-2 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1744] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1744]"></span>
                                            </span>
                                        )}
                                    </div>
                                    <div className="mt-3">
                                        <span className="text-xs font-semibold block truncate text-neutral-900 dark:text-white">
                                            {step.title}
                                        </span>
                                        <span className="text-[10px] text-neutral-500 font-mono block truncate mt-0.5">
                                            {step.tech}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Step Deep Dive Workbench */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                        >
                            {/* Left Col (8): Narrative, Architecture Diagram, Code Execution */}
                            <div className="lg:col-span-8 space-y-5">
                                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
                                    <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
                                        <div>
                                            <span className="text-xs font-mono text-[#ff1744] font-semibold">
                                                STAGE {currentStep.number} OF 05
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

                                {/* Interactive Code Snippet */}
                                <div className="rounded-2xl bg-[#111116] border border-white/[0.08] overflow-hidden shadow-craft-elevated">
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#17171e] border-b border-white/[0.06] text-xs font-mono text-neutral-400">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                            </div>
                                            <span className="text-neutral-400 ml-2">production-pipeline.ts</span>
                                        </div>
                                        <button
                                            onClick={() => copyCode(currentStep.codeSnippet)}
                                            className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                                        >
                                            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                            <span>{copied ? "Copied" : "Copy"}</span>
                                        </button>
                                    </div>
                                    <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                                        <code>{currentStep.codeSnippet}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* Right Col (4): Live Telemetry, Logs & Performance Matrix */}
                            <div className="lg:col-span-4 space-y-5">
                                {/* Telemetry Card */}
                                <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.08] shadow-sm space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
                                            <Zap className="w-3.5 h-3.5 text-[#ff1744]" />
                                            <span>Telemetry Specs</span>
                                        </div>
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-black/[0.04] dark:border-white/[0.04]">
                                            <span className="text-[10px] uppercase font-mono text-neutral-500 block">
                                                Latency
                                            </span>
                                            <span className="text-base font-bold text-neutral-900 dark:text-white font-mono mt-0.5 block">
                                                {currentStep.systemMetrics.latency}
                                            </span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-black/[0.04] dark:border-white/[0.04]">
                                            <span className="text-[10px] uppercase font-mono text-neutral-500 block">
                                                Throughput
                                            </span>
                                            <span className="text-base font-bold text-neutral-900 dark:text-white font-mono mt-0.5 block">
                                                {currentStep.systemMetrics.ops}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-neutral-500">Node Status:</span>
                                            <span className="font-mono font-semibold text-emerald-500 flex items-center gap-1.5">
                                                <Check className="w-3 h-3" />
                                                Active & Synchronized
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Trace Logs Console */}
                                <div className="p-5 rounded-2xl bg-[#0c0c10] border border-white/[0.08] shadow-sm space-y-3 font-mono">
                                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                                        <Terminal className="w-3.5 h-3.5 text-[#ff1744]" />
                                        <span>Pipeline Audit Stream</span>
                                    </div>
                                    <div className="space-y-2 text-[11px] text-neutral-400">
                                        {currentStep.logs.map((log, idx) => (
                                            <div key={idx} className="flex items-start gap-2 leading-tight">
                                                <span className="text-emerald-400 shrink-0">›</span>
                                                <span className="text-neutral-300">{log}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
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
                    className={`relative select-none rounded-2xl bg-[#fafafa] dark:bg-[#0a0a0c] border border-black/[0.08] dark:border-white/[0.10] overflow-hidden shadow-craft-elevated min-h-[500px] h-[600px] flex items-center justify-center ${
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
                        <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.10] text-[11px] font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 shadow-sm">
                            <Move className="w-3.5 h-3.5 text-[#ff1744]" />
                            <span>Open Canvas • Click &amp; drag anywhere to pan • Scroll to zoom (25% – 800%)</span>
                        </span>
                    </div>

                    {/* Floating HUD Quick Zoom Controls */}
                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.10] p-1.5 rounded-xl shadow-sm">
                        <button
                            onClick={handleResetCanvas}
                            className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] transition-colors"
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
                            className="text-[11px] font-mono px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-300 hover:text-[#ff1744] hover:bg-neutral-200/50 dark:hover:bg-neutral-800/80 transition-colors"
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
                        <div className="hidden sm:flex items-center gap-0.5 pl-1 border-l border-black/[0.08] dark:border-white/[0.10]">
                            {[1.0, 2.5, 5.0, 8.0].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setZoom(level)}
                                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                                        Math.abs(zoom - level) < 0.1
                                            ? "bg-[#ff1744] text-white font-bold"
                                            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
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
                            <span className="w-3 h-3 rounded-full border-2 border-[#ff1744] border-t-transparent animate-spin" />
                            <span>Compiling Mermaid Vector SVG...</span>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 4: RAW MERMAID SYNTAX */}
            {activeTab === "code" && (
                <div className="rounded-2xl bg-[#0e0e12] border border-black/[0.08] dark:border-white/[0.10] overflow-hidden shadow-craft-elevated">
                    <div className="flex items-center justify-between px-5 py-3 bg-[#14141a] border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#ff1744]" />
                            <span className="text-xs font-mono font-medium text-neutral-300">
                                Mermaid-Specification.mmd
                            </span>
                        </div>
                        <button
                            onClick={() => copyCode(currentDiagram)}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
                        >
                            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copied ? "Copied" : "Copy Mermaid Spec"}</span>
                        </button>
                    </div>
                    <pre className="p-5 text-xs font-mono text-emerald-400 dark:text-emerald-300 overflow-x-auto leading-relaxed max-h-[500px]">
                        <code>{currentDiagram}</code>
                    </pre>
                </div>
            )}
        </div>
    );
};
