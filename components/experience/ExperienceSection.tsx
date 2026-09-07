"use client";

import React, { useState } from "react";
import { EngineerProfile, WorkExperience } from "@/types/portfolio";

interface ExperienceSectionProps {
    profile: EngineerProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile }) => {
    const [activeTab, setActiveTab] = useState<"career" | "education">("career");
    const experiences = profile.experiences;
    const education = profile.education;

    return (
        <section
            id="experience"
            data-chapter-id="experience"
            className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-neutral-950 text-white border-t border-neutral-850"
        >
            {/* Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-indigo-500/10 via-emerald-500/5 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800/80 pb-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-amber-400 font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30">
                                Chapter 01
                            </span>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                                Track Record & Impact
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight">
                            Professional Experience
                        </h2>
                        <p className="text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                            Engineering production-grade software platforms with high-concurrency architectures, 
                            locked 60 FPS interactions, and millions of active end-users worldwide.
                        </p>
                    </div>

                    {/* View Switcher */}
                    <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab("career")}
                            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                                activeTab === "career"
                                    ? "bg-neutral-800 text-white font-semibold shadow-sm border border-neutral-700/50"
                                    : "text-neutral-400 hover:text-neutral-200"
                            }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            Industry Career
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                                activeTab === "education"
                                    ? "bg-neutral-800 text-white font-semibold shadow-sm border border-neutral-700/50"
                                    : "text-neutral-400 hover:text-neutral-200"
                            }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-400" />
                            Academic Foundation
                        </button>
                    </div>
                </div>

                {/* Content Panel: Career */}
                {activeTab === "career" && (
                    <div className="space-y-10 animate-in fade-in duration-300">
                        {experiences.map((exp: WorkExperience) => (
                            <div
                                key={exp.id}
                                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-xl"
                            >
                                {/* Role & Company Header */}
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                                {exp.role}
                                            </h3>
                                            <span className="text-neutral-600 font-mono">@</span>
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                                            >
                                                {exp.company}
                                                <span className="text-xs">↗</span>
                                            </a>
                                        </div>
                                        <p className="text-sm font-mono text-neutral-400">
                                            {exp.department} · {exp.location}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Core Products Worked On */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                                        Primary Products Engineered
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {exp.products.map((product) => (
                                            <div
                                                key={product.name}
                                                className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-3 group"
                                            >
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <h5 className="font-bold text-neutral-100 text-base group-hover:text-amber-400 transition-colors">
                                                            {product.name}
                                                        </h5>
                                                        <a
                                                            href={product.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-xs font-mono text-neutral-400 hover:text-white px-2 py-1 rounded bg-neutral-900 border border-neutral-800"
                                                        >
                                                            Visit Live ↗
                                                        </a>
                                                    </div>
                                                    <p className="text-xs text-neutral-400 leading-relaxed">
                                                        {product.roleNote}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Responsibilities & Achievements */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                                        Key Engineering Contributions
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-300">
                                        {exp.achievements.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/40 border border-neutral-800/60"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies Used */}
                                <div className="space-y-3 border-t border-neutral-800/80 pt-6">
                                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                                        Technologies & Tooling
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Content Panel: Academic Foundation */}
                {activeTab === "education" && (
                    <div className="animate-in fade-in duration-300">
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-6 shadow-xl">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">
                                            {education.degree}
                                        </h3>
                                        <span className="text-neutral-500">in</span>
                                        <span className="text-xl font-bold text-indigo-400">
                                            {education.department}
                                        </span>
                                    </div>
                                    <a
                                        href={education.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-base text-neutral-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <span>{education.institute} ({education.shortInstitute})</span>
                                        <span className="text-xs text-neutral-500">↗</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-mono font-medium">
                                        {education.period} · {education.status}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                                    Curriculum & Rigor
                                </h4>
                                <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                                    Comprehensive engineering curriculum covering Data Structures & Algorithms, Object-Oriented Analysis, 
                                    Distributed Database Systems, Operating Systems, Computer Networks, and High-Performance Software Architecture.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-1">
                                        <div className="text-neutral-500 uppercase">Specialization</div>
                                        <div className="font-bold text-white">Full Stack & Web Architecture</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-1">
                                        <div className="text-neutral-500 uppercase">Core Focus</div>
                                        <div className="font-bold text-white">Systems Design & Algorithms</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-1">
                                        <div className="text-neutral-500 uppercase">Graduation Status</div>
                                        <div className="font-bold text-emerald-400">Verified Alumni</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
