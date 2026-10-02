import type { ProjectShowcase } from "@/types/portfolio";

const tutorShowcase: ProjectShowcase = {
  graph: {
    navTitle: "Interactive Architecture Map",
    navSubtitle: "Inspect modular boundaries, cache hierarchies, and transactional pipelines",
    title: "Tutor LMS Architectural Graph",
    countLabel: "12 Core Systems",
    verifyLabel: "Verified PRs & Commits by Fahim Faisal (b-l-i-n-d)",
    verifyUrl: "https://github.com/b-l-i-n-d",
    inspectLabel: "Inspect Pull Request",
    commitsHeading: "Verified Production Commits (authored by Fahim Faisal / b-l-i-n-d):",
    commitPrefix: "git:",
    columns: [
      {
        title: "Presentation & Builders",
        nodeIds: ["curriculum", "quiz", "content-bank", "field-injection"],
        accent: "rose",
      },
      {
        title: "Core Architecture & DX",
        nodeIds: ["component-registry", "form-query-lib", "motion", "build-pipeline"],
        accent: "emerald",
      },
      {
        title: "Types, Caching & REST",
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
        ],
        description:
          "Implemented the Tutor 3.0 Course Builder. Hierarchical curriculum tree supporting drag-and-drop topics and lessons, dynamic title updates without Cumulative Layout Shift (CLS), and modal safeguards for author re-assignments.",
        prHighlight: "themeum/tutor #2948 · Author confirmation guard & zero-CLS title layout",
        prUrl: "https://github.com/themeum/tutor/pull/2948",
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
          "fix(quiz): ensure quiz summary total marks uses get_quiz_total_marks (#2990)",
        ],
        description:
          "Engineered a highly scalable Quiz Builder capable of handling complex curriculums with dozens of question types, randomized ordering, dynamic grading calculation, LaTeX math sanitization, and pointer-event security safeguards.",
        prHighlight:
          "themeum/tutor #2931 / #2990 · Scalable Quiz Builder, LaTeX sanitizer & total-marks correctness",
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
        description:
          "Course bundling engine permitting multi-tier pricing, role-based discount permissions, and real-time total recalculations without database latency or checkout desync.",
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
      id: "component-registry",
      filename: "assets/core/ts/ComponentRegistry.ts",
      badge: "Core · Registry",
      title: "Component Registry (Lazy, Typed, Alpine-Bridged)",
      description:
        "The v4 core runtime singleton. Typed Maps for eager components and services, plus a lazy-loader map and an in-flight promiser map that de-duplicates concurrent loads. registerAll() ingests bulk meta, loadComponent() awaits and caches async loaders, initWithAlpine() mounts every component as Alpine.data('tutorX'), and exposeToWindow() publishes services and globals onto window.TutorCore for 3rd-party add-ons.",
      prUrl: "https://github.com/themeum/tutor/blob/dev/assets/core/ts/ComponentRegistry.ts",
      prHighlight: "themeum/tutor · dev — core runtime (no PR boundary)",
      code: `import { type Alpine } from 'alpinejs';

import { type AlpineComponentMeta, type LazyComponentLoader, type ServiceMeta, type TutorCore } from '@Core/ts/types';
import { makeFirstCharacterUpperCase } from '@Core/ts/utils/string';

interface RegisterAllOptions {
  components?: AlpineComponentMeta[];
  services?: ServiceMeta[];
}

type RegistryType = 'component' | 'service';

interface GetOptions {
  name: string;
  type: RegistryType;
}

interface RegisterOptions {
  type: RegistryType;
  meta: AlpineComponentMeta | ServiceMeta;
}

class Registry {
  private components = new Map<string, AlpineComponentMeta>();
  private lazyComponents = new Map<string, LazyComponentLoader>();
  private loadingComponents = new Map<string, Promise<void>>();
  private services = new Map<string, ServiceMeta>();

  register({ type, meta }: RegisterOptions): void {
    if (type === 'component') {
      const componentMeta = meta as AlpineComponentMeta;
      if (!this.components.has(componentMeta.name)) {
        this.components.set(componentMeta.name, componentMeta);
      }
    } else {
      const serviceMeta = meta as ServiceMeta;
      if (!this.services.has(serviceMeta.name)) {
        this.services.set(serviceMeta.name, serviceMeta);
        this.exposeToWindow({ type: 'service', items: [serviceMeta] });
      }
    }
  }

  registerLazy(loaders: Record<string, LazyComponentLoader>): void {
    Object.entries(loaders).forEach(([name, loader]) => {
      this.lazyComponents.set(name, loader);
    });
  }

  registerAll({ components = [], services = [] }: RegisterAllOptions): void {
    for (const component of components) {
      this.register({ type: 'component', meta: component });
    }
    for (const service of services) {
      this.register({ type: 'service', meta: service });
    }
  }

  get<T = unknown>({ name, type }: GetOptions): AlpineComponentMeta | T | undefined {
    const map = type === 'component' ? this.components : this.services;
    const item = map.get(name);
    return type === 'service' ? ((item as ServiceMeta)?.instance as T) : (item as AlpineComponentMeta);
  }

  has({ name, type }: GetOptions): boolean {
    return type === 'component' ? this.components.has(name) : this.services.has(name);
  }

  async loadComponent(name: string): Promise<void> {
    // Already registered.
    if (this.components.has(name)) {
      return;
    }

    // Already being loaded.
    const existingPromise = this.loadingComponents.get(name);
    if (existingPromise) {
      return existingPromise;
    }

    const loader = this.lazyComponents.get(name);

    if (!loader) {
      return;
    }

    const loadingPromise = (async () => {
      try {
        const meta = await loader();

        this.register({
          type: 'component',
          meta,
        });
      } finally {
        this.loadingComponents.delete(name);
      }
    })();

    this.loadingComponents.set(name, loadingPromise);

    return loadingPromise;
  }

  async loadComponents(names: string[]): Promise<void> {
    await Promise.all(names.map((name) => this.loadComponent(name)));
  }

  private exposeToWindow({ type, items }: { type: RegistryType; items: (AlpineComponentMeta | ServiceMeta)[] }): void {
    if (typeof window === 'undefined') return;

    const TutorCore: TutorCore = window.TutorCore || {};

    for (const meta of items) {
      if (type === 'service') {
        TutorCore[meta.name] = (meta as ServiceMeta).instance;
        continue;
      }

      if ((meta as AlpineComponentMeta).global) {
        TutorCore[meta.name] = (meta as AlpineComponentMeta).component;
      }
    }

    window.TutorCore = TutorCore;
  }

  exposeComponents(componentNames?: string[]): void {
    const components = componentNames
      ? Array.from(this.components.values()).filter((m) => componentNames.includes(m.name))
      : Array.from(this.components.values());

    this.exposeToWindow({ type: 'component', items: components });
  }

  initWithAlpine(Alpine: Alpine): void {
    for (const meta of Array.from(this.components.values())) {
      Alpine.data(\`tutor\${makeFirstCharacterUpperCase(meta.name)}\`, meta.component);
    }

    this.exposeToWindow({
      type: 'component',
      items: Array.from(this.components.values()),
    });
  }
}

export const TutorComponentRegistry = new Registry();`,
    },
    {
      id: "form-query-lib",
      filename: "assets/core/ts/services/Form.ts",
      badge: "Core · Form & Query",
      title: "Core Form Service (Event-Driven Instance Registry)",
      description:
        "The v4 core form control surface. Alpine form components self-register into a Map keyed by form id via FORM_REGISTER / FORM_UNREGISTER custom events, then any code — add-on, console, other Alpine components — drives them programmatically: getValues/setValue/reset/trigger/clearErrors/setError/setFocus/getFormState/watch. It ships as window.TutorCore.form alongside its sibling QueryService (window.TutorCore.query) — a TanStack Query-equivalent rebuilt on Alpine.reactive with timestamped caching, stale-time hydration and pattern invalidation.",
      prUrl: "https://github.com/themeum/tutor/blob/dev/assets/core/ts/services/Form.ts",
      prHighlight: "themeum/tutor · dev — core runtime (no PR boundary)",
      code: `import { type FormControlMethods, type FormState } from '@Core/ts/components/form';
import { TUTOR_CUSTOM_EVENTS } from '@Core/ts/constant';
import { type ServiceMeta } from '@Core/ts/types';

/**
 * FormService: programmatic API for interacting with form instances.
 * Provides methods to access form state and control form behavior from outside Alpine components.
 */
export class FormService {
  private forms: Map<string, FormControlMethods> = new Map();

  constructor() {
    this.setupEventListeners();
  }

  /** Setup event listeners for form events */
  private setupEventListeners(): void {
    document.addEventListener(TUTOR_CUSTOM_EVENTS.FORM_REGISTER, ((event: CustomEvent) => {
      const { id, instance } = event.detail;
      this.register(id, instance);
    }) as EventListener);

    document.addEventListener(TUTOR_CUSTOM_EVENTS.FORM_UNREGISTER, ((event: CustomEvent) => {
      const { id } = event.detail;
      this.unregister(id);
    }) as EventListener);
  }

  /**
   * Register a form instance with the service
   * @internal Called by form component during initialization
   */
  register(id: string, formInstance: FormControlMethods): void {
    this.forms.set(id, formInstance);
  }

  /**
   * Unregister a form instance from the service
   * @internal Called by form component during cleanup
   */
  unregister(id: string): void {
    this.forms.delete(id);
  }

  /**
   * Get a form instance by ID
   * @throws Error if form not found
   */
  private getForm(id: string): FormControlMethods {
    const form = this.forms.get(id);
    if (!form) {
      throw new Error(\`Form with id "\${id}" not found. Make sure the form is initialized with the correct id.\`);
    }
    return form;
  }

  /**
   * Get all values from a form
   * @param id - The form ID
   * @returns Object containing all form values
   */
  getValues(id: string): Record<string, unknown> {
    return this.getForm(id).watch() as Record<string, unknown>;
  }

  /**
   * Get a specific field value from a form
   * @param id - The form ID
   * @param name - The field name
   * @returns The field value
   */
  getValue(id: string, name: string): unknown {
    return this.getForm(id).getValue(name);
  }

  /**
   * Set a field value in a form
   * @param id - The form ID
   * @param name - The field name
   * @param value - The value to set
   * @param options - Optional settings for validation, touch, and dirty state
   */
  setValue(
    id: string,
    name: string,
    value: unknown,
    options?: { shouldValidate?: boolean; shouldTouch?: boolean; shouldDirty?: boolean },
  ): void {
    this.getForm(id).setValue(name, value, options);
  }

  /**
   * Set multiple field values in a form
   * @param id - The form ID
   * @param values - Object containing field names and values
   * @param options - Optional settings for validation, touch, and dirty state
   */
  setValues(
    id: string,
    values: Record<string, unknown>,
    options?: { shouldValidate?: boolean; shouldTouch?: boolean; shouldDirty?: boolean },
  ): void {
    const form = this.getForm(id);
    for (const [name, value] of Object.entries(values)) {
      form.setValue(name, value, options);
    }
  }

  /**
   * Reset a form to its default values or provided values
   * @param id - The form ID
   * @param values - Optional values to reset to (defaults to initial values)
   */
  reset(id: string, values?: Record<string, unknown>): void {
    this.getForm(id).reset(values);
  }

  /**
   * Trigger validation for specific field(s) or all fields
   * @param id - The form ID
   * @param name - Optional field name or array of field names. Omit to validate all fields.
   * @returns Promise resolving to true if valid, false otherwise
   */
  async trigger(id: string, name?: string | string[]): Promise<boolean> {
    return this.getForm(id).trigger(name);
  }

  /**
   * Clear errors for specific field(s) or all fields
   * @param id - The form ID
   * @param name - Optional field name or array of field names. Omit to clear all errors.
   */
  clearErrors(id: string, name?: string | string[]): void {
    this.getForm(id).clearErrors(name);
  }

  /**
   * Set an error for a specific field
   * @param id - The form ID
   * @param name - The field name
   * @param error: { type: string; message: string }
   */
  setError(id: string, name: string, error: { type: string; message: string }): void {
    this.getForm(id).setError(name, error);
  }

  /**
   * Set focus on a specific field
   * @param id - The form ID
   * @param name - The field name
   * @param options - Optional settings for selection behavior
   */
  setFocus(id: string, name: string, options?: { shouldSelect?: boolean }): void {
    this.getForm(id).setFocus(name, options);
  }

  /**
   * Get the complete form state snapshot
   * @param id - The form ID
   * @returns Object containing all form state
   */
  getFormState(id: string): FormState {
    return this.getForm(id).getFormState();
  }

  /**
   * Watch a specific field value
   * @param id - The form ID
   * @param name - The field name
   * @returns The current field value
   */
  watch(id: string, name: string): unknown {
    return this.getForm(id).watch(name);
  }

  /**
   * Check if a form exists
   * @param id - The form ID
   * @returns True if form exists, false otherwise
   */
  hasForm(id: string): boolean {
    return this.forms.has(id);
  }
}

export const formServiceMeta: ServiceMeta = {
  name: 'form',
  instance: new FormService(),
};`,
    },
    {
      id: "course-builder-slot",
      filename: "assets/src/js/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx",
      badge: "Core · Field Injection",
      title: "Course Builder Slot Registry (3rd-Party Injection Engine)",
      description:
        "The extensibility hook of the v4 course builder. A typed slot tree (Basic / Curriculum — Lesson, Quiz, Assignment — / Additional) with default injection points; updateSection() merges registrations through immer and sorts by priority; the provider then exposes registerField/registerContent behind dotted SectionPaths as a window.Tutor.CourseBuilder public API so add-ons inject fields and block content into the builder without forking it.",
      prUrl:
        "https://github.com/themeum/tutor/blob/dev/assets/src/js/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx",
      prHighlight: "themeum/tutor · dev — core runtime (no PR boundary)",
      code: `import React, { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { produce } from 'immer';

import {
  type InjectedContent,
  type InjectedField,
  type InjectionSlots,
  type SectionPath,
} from '@TutorShared/utils/types';

type CurriculumType = 'Lesson' | 'Quiz' | 'Assignment';

type SectionData<T> = Record<string, T[]>;
interface CurriculumData<T> {
  Lesson: SectionData<T>;
  Quiz: SectionData<T>;
  Assignment: SectionData<T>;
}

export interface CourseBuilderData<T> {
  Basic: SectionData<T>;
  Curriculum: CurriculumData<T>;
  Additional: SectionData<T>;
}

const defaultCourseBuilderState = {
  fields: {
    Basic: {
      after_description: [],
      after_settings: [],
    },
    Curriculum: {
      Lesson: {
        after_description: [],
        bottom_of_sidebar: [],
      },
      Quiz: {
        after_question_description: [],
        bottom_of_question_sidebar: [],
        bottom_of_settings: [],
      },
      Assignment: {
        after_description: [],
        bottom_of_sidebar: [],
      },
    },
    Additional: {
      after_certificates: [],
      bottom_of_sidebar: [],
    },
  },
  contents: {
    Basic: {
      after_description: [],
      after_settings: [],
    },
    Curriculum: {
      Lesson: {
        after_description: [],
        bottom_of_sidebar: [],
      },
      Quiz: {
        after_question_description: [],
        bottom_of_question_sidebar: [],
        bottom_of_settings: [],
      },
      Assignment: {
        after_description: [],
        bottom_of_sidebar: [],
      },
    },
    Additional: {
      after_certificates: [],
      bottom_of_sidebar: [],
    },
  },
};

type CourseBuilderContextType = {
  fields: CourseBuilderData<InjectedField>;
  contents: CourseBuilderData<InjectedContent>;
  registerField: (section: SectionPath, fields: InjectedField | InjectedField[]) => void;
  registerContent: (section: SectionPath, content: InjectedContent) => void;
};

const updateSection = <T extends { priority?: number }>(
  currentState: CourseBuilderData<T>,
  section: SectionPath,
  items: T[],
): CourseBuilderData<T> => {
  return produce(currentState, (draft) => {
    const sectionPath = section.split('.') as [keyof InjectionSlots, CurriculumType | undefined, string];
    const [root, sub, slot] =
      sectionPath.length > 2 ? sectionPath : [sectionPath[0], undefined, sectionPath[sectionPath.length - 1]];

    const target = sub ? draft[root][sub] : draft[root];

    if (slot && target[slot]) {
      target[slot] = [...target[slot], ...items].sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
    }
  });
};

const registerField = (
  previousFields: CourseBuilderData<InjectedField>,
  section: SectionPath,
  fields: InjectedField | InjectedField[],
): CourseBuilderData<InjectedField> => {
  const items = Array.isArray(fields) ? fields : [fields];
  return updateSection(previousFields, section, items);
};

const registerContent = (
  previousContents: CourseBuilderData<InjectedContent>,
  section: SectionPath,
  content: InjectedContent,
): CourseBuilderData<InjectedContent> => {
  return updateSection(previousContents, section, [content]);
};

const CourseBuilderSlotContext = createContext<CourseBuilderContextType>({
  fields: defaultCourseBuilderState.fields,
  contents: defaultCourseBuilderState.contents,
  registerField: () => {},
  registerContent: () => {},
});

export const CourseBuilderSlotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<CourseBuilderData<InjectedField>>(defaultCourseBuilderState.fields);
  const [contents, setContents] = useState<CourseBuilderData<InjectedContent>>(defaultCourseBuilderState.contents);

  const handleRegisterField = useCallback((section: SectionPath, fields: InjectedField | InjectedField[]) => {
    setFields((prev) => registerField(prev, section, fields));
  }, []);

  const handleRegisterContent = useCallback((section: SectionPath, content: InjectedContent) => {
    setContents((prev) => registerContent(prev, section, content));
  }, []);

  useEffect(() => {
    const createCurriculumAPI = (type: CurriculumType) => ({
      registerField: (slot: InjectionSlots['Curriculum'][typeof type], fields: InjectedField | InjectedField[]) =>
        handleRegisterField(\`Curriculum.\${type}.\${slot}\` as 'Curriculum.Lesson.after_description', fields),
      registerContent: (slot: InjectionSlots['Curriculum'][typeof type], content: InjectedContent) =>
        handleRegisterContent(\`Curriculum.\${type}.\${slot}\` as 'Curriculum.Lesson.after_description', content),
    });

    window.Tutor = {
      CourseBuilder: {
        Basic: {
          registerField: (slot: InjectionSlots['Basic'], fields) => handleRegisterField(\`Basic.\${slot}\`, fields),
          registerContent: (slot: InjectionSlots['Basic'], contents) =>
            handleRegisterContent(\`Basic.\${slot}\`, contents),
        },
        Curriculum: {
          Lesson: createCurriculumAPI('Lesson'),
          Quiz: createCurriculumAPI('Quiz'),
          Assignment: createCurriculumAPI('Assignment'),
        },
        Additional: {
          registerField: (slot: InjectionSlots['Additional'], fields) =>
            handleRegisterField(\`Additional.\${slot}\`, fields),
          registerContent: (slot: InjectionSlots['Additional'], contents) =>
            handleRegisterContent(\`Additional.\${slot}\`, contents),
        },
      },
    };
  }, [handleRegisterField, handleRegisterContent]);

  const contextValue = useMemo(
    () => ({
      fields,
      contents,
      registerField: handleRegisterField,
      registerContent: handleRegisterContent,
    }),
    [fields, contents, handleRegisterField, handleRegisterContent],
  );

  return <CourseBuilderSlotContext.Provider value={contextValue}>{children}</CourseBuilderSlotContext.Provider>;
};
export const useCourseBuilderSlot = () => {
  const context = useContext(CourseBuilderSlotContext);

  if (!context) {
    throw new Error('useCourseBuilderSlot must be used within CourseBuilderSlotProvider');
  }

  return context;
};`,
    },
  ],
};

export default tutorShowcase;
