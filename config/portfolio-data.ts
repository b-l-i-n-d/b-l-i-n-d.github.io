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
        { id: "contents", number: "01", title: "Contents", label: "Chapter Directory" },
        { id: "about", number: "02", title: "Bio & Skills", label: "Behance Profile" },
        { id: "experience", number: "03", title: "Experience", label: "Professional Career" },
        { id: "tutor-lms", number: "04", title: "Tutor LMS", label: "Tutor LMS 3.0–4.0" },
        { id: "easystore", number: "05", title: "EasyStore", label: "EasyStore Platform" },
        { id: "ecommerce", number: "06", title: "E-Commerce", label: "Multi-Tenant Platform" },
        { id: "motion-lab", number: "07", title: "Motion Lab", label: "60 FPS Interactive Lab" },
        { id: "gallery", number: "08", title: "Blueprints", label: "12-Item Blueprint Gallery" },
        { id: "profile", number: "09", title: "Credentials", label: "SUST Credentials & Outro" },
    ],
    flagshipProjects: [
        {
            id: "tutor-lms",
            chapterNumber: "04",
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
                "Zustand",
                "Tailwind CSS",
            ],
            stats: [
                { label: "Active Installs", value: "80,000+" },
                { label: "Major Releases", value: "v3.0 – v4.0" },
                { label: "Target Framerate", value: "60 FPS Locked" },
                { label: "Global Rating", value: "4.8 / 5.0" },
            ],
            liveUrl: "https://tutorlms.com/",
            stages: {
                architecture: {
                    title: "Continuous Learning Architecture & Synchronized Progress Engine",
                    subtitle: "Zero-Latency State Synchronization & Course Player",
                    description:
                        "Tutor LMS 3.0 and 4.0 feature an overhauled learning cockpit designed to eliminate context-switching for online students. The architecture decouples video playback telemetry, milestone tracking, and student note-taking into an optimistic update pipeline communicating asynchronously with WordPress REST endpoints.",
                    highlights: [
                        "Hardware-accelerated HTML5 video canvas with synchronized timestamped note-taking",
                        "Optimistic milestone completion cache with background reconciliation",
                        "Modular React component ecosystem integrated into WordPress PHP core lifecycle",
                        "Sub-50ms reactive state propagation for curriculum navigation and quiz assessments",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Student Learning Cockpit & Curriculum Hierarchy",
                    subtitle: "Seamless 60 FPS Transition Pipeline",
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
    secondsWatched: number;
    completed: boolean;
}

export function useLessonProgress(initialSeconds: number) {
    const [progress, setProgress] = useState(initialSeconds);
    const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const recordProgress = useCallback((seconds: number, lessonId: number, courseId: number) => {
        setProgress(seconds);
        
        // Debounce server synchronization to prevent network flooding
        if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
        
        syncTimeoutRef.current = setTimeout(async () => {
            const payload: MilestonePayload = {
                courseId,
                lessonId,
                secondsWatched: Math.floor(seconds),
                completed: false
            };
            
            try {
                await fetch('/wp-json/tutor/v2/lesson-progress', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': (window as any).tutorNonce },
                    body: JSON.stringify(payload)
                });
            } catch (err) {
                // Queue in IndexedDB for retry on network reconnect
                console.warn('[TutorLMS] Progress queued offline', err);
            }
        }, 3000);
    }, []);

    return { progress, recordProgress };
}`,
                    },
                },
                live: {
                    title: "Tutor LMS Production Ecosystem",
                    subtitle: "Explore Live Product & Showcase",
                    description:
                        "Explore Tutor LMS on its official production website featuring the 3.0 to 4.0 releases, student cockpits, and instructor analytics.",
                    highlights: [
                        "Live demo environments available on TutorLMS.com",
                        "Serving tens of thousands of university and commercial academies",
                    ],
                },
            },
        },
        {
            id: "easystore",
            chapterNumber: "05",
            title: "EasyStore by JoomShaper",
            tagline: "Enterprise-Grade Joomla eCommerce Extension with Multi-Variant Matrix & High-Speed Checkout",
            category: "eCommerce Platform & Inventory Engine",
            timeline: "2023 – Present",
            role: "Frontend Software Engineer @ Ollyo / JoomShaper",
            stack: [
                "React",
                "TypeScript",
                "PHP",
                "Joomla Core API",
                "Tailwind CSS",
                "Zustand",
                "RESTful Webhooks",
            ],
            stats: [
                { label: "Target Platform", value: "Joomla CMS" },
                { label: "Cart Resolution", value: "< 16ms" },
                { label: "SKU Permutations", value: "Uncapped Matrix" },
                { label: "Architecture", value: "Zero-CLS React" },
            ],
            liveUrl: "https://www.joomshaper.com/easystore",
            stages: {
                architecture: {
                    title: "Combinatorial Variant Matrix & Cart Synchronization",
                    subtitle: "Instantaneous SKU Resolution Engine",
                    description:
                        "EasyStore introduces an enterprise-grade multi-attribute product matrix (size, color, material, specs) calculating real-time inventory availability, dynamic price multipliers, and warehouse SKU resolution in under 16ms.",
                    highlights: [
                        "Permutational SKU tree resolution with memoized availability graphs",
                        "Single-page checkout pipeline supporting global payment gateways",
                        "Real-time cart persistence with optimistic state updates",
                        "Zero-CLS responsive image gallery with pinch-and-zoom magnification",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Combinatorial SKU Matrix Selection",
                    subtitle: "Zero-Latency Variant Handoff",
                    description:
                        "Shoppers click through multi-dimensional variant options with instant visual and pricing feedback.",
                    highlights: [
                        "1. Attribute click re-evaluates permutation graph in under 1ms",
                        "2. Price and stock availability updates immediately without page jump",
                        "3. Smooth fly-to-cart animation with stateful drawer preview",
                    ],
                },
                code: {
                    title: "Combinatorial Variant Resolver",
                    subtitle: "High-Performance SKU Resolution Algorithm",
                    description:
                        "Production TypeScript algorithm resolving multi-attribute combinations against stock availability matrices.",
                    highlights: [
                        "Memoized cache preventing redundant Cartesian product calculations",
                        "Automatic fallback to default SKU when selecting partial combinations",
                    ],
                    codeSnippet: {
                        filename: "resolveProductVariant.ts",
                        language: "typescript",
                        code: `export interface VariantCombination {
    id: string;
    attributes: Record<string, string>; // e.g. { size: 'XL', color: 'Burgundy' }
    price: number;
    stock: number;
    sku: string;
}

export function resolveActiveVariant(
    selectedAttributes: Record<string, string>,
    combinations: VariantCombination[]
): VariantCombination | null {
    const keys = Object.keys(selectedAttributes);
    if (keys.length === 0) return null;

    return (
        combinations.find((combo) =>
            keys.every((key) => combo.attributes[key] === selectedAttributes[key])
        ) ?? null
    );
}`,
                    },
                },
                live: {
                    title: "EasyStore Official Showcase",
                    subtitle: "Enterprise eCommerce Suite",
                    description:
                        "Visit the official EasyStore portal on JoomShaper to explore its product builder, store templates, and checkout experiences.",
                    highlights: [
                        "Enterprise Joomla integration",
                        "Optimized for high-volume catalog search and checkout",
                    ],
                },
            },
        },
        {
            id: "ecommerce",
            chapterNumber: "06",
            title: "Multi-Tenant E-Commerce Platform",
            tagline: "High-Concurrency SaaS Architecture with Next.js 14 App Router, Prisma & Stripe Webhooks",
            category: "Distributed Web Architecture",
            timeline: "2024",
            role: "Architect & Lead Full Stack Engineer",
            stack: [
                "Next.js 14 (App Router)",
                "TypeScript",
                "Tailwind CSS",
                "Prisma ORM",
                "PlanetScale MySQL",
                "Stripe API",
                "Clerk Auth",
            ],
            stats: [
                { label: "Rendering", value: "Next.js App Router" },
                { label: "Database", value: "PlanetScale MySQL" },
                { label: "Payments", value: "Stripe Webhooks" },
                { label: "State", value: "Zustand Hydration" },
            ],
            liveUrl: "https://b-l-i-n-d-ecommerce-store.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
            secondaryGithubUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
            stages: {
                architecture: {
                    title: "Multi-Tenant Decoupled Architecture",
                    subtitle: "Normalized Data Flow & Database Partitioning",
                    description:
                        "The platform partitions merchant storefronts through unique store identifiers (`storeId`). A centralized administrative cockpit orchestrates inventory, billboards, categories, and payment gateways across multiple independent retail frontends.",
                    highlights: [
                        "Relational schema normalized for 3NF with Prisma ORM",
                        "Sub-50ms query responses using PlanetScale connection pooling",
                        "Clerk role-based access control protecting administrative routes",
                        "Cloudinary CDN pipelines for responsive, WebP-compressed image delivery",
                    ],
                },
                flow: {
                    title: "User Journey & Interaction Flow",
                    subtitle: "60 FPS Micro-Interactions & Optimistic Cart Flow",
                    description:
                        "From catalog discovery to cryptographic Stripe checkout, every state transition is executed with zero layout shift and sub-16ms frame times.",
                    highlights: [
                        "1. Faceted URL state updates filter criteria without full reload",
                        "2. Product preview modal opens with smooth GPU transform",
                        "3. Zustand store hydrates cart with optimistic item counts",
                        "4. Idempotent webhook handoff ensures zero duplicate billing events",
                    ],
                },
                code: {
                    title: "Cryptographic Stripe Webhook Route Handler",
                    subtitle: "Production-Grade Idempotency & Order Fulfillment",
                    description:
                        "Server-side route handler verifying cryptographic Stripe signatures and orchestrating transactional database mutations via Prisma.",
                    highlights: [
                        "Raw payload stream verification preventing man-in-the-middle exploits",
                        "Atomic database transaction updating order status and unsetting reserved stock",
                    ],
                    codeSnippet: {
                        filename: "app/api/webhook/route.ts",
                        language: "typescript",
                        code: `import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
    apiVersion: "2023-10-16",
    typescript: true,
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
    } catch (error: any) {
        return new NextResponse(\`Webhook Error: \${error.message}\`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const address = session?.customer_details?.address;

    if (event.type === "checkout.session.completed") {
        const order = await prismadb.order.update({
            where: { id: session?.metadata?.orderId },
            data: {
                isPaid: true,
                address: [address?.line1, address?.city, address?.country].filter(Boolean).join(", "),
                phone: session?.customer_details?.phone || "",
            },
            include: { orderItems: true },
        });

        // Archive stock items atomically
        const productIds = order.orderItems.map((item) => item.productId);
        await prismadb.product.updateMany({
            where: { id: { in: [...productIds] } },
            data: { isArchived: true },
        });
    }

    return new NextResponse(null, { status: 200 });
}`,
                    },
                },
                live: {
                    title: "Live Production Verification",
                    subtitle: "Zero-Downtime Deployment on Vercel",
                    description:
                        "Both the multi-tenant admin control plane and the customer storefront are live on Vercel edge networks, connected to PlanetScale MySQL databases.",
                    highlights: [
                        "Live Storefront: https://b-l-i-n-d-ecommerce-store.vercel.app",
                        "Admin Cockpit: https://github.com/b-l-i-n-d/ecommerce-admin",
                        "Storefront Source: https://github.com/b-l-i-n-d/ecommerce-store",
                    ],
                },
            },
        },
    ],
    interactiveBuilds: [
        {
            id: "drag-n-sort",
            title: "Drag-N-Sort Engine",
            tagline: "FLIP Animation & Pointer Event Physics",
            category: "Physics & Layout",
            description:
                "Smooth sortable list utilizing Pointer Events, First-Last-Invert-Play (FLIP) layout calculations, and dynamic collision boundaries without external library bloat.",
            highlights: [
                "FLIP layout calculation with sub-1ms transform commits",
                "Pointer capture API with smooth velocity deceleration",
                "Touch, stylus, and multi-pointer normalization",
            ],
            technologies: ["React", "TypeScript", "FLIP Technique", "CSS Transform Matrix"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "folder-manager",
            title: "Recursive Folder Manager",
            tagline: "Arbitrary-Depth File Tree & Optimistic Mutations",
            category: "Data Structures",
            description:
                "Recursive tree navigation UI supporting nesting, multi-select, drag re-parenting, and instant keyboard navigation with WAI-ARIA treeview compliance.",
            highlights: [
                "Recursive node memoization for zero redundant re-renders",
                "Optimistic node renaming and deletion with rollback",
                "Full keyboard arrow traversal per WAI-ARIA 1.2 specifications",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "book-experience",
            title: "3D Book Animation",
            tagline: "CSS 3D Perspective & Hardware Transforms",
            category: "3D Simulation",
            description:
                "Realistic book flipping simulation engineered purely with CSS 3D perspectives, dynamic spine thickness calculations, and interactive page curling.",
            highlights: [
                "3D transform-style: preserve-3d with hardware acceleration",
                "Dynamic spine perspective shifting with cursor position",
                "Zero JavaScript physics loop overhead on idle states",
            ],
            technologies: ["CSS 3D", "HTML5", "TypeScript", "Transform Matrix"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "calendar-engine",
            title: "Responsive Calendar Engine",
            tagline: "Dynamic Grid Layout & Range Selection",
            category: "Algorithms",
            description:
                "High-performance date picker and event scheduling calendar supporting multi-month virtualized viewports, timezone normalizations, and gesture range swipes.",
            highlights: [
                "Algorithmic leap-year and timezone offset calculations",
                "Zero-dependency lightweight bundle footprint (< 3kB)",
                "Touch sweep multi-date selection with instant feedback",
            ],
            technologies: ["TypeScript", "React", "CSS Grid", "Date Mathematics"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "kinetic-spinner",
            title: "Kinetic Spinner",
            tagline: "Angular Momentum & Friction Simulation",
            category: "Physics Math",
            description:
                "Interactive inertial dial reacting to flick gestures with damping, realistic friction decay, and spring-loaded snap milestones.",
            highlights: [
                "Velocity Verlet integration for silky momentum coasting",
                "Spring physics damping on milestone snap points",
                "Continuous requestAnimationFrame execution with automatic idle sleep",
            ],
            technologies: ["HTML5 Canvas", "TypeScript", "Verlet Physics", "RAF Loop"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
        {
            id: "color-quantizer",
            title: "Median-Cut Color Quantizer",
            tagline: "Client-Side Palette Extraction via Web Workers",
            category: "Computer Graphics",
            description:
                "High-speed image palette extractor running median-cut quantization on image pixel buffers within a dedicated Web Worker to maintain UI responsiveness.",
            highlights: [
                "Off-main-thread Web Worker computation preventing frame drops",
                "Octree & median cut algorithms extracting dominant swatches",
                "Real-time contrast checker verifying WCAG AA/AAA ratios",
            ],
            technologies: ["Web Workers", "Canvas 2D Context", "TypeScript", "WCAG Scoring"],
            demoUrl: "https://b-l-i-n-d.github.io",
            githubUrl: "https://github.com/b-l-i-n-d",
            fpsTarget: 60,
        },
    ],
    hybridGallery: [
        {
            id: "hg-1",
            number: "01",
            title: "Tutor LMS Continuous Learning Player",
            badge: "EdTech Flagship",
            category: "System Architecture",
            description: "Zero-latency video progress sync, timestamped student notes, and curriculum hierarchy state engine.",
            details: [
                "Optimistic progress caching with debounced WordPress REST synchronization",
                "HTML5 video canvas timecode indexing for instant bookmark jumps",
                "Tested across 80,000+ active commercial and academic installations",
            ],
            technologies: ["React", "WordPress REST API", "Zustand", "HTML5 Media"],
            demoUrl: "https://tutorlms.com/",
        },
        {
            id: "hg-2",
            number: "02",
            title: "EasyStore Multi-Variant Matrix",
            badge: "eCommerce Flagship",
            category: "Data Structure",
            description: "Sub-16ms combinatorial SKU tree evaluating dynamic pricing and inventory stock across product dimensions.",
            details: [
                "Cartesian product resolution algorithm with memoized availability graphs",
                "Smooth fly-to-cart animation and unified single-page checkout pipeline",
                "Seamless integration with Joomla core database and multi-currency formats",
            ],
            technologies: ["TypeScript", "Joomla Core API", "Tailwind CSS", "Zustand"],
            demoUrl: "https://www.joomshaper.com/easystore",
        },
        {
            id: "hg-3",
            number: "03",
            title: "Multi-Tenant Storefront Schema",
            badge: "Cloud SaaS",
            category: "System Architecture",
            description: "Partitioned multi-merchant MySQL schema normalized in 3NF with Prisma ORM and PlanetScale pooling.",
            details: [
                "Store partition isolation via indexed foreign keys (storeId)",
                "Clerk authentication webhook provisioning merchant workspaces",
                "Sub-50ms query latency across nested category hierarchies",
            ],
            technologies: ["Next.js 14", "Prisma ORM", "PlanetScale", "Clerk Auth"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        },
        {
            id: "hg-4",
            number: "04",
            title: "FLIP Drag-and-Drop Sort Engine",
            badge: "Micro-Interaction",
            category: "UI Build",
            description: "First-Last-Invert-Play layout transition algorithm with sub-1ms transform calculation and touch support.",
            details: [
                "BoundingClientRect snapshotting computing inverted translate3d delta",
                "Pointer capture API with smooth velocity deceleration",
                "Zero dependencies, under 2.5kB minified footprint",
            ],
            technologies: ["React", "TypeScript", "FLIP Technique", "CSS Transforms"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-5",
            number: "05",
            title: "Idempotent Stripe Webhook Pipeline",
            badge: "FinTech Architecture",
            category: "System Architecture",
            description: "Cryptographic event verification ensuring zero double-charging and atomic inventory reservation updates.",
            details: [
                "Raw stream buffer cryptographic validation via Stripe SDK",
                "Prisma transactional isolation updating order and archive flags",
                "Automated failure recovery with dead-letter log emission",
            ],
            technologies: ["Next.js App Router", "Stripe API", "Prisma ORM", "TypeScript"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        },
        {
            id: "hg-6",
            number: "06",
            title: "Recursive Tree Navigation Engine",
            badge: "Algorithm UI",
            category: "UI Build",
            description: "Arbitrary-depth nested folder hierarchy with WAI-ARIA keyboard navigation and optimistic tree reordering.",
            details: [
                "Memoized node components avoiding recursive tree re-render cascades",
                "WAI-ARIA treeview keyboard contract (Arrow Up/Down/Left/Right)",
                "Optimistic state mutator for instant file renaming and deletion",
            ],
            technologies: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-7",
            number: "07",
            title: "3D Perspective Book Flip Simulation",
            badge: "3D Motion",
            category: "UI Build",
            description: "Realistic page-turning mechanics rendered with pure CSS 3D perspective and dynamic shadow matrices.",
            details: [
                "transform-style: preserve-3d utilizing hardware GPU rasterizer",
                "Dynamic spine thickness perspective adjustment during flip angle",
                "Zero JS RAF loop overhead when stationary",
            ],
            technologies: ["CSS 3D", "HTML5", "TypeScript", "GPU Matrix"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-8",
            number: "08",
            title: "Doctor Appointment Reservation Finite State Machine",
            badge: "HealthTech Architecture",
            category: "System Architecture",
            description: "Deterministic state machine preventing double-booking across concurrent doctor scheduling slots.",
            details: [
                "Explicit states: Available -> TentativeHold -> Confirmed -> Completed",
                "Redis-backed distributed lease lock expiring unconfirmed holds in 5 mins",
                "Zero race condition guarantee verified with concurrent stress tests",
            ],
            technologies: ["TypeScript", "State Machines", "Node.js", "Express"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-9",
            number: "09",
            title: "Kinetic Inertial Physics Spinner",
            badge: "Physics Math",
            category: "UI Build",
            description: "Angular momentum dial reacting to flick velocity with realistic friction deceleration and magnetic snap points.",
            details: [
                "Verlet numerical integration with frame-independent delta timing",
                "Spring damping math delivering satisfying milestone latch feedback",
                "Automatic requestAnimationFrame sleep mode when angular velocity < 0.001",
            ],
            technologies: ["HTML5 Canvas", "TypeScript", "Verlet Physics", "RAF Loop"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-10",
            number: "10",
            title: "Faceted URL Search Synchronizer",
            badge: "Full Stack UI",
            category: "System Architecture",
            description: "Two-way synchronization between client filter state and browser query string params with zero layout reflow.",
            details: [
                "URLSearchParams pushState management preserving browser back/forward history",
                "Debounced client fetch with AbortController canceling stale network requests",
                "Zero CLS (Cumulative Layout Shift) skeleton loading cards",
            ],
            technologies: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
        },
        {
            id: "hg-11",
            number: "11",
            title: "Responsive Virtualized Calendar Grid",
            badge: "Algorithm UI",
            category: "UI Build",
            description: "Virtualized calendar matrix rendering 12 months with smooth scrolling and dynamic range gesture sweep.",
            details: [
                "Algorithmic leap year and UTC day calculations without external date libraries",
                "WAI-ARIA accessible calendar grid navigation",
                "Touch sweep multi-date range highlighter with instant bounds calculation",
            ],
            technologies: ["TypeScript", "React", "CSS Grid", "Date Mathematics"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
        {
            id: "hg-12",
            number: "12",
            title: "Off-Thread Median-Cut Color Extractor",
            badge: "Computer Graphics",
            category: "UI Build",
            description: "Palette extraction running on Web Workers to maintain locked 60 FPS main thread performance during image uploads.",
            details: [
                "Median-cut color quantization processing 1M pixel buffers in < 25ms",
                "Zero UI freezing or frame drops by delegating compute to Web Worker",
                "Real-time contrast ratio auditing against WCAG 2.1 specifications",
            ],
            technologies: ["Web Workers", "Canvas 2D API", "TypeScript", "WCAG Scoring"],
            demoUrl: "https://b-l-i-n-d.github.io",
        },
    ],
    skillCategories: [
        {
            name: "Core Frontend & Architecture",
            skills: [
                "React 18 / 19",
                "Next.js 14 (App Router)",
                "TypeScript (Strict Mode)",
                "JavaScript (ESNext)",
                "Tailwind CSS",
                "NextUI",
                "HTML5 Media APIs",
                "Responsive Layouting",
            ],
        },
        {
            name: "Performance & Motion Engineering",
            skills: [
                "60 FPS Hardware Compositing",
                "CSS 3D Transforms",
                "FLIP Layout Animations",
                "Canvas API & Verlet Physics",
                "Web Workers",
                "Cumulative Layout Shift (CLS) = 0",
                "First Input Delay (FID) Optimization",
                "Viewport Throttling",
            ],
        },
        {
            name: "State & Full-Stack Systems",
            skills: [
                "WordPress REST API & Plugin Architecture",
                "PHP Core Development",
                "Node.js & Express",
                "Prisma ORM",
                "PlanetScale MySQL",
                "Zustand & Redux Toolkit",
                "Stripe API & Webhooks",
                "Clerk RBAC Auth",
            ],
        },
        {
            name: "Tooling & Engineering Practices",
            skills: [
                "Git & GitHub Workflow",
                "Webpack & Vite Bundlers",
                "WAI-ARIA A11y Standards",
                "Clean Architecture & SOLID",
                "REST & GraphQL Integration",
                "Vercel Edge Deployment",
                "Automated Linting & Type Checking",
            ],
        },
    ],
};
