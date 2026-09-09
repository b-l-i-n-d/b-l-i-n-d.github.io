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
        title: "Tutor LMS Architecture",
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
            title: "Tutor LMS",
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
                    subtitle: "Native Quick Crypto & AES-256-GCM Authenticated Encryption",
                    description:
                        "Core cryptographic pipeline deriving 256-bit vault keys with native Argon2id and performing authenticated AES-GCM encryption with a random 96-bit IV and a 128-bit auth tag appended to the ciphertext.",
                    highlights: [
                        "NIST SP 800-38D compliant AES-256-GCM authenticated cipher",
                        "Native Argon2id key derivation (64MB memory, 3 passes, 1 lane, 256-bit output)",
                        "Secure hardware random bytes for initialization vectors and salts",
                    ],
                    codeSnippet: {
                        filename: "lib/crypto/encryption.ts",
                        language: "typescript",
                        code: `// Enclave cryptographic engine (lib/crypto/encryption.ts)
const IV_LENGTH = 12;        // 96-bit IV for AES-GCM
const AUTH_TAG_LENGTH = 16;  // 128-bit auth tag

export async function encryptJson<T>(vaultKeyBase64: string, plaintext: T) {
    const keyBytes = Buffer.from(vaultKeyBase64, "base64");
    const iv = QuickCrypto.getRandomValues(new Uint8Array(IV_LENGTH));
    const plaintextBytes = Buffer.from(JSON.stringify(plaintext), "utf8");

    const cipher = QuickCrypto.createCipheriv("aes-256-gcm", keyBytes, iv);
    const encrypted = Buffer.concat([cipher.update(plaintextBytes), cipher.final()]);
    const authTag: Buffer = cipher.getAuthTag();

    // Auth tag is appended to the ciphertext so tampering fails decryption
    const combined = Buffer.concat([encrypted, authTag]);

    return {
        ciphertext: combined.toString("base64"),
        iv: Buffer.from(iv).toString("base64"),
    };
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
                "Next.js 13",
                "TypeScript",
                "React 18",
                "Redux Toolkit & RTK Query",
                "Redux Persist",
                "Ant Design",
                "Node.js",
                "Express",
                "MongoDB & Mongoose",
                "JWT & Passport",
                "Joi Validation",
                "NodeMailer & Handlebars",
            ],
            stats: [
                { label: "Architecture", value: "Client + Server Monorepo" },
                { label: "State Sync", value: "RTK Query + Persist" },
                { label: "Assessment", value: "5-Mark Quiz Grading" },
                { label: "Leaderboard", value: "Mongo Aggregation" },
            ],
            liveUrl: "https://ed-tech-six.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/edTech",
            isPrivate: false,
            stages: {
                architecture: {
                    title: "Client/Server Monorepo & Service-Layer REST Backbone",
                    subtitle: "Next.js 13 Pages Router + Express Models → Services → Controllers → Routes",
                    description:
                        "EdTech ships as a two-folder monorepo. The client/ is a Next.js 13 (pages router) TypeScript app styled with Ant Design, connecting through Redux Toolkit domain slices (auth, videos, quiz sets, quizzes, assignment marks) and RTK Query endpoints rehydrated from redux-persist. The server/ is an ESM Express REST API organized into a strict models → services → controllers → routes layering with Joi request validation, Mongoose models (user, video, quizz, quizzSet, assignment, quizzMark, assignmentMark, token), Passport JWT access/refresh auth, and a Swagger OpenAPI spec served at runtime.",
                    highlights: [
                        "Two-folder monorepo: Next.js 13 client and an ESM Express service-layer API",
                        "RTK Query endpoint per domain (auth, video, quiz, assignment, leaderboard) with redux-persist rehydration",
                        "Mongoose paginate plugin for cursor-free paging and service-layer separation of concerns",
                        "Helmet, xss-clean, express-rate-limit and express-mongo-sanitize hardening the REST surface",
                        "Swagger-jsdoc OpenAPI spec exposed via swagger-ui-express",
                        "NodeMailer + Handlebars password-reset email template with Joi-validated flows",
                    ],
                },
                flow: {
                    title: "Student Journey: Watch → Quiz → Assignment → Leaderboard",
                    subtitle: "Persisted JWT Sessions, react-player Modules & Rank Aggregation",
                    description:
                        "Students register or log in through a persisted auth slice (next-redux-wrapper + redux-persist), then browse course modules and watch lessons in a react-player view with per-video RTK Query state. Completing a module unlocks its quiz; submissions are graded by comparing the student's selected answers against the correct-option keys stored on each question (five marks per question). Assignments upload to an instructor review queue with marks and written feedback, and every score folds into a MongoDB aggregation leaderboard ranking the top 25 students with shared ranks for ties.",
                    highlights: [
                        "1. Route guards (LoginGuard / UserOnly / AdminOnly) wrapping persisted JWT sessions",
                        "2. react-player video playback in the course page with per-video RTK Query state",
                        "3. Quiz engine credits 5 points per correct answer and rejects duplicate submissions",
                        "4. Assignment portal plus an admin marking UI (marks & feedback)",
                        "5. MongoDB $group/$lookup aggregation ranks students 1–25 with tied ranks",
                    ],
                },
                code: {
                    title: "Automated Quiz Evaluation & Duplicate-Submission Guard",
                    subtitle: "Express Service-Layer Grading with Mongoose (quizzMark.service.js)",
                    description:
                        "The grading service loads the video's question set, builds the correct-answer key from the isCorrect flags on each option, compares the student's selections with structural JSON equality, and persists the result atomically as a QuizzMark document recording totalQuizzes, totalCorrect, totalWrong, totalMarks and marks. A mark that already exists for the same student + video short-circuits with HTTP 400, closing the resubmission loophole before any grading runs.",
                    highlights: [
                        "Duplicate-submission rejection: same video + student raises 400 before grading",
                        "Answer keys derived from persisted isCorrect option flags, never from client claims",
                        "Marks model: totalMarks = questions × 5, marks = correct × 5",
                        "Paginated queries with video/student population for admin and student views",
                    ],
                    codeSnippet: {
                        filename: "server/src/services/quizzMark.service.js",
                        language: "javascript",
                        code: `// Server-side quiz grading (quizzMark.service.js excerpt)
const correctAnswers = quizzes.map((quizz) => ({
    [quizz._id]: quizz.options.filter((option) => option.isCorrect).map((option) => option._id.toString()),
}));

const { selectedAnswers } = quizzMarkBody;

const countTotalCorrect = (correctAns, selectedAns) => {
    let totalCorrect = 0;
    correctAns.forEach((correctObject, index) => {
        const selectedObject = selectedAns[index];
        if (JSON.stringify(correctObject) === JSON.stringify(selectedObject)) totalCorrect += 1;
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
});`,
                    },
                },
                live: {
                    title: "Live Deployed Student & Admin Cockpit",
                    subtitle: "Vercel Frontend, Containerized API & OpenAPI Docs",
                    description:
                        "The platform's student dashboard, course video player, quiz/assignment grading and the real-time leaderboard are deployed live on Vercel, backed by the Docker/PM2-ready Express API with Swagger documentation.",
                    highlights: [
                        "Live product deployed at ed-tech-six.vercel.app (Vercel)",
                        "Docker Compose dev/prod/test profiles with PM2 process manager",
                        "Jest + supertest + node-mocks-http test suite with Husky lint-staged pre-commit",
                        "100% open-source MIT-licensed monorepo with seeded demo data",
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
                "React 18",
                "Vite",
                "Redux Toolkit & RTK Query",
                "Ant Design",
                "Tailwind CSS",
                "daisyUI",
                "Chart.js",
                "React PDF Renderer",
                "Node.js",
                "Express",
                "MongoDB & Mongoose",
                "Cloudinary",
            ],
            stats: [
                { label: "Portals", value: "Patient · Doctor · Admin" },
                { label: "Auth", value: "Cookie JWT Rotation" },
                { label: "Export", value: "React-PDF Dossier" },
                { label: "Client", value: "React 18 + Vite" },
            ],
            liveUrl: "https://docapp-five.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/docapp",
            isPrivate: false,
            stages: {
                architecture: {
                    title: "Three-Tier Clinical Scheduling Architecture & Component-Based API",
                    subtitle: "Multi-Role RBAC, Cookie-JWT Rotation & React-PDF Export",
                    description:
                        "DocApp coordinates patients, doctors, and clinic administrators across a Vite/React client and a component-based Express API (models → controllers → routes per domain: users, doctors, departments, districts, workplaces, appointments). Authentication uses rotating cookie-borne JWT access/refresh tokens behind Passport-free middleware, images flow through Cloudinary, and appointment dossiers render to PDF client-side via @react-pdf/renderer.",
                    highlights: [
                        "Multi-role role-based access control (Patients, Verified Doctors, System Administrators)",
                        "Rotating cookie JWT access/refresh exchange with per-route verifyAccessToken middleware",
                        "Component-based Express organization mirroring each domain's model + controller + routes",
                        "Cloudinary asset upload/delete and NodeMailer + Handlebars password-reset email templates",
                    ],
                },
                flow: {
                    title: "Interaction Flow: Doctor Search → Booking Request → PDF Export",
                    subtitle: "Department & District Filtering, Validated Booking & Client Dossier",
                    description:
                        "Patients filter approved doctors by department, workplace, and district, open a doctor profile, and submit a booking with name, age, gender, phone, and appointment date. The API validates the doctor's ObjectId and existence, then persists the appointment to the patient's ledger. Doctors and admins review bookings through date-scoped dashboards, and any listing can be exported as a formatted medical dossier PDF.",
                    highlights: [
                        "1. Patient filters approved doctors by department, workplace, and geographic district",
                        "2. Booking controller validates doctor identity and persists a date-stamped appointment",
                        "3. Doctor dashboard lists incoming patient queues with date and recent-5 feeds",
                        "4. React-PDF renderer exports a formatted medical summary dossier client-side",
                    ],
                },
                code: {
                    title: "Doctor Appointment Creation & Validation Controller",
                    subtitle: "Express Component-Based Architecture with Mongoose",
                    description:
                        "The appointments controller validates the requested doctor, rejects malformed ObjectIds, and persists a date-stamped appointment bound to the authenticated user from the cookie-borne JWT. Listings are filterable per doctor or per patient ('me'), by date, with aggregation-style recent views and paginated query helpers.",
                    highlights: [
                        "Container-objective validation: ObjectId format + doctor existence before insert",
                        "User identity resolved from the access-token payload (res.locals.data), never from the body",
                        "Appointment ledger queries scoped by userId ('/me'), doctorId, date, and a recent-5 doctor feed",
                        "React-PDF renderer generates an appointment dossier client-side from the ledger",
                    ],
                    codeSnippet: {
                        filename: "server/components/appointments/appointments.controller.js",
                        language: "javascript",
                        code: `// Express appointment creation (appointments.controller.js excerpt)
const createAppointment = async (req, res) => {
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
};`,
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
            githubUrl: "https://github.com/b-l-i-n-d/dragdiv",
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
            githubUrl: "https://github.com/b-l-i-n-d/folder-manager",
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
            githubUrl: "https://github.com/b-l-i-n-d/book-animation",
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
            githubUrl: "https://github.com/b-l-i-n-d/calendar",
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
            demoUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
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
            title: "Automated Quiz & Leaderboard Aggregation Engine",
            category: "EdTech Fullstack Platform",
            badge: "LEARNING ENGINE",
            description:
                "Interactive learning management platform with react-player video modules, automated 5-mark quiz graduation with duplicate-submission guards, instructor-marked assignments, and a MongoDB-aggregated peer leaderboard.",
            details: [
                "Client-side RTK Query domain slices rehydrated via redux-persist",
                "Automated quiz grading built on stored isCorrect option keys (5 marks per question)",
                "react-player lesson playback with persisted progress state",
                "Role-based authorization separating admins from enrolled students",
            ],
            technologies: ["Next.js", "Express.js", "MongoDB", "Redux Toolkit", "RTK Query", "Ant Design"],
            demoUrl: "https://github.com/b-l-i-n-d/edTech",
            sourceUrl: "https://github.com/b-l-i-n-d/edTech",
        },
        {
            id: "blueprint-05",
            number: "05",
            title: "Clinical Booking Validation & PDF Dossier Generator",
            category: "Healthcare Systems",
            badge: "ROLE-GATED BOOKING",
            description:
                "Medical consultation and appointment management platform with multi-tier role authorization (Admin, Doctor, Patient). Features doctor-validated appointment booking, rotating cookie-JWT sessions, and client-side React-PDF dossier export.",
            details: [
                "Doctor-validated booking with ObjectId checks before appointment persistence",
                "Role-gated dashboards with personalized appointment histories",
                "Client-side React-PDF dossier generation from the appointment ledger",
                "Date-scoped appointment queries for doctor and admin review feeds",
            ],
            technologies: ["React", "Vite", "Express", "MongoDB", "Mongoose", "React-PDF"],
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
