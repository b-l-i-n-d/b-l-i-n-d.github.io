"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EngineerProfile, WorkExperience } from "@/types/portfolio";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";

interface ExperienceSectionProps {
    profile: EngineerProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile }) => {
    const [activeTab, setActiveTab] = useState<"career" | "education">("career");
    const experiences = profile.experiences;
    const education = profile.education;

    const tabs = [
        { id: "career" as const, label: "Industry Career", Icon: Briefcase },
        { id: "education" as const, label: "Academic Foundation", Icon: GraduationCap },
    ];

    return (
        <section
            id="experience"
            data-chapter-id="experience"
            className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800/80 transition-colors duration-200"
        >
            {/* Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[#ff1744]/15 via-crimson-900/10 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800/80 pb-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-[#ff1744] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#ff1744]/10 border border-[#ff1744]/30">
                                Chapter 03
                            </span>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                                Track Record & Impact
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight">
                            Professional Experience
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                            Engineering production-grade software platforms with high-concurrency architectures, 
                            fluid micro-interactions, and millions of active end-users worldwide.
                        </p>
                    </div>

                    {/* View Switcher with Smooth Anchor Spring Pill */}
                    <div
                        className="relative flex items-center p-1 bg-stone-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl self-start md:self-auto gap-1"
                        style={{ position: "relative" }}
                    >
                        {tabs.map((tab) => {
                            const isSelected = activeTab === tab.id;
                            const TabIcon = tab.Icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        // @ts-ignore
                                        anchorName: `--exp-tab-${tab.id}`,
                                    }}
                                    className={`relative z-10 px-4 py-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-2 ${
                                        isSelected
                                            ? "text-neutral-900 dark:text-white font-semibold"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                    }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="exp-active-tab-pill"
                                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-lg shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0 -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 32,
                                            }}
                                        />
                                    )}
                                    <TabIcon className={`w-3.5 h-3.5 ${isSelected ? "text-[#ff1744]" : "text-neutral-500"}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Panel with AnimatePresence */}
                <AnimatePresence mode="wait">
                    {activeTab === "career" ? (
                        <motion.div
                            key="career"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="space-y-10"
                        >
                            {experiences.map((exp: WorkExperience) => (
                                <div
                                    key={exp.id}
                                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0 dark:shadow-xl"
                                >
                                    {/* Role & Company Header */}
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800/80 pb-6">
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <span className="text-neutral-400 dark:text-neutral-600 font-mono">@</span>
                                                <a
                                                    href={exp.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xl font-bold text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1.5"
                                                >
                                                    <span>{exp.company}</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                                                {exp.department} · {exp.location}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Core Products Worked On */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                                            Primary Products Engineered
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {exp.products.map((product) => (
                                                <div
                                                    key={product.name}
                                                    className="p-5 rounded-xl bg-white dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800/80 space-y-2 hover:border-[#ff1744]/40 transition-all duration-200 shadow-craft-subtle hover:shadow-craft-card ring-1 ring-black/[0.03] dark:ring-0"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                                            {product.name}
                                                        </span>
                                                        <a
                                                            href={product.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-xs font-mono text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1"
                                                        >
                                                            <span>Live Product</span>
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </div>
                                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                        {product.roleNote}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Responsibilities & Impact */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                                            Architectural Scope & Deliverables
                                        </h4>
                                        <ul className="space-y-3">
                                            {exp.achievements.map((resp, idx) => (
                                                <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 shrink-0" />
                                                    <span className="leading-relaxed">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack Chips */}
                                    <div className="space-y-3 pt-2 border-t border-neutral-200 dark:border-neutral-800/80">
                                        <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                                            Production Technologies Utilized
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-lg text-xs font-mono bg-stone-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0 dark:shadow-xl"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800/80 pb-6">
                                <div className="space-y-1.5">
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                        {education.degree}
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-neutral-600 dark:text-neutral-400 font-medium">
                                            {education.institute}
                                        </span>
                                        <span className="text-neutral-400 dark:text-neutral-600 font-mono">·</span>
                                        <span className="text-neutral-500 font-mono text-sm">
                                            {education.department}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-[#ff1744]/10 text-[#ff1744] border border-[#ff1744]/30 text-xs font-mono font-medium">
                                        {education.period}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                                    Coursework & Academic Highlights
                                </h4>
                                <ul className="space-y-3">
                                    {[
    "Rigorous four-year curriculum covering Distributed Systems, Algorithms, Data Structures, and Software Architecture.",
    "Specialized in high-performance web systems, reactive programming paradigms, and compiler theory.",
    "Graduated from prestigious SUST CSE department with strong foundation in core computer science."
  ].map((highlight, idx) => (
                                        <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 shrink-0" />
                                            <span className="leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between">
                                <span className="text-xs font-mono text-neutral-500">
                                    Institution Location: {education.location}
                                </span>
                                <a
                                    href={education.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-mono text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1.5 font-semibold"
                                >
                                    <span>Official University Portal</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
