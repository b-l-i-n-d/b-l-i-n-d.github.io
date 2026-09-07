"use client";

import React from "react";
import Image from "next/image";

interface ContentsSectionProps {
    className?: string;
}

export const ContentsIndexSection: React.FC<ContentsSectionProps> = ({ className = "" }) => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="contents"
            data-chapter-id="contents"
            className={`relative py-20 px-6 sm:px-10 lg:px-16 bg-[#0e0e0e] text-white border-t border-neutral-800/80 overflow-hidden ${className}`}
        >
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-crimson-600/10 blur-[130px] pointer-events-none" />

            {/* Authentic Behance Corner Doodle Graphic (Bottom-Right, cropped from original Module 3) */}
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[440px] lg:w-[540px] h-[200px] sm:h-[280px] lg:h-[350px] pointer-events-none opacity-50 mix-blend-screen select-none translate-x-4 translate-y-2">
                <Image
                    src="/assets/behance/contents-doodle.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 300px, 540px"
                    className="object-contain object-bottom-right"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Behance Header: Bold Red "Contents" */}
                <div className="space-y-2">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#ff1744] font-sans">
                        Contents
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest">
                        Table of Chapters & Interactive Case Studies
                    </p>
                </div>

                {/* 3 Columns with Script Watermark Headers ("One", "Two", "Three") */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-4">
                    {/* Column 1: Flagship Engineering */}
                    <div className="relative space-y-6">
                        {/* Script Watermark "One" in crimson wine cursive */}
                        <div
                            className="absolute -top-12 -left-2 text-7xl sm:text-8xl font-script text-crimson-700/35 pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            One
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 flex items-center gap-2">
                                <span>Platforms :</span>
                            </h3>

                            <ul className="space-y-4 text-sm sm:text-base">
                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("tutor-lms")}>
                                    <div className="pt-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.7)]" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Enterprise EdTech</div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Tutor LMS (v3.0 to v4.0)
                                        </div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("easystore")}>
                                    <div className="pt-2">
                                        <div className="flex gap-1">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">eCommerce Platform</div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            EasyStore by JoomShaper
                                        </div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("ecommerce")}>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center leading-none">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <div className="flex gap-1 mt-0.5">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Storefront SaaS</div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            E-Commerce Headless SaaS
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Interactive Motion Lab */}
                    <div className="relative space-y-6">
                        {/* Script Watermark "Two" in crimson wine cursive */}
                        <div
                            className="absolute -top-12 -left-2 text-7xl sm:text-8xl font-script text-crimson-700/35 pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            Two
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 flex items-center gap-2">
                                <span>Interactive Lab :</span>
                            </h3>

                            <ul className="space-y-4 text-sm sm:text-base">
                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("motion-lab")}>
                                    <div className="pt-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-[#ff1744]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Drag-N-Sort Engine
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Pointer Physics · FLIP Layout</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("motion-lab")}>
                                    <div className="pt-2">
                                        <div className="flex gap-1">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Recursive Folder Manager
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Tree Traversal · Memoized Nodes</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("motion-lab")}>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center leading-none">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <div className="flex gap-1 mt-0.5">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            3D Book Animation
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Perspective RotateY · CSS 3D</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("motion-lab")}>
                                    <div className="pt-2">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Interactive Calendar
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Range Grid Selection · Day Cells</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("motion-lab")}>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center gap-0.5">
                                            <div className="flex gap-1">
                                                <span className="inline-block w-1 h-1 rounded-full bg-[#ff1744]" />
                                                <span className="inline-block w-1 h-1 rounded-full bg-[#ff1744]" />
                                            </div>
                                            <span className="inline-block w-1 h-1 rounded-full bg-[#ff1744]" />
                                            <div className="flex gap-1">
                                                <span className="inline-block w-1 h-1 rounded-full bg-[#ff1744]" />
                                                <span className="inline-block w-1 h-1 rounded-full bg-[#ff1744]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Kinetic Spinner
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Angular Momentum · Physics Math</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Architecture & Schemas */}
                    <div className="relative space-y-6">
                        {/* Script Watermark "Three" in crimson wine cursive */}
                        <div
                            className="absolute -top-12 -left-2 text-7xl sm:text-8xl font-script text-crimson-700/35 pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            Three
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 flex items-center gap-2">
                                <span>Architecture :</span>
                            </h3>

                            <ul className="space-y-4 text-sm sm:text-base">
                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("gallery")}>
                                    <div className="pt-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-[#ff1744]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Continuous Learning Sync
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Tutor LMS REST State Syncer</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("gallery")}>
                                    <div className="pt-2">
                                        <div className="flex gap-1">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Multi-Variant SKU Matrix
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">EasyStore Combinatorial Engine</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("gallery")}>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center leading-none">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <div className="flex gap-1 mt-0.5">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Idempotent Stripe Webhook
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">Next.js App Router Route Handler</div>
                                    </div>
                                </li>

                                <li className="group flex items-start gap-3 cursor-pointer" onClick={() => scrollToId("gallery")}>
                                    <div className="pt-2">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-200 group-hover:text-[#ff1744] transition-colors">
                                            Doctor Clinic State Machine
                                        </div>
                                        <div className="text-[11px] font-mono text-neutral-500">DocApp Reservation Lock Engine</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
