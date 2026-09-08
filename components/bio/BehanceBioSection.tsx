"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { Atom, Zap, Wrench, Package } from "lucide-react";

interface BehanceBioSectionProps {
    profile: EngineerProfile;
}

export const BehanceBioSection: React.FC<BehanceBioSectionProps> = ({ profile }) => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skillsCloud = [
        { name: "Architecture", x: "15%", y: "20%", size: "text-lg", weight: "font-bold", rot: "-rotate-6" },
        { name: "Fluid Motion", x: "55%", y: "15%", size: "text-base", weight: "font-semibold", rot: "rotate-3" },
        { name: "State Machines", x: "10%", y: "50%", size: "text-xl", weight: "font-extrabold", rot: "-rotate-2" },
        { name: "Optimization", x: "50%", y: "45%", size: "text-sm", weight: "font-medium", rot: "rotate-6" },
        { name: "Micro-Interactions", x: "20%", y: "78%", size: "text-sm", weight: "font-mono", rot: "rotate-2" },
        { name: "Zero CLS", x: "65%", y: "72%", size: "text-base", weight: "font-bold", rot: "-rotate-4" },
    ];

    return (
        <section
            id="about"
            data-chapter-id="about"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800/80 transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Section Subtitle / Category Label */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/80 pb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#ff1744] uppercase tracking-widest px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                            CHAPTER 02
                        </span>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                            Biography & Skill Stack
                        </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
                        Dhaka, Bangladesh · 2023–Present
                    </span>
                </div>

                {/* 3-Column Behance Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Left Column (Cols 1-4): Portrait Photo Frame */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-craft-elevated ring-1 ring-black/[0.05] dark:ring-0 group">
                            {/* Profile Photo: Behance 4th Image */}
                            <Image
                                src="/assets/profile-avatar.png"
                                alt="Fahim Faisal Portrait"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Red Crimson Film Grain Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            {/* Floating Name Overlay */}
                            <div className="absolute bottom-5 left-5 right-5 text-left">
                                <span className="text-xs font-mono text-[#ff1744] font-bold uppercase tracking-widest block">
                                    Software Engineer
                                </span>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                                    Fahim Faisal
                                </h3>
                                <p className="text-xs text-neutral-300 font-mono mt-0.5">
                                    SUST CSE · Themeum / Ollyo
                                </p>
                            </div>
                        </div>

                        {/* Handcrafted Status Badge */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs font-mono shadow-craft-subtle ring-1 ring-black/[0.03] dark:ring-0 text-neutral-600 dark:text-neutral-400">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Available for Senior Roles
                            </span>
                            <span className="text-neutral-500">Full-Time / Lead</span>
                        </div>
                    </div>

                    {/* Middle Column (Cols 5-8): Greeting, Bio, Experiences, "Also best at" doodle cloud */}
                    <div className="lg:col-span-5 space-y-8 text-neutral-700 dark:text-neutral-300">
                        {/* Greeting & Summary */}
                        <div className="space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                Hello,
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I am <strong className="text-[#ff1744] font-bold">Fahim Faisal</strong>, a Software Engineer with a B.Sc. in Computer Science & Engineering from <strong className="text-neutral-900 dark:text-white">Shahjalal University of Science and Technology (SUST)</strong>. I engineer high-concurrency web systems, fluid user interfaces, and responsive motion architectures.
                            </p>
                        </div>

                        {/* Experiences Timeline */}
                        <div className="space-y-4 border-t border-neutral-200 dark:border-neutral-800/80 pt-6">
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                <span>Experiences :</span>
                            </h4>

                            <div className="space-y-4 text-xs sm:text-sm">
                                <div className="space-y-1.5">
                                    <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                                        Worked as <span className="text-neutral-900 dark:text-neutral-200 font-semibold">Software Engineer (Frontend)</span> with :
                                    </div>
                                    <ul className="space-y-2 pl-2">
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <a
                                                    href="https://ollyo.com"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-bold text-neutral-900 dark:text-white hover:text-[#ff1744] transition-colors"
                                                >
                                                    Ollyo (Themeum & JoomShaper)
                                                </a>
                                                <span className="text-neutral-500 font-mono text-xs ml-2">2023 – Present</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-900 dark:text-neutral-200 font-medium">Tutor LMS (v2.0 to v4.0)</span>
                                                <span className="text-neutral-600 dark:text-neutral-400 text-xs block">
                                                    Core frontend architecture across 2.0 to 3.0 and 3.0 to 4.0: continuous lesson player, motion hooks, and course builder.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-900 dark:text-neutral-200 font-medium">EasyStore by JoomShaper</span>
                                                <span className="text-neutral-600 dark:text-neutral-400 text-xs block">
                                                    Multi-variant SKU selector, dynamic checkout pipeline, and inventory automation.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-1.5 pt-2">
                                    <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                                        Academic Research & Systems Engineering at :
                                    </div>
                                    <ul className="space-y-1.5 pl-2">
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-900 dark:text-neutral-200 font-medium">SUST Department of CSE</span>
                                                <span className="text-neutral-500 font-mono text-xs ml-2">2018 – 2023</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* "Also best at :" Interactive Doodle/Sketch Cloud */}
                        <div className="space-y-3 border-t border-neutral-200 dark:border-neutral-800/80 pt-6">
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                                Also best at :
                            </h4>

                            <div className="relative w-full h-44 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 p-4 overflow-hidden group select-none shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0">
                                {/* Hand-drawn feel nodes with hover feedback */}
                                {skillsCloud.map((item, idx) => (
                                    <span
                                        key={idx}
                                        onMouseEnter={() => setHoveredSkill(item.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        style={{ top: item.y, left: item.x }}
                                        className={`absolute font-script tracking-wide cursor-pointer transition-all duration-300 ${item.size} ${item.weight} ${item.rot} ${
                                            hoveredSkill === item.name
                                                ? "text-[#ff1744] scale-125 z-20"
                                                : "text-neutral-700 dark:text-neutral-300 hover:text-[#ff1744]"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                ))}

                                {/* Organic decorative doodle line behind */}
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-20"
                                    viewBox="0 0 400 180"
                                    fill="none"
                                >
                                    <path
                                        d="M20,90 Q90,30 180,80 T350,70"
                                        stroke="#ff1744"
                                        strokeWidth="2"
                                        strokeDasharray="4 6"
                                    />
                                    <path
                                        d="M60,140 Q150,170 260,110 T380,140"
                                        stroke="#ff1744"
                                        strokeWidth="1.5"
                                        strokeDasharray="3 5"
                                    />
                                </svg>
                            </div>
                        </div>
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
                                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        <Atom className="w-3.5 h-3.5 text-[#ff1744]" />
                                    </span>
                                    <span>Modern Web Architecture</span>
                                </div>
                                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 pl-8 font-mono text-xs">
                                    <li>React / Next.js 14</li>
                                    <li>TypeScript (Strict)</li>
                                    <li>JavaScript (ESNext)</li>
                                    <li>Tailwind CSS / NextUI</li>
                                </ul>
                            </div>

                            {/* Group 2: Performance & Motion */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        <Zap className="w-3.5 h-3.5 text-[#ff1744]" />
                                    </span>
                                    <span>Performance & Rendering</span>
                                </div>
                                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 pl-8 font-mono text-xs">
                                    <li>Hardware Compositing</li>
                                    <li>HTML5 Video / Canvas</li>
                                    <li>FLIP Layout Animation</li>
                                    <li>Viewport Throttling</li>
                                </ul>
                            </div>

                            {/* Group 3: Systems & Data */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        <Wrench className="w-3.5 h-3.5 text-[#ff1744]" />
                                    </span>
                                    <span>Systems & Backend</span>
                                </div>
                                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 pl-8 font-mono text-xs">
                                    <li>WordPress REST API & PHP</li>
                                    <li>Node.js / Express</li>
                                    <li>Prisma ORM / MySQL</li>
                                    <li>Stripe Webhook Pipelines</li>
                                </ul>
                            </div>

                            {/* Group 4: Product Engineering */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        <Package className="w-3.5 h-3.5 text-[#ff1744]" />
                                    </span>
                                    <span>Platforms & Scale</span>
                                </div>
                                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 pl-8 font-mono text-xs">
                                    <li>Tutor LMS 2.0 to 4.0</li>
                                    <li>EasyStore by JoomShaper</li>
                                    <li>Multi-Tenant Storefronts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Behance Social Contact Badges */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-800/80">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 hover:border-[#ff1744] shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out flex items-center gap-2"
                        >
                            <span>b-l-i-n-d @ GitHub ↗</span>
                        </a>
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 hover:border-[#ff1744] shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out flex items-center gap-2"
                        >
                            <span>Fahim Faisal @ LinkedIn ↗</span>
                        </a>
                    </div>
                    <div className="text-xs font-mono text-neutral-500">
                        Themeum / Ollyo · Dhaka, Bangladesh
                    </div>
                </div>
            </div>
        </section>
    );
};
