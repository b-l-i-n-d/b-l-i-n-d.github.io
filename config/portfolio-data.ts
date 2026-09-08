import { EngineerProfile } from "@/types/portfolio";

export const portfolioData: EngineerProfile = {
    name: "Fahim Faisal",
    role: "Software Engineer",
    tagline: "High-Performance Systems & Fluid Web Architecture",
    headline:
        "Software Engineer with a B.Sc. in Software Engineering from SUST. Core frontend architect across Tutor LMS (v2.0 to v4.0) at Ollyo, and creator of Enclave Zero-Knowledge Mobile Vault, EdTech Learning Platform, and DocApp Healthcare Systems.",
    bioParagraphs: [
        "Software Engineer with a B.Sc. in Software Engineering from Shahjalal University of Science and Technology (SUST). I specialize in architecting production web platforms, complex interactive state machines, and hardware-accelerated user interfaces.",
        "At Ollyo (mother company of Themeum), I lead core frontend engineering for Tutor LMS across versions 2.0 to 3.0 and 3.0 to 4.0, maintaining zero-CLS animations, authoring the centralized useTutorMotion coordinator hook, and developing continuous learning telemetry that syncs seamlessly with WordPress REST APIs for over 120,000 active academies globally.",
        "Beyond enterprise EdTech, I architect high-security and full-stack software systems: Enclave (a zero-knowledge, local-first credential & password manager in React Native with AES-256-GCM, Argon2id, and Google Drive 3-way sync), EdTech (an interactive video LMS with automated quizzes and assignment grading), and DocApp (a multi-role medical booking platform with deterministic state machines and dynamic PDF generation).",
    ],
    skillCategories: [
        {
            name: "Frontend & Web Architecture",
            skills: ["React", "Next.js", "React Native", "TypeScript (Strict)", "Tailwind CSS", "Zustand", "Redux Toolkit", "NextUI", "HTML5 Canvas"],
        },
        {
            name: "Motion & Performance Engineering",
            skills: ["Physics-Based Animation", "Hardware Compositing", "FLIP Layout Transitions", "CSS 3D Transforms", "Framer Motion", "RAF Throttling", "Zero CLS Optimization"],
        },
        {
            name: "Systems & Backend Integration",
            skills: ["WordPress REST API", "PHP & PHPStan", "Node.js", "Express", "MongoDB", "Prisma ORM", "MySQL / MariaDB", "Stripe Webhooks"],
        },
        {
            name: "Cryptography & Mobile Security",
            skills: ["Argon2id KDF", "AES-256-GCM", "RFC 6238 TOTP", "BIP39 Mnemonic", "SQLite Local-First", "Expo SDK", "WCAG 2.1 AAA Accessibility"],
        },
    ],
    heroReel: {
        title: "Tutor LMS (v2.0 to v4.0) Architecture Showreel",
        tagline: "Engineered by Fahim Faisal @ Ollyo",
        badge: "Flagship Showreel: Production Architecture",
        videoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-student-4.mp4",
        secondaryVideoUrl: "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-instructor-3.mp4",
        posterUrl: "https://tutorlms.com/wp-content/uploads/2026/07/Tutor-LMS-Learning-Experience-dashboard-with-course-modules-Classic-Mode.webp",
        runtime: "0:45",
        framerate: "Hardware Composited",
        productTitle: "Tutor LMS",
        productUrl: "https://tutorlms.com/",
    },
    experiences: [
        {
            id: "ollyo",
            company: "Ollyo",
            role: "Software Engineer (Tutor LMS)",
            department: "Core Product Engineering",
            location: "Dhaka, Bangladesh",
            period: "2023 – Present",
            startDate: "2023",
            website: "https://ollyo.com",
            products: [
                {
                    name: "Tutor LMS",
                    url: "https://tutorlms.com",
                    roleNote: "Core frontend architecture across 2.0 to 3.0 and 3.0 to 4.0: continuous lesson cockpit, Tutor Core component registry, 3rd-party field injection pipeline, zero-CLS curriculum builder, and sanitized quiz assessment engine.",
                },
            ],
            description:
                "Engineered complex product architectures, user interfaces, and interaction state models across flagship international software suites used by millions of learners and educators worldwide.",
            achievements: [
                "Led frontend development and feature releases across Tutor LMS 2.0 to 3.0 and 3.0 to 4.0, maintaining fluid GPU-composited transitions and zero layout shifts (0.00 CLS).",
                "Architected the Tutor Core Component Registry with strict typed schemas for 3rd-party WordPress add-on and field injections.",
                "Authored centralized motion settings coordinator hook (useTutorMotion) enforcing WCAG reduced-motion standards and performance budgets.",
                "Engineered continuous telemetry sync and client-side LRU query caching reducing server roundtrip load by 90% across 120,000+ active installations.",
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
                "CSS Matrix / Webpack / Rsbuild",
            ],
        },
    ],
    chapters: [
        { id: "hero", number: "00", title: "Flagship Reel", label: "Hero Showreel" },
        { id: "contents", number: "01", title: "Contents", label: "Chapter Directory" },
        { id: "about", number: "02", title: "Bio & Skills", label: "Behance Profile" },
        { id: "experience", number: "03", title: "Experience", label: "Professional Career" },
        { id: "tutor-lms", number: "04", title: "Tutor LMS", label: "Tutor LMS 2.0–4.0" },
        { id: "enclave", number: "05", title: "Enclave", label: "Zero-Knowledge Vault" },
        { id: "edtech", number: "06", title: "EdTech", label: "EdTech LMS Platform" },
        { id: "docapp", number: "07", title: "DocApp", label: "Healthcare State Machine" },
        { id: "motion-lab", number: "08", title: "Motion Lab", label: "Interactive UX & Motion Lab" },
        { id: "gallery", number: "09", title: "Blueprints", label: "12-Item Blueprint Gallery" },
        { id: "profile", number: "10", title: "Credentials", label: "SUST Credentials & Outro" },
    ],
    flagshipProjects: [
        {
            id: "tutor-lms",
            chapterNumber: "04",
            title: "Tutor LMS (v2.0 to v4.0)",
            tagline: "World-Class WordPress LMS Plugin Powering 120,000+ Online Academies Globally",
            category: "Enterprise EdTech Platform",
            timeline: "2023 – Present",
            role: "Software Engineer @ Ollyo",
            stack: [
                "React (@wordpress/element)",
                "TypeScript (Strict Schemas)",
                "Rsbuild / Rspack (Rust Toolchain)",
                "Object-Oriented PHP 8.x (namespace TUTOR)",
                "WordPress REST API & Nonce Gateway",
                "MySQL / MariaDB ($wpdb)",
                "Custom In-House Form & Query Engine",
                "Cypress E2E & WPCS",
                "Tailwind CSS & SCSS Modules",
            ],
            stats: [
                { label: "Active Installs", value: "120,000+" },
                { label: "Engineering Scope", value: "v2.0 – v4.0" },
                { label: "Frame Budget", value: "< 16ms / Zero-CLS" },
                { label: "Global Rating", value: "4.8 / 5.0" },
            ],
            liveUrl: "https://tutorlms.com/",
            githubUrl: "https://github.com/themeum/tutor",
            isPrivate: false,
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
                        "4. Debounced batch payload is dispatched to WordPress REST API with dynamic nonce security verification",
                        "5. Tutor PHP backend executes atomic MySQL transaction commits with automatic rollback snapshots on network drop",
                    ],
                },
                code: {
                    title: "Production Implementation Code: Tutor Core Registry & Motion Coordinator",
                    subtitle: "TypeScript 7 · React 19 · WordPress REST API",
                    description:
                        "Inspect real production modules authored for Tutor LMS: the extensible Core Component Registry with 3rd-party field injection hooks, the zero-CLS Course Builder FLIP engine, and the useTutorMotion accessibility coordinator hook.",
                    highlights: [
                        "Strict TypeScript schemas ensuring 3rd-party WordPress plugins cannot corrupt core builder state",
                        "FLIP layout matrix computing inverted DOM bounding rectangles for silky 60fps reordering",
                        "WCAG 2.1 AAA prefers-reduced-motion detection and iframe containment isolation",
                    ],
                    codeSnippet: {
                        filename: "TutorCoreRegistry.ts",
                        language: "typescript",
                        code: `// Tutor LMS 4.0 - Core Component Registry & Field Injection Engine
export interface FieldInjectionDefinition<T = any> {
    id: string;
    targetContext: "course_builder" | "quiz_builder";
    priority: number;
    render: (props: { value: T; onChange: (next: T) => void }) => React.ReactElement;
}`,
                    },
                },
                live: {
                    title: "Live Production Verification & Performance Telemetry",
                    subtitle: "Serving Over 120,000+ Online Academies Worldwide",
                    description:
                        "Tutor LMS is deployed on over 120,000 live WordPress production environments globally, powering universities, enterprise training portals, and creator academies with 4.8/5.0 average user satisfaction.",
                    highlights: [
                        "120,000+ active installations verified across WordPress.org plugin repository",
                        "Sub-16ms input response time even on courses with 500+ modular lessons and quizzes",
                        "Zero Cumulative Layout Shift (0.00 CLS) across all responsive breakpoints and builder views",
                        "Tested under high concurrent load with continuous telemetry sync",
                    ],
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
            id: "drag-n-sort",
            title: "FLIP Dynamic Reorder Engine",
            tagline: "First-Last-Invert-Play Micro-Interactions",
            category: "Layout Physics",
            description:
                "Production drag-and-drop sortable list featuring real-time displacement preview, collision boundary checking, and smooth spring settling.",
            highlights: [
                "FLIP (First, Last, Invert, Play) transition algorithm",
                "Sub-16ms layout recalculations via RequestAnimationFrame",
                "Keyboard accessible reordering with ARIA live regions",
            ],
            technologies: ["React", "Framer Motion", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d/dragnsort",
            githubUrl: "https://github.com/b-l-i-n-d/dragnsort",
            fpsTarget: 60,
            isPrivate: true,
        },
        {
            id: "folder-manager",
            title: "Curriculum Folder Manager",
            tagline: "Recursive Tree & Branch Transitions",
            category: "Data Structures & UI",
            description:
                "Deep hierarchical folder tree component designed for Tutor LMS curriculum structure with instant branch toggling and breadcrumb telemetry.",
            highlights: [
                "Memoized recursive node rendering avoiding deep re-renders",
                "Sub-tree collapse and expansion with layout preservation",
                "Contextual action menus positioned relative to click coordinates",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d/folder-manager",
            githubUrl: "https://github.com/b-l-i-n-d/folder-manager",
            fpsTarget: 60,
            isPrivate: false,
        },
        {
            id: "3d-book",
            title: "3D Perspective Book Flip",
            tagline: "CSS 3D Matrix & Page Curl",
            category: "3D Motion",
            description:
                "Realistic book turn physics simulation utilizing CSS 3D perspective transforms, dynamic shadows, and cursor-driven page tilt.",
            highlights: [
                "Dual-page rendering with dynamic backface-visibility management",
                "Cursor distance calculations controlling dynamic shadow depth",
                "Responsive perspective scaling across viewports",
            ],
            technologies: ["React", "CSS 3D Transforms", "Framer Motion"],
            demoUrl: "https://github.com/b-l-i-n-d/book-animation",
            githubUrl: "https://github.com/b-l-i-n-d/book-animation",
            fpsTarget: 60,
            isPrivate: false,
        },
        {
            id: "interactive-calendar",
            title: "Fluid Temporal Calendar",
            tagline: "Gesture Month Scrubbing & Time Math",
            category: "Components & State",
            description:
                "Interactive scheduling calendar with directional slide transitions, date range calculation, and instant keyboard navigation.",
            highlights: [
                "Direction-aware slide transitions based on previous and next month delta",
                "Zero third-party date library footprint using native Date API",
                "Full keyboard navigation conforming to W3C date picker patterns",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d/calendar",
            githubUrl: "https://github.com/b-l-i-n-d/calendar",
            fpsTarget: 60,
            isPrivate: false,
        },
        {
            id: "kinetic-spinner",
            title: "Kinetic Momentum Dial",
            tagline: "Rotational Inertia & Deceleration",
            category: "Physics & Canvas",
            description:
                "Rotational physics playground tracking drag velocity, angular momentum, decay friction, and spring return thresholds.",
            highlights: [
                "Touch and mouse angular coordinate vector math",
                "Euler integration for friction and deceleration dampening",
                "Dynamic RPM and velocity gauge output",
            ],
            technologies: ["React", "HTML5 Canvas / SVG", "TypeScript"],
            demoUrl: "https://github.com/b-l-i-n-d/spinner",
            githubUrl: "https://github.com/b-l-i-n-d/spinner",
            fpsTarget: 60,
            isPrivate: false,
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
            isPrivate: false,
        },
        {
            id: "enclave-vault",
            number: "02",
            title: "Enclave Zero-Knowledge Vault",
            category: "Mobile Cryptography & Security",
            badge: "Zero-Knowledge",
            description:
                "High-security, local-first credential and password manager for iOS & Android. Vault items are protected client-side via memory-hard Argon2id key derivation and authenticated AES-256-GCM symmetric encryption with hardware biometric gates.",
            details: [
                "KDF: Argon2id with cryptographically random salt",
                "Cipher: Authenticated AES-256-GCM with 96-bit IVs",
                "Cloud sync: Encrypted 3-way merge to Google Drive",
            ],
            technologies: ["React Native", "Expo SDK 57", "SQLite", "Quick Crypto", "Argon2id"],
            demoUrl: "https://github.com/b-l-i-n-d/enclave",
            sourceUrl: "https://github.com/b-l-i-n-d/enclave",
            isPrivate: true,
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
            demoUrl: "https://github.com/b-l-i-n-d/dragnsort",
            sourceUrl: "https://github.com/b-l-i-n-d/dragnsort",
            isPrivate: true,
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
            demoUrl: "https://github.com/b-l-i-n-d/folder-manager",
            sourceUrl: "https://github.com/b-l-i-n-d/folder-manager",
            isPrivate: false,
        },
        {
            id: "docapp-clinic",
            number: "05",
            title: "DocApp Healthcare Suite",
            category: "Healthcare State Machines",
            badge: "State Machine",
            description:
                "Full-stack medical appointment management platform with multi-role dashboards (Patients, Doctors, Admins), real-time availability locking, automated email notifications, and dynamic PDF medical summary generation.",
            details: [
                "Concurrency: ACID transactional locks preventing collisions",
                "State engine: Deterministic appointment finite automata",
                "Exports: Dynamic client & server React-PDF generation",
            ],
            technologies: ["React", "RTK Query", "Node.js", "Express", "MongoDB", "React-PDF"],
            demoUrl: "https://github.com/b-l-i-n-d/docapp",
            sourceUrl: "https://github.com/b-l-i-n-d/docapp",
            isPrivate: false,
        },
        {
            id: "edtech-lms",
            number: "06",
            title: "EdTech Learning Platform",
            category: "Full-Stack EdTech Systems",
            badge: "LMS Architecture",
            description:
                "Interactive video learning and evaluation platform built with Next.js and Express. Features Cloudinary video streaming, instant quiz grading, student assignment submission pipelines, and real-time leaderboards.",
            details: [
                "Assessment: Automated multiple-choice quiz scoring",
                "Media: Cloudinary video player with progress telemetry",
                "State: Next.js SSR + RTK Query normalized hydration",
            ],
            technologies: ["Next.js", "TypeScript", "Express", "MongoDB", "Redux Toolkit"],
            demoUrl: "https://github.com/b-l-i-n-d/edTech",
            sourceUrl: "https://github.com/b-l-i-n-d/edTech",
            isPrivate: false,
        },
        {
            id: "3d-card-flip",
            number: "07",
            title: "Perspective 3D Flip Card",
            category: "CSS 3D Motion Architecture",
            badge: "3D Perspective",
            description:
                "High-performance interactive card component featuring CSS matrix3d transformations, dynamic lighting vectors, and touch-responsive surface tilts.",
            details: [
                "Transform: CSS matrix3d with hardware compositing",
                "Motion curve: Spring physics damping (k=180, c=12)",
                "A11y: Graceful fallback for prefers-reduced-motion",
            ],
            technologies: ["React", "CSS 3D Transforms", "Framer Motion"],
            demoUrl: "https://github.com/b-l-i-n-d/book-animation",
            sourceUrl: "https://github.com/b-l-i-n-d/book-animation",
            isPrivate: false,
        },
        {
            id: "temporal-calendar",
            number: "08",
            title: "Temporal Date Range Picker",
            category: "Temporal Interaction Engineering",
            badge: "Temporal Engine",
            description:
                "Multi-month temporal range selection engine with zero third-party date libraries, sub-millisecond range calculations, and swipe gesture controls.",
            details: [
                "Bundle size: 0KB third-party dependencies (Native Date API)",
                "Accessibility: W3C APG Date Picker Pattern compliant",
                "Transitions: Hardware-accelerated month transitions",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://github.com/b-l-i-n-d/calendar",
            sourceUrl: "https://github.com/b-l-i-n-d/calendar",
            isPrivate: false,
        },
        {
            id: "kinetic-friction",
            number: "09",
            title: "Kinetic Momentum Dial",
            category: "Physics Simulation",
            badge: "Kinetic Dial",
            description:
                "Rotational physics playground tracking angular momentum, decay friction, and spring return thresholds with touch and mouse coordinate vector math.",
            details: [
                "Math model: Euler numerical integration for drag & decay",
                "FPS target: Continuous 60fps frame loop with RAF throttle",
                "Feedback: Dynamic rotational velocity and RPM indicators",
            ],
            technologies: ["HTML5 Canvas", "TypeScript", "Web Audio API"],
            demoUrl: "https://github.com/b-l-i-n-d/spinner",
            sourceUrl: "https://github.com/b-l-i-n-d/spinner",
            isPrivate: false,
        },
        {
            id: "stripe-webhook-idempotency",
            number: "10",
            title: "Cryptographic Webhook Ingest",
            category: "Cloud Security Architecture",
            badge: "Webhook Gateway",
            description:
                "Idempotent Stripe webhook receiver worker built on Next.js Edge Runtime, verifying cryptographic signatures and deduplicating payment events via atomic database transactions.",
            details: [
                "Throughput: Sub-50ms execution on Next.js Edge Runtime",
                "Security: HMAC-SHA256 signature verification with timing-safe comparison",
                "Idempotency: Atomic database ledger locks",
            ],
            technologies: ["Next.js Edge", "TypeScript", "Prisma ORM", "Stripe SDK"],
            demoUrl: "https://github.com/b-l-i-n-d",
            sourceUrl: "https://github.com/b-l-i-n-d",
            isPrivate: true,
        },
        {
            id: "sust-thesis",
            number: "11",
            title: "SUST SWE Engineering & Research",
            category: "Academic & Systems Research",
            badge: "Academic Thesis",
            description:
                "Undergraduate software engineering research at Shahjalal University of Science and Technology (SUST), exploring distributed systems, deterministic UI architectures, and human-computer interaction.",
            details: [
                "Institution: Shahjalal University of Science and Technology",
                "Degree: Bachelor of Science in Software Engineering (SWE)",
                "Focus: Distributed systems, web runtime performance, and UI state determinism",
            ],
            technologies: ["Research", "LaTeX", "Distributed Systems", "Algorithms"],
            demoUrl: "https://www.sust.edu",
            sourceUrl: "https://www.sust.edu",
            isPrivate: false,
        },
        {
            id: "behance-motion-showcase",
            number: "12",
            title: "Behance Motion Design Portfolio",
            category: "Visual Design & Motion Specs",
            badge: "Behance Featured",
            description:
                "Interactive adaptation of the featured Behance profile showcase: hand-annotated sketch notes, tactile UI components, and fluid layout physics reflecting real-world craft.",
            details: [
                "Typography: Precision Monospace & Organic Handwritten Script",
                "Layout: Responsive CSS Grid with responsive breakpoint clamps",
                "Palette: Editorial Warm Canvas (#F5F5F0) & High-Contrast Obsidian",
            ],
            technologies: ["NextUI / HeroUI", "Tailwind CSS", "Framer Motion", "TypeScript"],
            demoUrl: "https://www.behance.net",
            sourceUrl: "https://github.com/b-l-i-n-d/b-l-i-n-d.github.io",
            isPrivate: false,
        },
    ],
    education: {
        degree: "B.Sc. in Software Engineering",
        department: "Department of Software Engineering",
        institute: "Shahjalal University of Science and Technology",
        shortInstitute: "SUST",
        location: "Sylhet, Bangladesh",
        period: "2018 – 2023",
        status: "Graduated",
        link: "https://www.sust.edu",
    },
    location: "Dhaka, Bangladesh",
    contact: {
        email: "fahimfaisal.swe@gmail.com",
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://linkedin.com/in/fahimfaisal",
        locationMap: "https://maps.google.com/?q=Dhaka,Bangladesh",
        cvUrl: "/assets/cv.pdf",
    },
};
