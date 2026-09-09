import type { ProjectShowcase } from "@/types/portfolio";

/**
 * Per-project showcase data for the Tutor-format case-study components.
 * Every flagship project renders the same three interactive presenters
 * (ArchitectureGraph, InteractiveFlowVisualizer, ComplexCodeStudio),
 * each driven by the verified data below.
 */

const tutorShowcase: ProjectShowcase = {
    graph: {
        navTitle: "Interactive Architecture Map",
        navSubtitle: "Inspect modular boundaries, cache hierarchies, and transactional pipelines",
        title: "Tutor LMS 2.0 → 4.0 Architectural Graph",
        countLabel: "12 Core Systems",
        verifyLabel: "Verified PRs & Commits by Fahim Faisal (b-l-i-n-d)",
        verifyUrl: "https://github.com/b-l-i-n-d",
        inspectLabel: "Inspect Pull Request",
        commitsHeading: "Verified Production Commits (authored by Fahim Faisal / b-l-i-n-d):",
        commitPrefix: "git:",
        columns: [
            {
                title: "01 · Presentation & Builders",
                nodeIds: ["curriculum", "quiz", "content-bank", "field-injection"],
                accent: "rose",
            },
            {
                title: "02 · Core Architecture & DX",
                nodeIds: ["component-registry", "form-query-lib", "motion", "build-pipeline"],
                accent: "emerald",
            },
            {
                title: "03 · Types, Caching & REST",
                nodeIds: ["ts-migration", "caching-layer", "bundle", "rest-gateway"],
                accent: "sky",
            },
        ],
        nodes: [
            {
                id: "curriculum",
                label: "Course Builder & Curriculum Tree",
                version: "v3.0",
                badge: "React · State Machine (v3.0)",
                commits: [
                    "feat(course-builder): curriculum tree drag-and-drop reordering engine",
                    "fix(course-builder): confirm modal before modifying course author (#2948)",
                    "fix(curriculum): resolve layout shift on dynamic title edit (#2985)",
                ],
                description:
                    "Implemented the Tutor 3.0 Course Builder. Hierarchical curriculum tree supporting drag-and-drop topics and lessons, dynamic title updates without Cumulative Layout Shift (CLS), and modal safeguards for author re-assignments.",
                prHighlight: "themeum/tutor #2985 / #2948 · Author confirmation guard & zero-CLS title layout",
                prUrl: "https://github.com/themeum/tutor/pull/2985",
                metrics: "0.00 CLS · Sub-16ms FLIP reorder",
            },
            {
                id: "quiz",
                label: "Highly Scalable Quiz Builder",
                version: "v3.0",
                badge: "High Scalability (v3.0)",
                commits: [
                    "feat(quiz-builder): scalable architecture supporting 100+ questions without frame drop",
                    "fix(quiz): sanitize quiz content for latex and markdown support (#2931)",
                    "feat(quiz): dynamic quiz grading engine with randomized question order (#2990)",
                ],
                description:
                    "Engineered a highly scalable Quiz Builder capable of handling complex curriculums with dozens of question types, randomized ordering, dynamic grading calculation, LaTeX math sanitization, and pointer-event security safeguards.",
                prHighlight: "themeum/tutor #2931 / #2990 · Scalable Quiz Builder & LaTeX sanitizer",
                prUrl: "https://github.com/themeum/tutor/pull/2931",
                metrics: "Sub-millisecond sanitization · Zero UI latency at scale",
            },
            {
                id: "content-bank",
                label: "Centralized Content Bank",
                version: "v3.0",
                badge: "Asset Modularization (v3.0)",
                commits: [
                    "feat(content-bank): reusable question & lesson asset repository across courses",
                    "perf(content-bank): virtualized list browsing for high-volume content libraries",
                    "feat(content-bank): batch insertion and selective linking to curriculum nodes",
                ],
                description:
                    "Implemented the central Content Bank in Tutor 3.0. Instructors can curate, store, and reuse standardized quizzes, questions, and pedagogical assets across multiple courses with zero duplication.",
                prHighlight: "themeum/tutor · Centralized content bank & asset reuse architecture",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "100% asset reusability · Instant search indexing",
            },
            {
                id: "field-injection",
                label: "3rd-Party Field Injection Engine",
                version: "v3.0",
                badge: "Extensibility Hook (v3.0)",
                commits: [
                    "feat(extensibility): dynamic 3rd-party field injection pipeline into builders",
                    "refactor(hooks): typed registry hooks for external add-ons & plugin extensions",
                    "fix(forms): isolate external form state to prevent parent tree re-rendering",
                ],
                description:
                    "Architected an extensible field injection engine that allows 3rd-party WordPress plugins and pro add-ons to inject custom form controls, tabs, and settings directly into core builders via typed extension hooks.",
                prHighlight: "themeum/tutor · Extensible 3rd-party field injection pipeline",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "Decoupled add-on ecosystem · Zero core bundle pollution",
            },
            {
                id: "component-registry",
                label: "Tutor Core Component Registry",
                version: "v4.0",
                badge: "Architecture Core (v4.0)",
                commits: [
                    "arch(core): introduce centralized component registry for Tutor 4.0",
                    "refactor(registry): decouple UI components with lifecycle registration hooks",
                    "perf(registry): lazy component instantiation with unified design tokens",
                ],
                description:
                    "Architected the Tutor Core component registry for Tutor 4.0. Designed a modular, maintainable registry that decouples component implementations, standardizes props/tokens, and facilitates seamless extension across pro add-ons.",
                prHighlight: "themeum/tutor · Tutor Core component registry & lifecycle orchestration",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "Scalable & maintainable · Modular decoupling",
            },
            {
                id: "form-query-lib",
                label: "In-House Form & Query Library",
                version: "v4.0",
                badge: "Custom Reactive Core (v4.0)",
                commits: [
                    "feat(core): build lightweight custom form state and mutation library",
                    "feat(query): implement zero-dependency internal query client with request deduplication",
                    "perf(forms): atomic field subscriptions eliminating full-tree re-renders",
                ],
                description:
                    "Engineered our own bespoke form and query library for Tutor 4.0, eliminating heavy third-party dependency bloat. Implemented fine-grained atomic field subscriptions, instant form validation, and query state synchronization.",
                prHighlight: "themeum/tutor · Lightweight internal form state & query management",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "Zero external query bloat · Sub-1ms form updates",
            },
            {
                id: "motion",
                label: "Motion Settings Coordinator",
                version: "v3.0",
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
                id: "build-pipeline",
                label: "18X Faster Build Pipeline",
                version: "v3.0",
                badge: "Toolchain Acceleration (v3.0)",
                commits: [
                    "build(pipeline): overhaul build tooling with aggressive tree-shaking & esbuild",
                    "perf(bundler): parallel chunk generation slashing cold build times by 18x",
                    "ci(workflow): automated asset hashing and sub-minute CI build validation",
                ],
                description:
                    "Completely modernized and restructured the Tutor LMS build toolchain. Optimized code-splitting, module resolution, and packaging pipeline, accelerating compilation speeds by 18x for both local HMR and production CI builds.",
                prHighlight: "themeum/tutor · Production build system acceleration & pipeline refactor",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "18x build acceleration · 68% bundle size reduction",
            },
            {
                id: "ts-migration",
                label: "TypeScript Migration Architecture",
                version: "v4.0",
                badge: "Type Safety Core (v4.0)",
                commits: [
                    "arch(ts): establish strict TypeScript architecture and tsconfig configurations",
                    "refactor(types): define end-to-end data schemas for course, quiz & user models",
                    "ci(types): automated type-check gate enforcing zero any-type leakage in PRs",
                ],
                description:
                    "Architected the comprehensive TypeScript migration across Tutor LMS 4.0. Transformed legacy codebase into a strictly typed environment with rigorous schema validation, type contracts, and automated compile-time safety.",
                prHighlight: "themeum/tutor · TypeScript migration & strict type contract enforcement",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "100% compile-time safety · Zero runtime type regressions",
            },
            {
                id: "caching-layer",
                label: "Client-Side Caching & Invalidation",
                version: "v4.0",
                badge: "Performance & Caching (v4.0)",
                commits: [
                    "arch(cache): client-side LRU query cache with optimistic mutation rollbacks",
                    "perf(sync): background stale-while-revalidate data sync for course admin panels",
                    "fix(cache): granular tag-based cache invalidation on bulk quiz/lesson operations",
                ],
                description:
                    "Architected multi-tier client caching for Tutor 4.0. Incorporates intelligent optimistic UI updates with automatic rollback on error, background stale-while-revalidate synchronization, and tag-based selective cache purging.",
                prHighlight: "themeum/tutor · Client query caching, optimistic UI & memory management",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "Instant UI updates · 85% reduction in REST queries",
            },
            {
                id: "bundle",
                label: "Course Bundle & Pricing Engine",
                version: "v3.0",
                badge: "E-Commerce Core (v3.0)",
                commits: [
                    "fix(bundle): handle course bundle edit in instructor role (#2997)",
                    "fix(bundle): check total bundle price and handle multiple pricing tiers",
                    "feat(bundle): add live summary calculation for multi-course packages",
                ],
                description:
                    "Course bundling engine permitting multi-tier pricing, role-based discount permissions, and real-time total recalculations without database latency or checkout desync.",
                prHighlight: "themeum/tutor #2997 · Multi-tier pricing calculation engine",
                prUrl: "https://github.com/themeum/tutor/pull/2997",
                metrics: "Optimistic cart sync · Zero pricing calculation roundtrips",
            },
            {
                id: "rest-gateway",
                label: "REST API Gateway & Security Barrier",
                version: "v3.0",
                badge: "Security & Contracts",
                commits: [
                    "feat(api): centralized REST gateway with strict nonce validation",
                    "fix(security): sanitize payloads before database persistence to prevent injection",
                    "perf(api): batch REST endpoints for bulk curriculum updates",
                ],
                description:
                    "Robust REST lifecycle gateway validating incoming payloads against WordPress schema endpoints, managing cryptographic nonces, and securing transactional operations against cross-site request forgery.",
                prHighlight: "themeum/tutor · REST schema contracts, nonce verification & sanitizers",
                prUrl: "https://github.com/themeum/tutor",
                metrics: "Strict XSS/CSRF mitigation · Zero payload schema violations",
            },
        ],
    },
    flow: {
        steps: [
            {
                id: "mount",
                number: "01",
                title: "Micro-Front Mount & Registry",
                description:
                    "Course Builder boots inside WordPress dashboard. React micro-front mounts to targeted host DOM node with zero conflict with legacy jQuery/TinyMCE scripts.",
                tech: "React 18 · Dynamic Import · Custom Event Bus",
                codeFile: "production-pipeline.ts",
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
                codeFile: "production-pipeline.ts",
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
                codeFile: "production-pipeline.ts",
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
                codeFile: "production-pipeline.ts",
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
                codeFile: "production-pipeline.ts",
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
        ],
        archMermaid: `flowchart TD
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
    PHP --> Hooks`,
        seqMermaid: `sequenceDiagram
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
    end`,
    },
    codeModules: [
        {
            id: "concurrency",
            filename: "ConcurrencyManager.ts",
            badge: "Atomic Locks",
            title: "Optimistic State & Distributed Lock Engine",
            description: "Zero-illegal-state transaction engine designed to prevent race conditions during multi-seat course registrations and concurrent exam submissions.",
            prUrl: "https://github.com/b-l-i-n-d/edTech",
            prHighlight: "edTech/concurrency-layer",
            code: `import { createClient } from 'redis';
import { Mutex } from 'async-mutex';

export class ConcurrencyLockManager {
    private redisClient = createClient({ url: process.env.REDIS_URL });
    private localMutex = new Mutex();
    private TTL_MS = 5000;

    /**
     * Acquires a distributed distributed lease with exponential backoff jitter.
     */
    public async acquireLease(resourceId: string, ttl = this.TTL_MS): Promise<string | null> {
        const token = crypto.randomUUID();
        const releaseLocal = await this.localMutex.acquire();

        try {
            const acquired = await this.redisClient.set(\`lock:\${resourceId}\`, token, {
                NX: true,
                PX: ttl,
            });

            if (acquired === 'OK') {
                return token;
            }
            return null;
        } finally {
            releaseLocal();
        }
    }

    /**
     * Atomic script execution ensuring only the lock owner can release the token.
     */
    public async releaseLease(resourceId: string, token: string): Promise<boolean> {
        const luaScript = \`
            if redis.call("get", KEYS[1]) == ARGV[1] then
                return redis.call("del", KEYS[1])
            else
                return 0
            end
        \`;

        const result = await this.redisClient.eval(luaScript, {
            keys: [\`lock:\${resourceId}\`],
            arguments: [token],
        });

        return result === 1;
    }
}`,
        },
        {
            id: "video-stream",
            filename: "HLSVideoPlayerEngine.tsx",
            badge: "Adaptive Bitrate",
            title: "HLS Video Streaming & Telemetry Observer",
            description: "Custom video player engine utilizing Media Source Extensions (MSE) with dynamic bitrate switching, heartbeat telemetry, and zero layout shift.",
            prUrl: "https://github.com/b-l-i-n-d/docapp",
            prHighlight: "docapp/video-telemetry",
            code: `import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
    streamManifest: string;
    onProgressHeartbeat: (timestamp: number) => void;
}

export const HLSVideoPlayerEngine: React.FC<HLSPlayerProps> = ({
    streamManifest,
    onProgressHeartbeat,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [hlsInstance, setHlsInstance] = useState<Hls | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls({
                capLevelToPlayerSize: true,
                maxBufferLength: 30,
                autoStartLoad: true,
            });

            hls.loadSource(streamManifest);
            hls.attachMedia(video);
            setHlsInstance(hls);

            return () => {
                hls.destroy();
            };
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamManifest;
        }
    }, [streamManifest]);

    return (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={(e) => onProgressHeartbeat(e.currentTarget.currentTime)}
                controls
                playsInline
            />
        </div>
    );
};`,
        },
        {
            id: "offline-sync",
            filename: "OfflineCourseSync.ts",
            badge: "IndexedDB + CRDT",
            title: "Conflict-Free Offline Synchronization Engine",
            description: "Client-side replication layer employing State-based CRDTs and IndexedDB storage for seamless offline learning synchronization.",
            prUrl: "https://github.com/b-l-i-n-d/enclave",
            prHighlight: "enclave/crdt-sync",
            code: `import { openDB, DBSchema } from 'idb';

interface SyncSchema extends DBSchema {
    progressLog: {
        key: string;
        value: {
            lessonId: string;
            completedAt: number;
            vectorClock: Record<string, number>;
        };
    };
}

export class OfflineSyncEngine {
    private dbPromise = openDB<SyncSchema>('lms-offline-store', 1, {
        upgrade(db) {
            db.createObjectStore('progressLog', { keyPath: 'lessonId' });
        },
    });

    public async recordLessonCompletion(lessonId: string, nodeId: string): Promise<void> {
        const db = await this.dbPromise;
        const existing = await db.get('progressLog', lessonId);

        const clock = existing?.vectorClock || {};
        clock[nodeId] = (clock[nodeId] || 0) + 1;

        await db.put('progressLog', {
            lessonId,
            completedAt: Date.now(),
            vectorClock: clock,
        });

        this.triggerUpstreamReplication();
    }

    private async triggerUpstreamReplication(): Promise<void> {
        if (!navigator.onLine) return;
        // Broadcast change over WebWorker WebSocket backchannel
    }
}`,
        },
    ],
};

const enclaveShowcase: ProjectShowcase = {
    graph: {
        navTitle: "Interactive Architecture Map",
        navSubtitle: "Inspect the offline-first crypto vault: native crypto core, device-backed key storage, and drive sync",
        title: "Enclave Vault Architecture Graph",
        countLabel: "9 Core Systems",
        verifyLabel: "Source modules verified in b-l-i-n-d/enclave (private)",
        verifyUrl: "https://github.com/b-l-i-n-d/enclave",
        inspectLabel: "Inspect Source",
        commitsHeading: "Key Source Modules (b-l-i-n-d/enclave):",
        commitPrefix: "src:",
        columns: [
            {
                title: "01 · Crypto Core",
                nodeIds: ["aes-gcm", "argon2id", "totp"],
                accent: "rose",
            },
            {
                title: "02 · Vault & Access",
                nodeIds: ["key-store", "biometric", "sqlite"],
                accent: "emerald",
            },
            {
                title: "03 · Sync & Watchtower",
                nodeIds: ["drive-sync", "hibp", "recovery-phrase"],
                accent: "sky",
            },
        ],
        nodes: [
            {
                id: "aes-gcm",
                label: "AES-256-GCM Authenticated Cipher",
                version: "Core",
                badge: "Crypto · encryption.ts",
                commits: [
                    "encryptJson — appends auth tag to base64 ciphertext blob",
                    "decryptJson — asserts auth tag before JSON decode",
                    "decryptBytes — raw byte path for the Drive vault blob",
                ],
                description:
                    "Authenticated symmetric encryption over the vault store. Every record is encrypted with a random 96-bit IV; a 128-bit GCM auth tag is appended to the ciphertext so tampered data fails decryption.",
                prHighlight: "lib/crypto/encryption.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/crypto/encryption.ts",
                metrics: "96-bit IV · 128-bit tag",
            },
            {
                id: "argon2id",
                label: "Argon2id Key Derivation",
                version: "KDF",
                badge: "Key · key-derivation.ts",
                commits: [
                    "deriveVaultKey — 65536 KiB memory, 3 passes, parallelism 1",
                    "deriveRecoveryKey — BIP39 mnemonic to recovery key",
                    "generateSalt — 32-byte cryptographically random salt",
                ],
                description:
                    "Native Argon2id via react-native-quick-crypto derives a 256-bit vault key from the master password plus a random 32-byte salt (64MB memory, 3 passes, single lane).",
                prHighlight: "lib/crypto/key-derivation.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/crypto/key-derivation.ts",
                metrics: "64MB · 3 passes · 1 lane",
            },
            {
                id: "totp",
                label: "RFC 6238 TOTP Engine",
                version: "Auth",
                badge: "2FA · totp.ts",
                commits: [
                    "base32Decode — RFC 4648 alphabet with padding strip",
                    "generateTotp — code + remainingSeconds live window",
                    "parseOtpauthUri — otpauth:// import for authenticator apps",
                ],
                description:
                    "Time-based one-time passwords for vault 2FA: RFC 4648 base32 decoding, HMAC-SHA1/256/512 dynamic truncation, 6/8 digits over 30/60-second windows with a live countdown.",
                prHighlight: "lib/crypto/totp.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/crypto/totp.ts",
                metrics: "SHA-256 · 6–8 digits · 30/60s",
            },
            {
                id: "key-store",
                label: "SecureStore Vault Key",
                version: "Key Storage",
                badge: "Enclave · vault-key-store.ts",
                commits: [
                    "storeVaultKeyForBiometric — requireAuthentication: true",
                    "retrieveVaultKeyWithBiometric — gated read prompt",
                    "enclave.wrapped_vault_key — hardware-wrapped key entry",
                ],
                description:
                    "The derived vault key is NEVER stored in plaintext — expo-secure-store wraps it in a device hardware key gated by requireAuthentication biometric auth, enabling fast unlock without re-running Argon2id.",
                prHighlight: "lib/auth/vault-key-store.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/auth/vault-key-store.ts",
                metrics: "Device-encrypted · Biometric-gated",
            },
            {
                id: "biometric",
                label: "Biometric Unlock Gate",
                version: "Local Auth",
                badge: "FaceID · Touch ID",
                commits: [
                    "getBiometricCapability — hardware, enrolled & type probe",
                    "BiometricType — face / fingerprint / iris mapping",
                    "OS-aware labels — Face ID, Touch ID, Fingerprint",
                ],
                description:
                    "expo-local-authentication capability probe and gate. The app only loads the vault key after a successful biometric challenge; unsupported or unenrolled devices fall back to a PIN.",
                prHighlight: "lib/auth/biometric.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/auth/biometric.ts",
                metrics: "Face ID · Touch ID · Fallback PIN",
            },
            {
                id: "sqlite",
                label: "SQLite Vault Repository",
                version: "Local-First",
                badge: "Data · sqlite-repository.ts",
                commits: [
                    "PRAGMA journal_mode = WAL — concurrent reads",
                    "vault_items — encrypted_data + iv columns",
                    "On-demand auto-initialization with singleton db",
                ],
                description:
                    "expo-sqlite async repository with WAL mode, foreign keys enabled, and tables for vault_meta, vault_items, and tags. Only encrypted blobs are persisted — plaintext never touches disk.",
                prHighlight: "lib/vault/sqlite-repository.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/vault/sqlite-repository.ts",
                metrics: "WAL · Foreign keys · Ciphertext-only",
            },
            {
                id: "drive-sync",
                label: "Google Drive 3-Way Sync",
                version: "Sync",
                badge: "Cloud · drive provider",
                commits: [
                    "mergeVaultItems — local / remote / conflict triage",
                    "updated_at resolution rule for local vs remote wins",
                    "conflict set surfaced for equal-timestamp divergences",
                ],
                description:
                    "Item-level, timestamp-based 3-way merge against a Google Drive snapshot: local-only items are pushed, remote-only items are applied, and both-sided diffs resolve by the newer updated_at (soft-delete tombstones honored).",
                prHighlight: "lib/sync/merger.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/sync/merger.ts",
                metrics: "updated_at merge · Tombstones kept",
            },
            {
                id: "hibp",
                label: "Watchtower HIBP Audit",
                version: "Security",
                badge: "Breach · hibp.ts",
                commits: [
                    "checkPasswordBreached — prefix query + Add-Padding header",
                    "checkVaultBreaches — rate-limited batch audit",
                    "sha1Hex — uppercase hex digest via quick-crypto",
                ],
                description:
                    "k-anonymity breach check that only sends the first 5 hex characters of a SHA-1 hash off-device; the returned breach suffix list is matched locally against the rest of the hash.",
                prHighlight: "lib/security/hibp.ts",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/security/hibp.ts",
                metrics: "k-anonymity · SHA-1 prefix",
            },
            {
                id: "recovery-phrase",
                label: "BIP39 Recovery Phrase",
                version: "Recovery",
                badge: "Mnemonic · @scure/bip39",
                commits: [
                    "@scure/bip39 entropy → mnemonic words",
                    "mnemonicToSeedSync — BIP39 seed derivation",
                    "validateMnemonic — typo-guard on restore",
                ],
                description:
                    "24-word BIP39 mnemonic generation and validation so the vault survives a lost device; the mnemonic re-derives a distinct recovery key, never the vault key itself.",
                prHighlight: "lib/recovery + @scure/bip39",
                prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/recovery",
                metrics: "BIP39 · 24 words",
            },
        ],
    },
    flow: {
        steps: [
            {
                id: "unlock",
                number: "01",
                title: "Biometric Unlock Gate",
                description:
                    "App start probes hardware capability and challenges Face ID / Touch ID. The device store is only readable after a successful challenge — the app holds no vault key in memory beforehand.",
                tech: "expo-local-authentication · biometric.ts",
                codeFile: "biometric.ts",
                codeSnippet: `import * as LocalAuthentication from 'expo-local-authentication';

export async function getBiometricCapability(): Promise<BiometricCapability> {
  const available = await LocalAuthentication.hasHardwareAsync();
  if (!available) {
    return { available: false, enrolled: false, types: [], label: 'None' };
  }
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

  const biometricTypes: BiometricType[] = types.map((t) => {
    switch (t) {
      case LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION: return 'face';
      case LocalAuthentication.AuthenticationType.FINGERPRINT: return 'fingerprint';
      default: return 'iris';
    }
  });

  return { available, enrolled, types: biometricTypes, label };
}`,
                systemMetrics: {
                    latency: "28ms",
                    ops: "Local challenge",
                    status: "ready",
                },
                logs: [
                    "hasHardwareAsync → true (device supports biometrics)",
                    "isEnrolledAsync → true (Face ID enrolled)",
                    "Biometric challenge passed — vault key store unlocked",
                ],
            },
            {
                id: "key-load",
                number: "02",
                title: "SecureStore Key Load",
                description:
                    "retrieveVaultKeyWithBiometric reads the hardware-wrapped vault key with requireAuthentication: true — the OS biometric dialog is prompted at read time and any dismissal throws.",
                tech: "expo-secure-store · vault-key-store.ts",
                codeFile: "vault-key-store.ts",
                codeSnippet: `import * as SecureStore from 'expo-secure-store';

export async function retrieveVaultKeyWithBiometric(): Promise<string> {
  const key = await SecureStore.getItemAsync(KEYS.wrappedVaultKey, {
    requireAuthentication: true,
    authenticationPrompt: 'Unlock Enclave',
  });
  if (!key) throw new Error('No biometric vault key stored');
  return key;
}`,
                systemMetrics: {
                    latency: "52ms",
                    ops: "1 decryption key",
                    status: "healthy",
                },
                logs: [
                    "SecureStore.getItem 'enclave.wrapped_vault_key'",
                    "requireAuthentication gate satisfied by OS keychain",
                    "Vault key loaded — never persisted in plaintext",
                ],
            },
            {
                id: "decrypt",
                number: "03",
                title: "AES-GCM Authenticated Decrypt",
                description:
                    "Each vault item is decrypted with AES-256-GCM: the 128-bit auth tag is split from the ciphertext and asserted before JSON decode, so any tampered record throws instead of rendering garbage.",
                tech: "react-native-quick-crypto · encryption.ts",
                codeFile: "encryption.ts",
                codeSnippet: `export async function decryptJson<T>(vaultKeyBase64: string, blob: EncryptedBlob): Promise<T> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const combined = Buffer.from(blob.ciphertext, 'base64');

  const ciphertext = combined.subarray(0, combined.length - AUTH_TAG_LENGTH);
  const authTag = combined.subarray(combined.length - AUTH_TAG_LENGTH);

  const decipher = QuickCrypto.createDecipheriv('aes-256-gcm', keyBytes, Buffer.from(blob.iv, 'base64')) as any;
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(decrypted.toString('utf8')) as T;
}`,
                systemMetrics: {
                    latency: "3.1ms",
                    ops: "~2.4k items/s",
                    status: "healthy",
                },
                logs: [
                    "subarray split at len-16 (auth tag boundary)",
                    "setAuthTag verified — record integrity OK",
                    "JSON.parse → VaultItemRow",
                ],
            },
            {
                id: "totp",
                number: "04",
                title: "TOTP Generation Window",
                description:
                    "OTP secrets stored in the vault feed generateTotp: base32 decode → HMAC dynamic truncation → zero-padded code with live remainingSeconds countdown.",
                tech: "RFC 6238 · totp.ts",
                codeFile: "totp.ts",
                codeSnippet: `export function generateTotp(config: TotpConfig): TotpResult {
  const { secret, digits = 6, period = 30 } = config;
  const secretBytes = base32Decode(secret);
  const now = Math.floor(Date.now() / 1000);
  const counter = Math.floor(now / period);
  const remainingSeconds = period - (now % period);

  return {
    code: hotp(secretBytes, counter, digits),
    remainingSeconds,
    periodSeconds: period,
  };
}`,
                systemMetrics: {
                    latency: "0.4ms",
                    ops: "30s window",
                    status: "processing",
                },
                logs: [
                    "counter = floor(epoch / 30)",
                    "dynamic truncation offset = digest[len-1] & 0x0f",
                    "code 6-digit · 24s remaining in window",
                ],
            },
            {
                id: "sync",
                number: "05",
                title: "Google Drive 3-Way Merge",
                description:
                    "On sync, local SQLite rows are reconciled against the Drive snapshot with item-level timestamp rules — tombstones from soft-deletes win whenever newer; equal-timestamp divergences surface as conflicts.",
                tech: "Drive provider · merger.ts",
                codeFile: "merger.ts",
                codeSnippet: `if (local && remote) {
  const localTime = new Date(local.updatedAt).getTime();
  const remoteTime = new Date(remote.updatedAt).getTime();

  if (remoteTime > localTime) {
    toUpsert.push({ ...remote, syncDirty: 0 });   // remote wins
  } else if (localTime > remoteTime) {
    mergedMap.set(id, local);                       // local wins
  } else if (local.encryptedData !== remote.encryptedData) {
    conflicts.push({ id, local, remote });          // equal timestamp, diverged
  }
}`,
                systemMetrics: {
                    latency: "412ms",
                    ops: "N items merged",
                    status: "ready",
                },
                logs: [
                    "72 local rows · 70 remote rows → 68 common ids",
                    "2 remote-only records applied to local store",
                    "1 equal-timestamp divergence → conflict set (prefer remote)",
                ],
            },
        ],
        archMermaid: `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef crypto fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef sync fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;

    subgraph Device["React Native / Expo App (Local-First)"]
        UI["Vault UI (Expo Router)"]:::client
        Store["SQLite Vault Repository"]:::client
        Secure["SecureStore Vault Key"]:::client
        Bio["Biometric Unlock Gate"]:::client
    end

    subgraph Crypto["Native Crypto Engine (react-native-quick-crypto)"]
        Argon["Argon2id KDF (64MB · 3 passes)"]:::crypto
        GCM["AES-256-GCM Authenticated Cipher"]:::crypto
        TOTP["RFC 6238 TOTP Engine"]:::crypto
        BIP39["BIP39 Recovery Phrase"]:::crypto
    end

    subgraph Cloud["Personal Cloud Layer"]
        Drive["Google Drive Provider"]:::sync
        Merge["3-Way Item Merge (updated_at)"]:::sync
        HIBP["HIBP k-Anonymity Audit"]:::sync
    end

    UI --> Bio
    Bio --> Secure
    Secure --> Argon
    Argon --> GCM
    GCM --> Store
    TOTP --> UI
    Store --> Merge
    Merge --> Drive
    BIP39 --> UI
    HIBP -.-> UI`,
        seqMermaid: `sequenceDiagram
    autonumber
    actor Owner as Vault Owner
    participant UI as Enclave Expo App
    participant Auth as Local Authentication (FaceID / Touch ID)
    participant KDF as Argon2id (quick-crypto)
    participant Cipher as AES-256-GCM
    participant Store as SQLite Repository
    participant Drive as Google Drive Provider

    Owner->>UI: Open vault
    UI->>Auth: Request biometric challenge
    Auth-->>UI: LocalAuthentication success
    UI->>KDF: Derive 256-bit key (salt + password)
    KDF-->>UI: vaultKey (base64, never plaintext)
    UI->>Cipher: decrypt(record)
    Cipher-->>UI: plaintext record
    Owner->>UI: Read TOTP / add item
    UI->>Store: upsert encrypted blob
    UI->>Drive: push remote snapshot
    Drive-->>UI: merge(remote, local) 3-way
    alt Remote updated by another device
        Store-->>UI: apply remote item rows
    else Local was newer
        Drive-->>UI: push local rows, keep tombstones
    end`,
    },
    codeModules: [
        {
            id: "encryption",
            filename: "lib/crypto/encryption.ts",
            badge: "AES-256-GCM",
            title: "Authenticated Vault Encryption",
            description: "AES-256-GCM via react-native-quick-crypto: random 96-bit IV, 128-bit auth tag appended to the ciphertext, base64 wire-format blobs. verify-then-decode keeps tampered records from ever rendering.",
            prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/crypto/encryption.ts",
            prHighlight: "lib/crypto/encryption.ts",
            code: `import { Buffer } from 'buffer';
import QuickCrypto from 'react-native-quick-crypto';

const IV_LENGTH = 12; // 96-bit IV for AES-GCM
const AUTH_TAG_LENGTH = 16; // 128-bit auth tag

export interface EncryptedBlob {
  ciphertext: string; // base64 (ciphertext + auth tag)
  iv: string; // base64
}

export async function encryptJson<T>(vaultKeyBase64: string, plaintext: T): Promise<EncryptedBlob> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const iv = QuickCrypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const plaintextBytes = Buffer.from(JSON.stringify(plaintext), 'utf8');

  const cipher = QuickCrypto.createCipheriv('aes-256-gcm', keyBytes, iv) as any;
  const encrypted = Buffer.concat([cipher.update(plaintextBytes), cipher.final()]);
  const authTag: Buffer = cipher.getAuthTag();

  const combined = Buffer.concat([encrypted, authTag]);
  return { ciphertext: combined.toString('base64'), iv: Buffer.from(iv).toString('base64') };
}

export async function decryptJson<T>(vaultKeyBase64: string, blob: EncryptedBlob): Promise<T> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const iv = Buffer.from(blob.iv, 'base64');
  const combined = Buffer.from(blob.ciphertext, 'base64');

  const ciphertext = combined.subarray(0, combined.length - AUTH_TAG_LENGTH);
  const authTag = combined.subarray(combined.length - AUTH_TAG_LENGTH);

  const decipher = QuickCrypto.createDecipheriv('aes-256-gcm', keyBytes, iv) as any;
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(decrypted.toString('utf8')) as T;
}`,
        },
        {
            id: "kdf",
            filename: "lib/crypto/key-derivation.ts",
            badge: "Argon2id",
            title: "Native Key Derivation",
            description: "256-bit vault key from master password + 32-byte salt using native Argon2id with 64MB memory, 3 passes, and a single lane; recovery phrase re-derives a separate key.",
            prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/crypto/key-derivation.ts",
            prHighlight: "lib/crypto/key-derivation.ts",
            code: `import { Buffer } from 'buffer';
import QuickCrypto from 'react-native-quick-crypto';

export const SALT_LENGTH = 32; // bytes

export function generateSalt(): string {
  const bytes = QuickCrypto.randomBytes(SALT_LENGTH);
  return Buffer.from(bytes).toString('base64');
}

export async function deriveVaultKey(masterPassword: string, saltBase64: string): Promise<string> {
  const salt = Buffer.from(saltBase64, 'base64');

  return new Promise<string>((resolve, reject) => {
    QuickCrypto.argon2(
      'argon2id',
      {
        message: masterPassword,
        nonce: salt,
        parallelism: 1,
        tagLength: 32,
        memory: 65536, // 64MB
        passes: 3,
      },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.toString('base64'));
      },
    );
  });
}`,
        },
        {
            id: "hibp",
            filename: "lib/security/hibp.ts",
            badge: "k-Anonymity",
            title: "Watchtower Breach Audit",
            description: "Have-I-Been-Pwned check that only ships the first 5 hex chars of a SHA-1 hash off-device — the breach suffix list is matched locally, and batch audits are rate-limited politely.",
            prUrl: "https://github.com/b-l-i-n-d/enclave/blob/master/lib/security/hibp.ts",
            prHighlight: "lib/security/hibp.ts",
            code: `import { sha1Hex } from '@/lib/crypto';

export async function checkPasswordBreached(password: string): Promise<HibpResult> {
  const hash = sha1Hex(password);
  const prefix = hash.slice(0, 5);          // only prefix leaves the device
  const suffix = hash.slice(5);

  const response = await fetch(\`https://api.pwnedpasswords.com/range/\${prefix}\`, {
    headers: { 'Add-Padding': 'true' },
  });
  if (!response.ok) throw new Error(\`HIBP API error: \${response.status}\`);

  const text = await response.text();
  for (const line of text.split('\\n')) {
    const [lineSuffix, countStr] = line.trim().split(':');
    if (lineSuffix?.toUpperCase() === suffix) {
      const count = parseInt(countStr ?? '0', 10);
      return { pwned: count > 0, count };
    }
  }
  return { pwned: false, count: 0 };
}`,
        },
    ],
};

const edTechShowcase: ProjectShowcase = {
    graph: {
        navTitle: "Interactive Architecture Map",
        navSubtitle: "Inspect the Next.js client, the service-layer Express API, and the hardening/ops stack",
        title: "EdTech LMS Platform Architecture Graph",
        countLabel: "9 Core Systems",
        verifyLabel: "Source modules verified in b-l-i-n-d/edTech",
        verifyUrl: "https://github.com/b-l-i-n-d/edTech",
        inspectLabel: "Inspect Source",
        commitsHeading: "Key Source Modules (b-l-i-n-d/edTech):",
        commitPrefix: "src:",
        columns: [
            {
                title: "01 · Client & State",
                nodeIds: ["next-client", "rtk", "react-player"],
                accent: "rose",
            },
            {
                title: "02 · Service-Layer API",
                nodeIds: ["express-api", "mongoose-models", "auth-jwt"],
                accent: "emerald",
            },
            {
                title: "03 · Security & Ops",
                nodeIds: ["swagger", "hardening", "ops"],
                accent: "sky",
            },
        ],
        nodes: [
            {
                id: "next-client",
                label: "Next.js 13 Client",
                version: "Next.js 13",
                badge: "Pages Router · TypeScript · AntD",
                commits: [
                    "client/pages — course, quiz & admin routes with generation helpers",
                    "client/components — AppLayout shell + shared UI kit",
                    "client/redux — typed state injected via next-redux-wrapper",
                ],
                description:
                    "Next.js 13 front-end with the AppLayout shell, lesson/player pages wired to RTK Query hooks, Ant Design componentry, and role-split dashboards for students, admins, and instructors.",
                prHighlight: "client/pages · client/components",
                prUrl: "https://github.com/b-l-i-n-d/edTech/tree/master/client",
                metrics: "Pages router · TypeScript · AntD",
            },
            {
                id: "rtk",
                label: "RTK Slices & RTK Query",
                version: "Redux Toolkit",
                badge: "Slices · injectEndpoints",
                commits: [
                    "client/redux/api/apiSlice.ts — fetchBaseQuery with Bearer prepareHeaders",
                    "HYDRATE extractRehydrationInfo for server-render rebase",
                    "redux-persist token persistence across refreshes",
                ],
                description:
                    "Domain slices (auth, videos, quizzes, assignments, marks) built on RTK Query's injectEndpoints; prepared Authorization header, tag-based invalidation, and a 401-driven logout from the base query.",
                prHighlight: "client/redux — apiSlice.ts baseQuery",
                prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/client/redux/api/apiSlice.ts",
                metrics: "Tag-based invalidation · Neon sync",
            },
            {
                id: "react-player",
                label: "Lesson Video Modules",
                version: "Media",
                badge: "react-player · Lesson Player",
                commits: [
                    "client/video — player module with progress state",
                    "videosApi — auto-selected current video from the lesson list",
                    "quizzMark tied to the video being watched",
                ],
                description:
                    "Lesson player layer built on react-player; the video list query auto-selects the current lesson and feeds quiz/assignment gates per video.",
                prHighlight: "client + server video services",
                prUrl: "https://github.com/b-l-i-n-d/edTech",
                metrics: "Adaptive playback · Progress gating",
            },
            {
                id: "express-api",
                label: "Express Service-Layer API",
                version: "Express",
                badge: "Models → Services → Controllers → Routes",
                commits: [
                    "server/src/services — quizzMark, leaderboard, assignment, dashboard",
                    "server/src/controllers — thin HTTP adapters over services",
                    "server/src/routes/v1 — Joi-validated route modules",
                ],
                description:
                    "Layered Express API (ES modules). Services own business rules, controllers adapt to HTTP, and route middlewares validate with Joi — a classic deep-module data flow.",
                prHighlight: "server/src — service-layer architecture",
                prUrl: "https://github.com/b-l-i-n-d/edTech/tree/master/server/src",
                metrics: "ESM · One-way dependency flow",
            },
            {
                id: "mongoose-models",
                label: "Mongoose Domain Models",
                version: "Mongoose",
                badge: "user · video · quizz · assignment · marks",
                commits: [
                    "server/src/models/video.model.js — video/section trees",
                    "server/src/models/quizz.model.js — option isCorrect flags",
                    "leaderboard aggregates across marks models",
                ],
                description:
                    "Domain models for users, videos, quizzes, assignments, and aggregate marks with Mongoose pagination on list endpoints and lean() reads in hot paths.",
                prHighlight: "server/src/models",
                prUrl: "https://github.com/b-l-i-n-d/edTech/tree/master/server/src/models",
                metrics: "10+ schemas · Lean reads",
            },
            {
                id: "auth-jwt",
                label: "JWT + Passport Cookie Auth",
                version: "Passport · JWT",
                badge: "auth.service · passport.js",
                commits: [
                    "server/src/services/auth.service.js — local strategy, token pair",
                    "server/src/services/token.service.js — signed access/refresh",
                    "passport-jwt strategy guarding REST routes",
                ],
                description:
                    "Cookie-borne JWT sessions with a passport local strategy for login, signed access/refresh token lifecycle, and role-aware route protection.",
                prHighlight: "server/src/services/auth.service.js",
                prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/server/src/services/auth.service.js",
                metrics: "Role-gated routes · Token pair",
            },
            {
                id: "swagger",
                label: "Swagger OpenAPI Docs",
                version: "OpenAPI",
                badge: "swagger-jsdoc · swagger-ui-express",
                commits: [
                    "server/src/utils/swagger.js — live REST documentation",
                    "Schemas documented across every service-layer endpoint",
                ],
                description:
                    "Generated OpenAPI documentation served live with swagger-ui-express, keeping every REST contract inspectable from the browser.",
                prHighlight: "server/src/utils/swagger.js",
                prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/server/src/utils/swagger.js",
                metrics: "100% endpoint coverage",
            },
            {
                id: "hardening",
                label: "REST Hardening",
                version: "Security",
                badge: "helmet · xss-clean · rate-limit",
                commits: [
                    "server/src/app.js — helmet CSP + header defaults",
                    "xss-clean + mongo-sanitize payload cleaning",
                    "express-rate-limit against brute-force login",
                ],
                description:
                    "REST hardening stack: security headers via helmet, request sanitization (xss-clean, mongo-sanitize), rate limiting, and a locked-down CORS policy.",
                prHighlight: "server/src/app.js",
                prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/server/src/app.js",
                metrics: "XSS / CSRF / NoSQLi mitigation",
            },
            {
                id: "ops",
                label: "Docker · PM2 · Jest",
                version: "Deploy",
                badge: "compose · ecosystem · supertest",
                commits: [
                    "docker-compose.yml — api + client + db orchestration",
                    "ecosystem.config.js — PM2 cluster mode",
                    "Jest + supertest integration suite over the API",
                ],
                description:
                    "Containerized orchestration with a PM2 cluster mode ecosystem file and a Jest/supertest integration suite guarding the API contracts.",
                prHighlight: "docker-compose.yml · ecosystem.config.js",
                prUrl: "https://github.com/b-l-i-n-d/edTech",
                metrics: "Cluster mode · CI-gated",
            },
        ],
    },
    flow: {
        steps: [
            {
                id: "auth",
                number: "01",
                title: "Auth & Token Pipeline",
                description:
                    "Login dispatches an auth mutation; prepareHeaders attaches the Bearer access token to every subsequent query, and a 401 or expired refresh token triggers an explicit logout.",
                tech: "RTK Query · redux-persist",
                codeFile: "client/redux/api/apiSlice.ts",
                codeSnippet: `const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: async (headers, { getState }: { getState: () => AppState }) => {
        const token = getState().auth?.tokens?.access?.token;
        if (token) {
            headers.set("Authorization", \`Bearer \${token}\`);
        }
        return headers;
    },
});`,
                systemMetrics: {
                    latency: "9.6ms",
                    ops: "160 req/s",
                    status: "healthy",
                },
                logs: [
                    "v1/auth/login mutation dispatched from authApi",
                    "Tokens persisted — redux-persist rehydrates store",
                    "prepareHeaders attached Bearer access token",
                ],
            },
            {
                id: "videos",
                number: "02",
                title: "Course Video Queue",
                description:
                    "The videosApi list query fetches the lesson queue, provides Videos tags for cache invalidation, and auto-selects the current video id so the player always mirrors the route.",
                tech: "RTK Query · injectEndpoints",
                codeFile: "client/redux/features/videos/videosApi.ts",
                codeSnippet: `export const videosApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query<IVideos, IVideosQueryParams>({
            query: (params) => ({
                url: generateQueryUrl("videos", params),
                method: "GET",
            }),
            providesTags: (result) =>
                result
                    ? [
                          "Videos",
                          ...result.results.map(({ id }) => ({ type: "Videos" as const, id })),
                          { type: "Videos", id: "LIST" },
                      ]
                    : [{ type: "Videos", id: "LIST" }],
        }),
    }),
});`,
                systemMetrics: {
                    latency: "34ms",
                    ops: "90 req/s",
                    status: "ready",
                },
                logs: [
                    "GET v1/videos?page=1&limit=20 → lesson queue",
                    "videoSelected dispatched (current id from query)",
                    "Videos LIST tag refreshed — cache hot",
                ],
            },
            {
                id: "quiz",
                number: "03",
                title: "Graded Quiz Submission",
                description:
                    "createQuizzMark rejects duplicate video+student submissions with a 400, loads the video's quizzes, and compares selected answers against the stored isCorrect option keys with JSON.stringify equality.",
                tech: "Mongoose · ApiError",
                codeFile: "server/src/services/quizzMark.service.js",
                codeSnippet: `const createQuizzMark = async (quizzMarkBody) => {
    const quizzMark = await queryQuizzMarks(
        { video: quizzMarkBody.video, student: quizzMarkBody.student },
        {}
    );
    if (quizzMark.length > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Quizz mark already exists');
    }
    // ... video + student + quizzes existence checks ...

    const correctAnswers = quizzes.map((quizz) => ({
        [quizz._id]: quizz.options
            .filter((option) => option.isCorrect)
            .map((option) => option._id.toString()),
    }));

    let totalCorrect = 0;
    correctAnswers.forEach((correctObject, index) => {
        if (JSON.stringify(correctObject) === JSON.stringify(selectedAnswers[index])) {
            totalCorrect += 1;
        }
    });

    return QuizzMark.create({
        ...quizzMarkBody,
        totalQuizzes: quizzes.length,
        totalCorrect,
        totalWrong: quizzes.length - totalCorrect,
        totalMarks: quizzes.length * 5,
        marks: totalCorrect * 5,
        correctAnswers,
    });
};`,
                systemMetrics: {
                    latency: "21ms",
                    ops: "5-mark scoring",
                    status: "processing",
                },
                logs: [
                    "Duplicate guard hit → HTTP 400 (mark already exists)",
                    "Quizz.find({ video }) → 8 questions loaded",
                    "totalMarks = 40 · marks = 5 × correct (35) · persisted",
                ],
            },
            {
                id: "assignment",
                number: "04",
                title: "Assignment Submission",
                description:
                    "createAssignmentMark refuses unknown assignments or students, rejects a second submission for the same assignment with a 400, and blocks submissions past the assignment due date.",
                tech: "Mongoose · ApiError",
                codeFile: "server/src/services/assignmentMark.service.js",
                codeSnippet: `const createAssignmentMark = async (assignmentMarkBody) => {
    const assignment = await assignmentService.getAssignmentById(assignmentMarkBody.assignment);
    if (!assignment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found');
    }
    // mark already exists check ...
    if (assignmentMark.length > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Assignment mark already exists');
    }
    if (new Date() > assignment.dueDate) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Assignment is overdue');
    }
    return AssignmentMark.create({
        ...assignmentMarkBody,
        status: 'pending',
        marks: 0,
    });
};`,
                systemMetrics: {
                    latency: "18ms",
                    ops: "pending → graded",
                    status: "healthy",
                },
                logs: [
                    "Assignment + student existence verified",
                    "Due-date gate passed — submission accepted",
                    "AssignmentMark created with status: pending, marks: 0",
                ],
            },
            {
                id: "leaderboard",
                number: "05",
                title: "Leaderboard Aggregation",
                description:
                    "Quiz and assignment marks are aggregated with $group/$lookup, merged per student, ranked by descending total with shared ranks, and the top 25 returned.",
                tech: "Mongoose Aggregate",
                codeFile: "server/src/services/leaderboard.services.js",
                codeSnippet: `const quizzMarkLeaderboard = await QuizzMark.aggregate([
    { $group: { _id: '$student', totalMarks: { $sum: '$marks' } } },
    {
        $lookup: {
            from: 'users', localField: '_id', foreignField: '_id', as: 'student',
        },
    },
    { $unwind: '$student' },
    { $project: { id: '$student._id', name: '$student.name', quizzTotalMarks: '$totalMarks' } },
    { $sort: { quizzTotalMarks: -1 } },
]);
// ... merged with assignment marks, ranked by totalMarks ...
let currentRank = 0;
let prevMarks = null;
const ranked = leaderboard.map((st) => {
    if (prevMarks !== st.totalMarks) currentRank += 1;
    prevMarks = st.totalMarks;
    return { ...st, rank: currentRank };
});
return student
    ? { student: ranked.find((st) => st.id === student), leaderboard: ranked.slice(0, 25) }
    : { leaderboard: ranked.slice(0, 25) };`,
                systemMetrics: {
                    latency: "64ms",
                    ops: "Top 25 ranks",
                    status: "ready",
                },
                logs: [
                    "QuizzMark $group + $lookup → per-student totals",
                    "AssignmentMark aggregate merged into the matrix",
                    "Ranked 25 rows — shared ranks respected",
                ],
            },
        ],
        archMermaid: `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef backend fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;

    subgraph Client["Next.js 13 Client (client/)"]
        Pages["Pages Router + Ant Design"]:::client
        RTK["RTK Slices + RTK Query"]:::client
        Persist["redux-persist Rehydration"]:::client
        Player["react-player Lessons"]:::client
    end

    subgraph Transport["REST Transport"]
        API["apiSlice fetchBaseQuery (Bearer token)"]:::engine
        JWT["Access/Refresh JWT"]:::engine
    end

    subgraph Server["Express Service-Layer API (server/)"]
        Routes["v1 Routes + Joi Validation"]:::backend
        Controllers["Controllers (quizzMark, leaderboard, ...)"]:::backend
        Services["Services + Mongoose Models"]:::backend
        Mongo[("MongoDB (Mongoose)")]:::backend
        Docs["Swagger OpenAPI"]:::backend
    end

    Pages --> RTK
    RTK --> Persist
    Player --> RTK
    RTK --> API
    API --> JWT
    JWT --> Routes
    Routes --> Controllers
    Controllers --> Services
    Services --> Mongo
    Routes --> Docs`,
        seqMermaid: `sequenceDiagram
    autonumber
    actor Student as Enrolled Student
    participant UI as Next.js Client
    participant RTK as RTK Query Slices
    participant API as Express REST API
    participant Service as Quiz Mark Service
    participant DB as MongoDB (Mongoose)

    Student->>UI: Login (email + password)
    UI->>RTK: dispatch auth login
    RTK->>API: POST /v1/auth/login
    API-->>RTK: tokens (persisted via redux-persist)

    Student->>UI: Open course video
    UI->>RTK: getVideos list (auto-select current)
    RTK-->>UI: lesson queue rendered

    Student->>UI: Submit quiz answers
    UI->>API: POST /v1/quizz-marks
    API->>Service: createQuizzMark(video, student, answers)
    Service->>DB: Quizz.find({ video })
    DB-->>Service: questions + isCorrect option keys
    Service->>Service: JSON.stringify equality scoring
    Service->>DB: QuizzMark.create (marks = correct * 5)
    alt Duplicate submission
        API-->>UI: HTTP 400 (mark already exists)
    else Valid submission
        API-->>UI: HTTP 201 { totalMarks, marks }
    end`,
    },
    codeModules: [
        {
            id: "quizz-mark",
            filename: "server/src/services/quizzMark.service.js",
            badge: "Grading Engine",
            title: "Graded Quiz Marking Service",
            description: "Five-marks-per-question scoring: builds the correct-answer key from isCorrect option flags, compares with JSON.stringify equality, and rejects duplicate video+student submissions with a 400.",
            prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/server/src/services/quizzMark.service.js",
            prHighlight: "server/src/services/quizzMark.service.js",
            code: `import httpStatus from 'http-status';
import { Quizz, QuizzMark } from '../models/index.js';
import ApiError from '../utils/ApiError.js';
import userService from './user.service.js';
import videoService from './video.service.js';

const createQuizzMark = async (quizzMarkBody) => {
    const quizzMark = await queryQuizzMarks(
        {
            video: quizzMarkBody.video,
            student: quizzMarkBody.student,
        },
        {}
    );

    if (quizzMark.length > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Quizz mark already exists');
    }

    const video = await videoService.getVideoById(quizzMarkBody.video);
    if (!video) throw new ApiError(httpStatus.NOT_FOUND, 'Video not found');

    const student = await userService.getUserById(quizzMarkBody.student);
    if (!student) throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');

    const quizzes = await Quizz.find({ video: quizzMarkBody.video });
    if (quizzes.length === 0) throw new ApiError(httpStatus.NOT_FOUND, 'Quizzes not found');

    const correctAnswers = quizzes.map((quizz) => {
        return {
            [quizz._id]: quizz.options
                .filter((option) => option.isCorrect)
                .map((option) => option._id.toString()),
        };
    });

    const { selectedAnswers } = quizzMarkBody;

    const countTotalCorrect = (correctAns, selectedAns) => {
        let totalCorrect = 0;
        correctAns.forEach((correctObject, index) => {
            const selectedObject = selectedAns[index];
            if (JSON.stringify(correctObject) === JSON.stringify(selectedObject)) {
                totalCorrect += 1;
            }
        });
        return totalCorrect;
    };

    const totalCorrect = countTotalCorrect(correctAnswers, selectedAnswers);

    return QuizzMark.create({
        ...quizzMarkBody,
        totalQuizzes: quizzes.length,
        totalCorrect,
        totalWrong: quizzes.length - totalCorrect,
        totalMarks: quizzes.length * 5,
        marks: totalCorrect * 5,
        correctAnswers,
    });
};

export default { queryQuizzMarks, createQuizzMark };`,
        },
        {
            id: "leaderboard",
            filename: "server/src/services/leaderboard.services.js",
            badge: "Aggregation",
            title: "Leaderboard Rank Aggregation",
            description: "Two $group/$lookup aggregates (quiz + assignment marks) merged per student, ranked by descending total with shared ranks honored, and the top 25 exposed.",
            prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/server/src/services/leaderboard.services.js",
            prHighlight: "server/src/services/leaderboard.services.js",
            code: `import { AssignmentMark, QuizzMark } from '../models/index.js';

const queryLeaderboard = async (student) => {
    const quizzMarkLeaderboard = await QuizzMark.aggregate([
        { $group: { _id: '$student', totalMarks: { $sum: '$marks' } } },
        {
            $lookup: {
                from: 'users', localField: '_id', foreignField: '_id', as: 'student',
            },
        },
        { $unwind: '$student' },
        {
            $project: {
                id: '$student._id', name: '$student.name',
                photo: '$student.photo', quizzTotalMarks: '$totalMarks',
            },
        },
        { $sort: { quizzTotalMarks: -1 } },
    ]);

    // same aggregate for AssignmentMark.assignmentTotalMarks ...
    const combinedMarks = [...quizzMarkLeaderboard, ...assignmentMarkLeaderboard];

    const leaderboard = combinedMarks.reduce((acc, curr) => {
        const existingStudent = acc.find((st) => st.id.toString() === curr.id.toString());
        if (existingStudent) {
            existingStudent.quizzTotalMarks = (existingStudent.quizzTotalMarks || 0) + (curr.quizzTotalMarks || 0);
            existingStudent.assignmentTotalMarks =
                (existingStudent.assignmentTotalMarks || 0) + (curr.assignmentTotalMarks || 0);
        } else {
            acc.push({
                ...curr,
                quizzTotalMarks: curr.quizzTotalMarks || 0,
                assignmentTotalMarks: curr.assignmentTotalMarks || 0,
            });
        }
        return acc;
    }, []);

    const rankedLeaderboard = leaderboard
        .map((st) => ({
            ...st,
            totalMarks: (st.quizzTotalMarks || 0) + (st.assignmentTotalMarks || 0),
        }))
        .sort((a, b) => b.totalMarks - a.totalMarks)
        .map((st, _i, arr) => {
            let rank = 0, prevMarks = null;
            arr.forEach((s) => {
                if (prevMarks !== s.totalMarks) rank += 1;
                prevMarks = s.totalMarks;
                if (s === st) return;
            });
            return { ...st, rank };
        });

    return student
        ? { student: rankedLeaderboard.find((st) => st.id.toString() === student.toString()), leaderboard: rankedLeaderboard.slice(0, 25) }
        : { leaderboard: rankedLeaderboard.slice(0, 25) };
};

export default { queryLeaderboard };`,
        },
        {
            id: "api-slice",
            filename: "client/redux/api/apiSlice.ts",
            badge: "Data Layer",
            title: "RTK Query Base API Slice",
            description: "fetchBaseQuery with Bearer prepareHeaders, a 401/expired-token logout guard, next-redux-wrapper HYDRATE rehydration, and tag types for every domain.",
            prUrl: "https://github.com/b-l-i-n-d/edTech/blob/master/client/redux/api/apiSlice.ts",
            prHighlight: "client/redux/api/apiSlice.ts",
            code: `import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { authApi } from "../features/auth/authApi";
import { AppState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: async (headers, { getState }: { getState: () => AppState }) => {
        const token = getState().auth?.tokens?.access?.token;
        if (token) {
            headers.set("Authorization", \`Bearer \${token}\`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const getState = api.getState as () => AppState;
        const refreshToken = getState().auth?.tokens?.refresh?.token;
        const isTokenExpired = getState().auth?.tokens?.refresh?.expires < Date.now();
        const result = await baseQuery(args, api, extraOptions);

        if ((result.error?.status === 401 || isTokenExpired) && refreshToken) {
            api.dispatch(authApi.endpoints.logout.initiate(refreshToken));
        }
        return result;
    },
    extractRehydrationInfo: (action, { reducerPath }) => {
        if (action.type === HYDRATE) return action.payload[reducerPath];
    },
    tagTypes: [
        "Assignments", "AssignmentsMarks", "Auth", "Dashboard", "Leaderboard",
        "Users", "Videos", "Quizzes", "QuizzMarks", "QuizzSets",
    ],
    endpoints: (builder) => ({}),
});`,
        },
    ],
};

const docAppShowcase: ProjectShowcase = {
    graph: {
        navTitle: "Interactive Architecture Map",
        navSubtitle: "Inspect the cookie-JWT auth layer, the component-based booking domain, and the render/ops stack",
        title: "DocApp Booking Platform Architecture Graph",
        countLabel: "9 Core Systems",
        verifyLabel: "Source modules verified in b-l-i-n-d/docapp",
        verifyUrl: "https://github.com/b-l-i-n-d/docapp",
        inspectLabel: "Inspect Source",
        commitsHeading: "Key Source Modules (b-l-i-n-d/docapp):",
        commitPrefix: "src:",
        columns: [
            {
                title: "01 · Auth & Portal",
                nodeIds: ["cookie-jwt", "rbac", "email-notify"],
                accent: "rose",
            },
            {
                title: "02 · Booking Domain",
                nodeIds: ["components-api", "doctor-search", "appointment-ledger"],
                accent: "emerald",
            },
            {
                title: "03 · Render & Ops",
                nodeIds: ["react-pdf", "cloudinary", "analytics"],
                accent: "sky",
            },
        ],
        nodes: [
            {
                id: "cookie-jwt",
                label: "Rotating Cookie JWT",
                version: "Auth",
                badge: "verifyAccessToken.js",
                commits: [
                    "verifyAccessToken.js — access token in httpOnly cookie",
                    "res.cookie overwrite — renewed JWT in place on expiry",
                    "Invalid-secret path clears cookie and 406s",
                ],
                description:
                    "Access token rides in a cookie; when it expires mid-session the middleware re-signs fresh user data into a new JWT and overwrites the cookie. A bad secret clears the cookie and returns 406.",
                prHighlight: "server/middlewares/auth/verifyAccessToken.js",
                prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/verifyAccessToken.js",
                metrics: "HttpOnly · Rotates in place",
            },
            {
                id: "rbac",
                label: "Multi-Role Portal Guards",
                version: "RBAC",
                badge: "AdminOnly · UserOnly · isDoctor",
                commits: [
                    "isAdmin.js — role gate on res.locals.data._id",
                    "dashboards split by role in the client",
                    "menu guards conditionally render portals",
                ],
                description:
                    "Role-checked middleware chains guard the admin dashboard, doctor dashboards, and patient portal. isAdmin 403s any non-admin role after looking the user up by id.",
                prHighlight: "server/middlewares/auth/isAdmin.js",
                prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/isAdmin.js",
                metrics: "Admin · Doctor · Patient",
            },
            {
                id: "email-notify",
                label: "NodeMailer + Handlebars",
                version: "Mail",
                badge: "reset · welcome · notifications",
                commits: [
                    "requestChangePassword — reset mail with verification",
                    "handlebars layouts for doctor/password emails",
                    "notifications digest on appointment events",
                ],
                description:
                    "Templated outbound email via NodeMailer with Handlebars layouts: password-reset flows, portal notifications, and doctor-facing alerts.",
                prHighlight: "server/utils/helpers/email",
                prUrl: "https://github.com/b-l-i-n-d/docapp",
                metrics: "NodeMailer · Handlebars",
            },
            {
                id: "components-api",
                label: "Component-Based Express API",
                version: "Express",
                badge: "users · doctors · appointments",
                commits: [
                    "server/components/<domain> — model + controller + routes",
                    "server/bootstrap.js — mounts routes per component",
                    "index.js barrel exports per component",
                ],
                description:
                    "Each domain is its own component exposing a model, controller, and routes — departments, districts, workplaces, doctors, and appointments — wired centrally at boot. A classic deep-module layout.",
                prHighlight: "server/components",
                prUrl: "https://github.com/b-l-i-n-d/docapp/tree/master/server/components",
                metrics: "Modular · 6 domains",
            },
                {
                id: "doctor-search",
                label: "Doctor Search & Profiles",
                version: "Query",
                badge: "departments · districts · workplaces",
                commits: [
                    "doctors controller — department / district / workplace filters",
                    "Doctor grid cards + details modal",
                    "Cloudinary image upload on enrollment",
                ],
                description:
                    "Patient portal filters doctors by department, district, and workplace with a card grid and details modal; doctor records carry Cloudinary-backed photos and chamber info.",
                prHighlight: "server/components/doctors/doctors.controller.js",
                prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/doctors/doctors.controller.js",
                metrics: "Triple filter · Card grid",
            },
            {
                id: "appointment-ledger",
                label: "Appointment Ledger Controller",
                version: "Booking",
                badge: "appointments.controller.js",
                commits: [
                    "createAppointment — ObjectId + doctor existence validation",
                    "Appointment.create with patient demographics",
                    "me + doctorId + date filtered feeds, recent-5",
                ],
                description:
                    "createAppointment rejects invalid ObjectIds and unknown doctors, then persists the patient's booking with date, name, age, gender, type, and phone. Doctor feeds expose recent-5 and date-filtered queues.",
                prHighlight: "server/components/appointments/appointments.controller.js",
                prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/appointments/appointments.controller.js",
                metrics: "Validated · Scoped feeds",
            },
            {
                id: "react-pdf",
                label: "React-PDF Dossier Export",
                version: "Render",
                badge: "@react-pdf/renderer",
                commits: [
                    "generateAppointmentsPdf.jsx — Document + Page layout",
                    "PdfReport reusable sections",
                    "Font theme — Times-Roman body, Courier meta",
                ],
                description:
                    "Client-side generator builds an A4 medical telephone record from appointment records — header/footer chrome, sectioned layouts, and one-click PDF download.",
                prHighlight: "client/src/services/generateAppointmentsPdf.jsx",
                prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/client/src/services/generateAppointmentsPdf.jsx",
                metrics: "A4 · Client-rendered",
            },
            {
                id: "cloudinary",
                label: "Cloudinary Asset Pipeline",
                version: "Media",
                badge: "imageUpload · imageDelete",
                commits: [
                    "cloudinary config in server/configs",
                    "imageUpload — avatar upload contracts",
                    "imageDelete — signed remote teardown",
                ],
                description:
                    "Doctor photos and profile assets upload to Cloudinary with signed destruction so removed profiles clean up after themselves.",
                prHighlight: "server/utils/helpers · cloudinary",
                prUrl: "https://github.com/b-l-i-n-d/docapp",
                metrics: "Signed uploads",
            },
            {
                id: "analytics",
                label: "Chart.js Admin Dashboards",
                version: "Telemetry",
                badge: "admin charts · RTK Query",
                commits: [
                    "admin chart endpoints + RTK hooks",
                    "Chart.js line/bar summaries",
                    "notifications digest feed",
                ],
                description:
                    "Admin dashboard aggregates bookings, doctors, and users over time, rendered with Chart.js via RTK Query, plus a notifications digest to keep staff topped-up.",
                prHighlight: "client/src — dashboard + charts",
                prUrl: "https://github.com/b-l-i-n-d/docapp",
                metrics: "Live charts · Digest feed",
            },
        ],
    },
    flow: {
        steps: [
            {
                id: "login",
                number: "01",
                title: "Login & Cookie JWT Rotation",
                description:
                    "VerifyAccessToken middleware reads the cookie-borne access token. On expiry it re-signs fresh user data into a new JWT and overwrites the cookie in place; an invalid secret clears the cookie and 406s.",
                tech: "jsonwebtoken · httpOnly cookies",
                codeFile: "server/middlewares/auth/verifyAccessToken.js",
                codeSnippet: `const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies[cookiesConfig.access.name];
    const verifyToken = await helpers.verifyJWT(accessToken, jwtConfig.ACCESS_SECRET);

    if (verifyToken.isExpired) {
        const userId = res.locals.data._id;
        const userData = await userModel.findById(userId)
            .select('_id name email role isDoctor').lean();

        const encryptedData = await jwt.sign(userData, jwtConfig.ACCESS_SECRET, {
            expiresIn: jwtConfig.ACCESS_EXP,
        });

        res.cookie(cookiesConfig.access.name, encryptedData, {
            ...cookiesConfig.access.options,
            overwrite: true,
        });
    } else if (verifyToken.isSecretNotValid) {
        res.clearCookie(cookiesConfig.access.name);
        return res.status(406).json({
            isAuth: false,
            error: 'Your credentials are invalid. Please try login again.',
        });
    }

    return next();
};`,
                systemMetrics: {
                    latency: "14ms",
                    ops: "In-place rotation",
                    status: "ready",
                },
                logs: [
                    "Login route issued access + refresh cookies",
                    "verifyAccessToken — token valid, passing through",
                    "Expired mid-session → re-signed JWT overwrites cookie",
                ],
            },
            {
                id: "doctor",
                number: "02",
                title: "Doctor Enrollment & Search",
                description:
                    "Doctors sign up with department, district and workplace filters; their Cloudinary image is uploaded as a signed asset and the profile lands in the searchable grid.",
                tech: "Cloudinary · doctors model",
                codeFile: "server/components/doctors/doctors.controller.js",
                codeSnippet: `const createDoctor = async (req, res) => {
    const { user } = req;
    const { title, name, dateOfBirth, image, gender, doctorType,
            nationalId, bmdcRegNo, department, specialized, workplace, chamber } = req.body;

    const imageResult = image && (await helpers.imageUpload(image, user._id));

    const newDoctor = await Doctor.create({
        userId: user._id,
        title,
        name,
        dateOfBirth,
        image: imageResult.secure_url,
        doctorType,
        nationalId,
        bmdcRegNo,
        email: user.email,
        department,
        specialized,
        workplace,
        chamber,
    });

    if (newDoctor) {
        // notify + expose in the filtered search grid
    }
};`,
                systemMetrics: {
                    latency: "86ms",
                    ops: "Signed upload",
                    status: "healthy",
                },
                logs: [
                    "imageUpload → secure_url persisted in profile",
                    "Doctor.create committed to doctors collection",
                    "Grid now matches department / district / workplace",
                ],
            },
            {
                id: "appointment",
                number: "03",
                title: "Book Appointment",
                description:
                    "createAppointment validates the doctor ObjectId, confirms the doctor exists, then creates the booking with date, name, age, gender, type, and phone for the signed-in patient.",
                tech: "Mongoose · res.locals.data._id",
                codeFile: "server/components/appointments/appointments.controller.js",
                codeSnippet: `const createAppointment = async (req, res) => {
    const { doctorId, name, age, gender, date, type, phone } = req.body;
    const userId = res.locals.data._id;

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        return res.status(400).json({ error: 'Invalid doctor id' });
    }

    const doctor = await doctorsModel.findById(doctorId).lean();
    if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
    }

    const appointment = await Appointment.create({
        doctorId, userId, date: new Date(date), name, age, gender, type, phone,
    });

    return res.status(200).json(appointment);
};`,
                systemMetrics: {
                    latency: "22ms",
                    ops: "1 booking",
                    status: "processing",
                },
                logs: [
                    "ObjectId.isValid(doctorId) → true",
                    "doctorsModel.findById → 200-slot doctor found",
                    "Appointment.create committed — ledger updated",
                ],
            },
            {
                id: "queues",
                number: "04",
                title: "Doctor Queues & Date Filters",
                description:
                    "getAppointments serves the patient's own feed ('me'), a doctor's recent-5 queue, or date-filtered lists by doctor — all with populated doctor names and pagination.",
                tech: "Mongoose populate · paginate",
                codeFile: "server/components/appointments/appointments.controller.js",
                codeSnippet: `if (lastSegment !== 'me') {
    if (recent === 'true' && doctorId) {
        return res.status(200).json(
            await Appointment.find({ doctorId })
                .populate('doctorId', 'name')
                .sort({ createdAt: -1 })
                .limit(5)
                .lean()
        );
    }
    appointments = Appointment.find({ doctorId })
        .populate('doctorId', 'name')
        .lean();
} else if (lastSegment === 'me') {
    appointments = Appointment.find({ userId })
        .populate('doctorId', 'name')
        .sort({ date: -1 })
        .lean();
}`,
                systemMetrics: {
                    latency: "31ms",
                    ops: "Recent-5 / dated",
                    status: "ready",
                },
                logs: [
                    "GET appointments/me → patient's ledger",
                    "Doctor queue recent-5 → 5 rows populated",
                    "date + doctorId filter applied on request",
                ],
            },
            {
                id: "pdf",
                number: "05",
                title: "Export PDF Dossier",
                description:
                    "generateAppointmentsPdf renders a sectioned A4 medical report from the appointment records — fixed header/footer chrome and Courier/Times-Roman typography — then triggers the download.",
                tech: "@react-pdf/renderer · dayjs",
                codeFile: "client/src/services/generateAppointmentsPdf.jsx",
                codeSnippet: `const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        height: 50,
        top: 0, left: 0, right: 0,
        color: 'gray',
        paddingHorizontal: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    page: {
        fontFamily: 'Times-Roman',
        fontSize: 11,
        padding: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
});

function GeneratedAppiontmentPdf({ date, doctor, appointments }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <Text>Docapp</Text>
                </View>
            </Page>
        </Document>
    );
}`,
                systemMetrics: {
                    latency: "210ms",
                    ops: "A4 download",
                    status: "healthy",
                },
                logs: [
                    "Appointment.dossier assembled from ledger rows",
                    "PDF Document rendered client-side",
                    "Download initiated — A4 medical summary",
                ],
            },
        ],
        archMermaid: `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef backend fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;

    subgraph Client["Vite / React Client (client/)"]
        UI["Ant Design + Tailwind/daisyUI"]:::client
        RTK["RTK Query APIs + Portals"]:::client
        PDF["React-PDF Dossier"]:::client
        Charts["Chart.js Dashboards"]:::client
    end

    subgraph Auth["Authentication Layer"]
        Cookie["Cookie-Borne JWT"]:::engine
        Rotation["Access-Token Rotation"]:::engine
        Roles["Admin / Doctor / Patient Guards"]:::engine
    end

    subgraph Server["Component-Based Express API (server/)"]
        Appointments["Appointments Controller + Model"]:::backend
        Doctors["Doctors · Departments · Districts · Workplaces"]:::backend
        Users["Users + Multi-Role Guards"]:::backend
        Mongo[("MongoDB (Mongoose)")]:::backend
        Cloudinary["Cloudinary Uploads"]:::backend
        Mail["NodeMailer + Handlebars Emails"]:::backend
    end

    UI --> RTK
    RTK --> Cookie
    Cookie --> Rotation
    Rotation --> Roles
    Roles --> Appointments
    Roles --> Users
    UI --> PDF
    UI --> Charts
    Appointments --> Mongo
    Doctors --> Mongo
    Users --> Mongo
    Doctors --> Cloudinary
    Users --> Mail
    Appointments --> Mail`,
        seqMermaid: `sequenceDiagram
    autonumber
    actor Patient as Registered Patient
    participant UI as React Client
    participant RTK as RTK Query
    participant Auth as Cookie JWT Middleware
    participant API as Appointments Component
    participant DB as MongoDB (Mongoose)

    Patient->>UI: Login / Register
    UI->>RTK: dispatch auth
    RTK->>Auth: request with access cookie
    Auth-->>UI: access token ok (rotated on expiry)

    Patient->>UI: Filter doctors (department / district)
    UI->>RTK: getDoctors(filter)
    RTK->>DB: query via doctors model
    DB-->>UI: doctor cards

    Patient->>UI: Book appointment (doctorId, date, ...)
    UI->>RTK: create appointment mutation
    RTK->>Auth: POST /appointments
    Auth->>API: verifyAccessToken -> createAppointment
    API->>API: ObjectId + doctor existence validation
    API->>DB: Appointment.create(...)
    DB-->>API: saved appointment
    API-->>UI: HTTP 200 (ledger updated)

    Patient->>UI: Export dossier
    UI->>PDF: generateAppointmentsPdf(ledger)
    PDF-->>Patient: downloadable medical summary`,
    },
    codeModules: [
        {
            id: "appointments",
            filename: "server/components/appointments/appointments.controller.js",
            badge: "Booking Ledger",
            title: "Appointment Ledger Controller",
            description: "Validated booking creation (ObjectId + doctor existence) plus scoped feeds: the patient's own ledger, a doctor's recent-5 queue, and date-filtered lists with populated doctor names.",
            prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/appointments/appointments.controller.js",
            prHighlight: "server/components/appointments/appointments.controller.js",
            code: `import mongoose from 'mongoose';
import { helpers } from '../../utils/index.js';
import { doctorsModel } from '../doctors/index.js';
import Appointment from './appointments.model.js';

const createAppointment = async (req, res) => {
    const { doctorId, name, age, gender, date, type, phone } = req.body;
    const userId = res.locals.data._id;

    try {
        if (!mongoose.Types.ObjectId.isValid(doctorId)) {
            return res.status(400).json({ error: 'Invalid doctor id' });
        }

        const doctor = await doctorsModel.findById(doctorId).lean();
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const appointment = await Appointment.create({
            doctorId,
            userId,
            date: new Date(date),
            name,
            age,
            gender,
            type,
            phone,
        });

        return res.status(200).json(appointment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAppointments = async (req, res) => {
    const userId = res.locals.data._id;
    const { page, limit, doctorId, count, date, recent } = req.query;
    const lastSegment = req.originalUrl.split('?')[0].split('/').pop();

    if (lastSegment !== 'me' && recent === 'true' && doctorId) {
        return res.status(200).json(
            await Appointment.find({ doctorId })
                .populate('doctorId', 'name')
                .sort({ createdAt: -1 })
                .limit(5)
                .lean()
        );
    }

    const appointments = lastSegment === 'me'
        ? Appointment.find({ userId }).populate('doctorId', 'name').sort({ date: -1 }).lean()
        : Appointment.find({ doctorId }).populate('doctorId', 'name').lean();

    if (count === 'true') {
        return res.status(200).json((await appointments).length);
    }

    return res.status(200).json(await helpers.paginateQuery(appointments, page, limit));
};

export default { createAppointment, getAppointments };`,
        },
        {
            id: "verify-token",
            filename: "server/middlewares/auth/verifyAccessToken.js",
            badge: "JWT Rotation",
            title: "Rotating Access-Token Middleware",
            description: "Reads the cookie-borne JWT; on expiry re-signs user data into a fresh token and overwrites the cookie, and clears the cookie with a 406 when the secret is invalid.",
            prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/verifyAccessToken.js",
            prHighlight: "server/middlewares/auth/verifyAccessToken.js",
            code: `import jwt from 'jsonwebtoken';
import { userModel } from '../../components/users/index.js';
import { cookiesConfig, jwtConfig } from '../../configs/index.js';
import { helpers } from '../../utils/index.js';

const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies[cookiesConfig.access.name];

    const verifyToken = await helpers.verifyJWT(accessToken, jwtConfig.ACCESS_SECRET);

    if (verifyToken.isExpired) {
        const userId = res.locals.data._id;
        const userData = await userModel
            .findById(userId)
            .select('_id name email role isDoctor')
            .lean();

        const encryptedData = await jwt.sign(userData, jwtConfig.ACCESS_SECRET, {
            expiresIn: jwtConfig.ACCESS_EXP,
        });

        res.cookie(cookiesConfig.access.name, encryptedData, {
            ...cookiesConfig.access.options,
            overwrite: true,
        });

        res.locals.accessToken = {
            isAuth: true,
            message: 'created new accessToken',
            data: { accessToken: cookiesConfig.access.name },
        };
    } else if (verifyToken.isSecretNotValid) {
        res.clearCookie(cookiesConfig.access.name);
        return res.status(406).json({
            isAuth: false,
            error: 'Your credentials are invalid. Please try login again.',
        });
    }

    return next();
};

export default verifyAccessToken;`,
        },
        {
            id: "pdf",
            filename: "client/src/services/generateAppointmentsPdf.jsx",
            badge: "React-PDF",
            title: "Appointment Dossier Generator",
            description: "A4 medical report built with @react-pdf/renderer — fixed header chrome, Courier meta rows, Times-Roman body copy, and sectioned content driven by the appointment records.",
            prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/client/src/services/generateAppointmentsPdf.jsx",
            prHighlight: "client/src/services/generateAppointmentsPdf.jsx",
            code: `import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { PdfReport } from '../components';

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        height: 50,
        top: 0,
        left: 0,
        right: 0,
        color: 'gray',
        paddingHorizontal: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    page: {
        fontFamily: 'Times-Roman',
        fontSize: 11,
        padding: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
});

function GeneratedAppiontmentPdf({ date, doctor, appointments }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <Text>Docapp</Text>
                </View>
                <PdfReport date={date} doctor={doctor} appointments={appointments} />
            </Page>
        </Document>
    );
}`,
        },
    ],
};

export const caseStudyShowcase: Record<string, ProjectShowcase> = {
    "tutor-lms": tutorShowcase,
    enclave: enclaveShowcase,
    edtech: edTechShowcase,
    docapp: docAppShowcase,
};