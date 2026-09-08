"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EngineerProfile } from "@/types/portfolio";
import { InteractiveDoodleCloud } from "./InteractiveDoodleCloud";
import { CurvedDottedTimelineTrack } from "./CurvedDottedTimelineTrack";
import {
    Atom,
    Zap,
    Wrench,
    Shield,
} from "lucide-react";

interface BehanceBioSectionProps {
    profile: EngineerProfile;
}

export const BehanceBioSection: React.FC<BehanceBioSectionProps> = ({ profile }) => {
    const timelineContainerRef = useRef<HTMLDivElement>(null);
    const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section
            id="about"
            data-chapter-id="about"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                            Biography &amp; Profile
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hidden sm:inline font-mono">
                        Dhaka, Bangladesh &middot; 2024 to Present
                    </span>
                </div>

                {/* 3-Column Asymmetric Layout (Behance / Editorial Style) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Left Column (Cols 1-4): Portrait & Status Card */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Portrait Frame with Subtle Grain and Accent */}
                        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-black/[0.08] dark:border-white/[0.1] group shadow-sm">
                            <Image
                                src={profile.avatar || "/assets/profile-avatar.png"}
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
                                loading="lazy"
                                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            {/* Gradient Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            {/* Floating Name Overlay with Abir Chroma Accent */}
                            <div className="absolute bottom-5 left-5 right-5 text-left">
                                <span className="text-xs sm:text-sm text-[#ff1744] font-semibold block">
                                    Software Engineer
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline gap-2">
                                    <span className="chroma-text font-black">Abir</span>
                                    <span className="text-sm text-neutral-300 font-normal">(Fahim Faisal)</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                                    SUST SWE &middot; Ollyo
                                </p>
                            </div>
                        </div>

                        {/* Handcrafted Status Badge */}
                        <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] text-xs sm:text-sm shadow-sm text-neutral-600 dark:text-neutral-400">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0" />
                                Available for Senior Roles
                            </span>
                            <span className="text-neutral-600 dark:text-neutral-400 font-medium shrink-0">Full-Time / Lead</span>
                        </div>
                    </div>

                    {/* Middle Column (Cols 5-8): Greeting, Bio, Vertical Career Ascension, "Also best at" doodle cloud */}
                    <div className="lg:col-span-5 space-y-8 text-neutral-700 dark:text-neutral-300">
                        {/* Greeting & Summary */}
                        <div className="space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                Hello,
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-[65ch]">
                                I am <strong className="chroma-text font-black text-lg">Abir</strong>{" "}
                                <span className="text-neutral-600 dark:text-neutral-400 text-sm">(Fahim Faisal)</span>, a Software Engineer with a B.Sc. in Software Engineering from{" "}
                                <strong className="text-neutral-900 dark:text-white font-semibold">
                                    Shahjalal University of Science and Technology (SUST)
                                </strong>
                                . I engineer high-concurrency web platforms, tactile user interfaces, and responsive motion architectures.
                            </p>
                        </div>

                        {/* Experiences & Career Ascension */}
                        <div className="space-y-5 border-t border-black/[0.06] dark:border-white/[0.08] pt-6">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                                    <span>Experiences &amp; Ascension :</span>
                                </h4>

                                {/* Handcrafted Animated "- - -" Dotted Curved Line */}
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="font-script text-base sm:text-lg text-[#ff1744] -rotate-2 select-none tracking-tight">
                                        2x promotion in 2 years
                                    </span>
                                    <svg
                                        className="w-10 h-7 text-[#ff1744] overflow-visible -translate-y-1 shrink-0"
                                        viewBox="0 0 40 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <motion.path
                                            d="M 2 21 C 12 26, 24 21, 35 6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeDasharray="4 3"
                                            animate={{ strokeDashoffset: [0, -14] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                        <path
                                            d="M 26 5 L 36 6 L 33 14"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Vertical Architectural Timeline Track with Curved Animated "- - -" Dotted Line */}
                            <div
                                ref={timelineContainerRef}
                                className="relative space-y-6"
                            >
                                {/* The "- - -" Dotted Curved Animated Line Track */}
                                <CurvedDottedTimelineTrack
                                    containerRef={timelineContainerRef}
                                    itemRefs={timelineItemsRef}
                                />

                                {/* Node 2026: Current SWE */}
                                <div
                                    ref={(el) => {
                                        timelineItemsRef.current[0] = el;
                                    }}
                                    className="relative pl-8 group z-10"
                                >
                                    <span
                                        data-timeline-dot
                                        className="absolute left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ff1744] ring-4 ring-rose-500/20 shadow-[0_0_8px_rgba(255,23,68,0.5)] group-hover:scale-125 transition-transform"
                                    />
                                    <div className="space-y-0.5">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="font-mono text-xs font-bold text-[#ff1744]">2026</span>
                                            <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#ff1744] transition-colors">
                                                Software Engineer
                                            </span>
                                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                                                Current
                                            </span>
                                        </div>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">Ollyo</strong> &middot; Themeum &bull; Tutor LMS Core (v2.0 &rarr; v4.0), powering 120,000+ academies globally.
                                        </p>
                                    </div>
                                </div>

                                {/* Node 2025: Associate SWE */}
                                <div
                                    ref={(el) => {
                                        timelineItemsRef.current[1] = el;
                                    }}
                                    className="relative pl-8 group z-10"
                                >
                                    <span
                                        data-timeline-dot
                                        className="absolute left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-[#ff1744] group-hover:scale-150 transition-all shadow-xs"
                                    />
                                    <div className="space-y-0.5">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="font-mono text-xs font-medium text-neutral-400">2025</span>
                                            <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                                Associate Software Engineer
                                            </span>
                                            <span className="text-[11px] font-script text-[#ff1744]">promoted</span>
                                        </div>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            Continuous lesson player, dynamic quiz engines &amp; locked 60 FPS compositor motion.
                                        </p>
                                    </div>
                                </div>

                                {/* Node 2024: Junior SWE */}
                                <div
                                    ref={(el) => {
                                        timelineItemsRef.current[2] = el;
                                    }}
                                    className="relative pl-8 group z-10"
                                >
                                    <span
                                        data-timeline-dot
                                        className="absolute left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-[#ff1744] group-hover:scale-150 transition-all shadow-xs"
                                    />
                                    <div className="space-y-0.5">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="font-mono text-xs font-medium text-neutral-400">2024</span>
                                            <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                                Junior Software Engineer
                                            </span>
                                            <span className="text-[10px] font-mono text-neutral-400">Joined Ollyo</span>
                                        </div>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            Tutor LMS 2.0 component library, state machine reducers &amp; course builder cockpit.
                                        </p>
                                    </div>
                                </div>

                                {/* Node Education: SUST SWE */}
                                <div
                                    ref={(el) => {
                                        timelineItemsRef.current[3] = el;
                                    }}
                                    className="relative pl-8 group z-10 pt-1"
                                >
                                    <span
                                        data-timeline-dot
                                        className="absolute left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-500 group-hover:bg-[#ff1744] group-hover:scale-150 transition-all shadow-xs"
                                    />
                                    <div className="space-y-0.5">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="font-mono text-xs font-medium text-neutral-400">2018 &ndash; 2023</span>
                                            <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#ff1744] transition-colors">
                                                B.Sc. in Software Engineering
                                            </span>
                                            <span className="text-[10px] font-mono text-neutral-400">Graduated</span>
                                        </div>
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">SUST</strong> &middot; Shahjalal University of Science &amp; Technology &bull; Dept. of CSE. 5-year curriculum in Distributed Systems, Process Concurrency &amp; Algorithms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* "Also best at :" Interactive Doodle/Sketch Cloud */}
                        <InteractiveDoodleCloud />
                    </div>

                    {/* Right Column (Cols 9-12): "Know the language of" Skills List */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                Know the language of
                            </h4>
                            <div className="w-12 h-1 bg-[#ff1744] rounded-full" />
                        </div>

                        <div className="space-y-6 text-xs sm:text-sm">
                            {/* Group 1: Modern Web & Mobile */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Atom className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Web & Mobile Architecture</span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 pl-9.5 text-xs leading-relaxed">
                                    TypeScript (Strict), React & Next.js (App Router), React Native & Expo SDK 57, Tailwind CSS & Design Systems.
                                </p>
                            </div>

                            {/* Group 2: Performance & Motion */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Performance & Motion</span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 pl-9.5 text-xs leading-relaxed">
                                    Hardware Compositing & RAF, FLIP Layout Transitions, HTML5 Canvas & Video APIs, Zero CLS (0.00).
                                </p>
                            </div>

                            {/* Group 3: Systems & Data */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Wrench className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Systems, Backend & Data</span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 pl-9.5 text-xs leading-relaxed">
                                    WordPress REST API & PHP 8.x, Node.js, Express & RTK Query, MongoDB, Mongoose & SQLite, MySQL / MariaDB ($wpdb).
                                </p>
                            </div>

                            {/* Group 4: Cryptography & Scale */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Shield className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Cryptography & Scale</span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 pl-9.5 text-xs leading-relaxed">
                                    Native Quick Crypto & Argon2id, Authenticated AES-256-GCM, RFC 6238 TOTP & BIP39 Recovery, Concurrency Locks & PDF Engines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
