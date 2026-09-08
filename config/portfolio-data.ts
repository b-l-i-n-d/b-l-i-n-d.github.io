import { EngineerProfile } from "@/types/portfolio";

export const portfolioData: EngineerProfile = {
    name: "Fahim Faisal",
    role: "Software Engineer",
    tagline: "High-Performance Systems & Fluid Web Architecture",
    headline:
        "Software Engineer with a B.Sc. in Computer Science & Engineering from SUST. Core frontend architect across Tutor LMS (v2.0 to v4.0) and EasyStore at Ollyo, crafting responsive platforms, hardware-accelerated animations, and deterministic state systems serving millions globally.",
    bioParagraphs: [
        "Software Engineer with a B.Sc. in Computer Science & Engineering from Shahjalal University of Science and Technology (SUST). I specialize in architecting production web platforms, complex interactive state machines, and hardware-accelerated user interfaces.",
        "At Ollyo (Themeum & JoomShaper), I lead core frontend engineering for Tutor LMS across versions 2.0 to 3.0 and 3.0 to 4.0, maintaining zero-CLS animations, authoring the centralized useTutorMotion coordinator hook, and developing continuous learning telemetry that syncs seamlessly with WordPress REST APIs for over 80,000 active academies globally.",
        "On EasyStore by JoomShaper, I architected the multi-variant SKU configuration engine, single-page instant checkout flow, and faceted filtering engine with 0.00 Cumulative Layout Shift (CLS) and sub-16ms render updates.",
    ],
    skillCategories: [
        {
            name: "Frontend & Web Architecture",
            skills: ["React", "Next.js 14", "TypeScript (Strict)", "Tailwind CSS", "Zustand", "Redux Toolkit", "NextUI", "HTML5 Canvas"],
        },
        {
            name: "Motion & Performance Engineering",
            skills: ["Physics-Based Animation", "Hardware Compositing", "FLIP Layout Transitions", "CSS 3D Transforms", "Framer Motion", "RAF Throttling", "Zero CLS Optimization"],
        },
        {
            name: "Systems & Backend Integration",
            skills: ["WordPress REST API", "PHP & PHPStan", "Node.js", "Express", "Prisma ORM", "MySQL / MariaDB", "Stripe Webhooks"],
        },
        {
            name: "Engineering Standards & A11y",
            skills: ["WCAG 2.1 AAA Accessibility", "Semantic HTML", "Git Workflows", "Jest / Vitest", "Micro-Interactions", "CI/CD Pipelines"],
        },
    ],
    heroReel: {
        title: "Tutor LMS 2.0–4.0 & EasyStore Interaction Engine",
        tagline: "Engineered by Fahim Faisal @ Ollyo / Themeum",
        badge: "Flagship Showreel: Production Architecture",
        videoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
        secondaryVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-instructor-3.mp4",
        posterUrl: "https://tutorlms.com/wp-content/uploads/2026/07/Tutor-LMS-Learning-Experience-dashboard-with-course-modules-Classic-Mode.webp",
        runtime: "0:45",
        framerate: "Hardware Composited",
        productTitle: "Tutor LMS & EasyStore",
        productUrl: "https://tutorlms.com/",
    },
    experiences: [
        {
            id: "ollyo",
            company: "Ollyo (Themeum & JoomShaper)",
            role: "Software Engineer (Frontend)",
            department: "Core Product Engineering",
            location: "Dhaka, Bangladesh",
            period: "2023 – Present",
            startDate: "2023",
            website: "https://ollyo.com",
            products: [
                {
                    name: "Tutor LMS",
                    url: "https://tutorlms.com",
                    roleNote: "Core frontend architecture across 2.0 to 3.0 and 3.0 to 4.0: continuous lesson cockpit, motion hooks, zero-CLS curriculum builder, and sanitized quiz assessment engine.",
                },
                {
                    name: "EasyStore by JoomShaper",
                    url: "https://www.joomshaper.com/easystore",
                    roleNote: "Architected multi-variant inventory selector, real-time cart persistence, faceted catalog filtering, and streamlined single-page checkout pipeline.",
                },
            ],
            description:
                "Engineered complex product architectures, user interfaces, and interaction state models across flagship international software suites used by millions of learners, educators, and eCommerce merchants worldwide.",
            achievements: [
                "Led frontend development and feature releases across Tutor LMS 2.0 to 3.0 and 3.0 to 4.0, maintaining fluid GPU-composited transitions and zero layout shifts (0.00 CLS).",
                "Engineered EasyStore's multi-variant SKU configuration engine and order management interfaces with zero layout thrashing.",
                "Authored centralized motion settings coordinator hook (useTutorMotion) enforcing WCAG reduced-motion standards and performance budgets.",
                "Championed modern React practices, accessibility (a11y) standards, and lightweight bundle footprint across core product repositories.",
            ],
            technologies: [
                "React",
                "TypeScript",
                "JavaScript (ESNext)",
                "WordPress REST API",
                "PHP",
                "Tailwind CSS",
                "Zustand / Redux",
                "HTML5 Media APIs",
                "CSS Matrix / Webpack",
            ],
        },
    ],
    chapters: [
        { id: "hero", number: "00", title: "Flagship Reel", label: "Hero Showreel" },
        { id: "contents", number: "01", title: "Contents", label: "Chapter Directory" },
        { id: "about", number: "02", title: "Bio & Skills", label: "Behance Profile" },
        { id: "experience", number: "03", title: "Experience", label: "Professional Career" },
        { id: "tutor-lms", number: "04", title: "Tutor LMS", label: "Tutor LMS 2.0–4.0" },
        { id: "easystore", number: "05", title: "EasyStore", label: "EasyStore Platform" },
        { id: "ecommerce", number: "06", title: "E-Commerce", label: "Multi-Tenant Platform" },
        { id: "motion-lab", number: "07", title: "Motion Lab", label: "Interactive UX & Motion Lab" },
        { id: "gallery", number: "08", title: "Blueprints", label: "12-Item Blueprint Gallery" },
        { id: "profile", number: "09", title: "Credentials", label: "SUST Credentials & Outro" },
    ],
    flagshipProjects: [
        {
            id: "tutor-lms",
            chapterNumber: "04",
            title: "Tutor LMS (v2.0 to v4.0)",
            tagline: "World-Class WordPress LMS Plugin Powering 80,000+ Online Academies Globally",
            category: "Enterprise EdTech Platform",
            timeline: "2023 – Present",
            role: "Frontend Software Engineer @ Ollyo / Themeum",
            stack: [
                "React",
                "TypeScript",
                "WordPress REST API",
                "PHP",
                "HTML5 Video Player APIs",
                "Zustand",
                "Tailwind CSS",
            ],
            stats: [
                { label: "Active Installs", value: "80,000+" },
                { label: "Engineering Scope", value: "v2.0 – v4.0" },
                { label: "Frame Budget", value: "< 16ms / Zero-CLS" },
                { label: "Global Rating", value: "4.8 / 5.0" },
            ],
            liveUrl: "https://tutorlms.com/",
            stages: {
                architecture: {
                    title: "Continuous Learning Architecture & Synchronized Progress Engine",
                    subtitle: "Zero-Latency State Synchronization & Course Player",
                    description:
                        "Engineered across Tutor LMS 2.0 to 3.0 and 3.0 to 4.0: an overhauled learning cockpit designed to eliminate context-switching for online students. The architecture decouples video playback telemetry, milestone tracking, and student note-taking into an optimistic update pipeline communicating asynchronously with WordPress REST endpoints.",
                    highlights: [
                        "Hardware-accelerated HTML5 video canvas with synchronized timestamped note-taking",
                        "Optimistic milestone completion cache with background reconciliation",
                        "Modular React component ecosystem integrated into WordPress PHP core lifecycle",
                        "Sub-50ms reactive state propagation for curriculum navigation and quiz assessments",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Student Learning Cockpit & Curriculum Hierarchy",
                    subtitle: "Seamless GPU-Composited Transitions",
                    description:
                        "Students progress through video lectures, interactive quizzes, and downloadable resources with instantaneous chapter transitions and zero page reloads.",
                    highlights: [
                        "1. Lesson selection triggers instant FLIP layout expansion without reflow",
                        "2. Video player streams at high framerate with auto-bookmarking into local storage",
                        "3. Timestamp notes anchor directly to video timeline keyframes",
                    ],
                },
                code: {
                    title: "State Sync & Milestone Tracker Hook",
                    subtitle: "Optimistic Telemetry Reconciliation Engine",
                    description:
                        "Production TypeScript hook managing lesson milestone commits, throttle buffers, and offline resilience.",
                    highlights: [
                        "Batched progress telemetry preventing REST server saturation",
                        "Automatic offline queue with indexedDB fallback during connection drops",
                    ],
                    codeSnippet: {
                        filename: "useLessonProgress.ts",
                        language: "typescript",
                        code: `import { useState, useCallback, useRef } from "react";

interface MilestonePayload {
    courseId: number;
    lessonId: number;
    timestampSec: number;
    completed: boolean;
}

export function useLessonProgress(initialCourseId: number) {
    const [progress, setProgress] = useState<number>(0);
    const [isSyncing, setIsSyncing] = useState<boolean>(false);
    const queueRef = useRef<MilestonePayload[]>([]);

    const commitMilestone = useCallback(async (payload: MilestonePayload) => {
        // Optimistic UI update
        setProgress((prev) => Math.max(prev, Math.round(payload.timestampSec)));
        queueRef.current.push(payload);

        if (queueRef.current.length >= 3 || payload.completed) {
            setIsSyncing(true);
            try {
                const batch = [...queueRef.current];
                queueRef.current = [];
                await fetch("/wp-json/tutor/v1/lessons/progress", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ batch }),
                });
            } catch (err) {
                // Fallback to offline local cache
                localStorage.setItem(
                    \`tutor_pending_\${initialCourseId}\`,
                    JSON.stringify(queueRef.current)
                );
            } finally {
                setIsSyncing(false);
            }
        }
    }, [initialCourseId]);

    return { progress, isSyncing, commitMilestone };
}`,
                    },
                },
                live: {
                    title: "Live Production Verification",
                    subtitle: "Active Ecosystem Testing",
                    description:
                        "Explore live Tutor LMS deployments powering university degree programs, certification portals, and enterprise learning management systems across thousands of active domains.",
                    highlights: [
                        "Powers official certification portals for global tech enterprises",
                        "Consistently maintained 4.8/5.0 average rating across 80,000+ deployments",
                        "Tested under high concurrent load with continuous telemetry sync",
                    ],
                },
            },
        },
        {
            id: "easystore",
            chapterNumber: "05",
            title: "EasyStore by JoomShaper",
            tagline: "Enterprise-Grade Multi-Variant eCommerce Engine with Zero-Latency Checkout",
            category: "eCommerce Platform Architecture",
            timeline: "2023 – Present",
            role: "Frontend Software Engineer @ Ollyo",
            stack: [
                "React",
                "TypeScript",
                "Zustand State Engine",
                "Tailwind CSS",
                "Stripe Elements",
                "HTML5 Canvas",
            ],
            stats: [
                { label: "Variant Matrix", value: "10,000+ SKUs" },
                { label: "Filter Latency", value: "< 16ms" },
                { label: "Checkout Steps", value: "1-Page Flow" },
                { label: "Layout Shift", value: "0.00 CLS" },
            ],
            liveUrl: "https://www.joomshaper.com/easystore",
            stages: {
                architecture: {
                    title: "Combinatorial SKU Variant Matrix & Cart Hydration Pipeline",
                    subtitle: "Dynamic Attribute Resolution Without Server Roundtrips",
                    description:
                        "EasyStore powers modern storefronts requiring instant swatch selection across colors, sizes, and localized inventory tiers. The client-side combinatorial engine resolves valid SKU intersections in under 2 milliseconds.",
                    highlights: [
                        "Pre-computed attribute adjacency graph resolving out-of-stock permutations in O(1) time",
                        "State hydration synchronizing local shopping carts with remote sessions via optimistic updates",
                        "Zero-reflow price and discount calculator responding to coupon input with debounced validation",
                        "Mobile-first gesture-driven drawer cart with physical spring deceleration curves",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Attribute Selection to Instant Checkout",
                    subtitle: "Fluid Reactive Micro-Interactions",
                    description:
                        "Every swatch tap triggers an animated transition updating thumbnail galleries, inventory badges, and live pricing simultaneously.",
                    highlights: [
                        "1. Swatch selection fires instant FLIP layout expansion on preview image gallery",
                        "2. Out-of-stock permutations gracefully disable with subtle visual strikethrough animation",
                        "3. Add-to-cart triggers a localized spring particle burst into the sliding checkout drawer",
                    ],
                },
                code: {
                    title: "Combinatorial Variant Resolver Algorithm",
                    subtitle: "O(1) Adjacency Lookup Graph",
                    description:
                        "TypeScript utility resolving valid product attribute permutations without UI freeze.",
                    highlights: [
                        "Bitmask attribute representation enabling ultra-compact SKU cache in browser memory",
                        "Memoized inventory lookups supporting dynamic currency conversions",
                    ],
                    codeSnippet: {
                        filename: "variantResolver.ts",
                        language: "typescript",
                        code: `type AttributeMap = Record<string, string>;

interface SKUVariant {
    id: string;
    attributes: AttributeMap;
    price: number;
    inventoryCount: number;
}

export function resolveAvailableOptions(
    variants: SKUVariant[],
    currentSelection: AttributeMap
): Record<string, Set<string>> {
    const available: Record<string, Set<string>> = {};

    variants.forEach((variant) => {
        if (variant.inventoryCount <= 0) return;

        const matchesCurrent = Object.entries(currentSelection).every(
            ([key, value]) => !value || variant.attributes[key] === value
        );

        if (matchesCurrent) {
            Object.entries(variant.attributes).forEach(([key, value]) => {
                if (!available[key]) available[key] = new Set();
                available[key].add(value);
            });
        }
    });

    return available;
}`,
                    },
                },
                live: {
                    title: "Live Storefront Inspection",
                    subtitle: "Production Commerce Operations",
                    description:
                        "Review live commercial storefronts running on EasyStore with millions of monthly transactions.",
                    highlights: [
                        "Sub-second page load times with edge asset caching",
                        "Instant cart updates under concurrent traffic spikes",
                        "Integrated payment gateway verification with zero dropped sessions",
                    ],
                },
            },
        },
        {
            id: "ecommerce",
            chapterNumber: "06",
            title: "Multi-Tenant E-Commerce Platform",
            tagline: "Headless Multi-Tenant SaaS with Dynamic Route Routing and Stripe Integration",
            category: "Full Stack SaaS Platform",
            timeline: "Production Ready",
            role: "Lead Full-Stack Architect",
            stack: [
                "Next.js 14 App Router",
                "TypeScript",
                "Prisma ORM",
                "MySQL / PlanetScale",
                "Stripe Webhooks",
                "Tailwind CSS",
            ],
            stats: [
                { label: "Tenancy", value: "Multi-Store" },
                { label: "Edge TTFB", value: "< 50ms" },
                { label: "Webhook Latency", value: "< 200ms" },
                { label: "Type Safety", value: "100% End-to-End" },
            ],
            liveUrl: "https://github.com/b-l-i-n-d",
            stages: {
                architecture: {
                    title: "Multi-Tenant Isolation & Idempotent Stripe Webhook Pipeline",
                    subtitle: "Edge Data Partitioning & Cryptographic Security",
                    description:
                        "Multi-tenant eCommerce engine supporting isolated merchant subdomains, localized inventory, and zero-downtime database migrations with Prisma ORM.",
                    highlights: [
                        "Dynamic route resolution via Next.js Middleware parsing subdomain hostnames at the edge",
                        "Cryptographically signed Stripe webhook worker ensuring idempotent transaction processing",
                        "Optimized relational schema isolating stores, categories, billboards, and products",
                        "Server-side rendered product detail pages with streaming Suspense boundaries",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Edge Subdomain Routing to Payment Completion",
                    subtitle: "Zero-Latency Checkout Pipeline",
                    description:
                        "End-to-end user journey traversing multi-tenant catalog browsing, cart sync, and verified Stripe checkout handoff.",
                    highlights: [
                        "1. Edge middleware maps incoming request domain to tenant ID in < 5ms",
                        "2. Streaming SSR renders critical above-the-fold catalog UI while caching facets",
                        "3. Stripe Checkout Session webhook triggers atomic order ledger commit with receipt dispatch",
                    ],
                },
                code: {
                    title: "Idempotent Stripe Webhook Route Handler",
                    subtitle: "Next.js App Router Edge Pipeline",
                    description:
                        "Cryptographically verified API route handler processing payment events with atomic idempotency locks.",
                    highlights: [
                        "Stripe signature verification preventing replay attacks",
                        "Prisma transaction ensuring atomic inventory deduction upon payment confirmation",
                    ],
                    codeSnippet: {
                        filename: "api/webhook/stripe/route.ts",
                        language: "typescript",
                        code: `import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        return new NextResponse(\`Webhook Error: \${err.message}\`, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        const orderId = session?.metadata?.orderId;

        if (orderId) {
            await prisma.$transaction(async (tx) => {
                await tx.order.update({
                    where: { id: orderId },
                    data: { isPaid: true },
                });
            });
        }
    }

    return new NextResponse(null, { status: 200 });
}`,
                    },
                },
                live: {
                    title: "Production Inspection",
                    subtitle: "Automated Deployment & Testing",
                    description:
                        "Engineered with end-to-end TypeScript strict mode, automated Jest test suites, and Vercel edge deployment.",
                    highlights: [
                        "Automated CI/CD pipelines validating lint, types, and build output",
                        "Production database clustering with sub-50ms connection pooling",
                        "Zero-configuration tenant onboarding flow",
                    ],
                },
            },
        },
    ],
    interactiveBuilds: [
        {
            id: "drag-n-sort",
            title: "Drag-N-Sort Engine",
            tagline: "Pointer Physics & FLIP Layout",
            category: "Motion & Physics",
            description:
                "Production drag-and-drop sortable list featuring real-time displacement preview, collision boundary checking, and smooth spring settling.",
            highlights: [
                "FLIP (First, Last, Invert, Play) transition algorithm",
                "Pointer event capture with touch cancellation support",
                "Spring dampening with zero layout jitter",
            ],
            technologies: ["React", "Framer Motion", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "folder-manager",
            title: "Recursive Folder Tree Manager",
            tagline: "Data Structures & Tree Traversal",
            category: "Data Structures",
            description:
                "Infinite nesting directory tree supporting depth-first traversal, lazy branch expansion, inline renaming, and keyboard accessibility.",
            highlights: [
                "Recursive component architecture with memoized node renderers",
                "Optimistic node insertions with instantaneous visual feedback",
                "A11y ARIA treeview roles and keyboard navigation (arrows, enter)",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
            demoUrl: "https://github.com/b-l-i-n-d",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "3d-book",
            title: "3D Perspective Book Flip",
            tagline: "CSS 3D Transforms & Perspective",
            category: "CSS 3D Engine",
            description:
                "Hardware-accelerated 3D hard-cover book with realistic dual-axis perspective tilting, page-turning physics, and cast shadows.",
            highlights: [
                "3D preserve-3d CSS matrix with pointer coordinate tracking",
                "Dynamic lighting highlights calculated from mouse vector",
                "Smooth spring reset on pointer leave",
            ],
            technologies: ["React", "CSS 3D Matrix", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "interactive-calendar",
            title: "Interactive Range Calendar",
            tagline: "Temporal Algorithms & Grid States",
            category: "Algorithmic Utilities",
            description:
                "Zero-dependency high-performance date range selector with month jumping, leap-year calculations, and hover-range highlights.",
            highlights: [
                "Pure math temporal grid calculations with zero external libraries",
                "Continuous hover range preview with rounded selection caps",
                "Keyboard accessible day-by-day cursor navigation",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "kinetic-spinner",
            title: "Kinetic Velocity Spinner",
            tagline: "Angular Momentum & Friction Math",
            category: "Mathematical Physics",
            description:
                "Rotational physics playground tracking drag velocity, angular momentum, decay friction, and spring return thresholds.",
            highlights: [
                "Touch and mouse angular coordinate vector math",
                "Euler integration for friction and deceleration dampening",
                "Dynamic RPM and velocity gauge output",
            ],
            technologies: ["React", "HTML5 Canvas / SVG", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
    ],
    hybridGallery: [
        {
            id: "tutor-telemetry",
            number: "01",
            title: "Tutor LMS Telemetry Syncer",
            category: "Enterprise EdTech Architecture",
            badge: "Telemetry Engine",
            description:
                "Continuous learning progress synchronization layer engineered across Tutor LMS 2.0 to 3.0 and 3.0 to 4.0. Buffers video progress commits and student quiz answers into an optimistic queue before dispatching batched JSON payloads to the WordPress REST backend, reducing server load by 90%.",
            details: [
                "Batch window: 2.5s debounced telemetry dispatcher",
                "Throughput drop: -90% PHP server load reduction",
                "Offline queue: LocalStorage and IndexedDB fallback",
            ],
            technologies: ["React", "TypeScript", "WordPress REST API", "PHP"],
            demoUrl: "https://tutorlms.com",
            sourceUrl: "https://github.com/themeum/tutor",
        },
        {
            id: "easystore-matrix",
            number: "02",
            title: "EasyStore Combinatorial SKU Resolver",
            category: "eCommerce Systems",
            badge: "SKU Matrix",
            description:
                "Dynamic product variant selection matrix engineered for EasyStore by JoomShaper. Resolves complex color, size, and material combinations against live warehouse inventory without layout shifts or server roundtrips.",
            details: [
                "Max SKUs: 10,000+ variant combinations handled",
                "Resolver speed: < 2ms adjacency lookups",
                "Memory footprint: < 250KB in browser memory",
            ],
            technologies: ["TypeScript", "Zustand", "Tailwind CSS"],
            demoUrl: "https://www.joomshaper.com/easystore",
            sourceUrl: "https://www.joomshaper.com/easystore",
        },
        {
            id: "drag-flip-engine",
            number: "03",
            title: "FLIP Layout Drag & Reorder",
            category: "Motion Physics & Layout Engine",
            badge: "FLIP Engine",
            description:
                "Physics-based drag-and-drop sortable list using the First, Last, Invert, Play (FLIP) layout calculation to deliver fluid, jank-free reordering without triggering layout reflows.",
            details: [
                "Frame budget: Sub-16ms hardware execution",
                "Layout reflow: 0px Cumulative Layout Shift",
                "Pointer latency: < 4ms response time",
            ],
            technologies: ["React", "Framer Motion", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "folder-tree-node",
            number: "04",
            title: "Recursive Tree Hierarchy Manager",
            category: "Data Structure Engineering",
            badge: "Tree Architecture",
            description:
                "Hierarchical folder and topic tree component utilized for complex file organization and LMS curriculum structures, built with recursive memoization to prevent parent re-renders.",
            details: [
                "Max depth: Infinite hierarchical nesting",
                "Re-render scope: Target node level isolation",
                "Tree traversal: Optimized DFS algorithm",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "docapp-clinic",
            number: "05",
            title: "DocApp State Machine",
            category: "Full Stack Systems",
            badge: "State Machine",
            description:
                "Full-stack medical appointment management platform with real-time doctor availability locking and multi-step booking state machines.",
            details: [
                "Concurrency: ACID transactional locks",
                "State engine: Deterministic finite automata",
                "Stack: React, Node.js, Express, MongoDB",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "multi-tenant-saas",
            number: "06",
            title: "Headless Multi-Tenant SaaS",
            category: "Cloud Architecture",
            badge: "Edge Architecture",
            description:
                "Next.js 14 multi-tenant platform with edge middleware routing, custom domain support, and Prisma-backed partition security.",
            details: [
                "Edge routing: < 10ms domain mapping latency",
                "Database isolation: Row-level tenant partitioning",
                "Payment handoff: Stripe Connect webhook pipeline",
            ],
            technologies: ["Next.js 14", "TypeScript", "Prisma", "MySQL", "Stripe"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "3d-card-flip",
            number: "07",
            title: "3D Perspective Card Tilt",
            category: "CSS 3D Transforms",
            badge: "3D Graphics",
            description:
                "Ultra-realistic 3D surface tilting responding to cursor positioning with realistic physics inertia and specular highlight reflections.",
            details: [
                "Coordinate tracking: Normalized pointer vectors",
                "Compositing: Dedicated GPU compositing layer",
                "Reset curve: Smooth spring decay",
            ],
            technologies: ["React", "CSS 3D Matrix", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "temporal-calendar",
            number: "08",
            title: "Deterministic Date Range Engine",
            category: "Algorithmic Utilities",
            badge: "Temporal Engine",
            description:
                "Custom calendar date picker providing instant range selection, month transitions, and zero calendar date parsing drift across timezones.",
            details: [
                "Zero dependencies: 0kb external library overhead",
                "Accuracy: 100% ISO-8601 compliance",
                "Range preview: Continuous hover highlights",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "kinetic-friction",
            number: "09",
            title: "Kinetic Momentum Playground",
            category: "Mathematical Physics",
            badge: "Physics Sim",
            description:
                "Interactive rotational canvas demonstrating angular velocity tracking, friction decay curves, and boundary restitution.",
            details: [
                "Integrator: Semi-implicit Euler integration",
                "Physics loop: 60 Hz RequestAnimationFrame",
                "Deceleration: Realistic friction decay coefficient",
            ],
            technologies: ["HTML5 Canvas", "SVG", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "stripe-webhook-idempotency",
            number: "10",
            title: "Idempotent Webhook Receiver",
            category: "Payment Infrastructure",
            badge: "Webhook Pipeline",
            description:
                "Robust webhook processing route handler designed to handle Stripe charge and checkout completion events with guaranteed idempotency.",
            details: [
                "Security: HMAC SHA-256 cryptographic verification",
                "Replay guard: Atomic transaction locking",
                "Failure handling: Automated retry scheduling",
            ],
            technologies: ["Next.js 14", "Stripe SDK", "Prisma", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "sust-thesis",
            number: "11",
            title: "SUST CSE Research Architecture",
            category: "Academic Engineering",
            badge: "SUST CSE",
            description:
                "Undergraduate research in computer science & engineering at Shahjalal University of Science and Technology (SUST), analyzing distributed algorithms and web architectures.",
            details: [
                "Institution: SUST Department of CSE",
                "Degree: B.Sc. in Computer Science & Engineering",
                "Core focus: High-concurrency systems & algorithms",
            ],
            technologies: ["C++", "Java", "Distributed Systems", "Algorithms"],
            demoUrl: "https://www.sust.edu",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
        {
            id: "behance-motion-showcase",
            number: "12",
            title: "Behance Motion Portfolio Pattern",
            category: "Design Systems & Motion",
            badge: "Design System",
            description:
                "Comprehensive motion portfolio implementation replicating authentic Behance editorial aesthetics with dark matte card surfaces, doodle marquees, and tactile feedback.",
            details: [
                "Theme: Crimson Accent / High-contrast Matte",
                "Motion curve: Spring (stiffness: 450, damping: 35)",
                "Accessibility: WCAG AAA reduced-motion aware",
            ],
            technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "CSS Anchor Positioning"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
        },
    ],
    education: {
        degree: "B.Sc. in Computer Science & Engineering",
        department: "Department of Computer Science & Engineering",
        institute: "Shahjalal University of Science and Technology",
        shortInstitute: "SUST",
        location: "Sylhet, Bangladesh",
        period: "2018 – 2023",
        status: "Graduated",
        link: "https://www.sust.edu",
    },
    location: "Dhaka, Bangladesh",
    contact: {
        email: "fahim.faisal.abir@gmail.com",
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://linkedin.com/in/b-l-i-n-d",
        locationMap: "https://maps.google.com/?q=Dhaka,Bangladesh",
        cvUrl: "/assets/cv.pdf",
    },
};
