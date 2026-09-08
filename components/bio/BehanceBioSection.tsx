"use client";

import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { InteractiveDoodleCloud } from "./InteractiveDoodleCloud";
import { Atom, Zap, Wrench, Package, ExternalLink } from "lucide-react";

interface BehanceBioSectionProps {
    profile: EngineerProfile;
}

export const BehanceBioSection: React.FC<BehanceBioSectionProps> = ({ profile }) => {
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
                            Biography & Profile
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-500 hidden sm:inline">
                        Dhaka, Bangladesh, 2023 to Present
                    </span>
                </div>

                {/* 3-Column Behance Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Left Column (Cols 1-4): Portrait Photo Frame */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-neutral-100 dark:bg-neutral-900 shadow-craft-elevated group">
                            <Image
                                src="/assets/profile-avatar.png"
                                alt="Fahim Faisal Portrait"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Film grain vignette */}
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
                            <span className="text-neutral-500 font-medium shrink-0">Full-Time / Lead</span>
                        </div>
                    </div>

                    {/* Middle Column (Cols 5-8): Greeting, Bio, Experiences, "Also best at" doodle cloud */}
                    <div className="lg:col-span-5 space-y-8 text-neutral-700 dark:text-neutral-300">
                        {/* Greeting & Summary */}
                        <div className="space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                Hello,
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-[65ch]">
                                I am <strong className="chroma-text font-black text-lg">Abir</strong>{" "}
                                <span className="text-neutral-500 text-sm">(Fahim Faisal)</span>, a Software Engineer with a B.Sc. in Software Engineering from{" "}
                                <strong className="text-neutral-900 dark:text-white font-semibold">
                                    Shahjalal University of Science and Technology (SUST)
                                </strong>
                                . I engineer high-concurrency web platforms, tactile user interfaces, and responsive motion architectures.
                            </p>
                        </div>

                        {/* Work and Academic Trajectory */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            {/* Experiences */}
                            <div className="space-y-3">
                                <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                                    <span>Experience</span>
                                </h4>
                                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <div className="font-semibold text-neutral-900 dark:text-neutral-200">Software Engineer</div>
                                        <div className="text-neutral-500">Ollyo (2023 to Present)</div>
                                        <div className="text-xs text-neutral-500">Themeum &middot; Tutor LMS (v2.0 to v4.0)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Academic Background */}
                            <div className="space-y-3">
                                <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                                    <span>Education</span>
                                </h4>
                                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                                    <div>
                                        <div className="font-semibold text-neutral-900 dark:text-neutral-200">
                                            B.Sc. in Software Engineering
                                        </div>
                                        <div className="text-neutral-500">SUST (2018 to 2023)</div>
                                        <div className="text-xs text-neutral-500">
                                            Shahjalal University of Science and Technology
                                        </div>
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
                            {/* Group 1: Modern Web Core */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Atom className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Modern Web Architecture</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400 pl-9 text-xs sm:text-sm">
                                    <li>React and Next.js 14</li>
                                    <li>TypeScript (Strict Type-Safety)</li>
                                    <li>JavaScript (ESNext Modern)</li>
                                    <li>Tailwind CSS and Design Systems</li>
                                </ul>
                            </div>

                            {/* Group 2: Performance & Motion */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Performance & Motion</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400 pl-9 text-xs sm:text-sm">
                                    <li>Hardware Compositing</li>
                                    <li>HTML5 Video and Canvas</li>
                                    <li>FLIP Layout Animation</li>
                                    <li>RAF Viewport Throttling</li>
                                </ul>
                            </div>

                            {/* Group 3: Systems & Data */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Wrench className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Systems & APIs</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400 pl-9 text-xs sm:text-sm">
                                    <li>WordPress REST API and PHP</li>
                                    <li>Node.js and Express</li>
                                    <li>Prisma ORM and MySQL</li>
                                    <li>Payment and Webhook Telemetry</li>
                                </ul>
                            </div>

                            {/* Group 4: Platforms & Scale */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold">
                                    <span className="w-7 h-7 rounded-lg bg-rose-500/10 text-[#ff1744] flex items-center justify-center shrink-0">
                                        <Package className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    </span>
                                    <span>Platforms & Scale</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400 pl-9 text-xs sm:text-sm">
                                    <li>Tutor LMS (v2.0 to v4.0)</li>
                                    <li>Enclave Zero-Knowledge Vault</li>
                                    <li>EdTech &amp; DocApp Systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Behance Social Contact Badges */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] hover:border-[#ff1744] shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out flex items-center gap-2 shrink-0"
                        >
                            <span>b-l-i-n-d on GitHub</span>
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        </a>
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] hover:border-[#ff1744] shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out flex items-center gap-2 shrink-0"
                        >
                            <span>Fahim Faisal on LinkedIn</span>
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        </a>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-neutral-500">
                        SUST SWE &bull; Class of 2023
                    </div>
                </div>
            </div>
        </section>
    );
};
