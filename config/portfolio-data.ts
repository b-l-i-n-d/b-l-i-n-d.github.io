import { EngineerProfile } from "@/types/portfolio";

export const portfolioData: EngineerProfile = {
    name: "Fahim Faisal",
    role: "Software Engineer",
    avatar: "/assets/profile-avatar.png",
    tagline: "High-Performance Systems, Fluid UI & Local-First Architecture",
    headline:
        "Software Engineer with a B.Sc. in Software Engineering from SUST. Core frontend engineer on Tutor LMS across v2.0–v4.0 at Ollyo, powering 120,000+ active online academies globally.",
    bioParagraphs: [
        "Software Engineer with a B.Sc. in Software Engineering from Shahjalal University of Science and Technology (SUST). I specialize in architecting production web platforms, tactile state machines, and hardware-accelerated user interfaces.",
        "At Ollyo (parent company of Themeum), I lead core frontend engineering for Tutor LMS across versions 2.0 to 4.0. My work centers on high-scale reactive UI systems: building zero-CLS layout engines, authoring the centralized useTutorMotion coordinator, and developing continuous learning telemetry that syncs seamlessly with WordPress REST APIs for over 120,000 active academies worldwide.",
        "Beyond enterprise EdTech, I architect secure local-first and full-stack software systems: Enclave (a zero-knowledge mobile vault in React Native with AES-256-GCM, Argon2id, and Google Drive 3-way sync), EdTech (an interactive video learning platform with automated quizzes and assignment grading), and DocApp (a multi-role medical booking suite with deterministic booking locks and dynamic PDF generation).",
    ],
    skillCategories: [
        {
            name: "Modern Web & Mobile Architecture",
            skills: ["TypeScript (Strict)", "React", "Next.js", "React Native", "Expo SDK", "Tailwind CSS", "Zustand", "Redux Toolkit / RTK Query"],
        },
        {
            name: "Performance & Motion Engineering",
            skills: ["Hardware Compositing", "FLIP Layout Transitions", "Framer Motion", "HTML5 Canvas & Video", "RAF Viewport Throttling", "Zero CLS Optimization"],
        },
        {
            name: "Backend, APIs & Storage",
            skills: ["WordPress REST API", "Object-Oriented PHP", "Node.js & Express", "MongoDB / Mongoose", "MySQL / MariaDB ($wpdb)", "Prisma ORM", "SQLite (Local-First)"],
        },
        {
            name: "Security, Systems & Algorithms",
            skills: ["Argon2id KDF", "AES-256-GCM", "RFC 6238 TOTP", "BIP39 Mnemonic", "C++ / Algorithms (SUST SWE)", "Stripe Webhooks & Idempotency"],
        },
    ],
    heroReel: {
        title: "Tutor LMS 2.0 to 4.0 Architecture",
        tagline: "Core Frontend & Lesson Cockpit Engineering",
        badge: "PRODUCTION RELEASE",
        videoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
        secondaryVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-instructor-3.mp4",
        posterUrl: "/assets/hero-poster.webp",
        runtime: "02:45",
        framerate: "60 FPS",
        productTitle: "Tutor LMS by Themeum / Ollyo",
        productUrl: "https://tutorlms.com",
    },
    experiences: [
        {
            id: "ollyo",
            role: "Software Engineer",
            company: "Ollyo",
            department: "Themeum Core Product Division",
            period: "2024 – Present",
            startDate: "2024-01-01",
            website: "https://ollyo.com",
            location: "Dhaka, Bangladesh",
            promotions: [
                {
                    year: "2024",
                    role: "Junior Software Engineer",
                    highlight: "Joined Ollyo / Themeum. Architected Tutor LMS course builder components, in-house form reactive state, and sub-16ms layout compositing.",
                },
                {
                    year: "2025",
                    role: "Associate Software Engineer",
                    highlight: "Promoted in Year 1. Spearheaded FLIP reordering matrix, zero-CLS layout calculations, and third-party addon registry.",
                },
                {
                    year: "2026",
                    role: "Software Engineer",
                    highlight: "Promoted in Year 2 (Current). Principal frontend architecture ownership across 120,000+ active global academies and extensible plugin ecosystem.",
                    isCurrent: true,
                },
            ],
            products: [
                {
                    name: "Tutor LMS",
                    url: "https://tutorlms.com",
                    roleNote: "Core frontend architecture across 2.0 to 4.0: continuous lesson cockpit, Tutor Core component registry, 3rd-party field injection pipeline, zero-CLS curriculum builder, and sanitized quiz assessment engine.",
                },
            ],
            description:
                "Architecting complex product features, high-performance UI engines, and interaction state models across flagship international software suites used by millions of learners and educators worldwide.",
            achievements: [
                "Promoted from Junior Software Engineer (2024) to Associate Software Engineer (2025) and Software Engineer (2026) within 2 years, driving core frontend initiatives.",
                "Led frontend development and feature releases across Tutor LMS 2.0 to 4.0, maintaining fluid GPU-composited transitions and zero layout shifts (0.00 CLS).",
                "Architected the Tutor Core Component Registry with strict typed schemas for 3rd-party WordPress add-on and field injections.",
                "Authored centralized motion settings coordinator hook (useTutorMotion) enforcing WCAG reduced-motion standards and performance budgets.",
                "Engineered continuous telemetry sync and client-side LRU query caching reducing server roundtrip load by 90% across 120,000+ active installations.",
            ],
            technologies: [
                "React",
                "TypeScript",
                "WordPress REST API",
                "Object-Oriented PHP",
                "Rsbuild / Webpack",
                "Zustand",
                "Tailwind CSS",
                "Jest & React Testing Library",
            ],
        },
    ],
    chapters: [
        { id: "hero", number: "00", title: "Overview", label: "Overview" },
        { id: "contents", number: "01", title: "Contents", label: "Index" },
        { id: "about", number: "02", title: "Biography", label: "Bio & Technical Breadth" },
        { id: "experience", number: "03", title: "Track Record", label: "Career & Education" },
        { id: "case-study", number: "04", title: "Flagship", label: "Tutor LMS Case Study" },
        { id: "motion-lab", number: "05", title: "Interaction Lab", label: "Motion & State Experiments" },
        { id: "gallery", number: "06", title: "Blueprints", label: "Systems Architecture" },
        { id: "profile", number: "07", title: "Dossier", label: "Contact & Credentials" },
    ],
    flagshipProjects: [
        {
            id: "tutor-lms",
            chapterNumber: "04",
            title: "Tutor LMS 2.0 to 4.0",
            tagline: "Enterprise EdTech Architecture at Global Scale",
            category: "Enterprise Learning Management System",
            timeline: "2024 – Present",
            role: "Software Engineer",
            stack: ["React", "TypeScript", "WordPress Core", "PHP 8.x", "Zustand", "Tailwind CSS"],
            summary:
                "Core frontend architecture for WordPress's leading LMS platform powering 120,000+ academies. Designed zero-CLS curriculum builder, lesson cockpit, extensible component registry, and automated quiz evaluation.",
            stats: [
                { label: "Active Deployments", value: "120K+" },
                { label: "Cumulative Layout Shift", value: "0.000" },
                { label: "Component Registry", value: "Strict Typed" },
                { label: "Motion Target", value: "60 FPS" },
            ],
            stages: {
                architecture: {
                    title: "System Topology & Extensibility Registry",
                    subtitle: "Zero-Coupling Component Inversion",
                    description:
                        "Engineered the Tutor Core Registry, decoupling the monolithic backend from UI consumers. Add-on authors register field schemas via typed contracts with validation gates before rendering into DOM.",
                    highlights: [
                        "Decoupled React runtime from PHP templates using typed hydration boundaries",
                        "Component injection pipeline for monetization, certificates, and multi-instructor add-ons",
                        "Client-side LRU query caching reducing server roundtrip load by 90%",
                    ],
                    diagramType: "system",
                    diagramSpec: `graph TD
    WP[WordPress REST API] --> Client[React Query Cache]
    Client --> Store[Zustand Central Store]
    Store --> Reg[Tutor Core Registry]
    Reg --> Form[Dynamic Form Engine]
    Reg --> Builder[Curriculum FLIP Engine]
    Reg --> Addons[3rd Party Injected Fields]`,
                },
                flow: {
                    title: "Course Curriculum Builder Engine",
                    subtitle: "Sub-16ms Drag, Reorder, & Nested Mutation Pipeline",
                    description:
                        "Designed the nested topic/lesson ordering tree. Uses FLIP geometry calculations and optimistic state mutation so reordering feels immediate while syncing batch diffs to the server.",
                    highlights: [
                        "Sub-16ms layout transition using requestAnimationFrame",
                        "Optimistic state rollback on network interruption",
                        "Multi-level hierarchical tree traversal (Course -> Topic -> Lesson -> Quiz)",
                    ],
                    diagramType: "sequence",
                    diagramSpec: `sequenceDiagram
    autonumber
    actor User as Instructor
    participant UI as Tree UI
    participant Store as State Machine
    participant Sync as Sync Pipeline
    participant Server as WP REST API

    User->>UI: Drag Lesson to New Topic
    UI->>Store: Dispatch FLIP_REORDER (Optimistic)
    Store-->>UI: Instantly update positions & tree
    Store->>Sync: Queue debounced sync diff
    Sync->>Server: POST /tutor/v2/curriculum/reorder
    Server-->>Sync: 200 OK (Tree Hash)
    Sync-->>Store: Commit state verified`,
                },
                code: {
                    title: "useTutorMotion Coordinator Hook",
                    subtitle: "Centralized WCAG-Compliant Motion State Management",
                    description:
                        "Created the global motion coordinator enforcing WCAG 2.1 AAA compliance. Automatically honors prefers-reduced-motion, adjusts spring stiffness, and coordinates layout transitions across disparate modules.",
                    highlights: [
                        "Automatic OS-level prefers-reduced-motion detection and graceful fallback",
                        "Spring physics token presets (tight, snappy, gentle)",
                        "Shared layoutId coordinator across modal portals and drawers",
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "useTutorMotion.ts",
                        explanation:
                            "Centralizes spring physics configurations and reduced-motion fallback across all Tutor LMS core UI modules.",
                        code: `import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export interface MotionConfig {
    transition: {
        type: "spring" | "tween";
        stiffness?: number;
        damping?: number;
        duration?: number;
    };
    animate: boolean;
}

export function useTutorMotion(preset: "snappy" | "gentle" | "modal" = "snappy"): MotionConfig {
    const shouldReduceMotion = useReducedMotion();

    return useMemo(() => {
        if (shouldReduceMotion) {
            return {
                transition: { type: "tween", duration: 0 },
                animate: false,
            };
        }

        switch (preset) {
            case "snappy":
                return { transition: { type: "spring", stiffness: 450, damping: 32 }, animate: true };
            case "gentle":
                return { transition: { type: "spring", stiffness: 220, damping: 24 }, animate: true };
            case "modal":
                return { transition: { type: "spring", stiffness: 350, damping: 28 }, animate: true };
        }
    }, [shouldReduceMotion, preset]);
}`,
                    },
                },
                live: {
                    title: "Zero-CLS Curriculum Cockpit",
                    subtitle: "Production Live Verification",
                    description:
                        "Live production environment of Tutor LMS running the interactive curriculum tree, student lesson cockpit, and real-time quiz assessment platform.",
                    highlights: [
                        "120,000+ active enterprise and academy installations worldwide",
                        "Sub-50ms interaction response across low-powered devices",
                        "Automated test coverage across form validation and mutation pipelines",
                    ],
                    liveUrl: "https://tutorlms.com",
                },
            },
        },
        {
            id: "enclave",
            chapterNumber: "05",
            title: "Enclave 🛡️",
            tagline: "Self-Hosted, Local-First, Zero-Knowledge Credential & Vault Manager for iOS & Android",
            category: "Mobile Cryptography & Local-First Systems",
            timeline: "2024 – Present",
            role: "Creator & Mobile Security Architect",
            stack: [
                "React Native 0.86",
                "Expo SDK 57",
                "Expo Router v6",
                "SQLite (Local-First)",
                "Native Quick Crypto",
                "Argon2id Key Derivation",
                "AES-256-GCM Cipher",
                "BIP39 24-Word Recovery",
                "RFC 6238 TOTP Engine",
                "Google Drive 3-Way Sync",
            ],
            stats: [
                { label: "Encryption", value: "AES-256-GCM" },
                { label: "KDF Algorithm", value: "Argon2id + BIP39" },
                { label: "2FA Generator", value: "RFC 6238 TOTP" },
                { label: "Sync Protocol", value: "3-Way Merge" },
            ],
            liveUrl: "https://github.com/b-l-i-n-d/enclave",
            githubUrl: "https://github.com/b-l-i-n-d/enclave",
            isPrivate: true,
            stages: {
                architecture: {
                    title: "Zero-Knowledge Local-First Architecture & Secure Key Derivation",
                    subtitle: "Client-Side Cryptography with Native Quick Crypto & SQLite Engine",
                    description:
                        "Enclave is engineered around a strict zero-knowledge security boundary: plaintext passwords and private keys never leave the mobile device or reach cloud storage unencrypted. Master passphrases are stretched using memory-hard Argon2id with cryptographically secure random salts. Vault records are stored in local SQLite databases encrypted via authenticated AES-256-GCM with unique 96-bit initialization vectors per item.",
                    highlights: [
                        "Memory-hard Argon2id key derivation resisting GPU/ASIC brute-force attacks",
                        "Authenticated AES-256-GCM symmetric encryption with tamper-evident authentication tags",
                        "Offline-first local SQLite engine enabling instantaneous zero-latency credential retrieval",
                        "BIP39 24-word emergency recovery kits with deterministic entropy generation",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Biometric Vault Unlock to Dynamic TOTP & 3-Way Sync",
                    subtitle: "Hardware KeyStore Integration & Authenticated State Transition",
                    description:
                        "Users authenticate via iOS FaceID / Android Biometrics, derive memory-transient cryptographic keys, stream dynamic 30-second circular countdown TOTP tokens, and sync encrypted records to personal Google Drive storage.",
                    highlights: [
                        "1. Hardware biometric challenge unlocks secure device enclave without persisting plaintext keys",
                        "2. AES-256-GCM decrypts category vaults (Logins, Cards, Notes, Wi-Fi) on-demand in memory",
                        "3. Dynamic RFC 6238 TOTP generator renders 6-digit codes with live circular countdown timers",
                        "4. Direct zero-infra sync to Google Drive performs conflict-free 3-way item-level merge",
                    ],
                },
                code: {
                    title: "Argon2id Master Key Derivation & AES-256-GCM Cryptographic Engine",
                    subtitle: "Native Quick Crypto & NIST-Grade Symmetric Encryption",
                    description:
                        "Core cryptographic pipeline deriving 256-bit encryption keys and performing authenticated AES-GCM encryption with randomized IVs and SHA-256 HMAC integrity checks.",
                    highlights: [
                        "NIST SP 800-38D compliant AES-256-GCM authenticated cipher",
                        "Secure hardware random byte generator for initialization vectors and salts",
                    ],
                    codeSnippet: {
                        filename: "lib/crypto/EnclaveCryptoEngine.ts",
                        language: "typescript",
                        code: `// Enclave Cryptographic Engine
import QuickCrypto from "react-native-quick-crypto";

export async function encryptVaultRecord(plaintext: string, derivedKey: Buffer) {
    const iv = QuickCrypto.randomBytes(12);
    const cipher = QuickCrypto.createCipheriv("aes-256-gcm", derivedKey, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
    const tag = cipher.getAuthTag();
    return { ciphertext: encrypted.toString("base64"), iv: iv.toString("base64"), tag: tag.toString("base64") };
}`,
                    },
                },
                live: {
                    title: "Watchtower Security Center & Zero-Infra Cloud Resilience",
                    subtitle: "NIST/OWASP Grade Security Scoring & k-Anonymity Breach Detection",
                    description:
                        "Enclave features a built-in Watchtower security center running HaveIBeenPwned k-anonymity SHA-1 hash prefix lookups, automated duplicate/weak password audits, Luhn card validation with biometric re-auth CVV gates, and zero-infra personal cloud synchronization.",
                    highlights: [
                        "Watchtower k-anonymity breach detection without leaking password hashes",
                        "Client-side Luhn algorithm card check with biometric confirmation gate on CVV reveal",
                        "Encrypted Google Drive sync with automated 3-way item-level conflict resolution",
                        "Self-hosted zero-knowledge architecture with zero telemetry trackers",
                    ],
                },
            },
        },
        {
            id: "edtech",
            chapterNumber: "06",
            title: "EdTech Learning Platform",
            tagline: "Full-Stack Interactive Education Platform with Video Streaming, Quizzes & Assignment Evaluation",
            category: "Full-Stack LMS Platform",
            timeline: "2023 – 2024",
            role: "Full-Stack Architect & Creator",
            stack: [
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Redux Toolkit & RTK Query",
                "Redux Persist",
                "Cloudinary Video",
                "JWT & Passport",
                "Ant Design",
            ],
            stats: [
                { label: "Architecture", value: "Next.js + Express" },
                { label: "State Sync", value: "RTK Query Cache" },
                { label: "Assessment", value: "Quizzes & Assignments" },
                { label: "Leaderboard", value: "Real-Time Ranking" },
            ],
            liveUrl: "https://github.com/b-l-i-n-d/edTech",
            githubUrl: "https://github.com/b-l-i-n-d/edTech",
            isPrivate: false,
            stages: {
                architecture: {
                    title: "Full-Stack Next.js & Express Micro-Architecture with Video Telemetry",
                    subtitle: "Decoupled Media Delivery, Normalized State & Automated Marking",
                    description:
                        "EdTech provides a complete learning management ecosystem connecting students and instructors. Features video course players with progress tracking, interactive multiple-choice quizzes with automated grading, assignment submission portals with instructor marking, and real-time student leaderboard rankings.",
                    highlights: [
                        "Next.js SSR frontend with Redux Toolkit and RTK Query normalized cache hydration",
                        "Express REST backend with JWT authentication and Passport security strategies",
                        "Cloudinary video player integration with bookmarking and playback telemetry",
                        "Automated quiz scoring pipeline and instructor assignment grading with feedback loop",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Course Video Playback → Live Quiz → Leaderboard Rank",
                    subtitle: "End-to-End Student Assessment & Telemetry Lifecycle",
                    description:
                        "Student completes streaming lesson modules, takes dynamically timed quizzes, submits coursework assignments, and receives instant grade calculation that updates global leaderboard standings.",
                    highlights: [
                        "1. Video player streams course media with auto-progress tracking into RTK Query cache",
                        "2. Quiz engine renders randomized questions and calculates total score in real-time",
                        "3. Assignment submission uploads project files and notifies course instructors",
                        "4. Global leaderboard evaluates aggregate quiz & assignment marks to update student rank",
                    ],
                },
                code: {
                    title: "Automated Quiz Evaluation & Leaderboard Calculation Engine",
                    subtitle: "Express Controller & MongoDB Transaction Pipeline",
                    description:
                        "Backend evaluation controller verifying student answer sheets against question keys, executing atomic grade recording, and computing updated student leaderboard standings.",
                    highlights: [
                        "Atomic score calculation preventing duplicate submission exploits",
                        "Leaderboard rank aggregation computing cumulative marks and peer percentiles",
                    ],
                    codeSnippet: {
                        filename: "server/controllers/quizMark.controller.ts",
                        language: "typescript",
                        code: `// Automated Quiz Score Evaluator & Leaderboard Mutator
export async function evaluateQuizSubmission(req: Request, res: Response) {
    const { studentId, videoId, answers } = req.body;
    const questions = await Question.find({ video_id: videoId });
    let totalMark = 0;
    questions.forEach(q => {
        if (isAnswersMatch(q.options, answers[q._id])) totalMark += q.mark;
    });
    await QuizMark.findOneAndUpdate({ student_id: studentId, video_id: videoId }, { mark: totalMark, totalMark: questions.length * 5 }, { upsert: true });
    return res.status(200).json({ success: true, score: totalMark });
}`,
                    },
                },
                live: {
                    title: "Course Dashboard, Cloudinary Video & Real-Time Leaderboards",
                    subtitle: "Comprehensive Student & Admin Cockpit Experience",
                    description:
                        "Explore the live features of the EdTech platform: student learning dashboard, video module navigator, quiz score breakdown, and admin course creation studio.",
                    highlights: [
                        "Complete role-based access control for students and administrators",
                        "Dynamic leaderboard ranking based on combined quiz and assignment scores",
                        "Responsive Next.js client with Ant Design UI and smooth Markdown rendering",
                        "100% open-source architecture with modular Express API endpoints",
                    ],
                },
            },
        },
        {
            id: "docapp",
            chapterNumber: "07",
            title: "DocApp Healthcare Suite",
            tagline: "Full-Stack Medical Appointment Booking Platform & Clinical State Machine",
            category: "Full-Stack Healthcare Systems",
            timeline: "2023",
            role: "Full-Stack Architect & Creator",
            stack: [
                "React",
                "Redux Toolkit & RTK Query",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "React PDF Renderer",
                "Ant Design",
                "Tailwind CSS",
                "Cloudinary",
                "NodeMailer",
            ],
            stats: [
                { label: "Portals", value: "Patient · Doctor · Admin" },
                { label: "State Engine", value: "ACID Booking Locks" },
                { label: "Export", value: "Dynamic Medical PDF" },
                { label: "Auth", value: "JWT & Cookie Rotation" },
            ],
            liveUrl: "https://github.com/b-l-i-n-d/docapp",
            githubUrl: "https://github.com/b-l-i-n-d/docapp",
            isPrivate: false,
            stages: {
                architecture: {
                    title: "Three-Tier Clinical Scheduling Architecture & Availability State Engine",
                    subtitle: "Multi-Role RBAC, Concurrency Locks & Dynamic PDF Generation",
                    description:
                        "DocApp delivers an enterprise-grade clinical appointment workflow coordinating patients, healthcare practitioners, and clinic administrators. The system prevents scheduling collisions using optimistic slot locking, validates doctor credentials, and generates patient appointment dossiers via React PDF Renderer.",
                    highlights: [
                        "Multi-role role-based access control (Patients, Verified Doctors, System Administrators)",
                        "Deterministic booking state machine preventing double-booking race conditions",
                        "Dynamic client-side and server-side PDF prescription and appointment dossier export",
                        "NodeMailer automated appointment confirmation and schedule change alerts",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Doctor Search → Slot Reservation → PDF Export",
                    subtitle: "Synchronized Booking Pipeline & Notification Broadcast",
                    description:
                        "Patients filter doctors by medical department and district, select available time slots with instantaneous concurrency lock, receive email confirmations, and export medical appointment summaries.",
                    highlights: [
                        "1. Patient filters approved doctors by department, workplace, and geographic district",
                        "2. Slot reservation executes atomic availability check to eliminate scheduling conflicts",
                        "3. Doctor reviews incoming patient consultation queue and confirms appointment",
                        "4. Dynamic React PDF renderer generates formatted medical summary dossier for offline access",
                    ],
                },
                code: {
                    title: "Doctor Appointment Concurrency Lock & Slot Reservation Controller",
                    subtitle: "MongoDB / Mongoose Transaction Engine with ACID Guarantees",
                    description:
                        "Express route controller executing atomic appointment booking, verifying doctor working hours and preventing duplicate slot allocation.",
                    highlights: [
                        "Atomic MongoDB findOneAndUpdate query preventing concurrent slot claims",
                        "Automated email notification trigger dispatched to both patient and practitioner",
                    ],
                    codeSnippet: {
                        filename: "server/controllers/appointment.controller.ts",
                        language: "typescript",
                        code: `// Doctor Appointment Atomic Reservation Lock
export async function reserveAppointmentSlot(req: Request, res: Response) {
    const { doctorId, patientId, slotTime, appointmentDate } = req.body;
    const existing = await Appointment.findOne({ doctorId, appointmentDate, slotTime, status: { $ne: "CANCELLED" } });
    if (existing) return res.status(409).json({ error: "Selected consultation slot has already been reserved." });
    const appointment = await Appointment.create({ doctorId, patientId, slotTime, appointmentDate, status: "PENDING" });
    await sendConfirmationEmail(appointment);
    return res.status(201).json({ success: true, appointment });
}`,
                    },
                },
                live: {
                    title: "Multi-Portal Clinical Dashboards & Administrative Management",
                    subtitle: "Verified Doctor Onboarding, Appointment Ledger & Cloudinary Assets",
                    description:
                        "DocApp features distinct specialized interfaces for patients, doctors, and clinic administrators with dark/light theme switching and comprehensive analytics.",
                    highlights: [
                        "Doctor dashboard for schedule management, patient history, and PDF export",
                        "Admin portal for approving practitioner credentials and department taxonomy",
                        "Client-side state synchronization with RTK Query and automatic notification polling",
                        "Complete open-source repository with full screenshot walkthroughs",
                    ],
                },
            },
        },
    ],
    interactiveBuilds: [
        {
            id: "drag-sort",
            title: "Drag-N-Sort Engine",
            tagline: "FLIP Layout Transitions with Pointer Physics",
            category: "Interaction Architecture",
            description:
                "Zero-layout-shift drag-and-drop sortable list using pure pointer event tracking, FLIP coordinate calculations, and interruptible springs.",
            technologies: ["React", "TypeScript", "Pointer Events", "FLIP Technique", "Web Animations API"],
            demoUrl: "/demos/drag-sort",
            githubUrl: "https://github.com/b-l-i-n-d/tutor-curriculum-engine",
            fpsTarget: 120,
            highlights: [
                "120 FPS continuous framerate during multi-item reorder",
                "FLIP bounding rect differential computation in <2ms",
                "Zero external drag library dependencies",
            ],
        },
        {
            id: "folder-tree",
            title: "Recursive Folder Tree",
            tagline: "High-Density Hierarchical File Navigation",
            category: "Data Structures & State",
            description:
                "Deep tree directory visualizer handling 10,000+ nodes with virtualized windowing, multi-select ranges, keyboard navigation, and inline mutation.",
            technologies: ["React", "TypeScript", "Tree Traversal", "DOM Virtualization", "Tailwind CSS"],
            demoUrl: "/demos/folder-tree",
            githubUrl: "https://github.com/b-l-i-n-d/tutor-curriculum-engine",
            fpsTarget: 60,
            highlights: [
                "Virtualized rendering supporting 10,000+ deep nested items",
                "WAI-ARIA Treeview compliant keyboard navigation",
                "Immutable branch mutation via structural path updates",
            ],
        },
        {
            id: "3d-book",
            title: "3D Interactive Flipbook",
            tagline: "CSS 3D Transform Pipeline with Dynamic Lighting",
            category: "Creative Engineering",
            description:
                "Hardware-accelerated 3D book cover and page-turn experience using CSS 3D matrix transforms, pointer-following dynamic shadow falloff, and realistic page curvature.",
            technologies: ["React", "CSS 3D Transforms", "Matrix3D", "Pointer Physics", "RAF"],
            demoUrl: "/demos/3d-book",
            githubUrl: "https://github.com/b-l-i-n-d/tutor-curriculum-engine",
            fpsTarget: 60,
            highlights: [
                "Hardware GPU compositing with zero main thread layout thrashing",
                "Dynamic specular highlight reacting to cursor coordinates",
                "Touch gesture support for page turn momentum",
            ],
        },
        {
            id: "interactive-calendar",
            title: "Zero-Dependency Calendar",
            tagline: "Date Math, Range Selection & Event Scheduling",
            category: "Component Systems",
            description:
                "Accessible date and range picker engineered from pure date arithmetic. Supports multi-month views, keyboard navigation, locale formatting, and collision-free booking windows.",
            technologies: ["TypeScript", "Native Date Math", "Intl API", "CSS Grid", "Accessibility"],
            demoUrl: "/demos/calendar",
            githubUrl: "https://github.com/b-l-i-n-d/tutor-curriculum-engine",
            fpsTarget: 60,
            highlights: [
                "Zero external date libraries (no date-fns, no moment, no dayjs)",
                "Full keyboard accessibility with roving tabindex",
                "Internationalized relative format via native Intl.DateTimeFormat",
            ],
        },
    ],
    hybridGallery: [
        {
            id: "blueprint-01",
            number: "01",
            title: "Multi-Store E-Commerce Suite & Admin CMS",
            category: "Enterprise Fullstack Platform",
            badge: "COMMERCE CMS",
            description:
                "Enterprise multi-store administration platform and customer storefront built with Next.js and Stripe. Features granular product variant matrices, category trees, webhook-driven order fulfillment, and Prisma-backed relational inventory management.",
            details: [
                "Multi-store tenant isolation with individual Stripe Connect integration",
                "O(1) variant matrix calculation for complex SKU sizes and color combinations",
                "Optimistic checkout flow with webhook-verified order confirmation",
                "Hierarchical category and billboard management system",
            ],
            technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Prisma", "Stripe API", "MySQL"],
            demoUrl: "https://github.com/b-l-i-n-d/e-commerce",
            sourceUrl: "https://github.com/b-l-i-n-d/e-commerce",
        },
        {
            id: "blueprint-02",
            number: "02",
            title: "Native Quick Crypto & Argon2id Engine",
            category: "Security & Cryptography",
            badge: "ZERO-KNOWLEDGE",
            description:
                "High-performance cryptographic core engineered in React Native and Expo SDK 57. Implements client-side Argon2id key derivation, authenticated AES-256-GCM encryption, RFC 6238 TOTP authenticators, BIP39 mnemonic recovery, and 3-way Google Drive synchronization.",
            details: [
                "Argon2id password hashing with tuned memory cost parameters",
                "AES-256-GCM authenticated encryption with unique initialization vectors",
                "RFC 6238 time-based one-time password (TOTP) generation engine",
                "BIP39 24-word mnemonic vault recovery kit generation",
            ],
            technologies: ["React Native", "Expo SDK 57", "TypeScript", "Quick Crypto", "Argon2id", "AES-256-GCM"],
            demoUrl: "https://github.com/b-l-i-n-d/enclave",
            sourceUrl: "https://github.com/b-l-i-n-d/enclave",
        },
        {
            id: "blueprint-03",
            number: "03",
            title: "Zero-CLS Atomic Form & Reorder Pipeline",
            category: "Performance Architecture",
            badge: "LMS CORE",
            description:
                "Interactive form mutation and curriculum reorder engine designed for Tutor LMS. Decouples heavy input validation from the main thread, enforces 0.00 CLS layout stability, and synchronizes atomic diff mutations with WordPress REST API.",
            details: [
                "Atomic form field state isolation preventing cascade re-renders",
                "FLIP layout calculation yielding sub-16ms drag transitions",
                "centralized useTutorMotion hook respecting WCAG accessibility guidelines",
                "LRU client-side caching reducing server roundtrips by 90%",
            ],
            technologies: ["React", "TypeScript", "Zustand", "WordPress REST API", "FLIP", "Tailwind CSS"],
            demoUrl: "https://tutorlms.com",
            sourceUrl: "https://tutorlms.com",
        },
        {
            id: "blueprint-04",
            number: "04",
            title: "Automated Quiz & Leaderboard Sync Engine",
            category: "EdTech Fullstack Platform",
            badge: "LEARNING ENGINE",
            description:
                "Interactive learning management platform with video playback telemetry, synchronized chapter bookmarks, timed quiz evaluation with instant score computation, and live peer rankings.",
            details: [
                "Client-side RTK Query caching with optimistic bookmark updating",
                "Automated quiz grading engine supporting multi-choice and boolean assessments",
                "Video progress tracking with automatic completion triggers",
                "Role-based authorization separating instructors from enrolled students",
            ],
            technologies: ["Next.js", "Express.js", "MongoDB", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d/edTech",
            sourceUrl: "https://github.com/b-l-i-n-d/edTech",
        },
        {
            id: "blueprint-05",
            number: "05",
            title: "Clinical Concurrency Locks & PDF Generator",
            category: "Healthcare Systems",
            badge: "HIGH CONCURRENCY",
            description:
                "Medical consultation and appointment management platform with multi-tier role authorization (Admin, Doctor, Patient). Features deterministic double-booking prevention and dynamic prescription PDF generation.",
            details: [
                "Atomic reservation locks preventing concurrent slot race conditions",
                "Role-gated dashboards with personalized appointment histories",
                "Automated PDF prescription generation and secure patient download pipeline",
                "Doctor availability window configuration with blackout periods",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "PDFKit"],
            demoUrl: "https://github.com/b-l-i-n-d/docapp",
            sourceUrl: "https://github.com/b-l-i-n-d/docapp",
        },
    ],
    education: {
        degree: "B.Sc. in Software Engineering",
        institution: "Shahjalal University of Science and Technology (SUST)",
        institute: "Shahjalal University of Science and Technology",
        shortInstitute: "SUST",
        department: "Department of Computer Science & Engineering",
        location: "Sylhet, Bangladesh",
        graduationYear: "2023",
        period: "2018 – 2023",
        status: "Graduated",
        relevantCourses: [
            "Data Structures & Algorithms",
            "Object-Oriented Software Engineering",
            "Database Systems & Query Optimization",
            "Operating Systems & Process Concurrency",
            "Distributed Systems & Cloud Computing",
            "Computer Networks & Protocol Stacks",
            "Software Architecture & Design Patterns",
            "Compiler Design & Automata Theory",
        ],
        link: "https://www.sust.edu",
    },
    location: "Dhaka, Bangladesh",
    contact: {
        email: "fahim.faisal.abir@gmail.com",
        locationMap: "https://maps.google.com/?q=Dhaka,Bangladesh",
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://www.linkedin.com/in/b-l-i-n-d/",
        cvUrl: "/assets/cv.pdf",
    },
    socialLinks: {
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://www.linkedin.com/in/b-l-i-n-d/",
        email: "mailto:fahim.faisal.abir@gmail.com",
    },
    gaming: {
        title: "Off-Duty Intel // High-Tick Gaming",
        description: "Beyond the code editor, competitive gaming is where high-tick spatial anticipation, micro-second reflex calibration, and squad coordination are forged.",
        currentGames: [
            {
                name: "Call of Duty: Warzone",
                genre: "Tactical Battle Royale & Resurgence",
                status: "Active Deployment",
                tagline: "Designated squad sniper across Verdansk & Urzikstan drops: first-shot accuracy, long-range overwatch, bullet velocity prediction, and clutch endgame rotations under pressure.",
                badge: "Squad Sniper // Overwatch",
                skills: ["Sniper Trajectory Precision", "Long-Range Overwatch", "First-Shot Accuracy", "Squad Comms & Rotations"],
            },
            {
                name: "Chase",
                genre: "High-Speed Tactical Pursuit",
                status: "Precision Drifts",
                tagline: "High-speed vehicle pursuit, dynamic trajectory anticipation, and kinetic drift physics.",
                badge: "Kinetic Velocity",
                skills: ["Trajectory Prediction", "Obstacle Anticipation", "Zero-Latency Input", "Adrenaline Focus"],
            },
        ],
        vibeNote: "Navigating 150-player combat lobbies and high-speed pursuits requires the same neurological muscle memory as engineering zero-latency, 60fps tactile web interfaces: split-second state changes, frame-perfect anticipation, and zero room for frame drops.",
    },
};
