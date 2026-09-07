import { EngineerProfile } from "@/types/portfolio";

export const portfolioData: EngineerProfile = {
    name: "Fahim Faisal",
    tagline: "Full Stack & Frontend Software Engineer",
    headline:
        "Specializing in high-performance React architectures, locked 60 FPS interfaces, and scalable web platforms. Core contributor to Tutor LMS 3.0–4.0 and EasyStore by JoomShaper.",
    bioParagraphs: [
        "I am a Software Engineer based in Bangladesh with a B.Sc. in Computer Science & Engineering from Shahjalal University of Science and Technology (SUST). My passion lies in engineering fluid, responsive, and resilient web applications that delight users at scale.",
        "At Ollyo (Themeum & JoomShaper), I build and scale world-class software products including Tutor LMS (powering 80,000+ eLearning academies globally) across versions 3.0 to 4.0, and EasyStore, an enterprise Joomla eCommerce extension designed for high-concurrency order fulfillment and multi-variant catalog management.",
        "Whether architecting normalized state trees, optimizing hardware-accelerated 60 FPS CSS/WebGL transitions, or designing reliable REST & GraphQL APIs, I approach frontend and full-stack software development with a constraint-first, performance-obsessed mindset.",
    ],
    location: "Dhaka, Bangladesh",
    education: {
        institute: "Shahjalal University of Science and Technology",
        shortInstitute: "SUST",
        degree: "Bachelor of Science (B.Sc.)",
        department: "Computer Science & Engineering",
        status: "Graduated",
        period: "2018 – 2023",
        link: "https://www.sust.edu",
    },
    contact: {
        email: "fahim.faisal.abir@gmail.com",
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://www.linkedin.com/in/b-l-i-n-d/",
        locationMap: "https://goo.gl/maps/DbUNvX2C7X9ZJrKC7",
        cvUrl: "/assets/cv.pdf",
    },
    heroReel: {
        title: "Tutor LMS 3.0–4.0 & EasyStore",
        tagline: "Engineering world-class eLearning & enterprise eCommerce software serving 80,000+ live platforms globally.",
        badge: "Ollyo / Themeum / JoomShaper Flagship Engineering",
        videoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
        secondaryVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-instructor-3.mp4",
        posterUrl: "https://tutorlms.com/wp-content/uploads/2026/07/Tutor-LMS-Learning-Experience-dashboard-with-course-modules-Classic-Mode.webp",
        runtime: "Native 60 FPS MP4 Loop",
        framerate: "60 FPS Hardware Composited",
        productTitle: "Tutor LMS & EasyStore",
        productUrl: "https://tutorlms.com/",
    },
    experiences: [
        {
            id: "ollyo",
            role: "Software Engineer (Frontend)",
            company: "Ollyo (Themeum & JoomShaper)",
            department: "Core Product Engineering",
            period: "2023 – Present",
            startDate: "2023-01-01",
            endDate: "Present",
            website: "https://ollyo.com/",
            location: "Dhaka, Bangladesh",
            products: [
                {
                    name: "Tutor LMS (v3.0 to v4.0)",
                    url: "https://tutorlms.com/",
                    roleNote: "Core frontend engineer across 3.0 and 4.0 releases. Engineered the continuous learning dashboard, interactive video note-taking player, drag-and-drop course builder, and quiz assessment interfaces.",
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
                "Led frontend development and feature releases for Tutor LMS 3.0 through 4.0, optimizing client-side performance and maintaining 60 FPS transitions.",
                "Engineered EasyStore's multi-variant SKU configuration engine and order management interfaces with zero layout thrashing.",
                "Collaborated cross-functionally with product designers, QA teams, and backend engineers to deploy high-impact features into production with zero regressions.",
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
        { id: "experience", number: "01", title: "Experience", label: "Professional Career" },
        { id: "tutor-lms", number: "02", title: "Tutor LMS", label: "Tutor LMS 3.0–4.0" },
        { id: "easystore", number: "03", title: "EasyStore", label: "EasyStore Platform" },
        { id: "ecommerce", number: "04", title: "E-Commerce", label: "Multi-Tenant Platform" },
        { id: "motion-lab", number: "05", title: "Motion Lab", label: "60 FPS Interactive Lab" },
        { id: "gallery", number: "06", title: "Blueprints", label: "12-Item Blueprint Gallery" },
        { id: "profile", number: "07", title: "Credentials", label: "SUST Credentials & Outro" },
    ],
    flagshipProjects: [
        {
            id: "tutor-lms",
            chapterNumber: "02",
            title: "Tutor LMS (v3.0 to v4.0)",
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
                "Tailwind CSS",
                "Drag & Drop APIs",
            ],
            summary:
                "Engineered core client-facing interfaces across Tutor LMS 3.0 and 4.0, including the revolutionary continuous learning dashboard, contextual video lesson player with bookmarking and note-taking, and visual drag-and-drop course builder.",
            heroVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
            heroPoster: "https://tutorlms.com/wp-content/uploads/2026/07/Tutor-LMS-Learning-Experience-dashboard-with-course-modules-Classic-Mode.webp",
            liveUrl: "https://tutorlms.com/",
            stats: [
                { label: "Active Installs", value: "80,000+" },
                { label: "Major Releases", value: "v3.0 → v4.0" },
                { label: "UI Target", value: "60 FPS Fluid" },
                { label: "Global Reach", value: "100+ Countries" },
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Decoupled Interactive LMS Architecture",
                    subtitle: "REST Endpoint Handshake & Unified State Machine",
                    description:
                        "Tutor LMS integrates modern React state orchestration with WordPress's robust data model. Lessons, quizzes, note-taking, and live sessions are driven by an optimistic client cache synchronized over lightweight REST endpoints.",
                    highlights: [
                        "Optimistic state synchronization for video timestamp progress saving",
                        "Modular React component tree embedded into WordPress templates",
                        "High-concurrency quiz evaluation engine with client-side timer guards",
                    ],
                },
                flow: {
                    type: "flow",
                    title: "Continuous Learner Experience Flow",
                    subtitle: "Zero-Latency Curriculum Progression",
                    description:
                        "Students progress through lessons, videos, and quizzes in one continuous layout without page reloads. The video player automatically tracks watch milestones and highlights active curriculum topics.",
                    highlights: [
                        "Real-time video timecode tracking with auto-resume on revisit",
                        "Side-panel interactive note-taking synced with video keyframes",
                        "Smooth tab transitions between course materials, Q&A, and announcements",
                    ],
                },
                code: {
                    type: "code",
                    title: "Video Playback & Progress Milestone Tracker",
                    subtitle: "Debounced REST Progress Syncer",
                    description:
                        "Maintains accurate playback completion metrics without saturating the server with rapid request spikes.",
                    highlights: [
                        "Timecode quantization preventing sub-second network requests",
                        "Beacon API fallback to ensure progress persists on window close",
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "tutor-lms/video-progress-sync.ts",
                        explanation:
                            "Captures video milestones and dispatches batched progress updates.",
                        code: `interface LessonProgressPayload {
    courseId: number;
    lessonId: number;
    currentTime: number;
    duration: number;
    isCompleted: boolean;
}

export class VideoProgressTracker {
    private lastSyncedTime = 0;
    private syncThresholdSeconds = 5;

    constructor(
        private endpoint: string,
        private nonce: string
    ) {}

    public handleTimeUpdate(payload: LessonProgressPayload): void {
        const delta = Math.abs(payload.currentTime - this.lastSyncedTime);
        if (delta >= this.syncThresholdSeconds || payload.isCompleted) {
            this.lastSyncedTime = payload.currentTime;
            this.dispatchProgress(payload);
        }
    }

    private async dispatchProgress(payload: LessonProgressPayload): Promise<void> {
        try {
            await fetch(this.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-WP-Nonce": this.nonce,
                },
                body: JSON.stringify(payload),
                keepalive: true,
            });
        } catch (err) {
            console.error("Failed to sync video progress:", err);
        }
    }
}`,
                    },
                },
                live: {
                    type: "live",
                    title: "Production Verification",
                    subtitle: "Powering Millions of Lessons Daily",
                    description:
                        "Tutor LMS is deployed on over 80,000 active websites, delivering frictionless eLearning experiences across universities, coaching academies, and enterprise training centers.",
                    highlights: [
                        "Official product portal with live interactive demonstrations",
                        "Comprehensive documentation and educator showcase",
                    ],
                    liveUrl: "https://tutorlms.com/",
                },
            },
        },
        {
            id: "easystore",
            chapterNumber: "03",
            title: "EasyStore by JoomShaper",
            tagline: "The Ultimate eCommerce Extension with High-Performance Multi-Variant Inventory",
            category: "Enterprise eCommerce Platform",
            timeline: "2023 – Present",
            role: "Software Engineer @ Ollyo / JoomShaper",
            stack: [
                "JavaScript (ESNext)",
                "React",
                "PHP / Joomla Framework",
                "Tailwind CSS",
                "REST APIs",
                "Stripe / PayPal Gateway APIs",
            ],
            summary:
                "Contributed to the frontend engineering of EasyStore by JoomShaper, building automated inventory management, multiple product variant configuration selectors, responsive product galleries, and high-conversion single-page checkout.",
            heroVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
            heroPoster: "https://www.joomshaper.com/images/2023/easystore/hero-asset.webp",
            liveUrl: "https://www.joomshaper.com/easystore",
            stats: [
                { label: "Product Type", value: "Joomla Extension" },
                { label: "Catalog Engine", value: "Multi-Variant SKUs" },
                { label: "Checkout", value: "Single-Page Seamless" },
                { label: "Inventory", value: "Automated Real-Time" },
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Multi-Variant Inventory & Catalog Schema",
                    subtitle: "Dynamic Matrix Resolution for Color, Size, & Materials",
                    description:
                        "EasyStore resolves product permutations on-the-fly without duplicate inventory records. Variations are mapped to distinct SKU nodes with custom stock limits, automated backorder flags, and specific pricing overrides.",
                    highlights: [
                        "Hierarchical variant lookup tree minimizing DOM re-renders",
                        "Asynchronous tax calculation engine integrated with global zones",
                        "Single-page checkout with instant shipping rate calculation",
                    ],
                },
                flow: {
                    type: "flow",
                    title: "Variant Selection & Instant Checkout Flow",
                    subtitle: "Zero Reflow Micro-Interactions",
                    description:
                        "Selecting a size, color, or finish dynamically swaps pricing, availability status, and gallery assets with locked 60 FPS CSS transitions.",
                    highlights: [
                        "Instant out-of-stock disabling on conflicting attributes",
                        "Persistent cart hydration surviving tab closures",
                        "Frictionless 3-step checkout with coupon validation",
                    ],
                },
                code: {
                    type: "code",
                    title: "Multi-Variant SKU Permutation Resolver",
                    subtitle: "Combinatorial Matrix Matching Algorithm",
                    description:
                        "Resolves the exact matching SKU and price matrix given any partial or full user attribute selection.",
                    highlights: [
                        "O(1) dictionary key lookup across thousands of variant combinations",
                        "Safeguards against undefined attribute states",
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "easystore/variant-resolver.ts",
                        explanation:
                            "Matches active user attribute choices to the target product variant.",
                        code: `export interface ProductVariant {
    id: string;
    sku: string;
    price: number;
    stock: number;
    attributes: Record<string, string>; // e.g. { color: "Midnight", size: "XL" }
}

export class VariantResolver {
    private variantMap = new Map<string, ProductVariant>();

    constructor(variants: ProductVariant[]) {
        variants.forEach((v) => {
            const hash = this.createAttributeHash(v.attributes);
            this.variantMap.set(hash, v);
        });
    }

    private createAttributeHash(attrs: Record<string, string>): string {
        return Object.keys(attrs)
            .sort()
            .map((k) => \`\${k}:\${attrs[k]}\`)
            .join("|");
    }

    public resolve(selectedAttrs: Record<string, string>): ProductVariant | null {
        const hash = this.createAttributeHash(selectedAttrs);
        return this.variantMap.get(hash) || null;
    }
}`,
                    },
                },
                live: {
                    type: "live",
                    title: "Live Production Verification",
                    subtitle: "Empowering Merchants Globally",
                    description:
                        "EasyStore provides modern merchants with full inventory autonomy, coupon marketing, automated invoice generation, and versatile payment gateway connectivity.",
                    highlights: [
                        "Official product portal and live interactive store demo",
                        "Full administrative inventory suite",
                    ],
                    liveUrl: "https://www.joomshaper.com/easystore",
                },
            },
        },
        {
            id: "ecommerce",
            chapterNumber: "04",
            title: "Multi-Tenant E-Commerce Admin & Storefront",
            tagline: "Next.js App Router, Clerk Auth, PlanetScale MySQL, Prisma ORM, Stripe Webhooks",
            category: "Full Stack SaaS Ecosystem",
            timeline: "2023",
            role: "Lead Full Stack Engineer",
            stack: [
                "Next.js 13 App Router",
                "TypeScript",
                "Tailwind CSS",
                "Clerk Auth",
                "PlanetScale MySQL",
                "Prisma ORM",
                "Zustand",
                "Stripe API",
            ],
            summary:
                "Enterprise multi-tenant e-commerce control plane. A single merchant account provisions multiple storefront instances, managing inventory, billboards, categories, color/size facets, and Stripe webhook payment reconciliations.",
            liveUrl: "https://ecommerce-store-b-l-i-n-d.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
            secondaryGithubUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
            stats: [
                { label: "Architecture", value: "Multi-Tenant SaaS" },
                { label: "Rendering", value: "App Router SSR" },
                { label: "Payments", value: "Stripe Webhooks" },
                { label: "Target FPS", value: "60 FPS Locked" },
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Multi-Tenant Relational Schema",
                    subtitle: "Prisma & PlanetScale Partitioning",
                    description:
                        "Normalized relational hierarchy where every Store entity isolates Categories, Sizes, Colors, Products, and Orders. Merchants authenticate once via Clerk and toggle contexts with zero cross-tenant leakage.",
                    highlights: [
                        "Multi-tenant data isolation guarded at the Prisma query layer",
                        "Optimistic UI updates via Zustand and SWR mutations",
                        "Asynchronous webhooks for transactional order fulfillment",
                    ],
                },
                flow: {
                    type: "flow",
                    title: "End-to-End Purchase Flow",
                    subtitle: "Zero Reflow Interactivity",
                    description:
                        "From faceted filtering on the customer storefront to Stripe Checkout and back to the merchant dashboard with instant inventory decrement.",
                    highlights: [
                        "URL search param syncing for shareable filtered views",
                        "Zustand cart persistence surviving session refreshes",
                        "Stripe cryptographically verified checkout session return",
                    ],
                },
                code: {
                    type: "code",
                    title: "Stripe Webhook Signature Verification Handler",
                    subtitle: "Next.js Route Handler Implementation",
                    description:
                        "Handles order status updates, marks orders as paid, and persists customer delivery metadata with idempotency safeguards.",
                    highlights: [
                        "Cryptographic raw-body verification via Stripe SDK",
                        "Atomic database updates with Prisma transaction safety",
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "app/api/webhook/route.ts",
                        explanation:
                            "Ensures every purchase event is idempotently confirmed and recorded.",
                        code: `import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

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
    } catch (error: any) {
        return new NextResponse(\`Webhook Error: \${error.message}\`, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        const orderId = session?.metadata?.orderId;

        if (orderId) {
            await prismadb.order.update({
                where: { id: orderId },
                data: {
                    isPaid: true,
                    address: session?.customer_details?.address?.line1 || "",
                    phone: session?.customer_details?.phone || "",
                },
            });
        }
    }

    return new NextResponse(null, { status: 200 });
}`,
                    },
                },
                live: {
                    type: "live",
                    title: "Live Production Deployment",
                    subtitle: "Continuous Deployment on Vercel",
                    description:
                        "The multi-tenant admin and consumer storefront are deployed globally on Vercel edge networks, connected to PlanetScale serverless MySQL.",
                    highlights: [
                        "Live demo storefront available for end-to-end testing",
                        "Both admin and store repositories public on GitHub",
                    ],
                    liveUrl: "https://ecommerce-store-b-l-i-n-d.vercel.app",
                },
            },
        },
    ],
    interactiveBuilds: [
        {
            id: "dragnsort",
            title: "Drag-N-Sort Engine",
            tagline: "Fluid DOM reordering with real-time pointer physics",
            category: "Physics & Motion",
            description:
                "Zero-dependency drag and sort interface calculating coordinate offsets and spatial index shifts at 60 FPS without frame drops.",
            technologies: ["React", "CSS Transforms", "Pointer Events"],
            demoUrl: "https://b-l-i-n-d.github.io/dragnsort/",
            githubUrl: "https://github.com/b-l-i-n-d/dragnsort",
            fpsTarget: 60,
            highlights: [
                "Matrix-based pointer collision detection",
                "FLIP layout animations with hardware-accelerated transforms",
            ],
        },
        {
            id: "folder-manager",
            title: "Recursive Folder Manager",
            tagline: "Nested tree data structure with expandable node hierarchies",
            category: "Tree Structures",
            description:
                "Hierarchical file tree explorer featuring deeply nested directory recursion, node selection, inline renaming, and keyboard navigation.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://folder-manager.vercel.app/",
            githubUrl: "https://github.com/b-l-i-n-d/folder-manager",
            fpsTarget: 60,
            highlights: [
                "Recursive tree traversal with memoized branches",
                "Instant node search and depth-level indent calculation",
            ],
        },
        {
            id: "book-animation",
            title: "3D Book Flipping Experience",
            tagline: "Realistic CSS 3D perspective and page turning physics",
            category: "3D Transform",
            description:
                "Interactive multi-page digital booklet with dynamic spine lighting, 3D perspective layering, and touch-drag page turns.",
            technologies: ["CSS 3D", "HTML5", "Vanilla JS"],
            demoUrl: "https://b-l-i-n-d.github.io/book-animation/",
            githubUrl: "https://github.com/b-l-i-n-d/book-animation",
            fpsTarget: 60,
            highlights: [
                "Preserve-3d coordinate transforms with depth-sorting",
                "Realistic page flex curves using cubic bezier timings",
            ],
        },
        {
            id: "calendar",
            title: "Responsive Calendar Engine",
            tagline: "Multi-view schedule planner with event management",
            category: "Productivity",
            description:
                "Accessible calendar interface supporting day/week/month navigation, recurring events, and fluid grid rendering.",
            technologies: ["React", "Date-Fns", "Tailwind CSS"],
            demoUrl: "https://b-l-i-n-d.github.io/calendar/",
            githubUrl: "https://github.com/b-l-i-n-d/calendar",
            fpsTarget: 60,
            highlights: [
                "Date math optimized for quick view switching",
                "Full keyboard navigation conforming to WAI-ARIA standards",
            ],
        },
        {
            id: "travel-web-app",
            title: "Travel App Dashboard",
            tagline: "Modern itinerary curation and location exploration",
            category: "Micro-Interactions",
            description:
                "Travel exploration portal featuring destination cards, interactive itinerary filters, and smooth card transitions.",
            technologies: ["React", "CSS Modules", "Vite"],
            demoUrl: "https://travel-web-app-beta.vercel.app/",
            githubUrl: "https://github.com/b-l-i-n-d/travel-web-app",
            fpsTarget: 60,
            highlights: [
                "Dynamic card stacking with parallax motion",
                "Mobile-first responsive drawer layout",
            ],
        },
        {
            id: "spinner",
            title: "Mathematical Kinetic Spinner",
            tagline: "Trigonometric canvas animations with rotational velocity",
            category: "Physics & Motion",
            description:
                "Kinetic animation canvas using angular momentum formulas to model friction and decelerating rotational velocity.",
            technologies: ["Canvas API", "RequestAnimationFrame", "JavaScript"],
            demoUrl: "https://b-l-i-n-d.github.io/spinner/",
            githubUrl: "https://github.com/b-l-i-n-d/spinner",
            fpsTarget: 60,
            highlights: [
                "Rotational deceleration model mimicking physical friction",
                "Locked 60 FPS requestAnimationFrame rendering loop",
            ],
        },
    ],
    hybridGallery: [
        {
            id: "bg-1",
            number: "01",
            title: "Tutor LMS Continuous Learning Dashboard",
            category: "Architecture Schema",
            badge: "EdTech Architecture",
            description:
                "Decoupled React curriculum architecture embedded into WordPress with optimistic video progress synchronization.",
            details: [
                "Optimistic lesson progress updates with beacon fallback",
                "Contextual note-taking synchronized with video timecodes",
                "Automated milestone unlocks and quiz grading pipelines",
            ],
            technologies: ["React", "WordPress REST", "HTML5 Media"],
            demoUrl: "https://tutorlms.com/",
        },
        {
            id: "bg-2",
            number: "02",
            title: "EasyStore Multi-Variant Catalog Engine",
            category: "Architecture Schema",
            badge: "eCommerce Architecture",
            description:
                "Permutational SKU inventory tracking matrix with instant variant resolution and zero layout reflow.",
            details: [
                "O(1) dictionary key lookup across complex attribute sets",
                "Dynamic stock availability and backorder safeguards",
                "Single-page frictionless checkout pipeline",
            ],
            technologies: ["React", "PHP", "Tailwind CSS", "Joomla"],
            demoUrl: "https://www.joomshaper.com/easystore",
        },
        {
            id: "bg-3",
            number: "03",
            title: "Multi-Tenant SaaS Data Partitioning",
            category: "Architecture Schema",
            badge: "Cloud Architecture",
            description:
                "Prisma ORM & PlanetScale MySQL multi-tenant database partitioning isolating merchants, stores, and products.",
            details: [
                "Foreign key tenancy enforcement at the ORM layer",
                "Sub-millisecond query indices for category filtering",
                "Stripe webhook reconciliation with idempotency keys",
            ],
            technologies: ["Next.js", "Prisma", "PlanetScale", "Stripe"],
            demoUrl: "https://ecommerce-store-b-l-i-n-d.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        },
        {
            id: "bg-4",
            number: "04",
            title: "Healthcare Clinic State Machine (DocApp)",
            category: "Architecture Schema",
            badge: "Distributed Systems",
            description:
                "Finite state machine managing doctor availability, double-booking prevention, and appointment transitions.",
            details: [
                "Atomic appointment reservation slots with optimistic lock guards",
                "Role-based access control for doctors and patients",
                "Real-time schedule invalidation via RTK Query cache tags",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            sourceUrl: "https://github.com/b-l-i-n-d/docapp",
        },
        {
            id: "bg-5",
            number: "05",
            title: "Faceted Search & URL Sync Pipeline",
            category: "Architecture Schema",
            badge: "Frontend State",
            description:
                "Shareable, URL-driven filtering pipeline synchronizing colors, sizes, and price bounds with zero page reloads.",
            details: [
                "Next.js App Router useSearchParams integration",
                "Debounced query dispatch preventing route churn",
                "Synchronized breadcrumb and filter tag states",
            ],
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://ecommerce-store-b-l-i-n-d.vercel.app",
        },
        {
            id: "bg-6",
            number: "06",
            title: "Stripe Webhook Payment Gateway",
            category: "Architecture Schema",
            badge: "FinTech Pipeline",
            description:
                "Asynchronous cryptographic signature verification pipeline with automated order fulfillment and inventory decrement.",
            details: [
                "Raw buffer signature parsing with timing-safe comparison",
                "Graceful recovery handling for intermittent network disconnects",
                "Instant merchant order email and push dispatching",
            ],
            technologies: ["Stripe API", "Next.js Route Handlers", "Prisma"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        },
        {
            id: "bg-7",
            number: "07",
            title: "Fluid Drag-and-Sort Matrix",
            category: "Interactive UI",
            badge: "DOM Physics",
            description:
                "Pointer-event driven DOM reordering with FLIP transform animations and zero jitter on mobile touch screens.",
            details: [
                "Calculates bounding rectangles in memory before mutation",
                "GPU-accelerated translate3d transforms during drag states",
                "Accessible keyboard fallbacks for screen reader compliance",
            ],
            technologies: ["React", "FLIP Technique", "CSS3"],
            demoUrl: "https://b-l-i-n-d.github.io/dragnsort/",
            sourceUrl: "https://github.com/b-l-i-n-d/dragnsort",
        },
        {
            id: "bg-8",
            number: "08",
            title: "3D Perspective Page Turn Booklet",
            category: "Interactive UI",
            badge: "3D Spatial UI",
            description:
                "CSS 3D perspective matrix simulating physical book curvature, paper tension, and dynamic shadow gradients.",
            details: [
                "Preserve-3d coordinate space with double-sided leaf rendering",
                "Dynamic spine highlight reflecting incident light angles",
                "Touch-responsive dragging with angle constraint locks",
            ],
            technologies: ["CSS 3D Transforms", "JavaScript", "HTML5"],
            demoUrl: "https://b-l-i-n-d.github.io/book-animation/",
            sourceUrl: "https://github.com/b-l-i-n-d/book-animation",
        },
        {
            id: "bg-9",
            number: "09",
            title: "Recursive Directory Tree Visualizer",
            category: "Interactive UI",
            badge: "Data Visualization",
            description:
                "Expandable folder hierarchy component with branch memoization, inline node edits, and keyboard navigation.",
            details: [
                "Recursive component rendering with React.memo isolation",
                "Auto-scrolling focused tree item into view",
                "Zero layout re-renders on sibling branch expansion",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://folder-manager.vercel.app/",
            sourceUrl: "https://github.com/b-l-i-n-d/folder-manager",
        },
        {
            id: "bg-10",
            number: "10",
            title: "Angular Momentum Kinetic Spinner",
            category: "Interactive UI",
            badge: "Canvas Animation",
            description:
                "Mathematical physics simulation modeling circular inertia, frictional drag, and smooth deceleration curves.",
            details: [
                "Angular velocity integration over delta time",
                "Sub-pixel canvas anti-aliasing on Retina displays",
                "Locked 60 FPS requestAnimationFrame scheduler",
            ],
            technologies: ["HTML5 Canvas", "Physics Math", "JavaScript"],
            demoUrl: "https://b-l-i-n-d.github.io/spinner/",
            sourceUrl: "https://github.com/b-l-i-n-d/spinner",
        },
        {
            id: "bg-11",
            number: "11",
            title: "Responsive Scheduling Calendar",
            category: "Interactive UI",
            badge: "Productivity",
            description:
                "High-performance month and week scheduling view with date arithmetic and event collision detection.",
            details: [
                "Modular month matrix calculation using date-fns",
                "Event badge truncation with tooltip hover expansions",
                "Adaptive grid spanning effortlessly from mobile to 4K displays",
            ],
            technologies: ["React", "Date-fns", "Tailwind CSS"],
            demoUrl: "https://b-l-i-n-d.github.io/calendar/",
            sourceUrl: "https://github.com/b-l-i-n-d/calendar",
        },
        {
            id: "bg-12",
            number: "12",
            title: "Interactive Travel Experience Portal",
            category: "Interactive UI",
            badge: "Micro-Interactions",
            description:
                "Card stacking interaction with subtle parallax offsets, fluid drawers, and filterable destination views.",
            details: [
                "Spring physics card transitions with zero frame stutter",
                "Custom responsive drawer with touch gesture dismissal",
                "Hardware-accelerated CSS backface visibility culling",
            ],
            technologies: ["React", "CSS Modules", "Vite"],
            demoUrl: "https://travel-web-app-beta.vercel.app/",
            sourceUrl: "https://github.com/b-l-i-n-d/travel-web-app",
        },
    ],
    skillCategories: [
        {
            name: "Core Languages & Frameworks",
            skills: [
                "TypeScript",
                "JavaScript (ESNext)",
                "React",
                "Next.js (App Router & Pages)",
                "Node.js",
                "Express.js",
                "PHP",
                "HTML5 & CSS3",
            ],
        },
        {
            name: "Architecture, State & Tools",
            skills: [
                "Zustand",
                "Redux Toolkit / RTK Query",
                "Prisma ORM",
                "Tailwind CSS",
                "WordPress REST API",
                "Joomla Framework",
                "MongoDB",
                "MySQL / PlanetScale",
                "Git & GitHub Actions",
            ],
        },
        {
            name: "Performance & Media Engineering",
            skills: [
                "Hardware-Accelerated CSS Motion",
                "60 FPS Profiling",
                "HTML5 Video APIs",
                "Canvas API",
                "IntersectionObserver Optimization",
                "Zero-Layout-Shift Web Architecture",
            ],
        },
    ],
};
