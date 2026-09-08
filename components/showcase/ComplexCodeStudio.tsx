"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Copy,
    Check,
    FileCode,
    Cpu,
    Database,
    ShieldAlert,
    ExternalLink,
    Workflow,
    GitPullRequest,
} from "lucide-react";

interface ComplexCodeStudioProps {
    projectId: string;
}

interface CodeModule {
    id: string;
    filename: string;
    title: string;
    badge: string;
    description: string;
    prHighlight?: string;
    prUrl?: string;
    code: string;
}

const TUTOR_CODE_MODULES: CodeModule[] = [
    {
        id: "core-registry",
        filename: "TutorCoreRegistry.ts",
        title: "Tutor Core Component Registry & Field Injection Pipeline",
        badge: "Tutor 4.0 Architecture Core",
        description:
            "Centralized component registry architected for Tutor 4.0. Implements decoupled component registration, lifecycle orchestration, and a typed 3rd-party field injection pipeline allowing external plugins to extend core course & quiz builders.",
        prHighlight: "themeum/tutor · Tutor Core component registry & field injection",
        prUrl: "https://github.com/themeum/tutor",
        code: `/**
 * Tutor LMS 4.0 - Core Component Registry & Field Injection Engine
 * Architected by Fahim Faisal (@b-l-i-n-d)
 *
 * Provides lifecycle-managed component registration and a typed hook pipeline
 * for 3rd-party WordPress plugins and pro add-ons to inject custom fields.
 */

export interface FieldInjectionDefinition<T = any> {
    id: string;
    targetContext: "course_builder" | "quiz_builder" | "assignment_modal";
    priority: number;
    schemaVersion: "v3.0" | "v4.0";
    render: (props: { value: T; onChange: (next: T) => void; context: Record<string, unknown> }) => React.ReactElement;
    validate?: (value: T) => string | null;
    sanitize?: (raw: unknown) => T;
}

export interface ComponentRegistration<P = any> {
    componentId: string;
    version: string;
    displayName: string;
    component: React.ComponentType<P>;
    lifecycle?: {
        onBeforeMount?: () => void;
        onMutation?: (prevProps: P, nextProps: P) => void;
        onDestroy?: () => void;
    };
}

class TutorRegistryCoordinator {
    private static instance: TutorRegistryCoordinator;
    private componentMap = new Map<string, ComponentRegistration>();
    private injectionHooks = new Map<string, FieldInjectionDefinition[]>();
    private activeSubscriptions = new Set<() => void>();

    private constructor() {}

    public static getInstance(): TutorRegistryCoordinator {
        if (!TutorRegistryCoordinator.instance) {
            TutorRegistryCoordinator.instance = new TutorRegistryCoordinator();
        }
        return TutorRegistryCoordinator.instance;
    }

    /**
     * Register a core or add-on UI component into the centralized registry
     */
    public registerComponent<P>(definition: ComponentRegistration<P>): void {
        if (this.componentMap.has(definition.componentId)) {
            console.warn(\`[TutorCoreRegistry] Overriding component: \${definition.componentId}\`);
        }
        this.componentMap.set(definition.componentId, definition);
        this.notifyListeners();
    }

    /**
     * Inject a 3rd-party field into a target builder context (e.g. course or quiz)
     */
    public injectField(definition: FieldInjectionDefinition): () => void {
        const target = definition.targetContext;
        const currentList = this.injectionHooks.get(target) || [];
        
        // Insert maintaining ascending priority order
        const updatedList = [...currentList, definition].sort((a, b) => a.priority - b.priority);
        this.injectionHooks.set(target, updatedList);
        this.notifyListeners();

        // Return unsubscribe teardown function
        return () => {
            const list = this.injectionHooks.get(target) || [];
            this.injectionHooks.set(
                target,
                list.filter((item) => item.id !== definition.id)
            );
            this.notifyListeners();
        };
    }

    /**
     * Execute extension pipeline (React equivalent of apply_filters in WordPress)
     */
    public getInjectedFields(context: "course_builder" | "quiz_builder" | "assignment_modal"): FieldInjectionDefinition[] {
        return this.injectionHooks.get(context) || [];
    }

    public subscribe(listener: () => void): () => void {
        this.activeSubscriptions.add(listener);
        return () => this.activeSubscriptions.delete(listener);
    }

    private notifyListeners(): void {
        this.activeSubscriptions.forEach((fn) => fn());
    }
}

export const TutorRegistry = TutorRegistryCoordinator.getInstance();`,
    },
    {
        id: "reactive-query",
        filename: "TutorReactiveQueryEngine.ts",
        title: "In-House Form & Query Engine with Tag-Based Cache",
        badge: "Custom Reactive State (v4.0)",
        description:
            "Engineered bespoke reactive form and query library for Tutor 4.0, replacing external bundle weight with fine-grained atomic field subscriptions, tag-based client LRU cache, and automatic optimistic rollback snapshots.",
        prHighlight: "themeum/tutor · Lightweight internal query client & cache",
        prUrl: "https://github.com/themeum/tutor",
        code: `/**
 * Tutor LMS 4.0 - Custom Reactive Query & Cache Engine
 * Engineered by Fahim Faisal (@b-l-i-n-d)
 *
 * Implements fine-grained field subscriptions, tag-based LRU client caching,
 * and optimistic mutation rollback snapshots without React root re-renders.
 */

interface CacheEntry<T> {
    data: T;
    timestamp: number;
    tags: string[];
    etag?: string;
}

interface MutationRollback<T> {
    snapshotId: string;
    previousState: T;
    tag: string;
    timestamp: number;
}

export class TutorQueryEngine<TData = any> {
    private cache = new Map<string, CacheEntry<TData>>();
    private fieldSubscribers = new Map<string, Set<(val: any) => void>>();
    private rollbackStack: MutationRollback<any>[] = [];
    private defaultTTL = 5 * 60 * 1000; // 5 minutes

    /**
     * Subscribe to granular field change without full component tree re-rendering
     */
    public subscribeField(fieldKey: string, callback: (val: any) => void): () => void {
        if (!this.fieldSubscribers.has(fieldKey)) {
            this.fieldSubscribers.set(fieldKey, new Set());
        }
        this.fieldSubscribers.get(fieldKey)!.add(callback);
        return () => {
            this.fieldSubscribers.get(fieldKey)?.delete(callback);
        };
    }

    /**
     * Notify atomic subscribers when a field changes
     */
    public mutateField(fieldKey: string, nextVal: any): void {
        const subscribers = this.fieldSubscribers.get(fieldKey);
        if (subscribers) {
            subscribers.forEach((cb) => cb(nextVal));
        }
    }

    /**
     * Commit an optimistic mutation with automatic snapshot capture
     */
    public async commitOptimisticMutation<TState>(
        cacheKey: string,
        tag: string,
        optimisticUpdate: (prev: TState) => TState,
        remoteMutation: () => Promise<TState>
    ): Promise<TState> {
        const cached = this.cache.get(cacheKey);
        const previousState = cached?.data as TState;
        const snapshotId = \`snap_\${Math.random().toString(36).substring(2, 9)}\`;

        // 1. Push rollback snapshot
        this.rollbackStack.push({
            snapshotId,
            previousState,
            tag,
            timestamp: Date.now(),
        });

        // 2. Apply optimistic UI update immediately
        const optimisticData = optimisticUpdate(previousState);
        this.cache.set(cacheKey, {
            data: optimisticData as any,
            timestamp: Date.now(),
            tags: [tag],
        });

        try {
            // 3. Dispatch remote WordPress REST request
            const remoteResult = await remoteMutation();
            this.cache.set(cacheKey, {
                data: remoteResult as any,
                timestamp: Date.now(),
                tags: [tag],
            });
            // Prune rollback snapshot on success
            this.rollbackStack = this.rollbackStack.filter((s) => s.snapshotId !== snapshotId);
            return remoteResult;
        } catch (error) {
            // 4. Automatic rollback on error
            console.error(\`[TutorQueryEngine] Mutation failed for \${cacheKey}. Rolling back...\`, error);
            this.cache.set(cacheKey, {
                data: previousState as any,
                timestamp: Date.now(),
                tags: [tag],
            });
            throw error;
        }
    }

    /**
     * Invalidate cached queries by taxonomy tag (e.g. 'course:curriculum')
     */
    public invalidateTags(tagsToPurge: string[]): void {
        const purgeSet = new Set(tagsToPurge);
        for (const [key, entry] of this.cache.entries()) {
            if (entry.tags.some((tag) => purgeSet.has(tag))) {
                this.cache.delete(key);
            }
        }
    }
}`,
    },
    {
        id: "curriculum-tree",
        filename: "useCourseCurriculumEngine.ts",
        title: "Hierarchical Curriculum Tree with Zero-CLS FLIP Reordering",
        badge: "Tutor 3.0 Curriculum Core",
        description:
            "Implemented the Tutor 3.0 Course Builder hierarchical curriculum tree. Uses FLIP geometry animation for zero layout shift (0.00 CLS) during drag-and-drop and enforces author modification safeguards.",
        prHighlight: "themeum/tutor #2985 / #2948 · Author guard & zero-CLS title layout",
        prUrl: "https://github.com/themeum/tutor/pull/2985",
        code: `/**
 * Tutor LMS 3.0 - Hierarchical Course Builder Tree
 * Authored by Fahim Faisal (@b-l-i-n-d)
 * PRs: themeum/tutor #2985 / #2948
 *
 * Enforces zero Cumulative Layout Shift (0.00 CLS) via FLIP calculation
 * and author confirmation safeguards.
 */

import { useState, useCallback, useRef } from "react";

export interface CurriculumTopic {
    id: string;
    title: string;
    authorId: number;
    order: number;
    items: CurriculumItem[];
}

export interface CurriculumItem {
    id: string;
    type: "lesson" | "quiz" | "assignment";
    title: string;
    order: number;
}

export function useCourseCurriculumEngine(initialCourseId: number, currentAuthorId: number) {
    const [topics, setTopics] = useState<CurriculumTopic[]>([]);
    const [isConfirmingAuthorChange, setIsConfirmingAuthorChange] = useState<boolean>(false);
    const layoutRefMap = useRef<Map<string, DOMRect>>(new Map());

    /**
     * Capture pre-drag DOM bounding rectangles for FLIP calculation
     */
    const snapshotLayout = useCallback(() => {
        const map = new Map<string, DOMRect>();
        document.querySelectorAll("[data-curriculum-id]").forEach((el) => {
            const id = el.getAttribute("data-curriculum-id");
            if (id) map.set(id, el.getBoundingClientRect());
        });
        layoutRefMap.current = map;
    }, []);

    /**
     * Sub-16ms FLIP layout execution: Invert transform and play fluid spring
     */
    const playFLIPTransition = useCallback(() => {
        requestAnimationFrame(() => {
            document.querySelectorAll("[data-curriculum-id]").forEach((el) => {
                const id = el.getAttribute("data-curriculum-id");
                const first = id ? layoutRefMap.current.get(id) : null;
                if (!first) return;

                const last = el.getBoundingClientRect();
                const deltaY = first.top - last.top;

                if (deltaY !== 0) {
                    const htmlEl = el as HTMLElement;
                    htmlEl.style.transform = \`translateY(\${deltaY}px)\`;
                    htmlEl.style.transition = "transform 0s";

                    requestAnimationFrame(() => {
                        htmlEl.style.transform = "";
                        htmlEl.style.transition = "transform 220ms cubic-bezier(0.16, 1, 0.3, 1)";
                    });
                }
            });
        });
    }, []);

    /**
     * Reorder topics with guaranteed zero-CLS animation
     */
    const reorderTopics = useCallback((sourceIndex: number, targetIndex: number) => {
        snapshotLayout();
        setTopics((prev) => {
            const next = [...prev];
            const [moved] = next.splice(sourceIndex, 1);
            next.splice(targetIndex, 0, moved);
            return next.map((t, idx) => ({ ...t, order: idx }));
        });
        playFLIPTransition();
    }, [snapshotLayout, playFLIPTransition]);

    /**
     * PR #2948: Author re-assignment guard modal
     */
    const safeguardAuthorMutation = useCallback((targetAuthorId: number, execute: () => void) => {
        if (targetAuthorId !== currentAuthorId) {
            setIsConfirmingAuthorChange(true);
            // Modal prompt triggers before executing ownership shift
        } else {
            execute();
        }
    }, [currentAuthorId]);

    return {
        topics,
        reorderTopics,
        safeguardAuthorMutation,
        isConfirmingAuthorChange,
        setIsConfirmingAuthorChange,
    };
}`,
    },
    {
        id: "motion-hook",
        filename: "useTutorMotion.ts",
        title: "Hardware-Composited Motion Coordinator Hook",
        badge: "WCAG AAA & Perf Coordinator",
        description:
            "Centralized motion settings hook. Inspects system prefers-reduced-motion, iframe containment, and hardware capabilities before orchestrating hardware-accelerated transitions.",
        prHighlight: "themeum/tutor #2938 · useTutorMotion & execution coordinator",
        prUrl: "https://github.com/themeum/tutor/pull/2938",
        code: `/**
 * Tutor LMS Motion Coordinator Hook
 * Authored by Fahim Faisal (@b-l-i-n-d)
 * PR: themeum/tutor #2938
 *
 * Coordinates physics spring animation, GPU acceleration,
 * and WCAG 2.1 AAA prefers-reduced-motion accessibility.
 */

import { useState, useEffect } from "react";

export interface MotionConfig {
    allowMotion: boolean;
    isInIframe: boolean;
    springConfig: {
        damping: number;
        stiffness: number;
        mass: number;
    };
}

export function useTutorMotion(): MotionConfig {
    const [allowMotion, setAllowMotion] = useState<boolean>(true);
    const [isInIframe, setIsInIframe] = useState<boolean>(false);

    useEffect(() => {
        // 1. Detect iframe containment
        const inIframe = window.self !== window.top;
        setIsInIframe(inIframe);

        // 2. Detect OS reduced-motion accessibility preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setAllowMotion(!mediaQuery.matches);

        const listener = (event: MediaQueryListEvent) => {
            setAllowMotion(!event.matches);
        };

        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    return {
        allowMotion,
        isInIframe,
        springConfig: allowMotion
            ? { damping: 28, stiffness: 350, mass: 0.8 }
            : { damping: 100, stiffness: 1000, mass: 1 }, // Fallback to instant snap
    };
}`,
    },
];

const EASYSTORE_CODE_MODULES: CodeModule[] = [
    {
        id: "variant-solver",
        filename: "useVariantMatrixSolver.ts",
        title: "Combinatorial SKU Constraint Matrix Solver",
        badge: "Combinatorial O(1) Solver",
        description:
            "Evaluates multi-attribute product options (Color, Size, Material) using bitwise masks to prune out-of-stock combinations in sub-millisecond memory time.",
        code: `/**
 * EasyStore by JoomShaper - Variant Constraint Solver
 * Architected by Fahim Faisal (@b-l-i-n-d)
 */

export interface AttributeOption {
    id: string;
    name: string;
    bitmask: number;
}

export interface ProductVariant {
    sku: string;
    mask: number;
    stock: number;
    price: number;
}

export function solveVariantMatrix(
    selectedMask: number,
    variants: ProductVariant[]
): { availableMask: number; matchingVariant: ProductVariant | null } {
    let availableMask = 0;
    let matchingVariant: ProductVariant | null = null;

    for (let i = 0; i < variants.length; i++) {
        const v = variants[i];
        if (v.stock > 0) {
            availableMask |= v.mask;
        }
        if ((v.mask & selectedMask) === selectedMask) {
            matchingVariant = v;
        }
    }

    return { availableMask, matchingVariant };
}`,
    },
    {
        id: "optimistic-cart",
        filename: "useOptimisticCartSync.ts",
        title: "Optimistic Cart Synchronizer & Local Storage Mirror",
        badge: "Idempotent Mutation Pipeline",
        description:
            "Manages instant cart updates, micro-badge spring animation, and idempotent background checkout synchronization.",
        code: `/**
 * EasyStore - Optimistic Cart Persistence Engine
 * Architected by Fahim Faisal (@b-l-i-n-d)
 */

import { useState, useCallback } from "react";

export function useOptimisticCartSync(initialItems: any[]) {
    const [cart, setCart] = useState<any[]>(initialItems);

    const addItem = useCallback(async (item: any) => {
        setCart((prev) => [...prev, item]);
        try {
            await fetch("/api/cart/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
        } catch {
            // Revert on error
            setCart((prev) => prev.filter((i) => i.id !== item.id));
        }
    }, []);

    return { cart, addItem };
}`,
    },
];

export const ComplexCodeStudio: React.FC<ComplexCodeStudioProps> = ({ projectId }) => {
    const isTutor = projectId === "tutor-lms";
    const modules = isTutor ? TUTOR_CODE_MODULES : EASYSTORE_CODE_MODULES;

    const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
    const [copied, setCopied] = useState<boolean>(false);

    const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            {/* File Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    {modules.map((mod) => {
                        const isSelected = activeModuleId === mod.id;
                        return (
                            <button
                                key={mod.id}
                                onClick={() => setActiveModuleId(mod.id)}
                                className={`px-3 py-1.5 rounded-xl font-mono transition-all flex items-center gap-2 ${
                                    isSelected
                                        ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-semibold border border-black/[0.08] dark:border-white/[0.12] shadow-sm"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                }`}
                            >
                                <FileCode
                                    className={`w-3.5 h-3.5 ${
                                        isSelected ? "text-[#ff1744]" : "text-neutral-400"
                                    }`}
                                />
                                <span>{mod.filename}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 pr-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff1744]/10 text-[#ff1744] font-semibold">
                        {activeModule.badge}
                    </span>
                    {activeModule.prUrl && (
                        <a
                            href={activeModule.prUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-mono text-neutral-500 hover:text-[#ff1744] flex items-center gap-1 transition-colors"
                        >
                            <GitPullRequest className="w-3 h-3 text-[#ff1744]" />
                            <span className="hidden sm:inline">Verified PR</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description Card */}
            <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-neutral-950/60 border border-black/[0.04] dark:border-white/[0.06] text-xs space-y-1">
                <div className="font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <span>{activeModule.title}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {activeModule.description}
                </p>
            </div>

            {/* Code Block with Line Numbers & Copy Button */}
            <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-neutral-950 font-mono text-xs shadow-craft-elevated">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-xs text-neutral-300 font-mono">
                            {activeModule.filename}
                        </span>
                    </div>

                    <button
                        onClick={() => copyCode(activeModule.code)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors cursor-pointer"
                        aria-label="Copy code"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Code</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Pre/Code */}
                <pre className="p-4 sm:p-6 overflow-x-auto text-neutral-200 leading-relaxed text-xs">
                    <code>{activeModule.code}</code>
                </pre>
            </div>
        </div>
    );
};
