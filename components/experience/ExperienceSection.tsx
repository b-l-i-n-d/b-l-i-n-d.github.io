"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EngineerProfile, WorkExperience, AcademicCourse } from "@/types/portfolio";
import { ExternalLink, Briefcase, GraduationCap, Building2 } from "lucide-react";

interface ExperienceSectionProps {
    experiences?: WorkExperience[];
    education?: any;
    academicCourses?: string[];
    profile?: EngineerProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    experiences: propExperiences,
    education: propEducation,
    academicCourses: propAcademicCourses,
    profile,
}) => {
    // Robust fallback checking profile.experiences then profile.workExperiences
    const experiences = propExperiences || profile?.experiences || profile?.workExperiences || [];
    const education = propEducation || profile?.education || {};
    const academicCourses =
        propAcademicCourses ||
        profile?.academicCourses ||
        profile?.education?.relevantCourses || [
            "Data Structures & Algorithms",
            "Object-Oriented Programming (Java/C++)",
            "Database Management Systems (SQL & ACID)",
            "Operating Systems & Multithreading",
            "Software Architecture & Design Patterns",
            "Computer Networks & Distributed Systems",
            "Web Technologies & Frameworks",
            "Artificial Intelligence & Machine Learning",
            "Theory of Computation & Compiler Design",
        ];

    const [activeTab, setActiveTab] = useState<"career" | "education">("career");

    const tabs = [
        { id: "career" as const, label: "Work Experience", Icon: Briefcase },
        { id: "education" as const, label: "Formal Education", Icon: GraduationCap },
    ];

    return (
        <section
            id="experience"
            data-chapter-id="experience"
            className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.06] dark:border-white/[0.08] pb-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                                Track Record & Impact
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Professional Experience
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                            Engineering production-grade software platforms with high-concurrency architectures, 
                            fluid micro-interactions, and millions of active end-users worldwide.
                        </p>
                    </div>

                    {/* View Switcher with Smooth Anchor Spring Pill */}
                    <div
                        className="relative flex items-center p-1 bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-xl self-start md:self-auto gap-1"
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
                                    className={`relative z-10 px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${
                                        isSelected
                                            ? "text-neutral-900 dark:text-white font-semibold"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                    }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="exp-active-tab-pill"
                                            className="absolute inset-0 bg-white dark:bg-white/[0.12] rounded-lg shadow-sm border border-black/[0.06] dark:border-white/[0.10] -z-10"
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

                {/* Content Container */}
                <div className="w-full">
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
                                        className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-craft-card dark:shadow-xl"
                                    >
                                        {/* Role & Company Header */}
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="text-neutral-400 dark:text-neutral-600">at</span>
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
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                    {exp.department}, {exp.location}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Core Products Worked On */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                                                Primary products engineered
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {exp.products.map((product) => (
                                                    <div
                                                        key={product.name}
                                                        className="p-5 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] space-y-2 hover:border-[#ff1744]/40 transition-all duration-200 shadow-sm hover:shadow-craft-card"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                                                {product.name}
                                                            </span>
                                                            <a
                                                                href={product.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-xs text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1 font-medium"
                                                            >
                                                                <span>Live Product</span>
                                                                <ExternalLink className="w-3.5 h-3.5" />
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
                                            <h4 className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                                                Architectural scope and deliverables
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
                                        <div className="space-y-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                                            <h4 className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                                                Production technologies utilized
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 rounded-lg text-xs bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06]"
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
                                className="space-y-8"
                            >
                                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 space-y-8 shadow-craft-card dark:shadow-xl">
                                    {/* University Header */}
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                                    {education.degree}
                                                </h3>
                                                {education.department && (
                                                    <>
                                                        <span className="text-neutral-400 dark:text-neutral-600">in</span>
                                                        <span className="text-lg font-bold text-[#ff1744]">
                                                            {education.department}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                            {education.link ? (
                                                <a
                                                    href={education.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-base font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#ff1744] transition-colors inline-flex items-center gap-1.5"
                                                >
                                                    <span>{education.institute} {education.shortInstitute ? `(${education.shortInstitute})` : ""}</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            ) : (
                                                <p className="text-base font-semibold text-[#ff1744]">
                                                    {education.institute}
                                                </p>
                                            )}
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                {education.location || "Sylhet, Bangladesh"}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-[#ff1744]/10 text-[#ff1744] text-xs font-semibold">
                                                {education.period || "2018 – 2023"} · {education.status || "Graduated"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Academic Pillars */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                                            Curriculum & Engineering Rigor
                                        </h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                                            Comprehensive engineering curriculum covering Data Structures & Algorithms, Object-Oriented Analysis, 
                                            Distributed Database Systems, Operating Systems, Computer Networks, and High-Performance Software Architecture.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                            <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono space-y-1 shadow-sm">
                                                <div className="text-neutral-500 uppercase">Specialization</div>
                                                <div className="font-bold text-neutral-900 dark:text-white">Full Stack & Web Architecture</div>
                                            </div>
                                            <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono space-y-1 shadow-sm">
                                                <div className="text-neutral-500 uppercase">Core Focus</div>
                                                <div className="font-bold text-neutral-900 dark:text-white">Systems Design & Algorithms</div>
                                            </div>
                                            <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono space-y-1 shadow-sm">
                                                <div className="text-neutral-500 uppercase">Graduation Status</div>
                                                <div className="font-bold text-emerald-600 dark:text-emerald-400">Verified Alumni (SUST CSE)</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Core Academic Competencies */}
                                    <div className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                                        <h4 className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                                            Core computer science competencies
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                            {academicCourses.map((course, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-3.5 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs text-neutral-800 dark:text-neutral-200 flex items-center gap-2.5 shadow-sm"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                                                    <span className="font-medium">{course}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
