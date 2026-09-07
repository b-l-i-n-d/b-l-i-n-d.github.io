"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";

interface BehanceBioSectionProps {
    profile: EngineerProfile;
}

export const BehanceBioSection: React.FC<BehanceBioSectionProps> = ({ profile }) => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skillsCloud = [
        { name: "Architecture", x: "15%", y: "20%", size: "text-lg", weight: "font-bold", rot: "-rotate-6" },
        { name: "60 FPS Motion", x: "55%", y: "15%", size: "text-base", weight: "font-semibold", rot: "rotate-3" },
        { name: "State Machines", x: "10%", y: "50%", size: "text-xl", weight: "font-extrabold", rot: "-rotate-2" },
        { name: "Optimization", x: "50%", y: "45%", size: "text-sm", weight: "font-medium", rot: "rotate-6" },
        { name: "Micro-Interactions", x: "20%", y: "78%", size: "text-sm", weight: "font-mono", rot: "rotate-2" },
        { name: "Zero CLS", x: "65%", y: "72%", size: "text-base", weight: "font-bold", rot: "-rotate-4" },
    ];

    return (
        <section
            id="about"
            data-chapter-id="about"
            className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#0c0c0c] text-white border-t border-neutral-800/80 overflow-hidden"
        >
            {/* Ambient Red Atmospheric Glow */}
            <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-crimson-600/10 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-crimson-900/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-12">
                {/* 3-Column Behance Grid matching Image 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Column (Cols 1-4): Portrait Card & Bold Red Name Badge */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
                        {/* Portrait Frame (rounded-3xl, dark matte finish) */}
                        <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800/90 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-neutral-900 group">
                            <Image
                                src="/assets/profile-avatar.png"
                                alt="Fahim Faisal Profile Avatar"
                                fill
                                sizes="(max-width: 768px) 340px, 380px"
                                priority
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Inner subtle vignette overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                            {/* Overlaid Location Badge inside bottom card */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300 bg-neutral-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-800/80">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff1744] animate-pulse" />
                                    <span>Software Engineer</span>
                                </div>
                                <span className="text-neutral-500 font-bold">@ Ollyo</span>
                            </div>
                        </div>

                        {/* Name & Origin Badge matching Image 2 */}
                        <div className="w-full max-w-[340px] text-left space-y-2">
                            <div className="leading-none">
                                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#ff1744] font-sans">
                                    Fahim
                                </h2>
                                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#ff1744] font-sans">
                                    Faisal
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 pt-1 font-mono">
                                <span className="inline-block w-3.5 h-3.5 rounded-full border-2 border-neutral-400 shrink-0" />
                                <span>
                                    from <strong className="text-neutral-200">Dhaka, Bangladesh</strong>
                                    <br />
                                    SUST CSE Graduate
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column (Cols 5-8): Greeting, Bio, Experiences, "Also best at" doodle cloud */}
                    <div className="lg:col-span-5 space-y-8 text-neutral-300">
                        {/* Greeting & Summary */}
                        <div className="space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Hello,
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                                I am <strong className="text-[#ff1744] font-bold">Fahim Faisal</strong>, a Software Engineer with a B.Sc. in Computer Science & Engineering from <strong className="text-white">Shahjalal University of Science and Technology (SUST)</strong>. I engineer high-concurrency web systems, fluid user interfaces, and locked 60 FPS motion architectures.
                            </p>
                        </div>

                        {/* Experiences Timeline */}
                        <div className="space-y-4 border-t border-neutral-800/80 pt-6">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <span>Experiences :</span>
                            </h4>

                            <div className="space-y-4 text-xs sm:text-sm">
                                <div className="space-y-1.5">
                                    <div className="text-neutral-400 font-medium">
                                        Worked as <span className="text-neutral-200 font-semibold">Software Engineer (Frontend)</span> with :
                                    </div>
                                    <ul className="space-y-2 pl-2">
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <a
                                                    href="https://ollyo.com"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-bold text-white hover:text-[#ff1744] transition-colors"
                                                >
                                                    Ollyo (Themeum & JoomShaper)
                                                </a>
                                                <span className="text-neutral-500 font-mono text-xs ml-2">2023 – Present</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-200 font-medium">Tutor LMS (v3.0 to v4.0)</span>
                                                <span className="text-neutral-400 text-xs block">
                                                    Core frontend architecture, continuous lesson player, and course builder.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-200 font-medium">EasyStore by JoomShaper</span>
                                                <span className="text-neutral-400 text-xs block">
                                                    Multi-variant SKU selector, dynamic checkout pipeline, and inventory automation.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-1.5 pt-2">
                                    <div className="text-neutral-400 font-medium">
                                        Academic Research & Systems Engineering at :
                                    </div>
                                    <ul className="space-y-1.5 pl-2">
                                        <li className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 shrink-0" />
                                            <div>
                                                <span className="text-neutral-200 font-medium">SUST Department of CSE</span>
                                                <span className="text-neutral-500 font-mono text-xs ml-2">2018 – 2023</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* "Also best at :" Interactive Doodle/Sketch Cloud */}
                        <div className="space-y-3 border-t border-neutral-800/80 pt-6">
                            <h4 className="text-lg font-bold text-white">
                                Also best at :
                            </h4>

                            <div className="relative w-full h-44 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-4 overflow-hidden group select-none">
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
                                                : "text-neutral-300 hover:text-[#ff1744]"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                ))}

                                {/* Organic decorative doodle line behind */}
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
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
                            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                Know the language of
                            </h4>
                            <div className="w-12 h-1 bg-[#ff1744] rounded-full" />
                        </div>

                        <div className="space-y-6 text-xs sm:text-sm">
                            {/* Group 1: Modern Web Core */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        ⚛️
                                    </span>
                                    <span>Modern Web Architecture</span>
                                </div>
                                <ul className="space-y-1 text-neutral-400 pl-8 font-mono text-xs">
                                    <li>React / Next.js 14</li>
                                    <li>TypeScript (Strict)</li>
                                    <li>JavaScript (ESNext)</li>
                                    <li>Tailwind CSS / NextUI</li>
                                </ul>
                            </div>

                            {/* Group 2: Performance & Motion */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        ⚡
                                    </span>
                                    <span>Performance & 60 FPS</span>
                                </div>
                                <ul className="space-y-1 text-neutral-400 pl-8 font-mono text-xs">
                                    <li>Hardware Compositing</li>
                                    <li>HTML5 Video / Canvas</li>
                                    <li>FLIP Layout Animation</li>
                                    <li>Viewport Throttling</li>
                                </ul>
                            </div>

                            {/* Group 3: Systems & Data */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        🛠️
                                    </span>
                                    <span>Systems & Backend</span>
                                </div>
                                <ul className="space-y-1 text-neutral-400 pl-8 font-mono text-xs">
                                    <li>WordPress REST API & PHP</li>
                                    <li>Node.js / Express</li>
                                    <li>Prisma ORM / MySQL</li>
                                    <li>Stripe Webhook Pipelines</li>
                                </ul>
                            </div>

                            {/* Group 4: Product Engineering */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold">
                                    <span className="w-6 h-6 rounded-lg bg-crimson-600/10 text-[#ff1744] flex items-center justify-center font-mono text-xs border border-crimson-600/30">
                                        📦
                                    </span>
                                    <span>Platforms & Scale</span>
                                </div>
                                <ul className="space-y-1 text-neutral-400 pl-8 font-mono text-xs">
                                    <li>Tutor LMS 3.0 to 4.0</li>
                                    <li>EasyStore by JoomShaper</li>
                                    <li>Multi-Tenant Storefronts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Behance Social Contact Badges matching Image 2 */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-neutral-800/80">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 transition-all flex items-center gap-2 group"
                        >
                            <span className="text-[#ff1744] font-bold">@</span>
                            <span>github.com/b-l-i-n-d</span>
                        </a>

                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 transition-all flex items-center gap-2 group"
                        >
                            <span className="text-[#ff1744] font-bold">in</span>
                            <span>linkedin.com/in/b-l-i-n-d</span>
                        </a>

                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="px-4 py-2 rounded-full bg-[#ff1744]/10 hover:bg-[#ff1744]/20 text-[#ff1744] border border-[#ff1744]/30 transition-all font-semibold"
                        >
                            {profile.contact.email}
                        </a>
                    </div>

                    <div>
                        <a
                            href={profile.contact.cvUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2 rounded-full bg-[#ff1744] hover:bg-crimson-500 text-white font-bold text-xs font-mono transition-all shadow-[0_0_15px_rgba(255,23,68,0.4)] flex items-center gap-2"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Full CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
