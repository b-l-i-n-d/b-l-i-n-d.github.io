"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkExperience, Education } from "@/types/portfolio";
import { ExternalLink, Briefcase, GraduationCap, ArrowUpRight, TrendingUp } from "lucide-react";
import { CareerVelocityCanvas } from "./CareerVelocityCanvas";

interface ExperienceSectionProps {
    profile?: any;
    experiences?: WorkExperience[];
    education?: any;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile, experiences: propExp, education: propEdu }) => {
    const [activeTab, setActiveTab] = useState<"career" | "education">("career");
    const experiences = propExp || profile?.experiences || [];
    const education = propEdu || profile?.education || {};

    const academicCourses = education.relevantCourses || education.courses || [
        "Data Structures & Algorithms",
        "Object Oriented Software Engineering",
        "Database Management Systems & SQL",
        "Operating Systems & Process Concurrency",
        "Distributed Systems & Cloud Computing",
        "Computer Networks & Protocol Stacks",
        "Software Architecture & Design Patterns",
        "Compiler Design & Formal Automata",
    ];

    const tabs = [
        { id: "career" as const, label: "Work Experience", Icon: Briefcase },
        { id: "education" as const, label: "Education & Academia", Icon: GraduationCap },
    ];

    return (
        <section
            id="experience"
            data-chapter-id="experience"
            className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
                        <span className="text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                            Chapter 05 &middot; Track Record
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
                        Engineering Experience
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Track record of architecting mission-critical platforms, high-throughput engines, and fluid design systems in production environments.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-2 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                    {tabs.map((tab) => {
                        const Icon = tab.Icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                                    isActive
                                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm"
                                        : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                }`}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab 1: Work Experience */}
                {activeTab === "career" && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-8"
                    >
                        {experiences.map((exp: WorkExperience, index: number) => {
                            const isOllyo = exp.company.toLowerCase().includes("ollyo");

                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-2xl bg-white dark:bg-neutral-900/60 border ${
                                        isOllyo
                                            ? "border-[#ff1744]/40 dark:border-[#ff1744]/30 shadow-craft-card"
                                            : "border-black/[0.08] dark:border-white/[0.10]"
                                    } p-6 sm:p-8 space-y-6 transition-all duration-200 hover:border-black/[0.15] dark:hover:border-white/[0.2]`}
                                >
                                    {isOllyo && (
                                        <div className="absolute -top-3 left-6 sm:left-8 px-3 py-0.5 rounded-full bg-[#ff1744] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                            <span>Current Employer</span>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {/* Company & Role Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                                            <div className="space-y-1">
                                                <div className="flex flex-wrap items-baseline gap-2.5">
                                                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="text-neutral-400 font-light">&middot;</span>
                                                    <a
                                                        href={exp.website || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xl font-bold text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1.5"
                                                    >
                                                        <span>{exp.company}</span>
                                                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                                    </a>
                                                </div>
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                    {exp.department}, {exp.location}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold shrink-0">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Artistic Handcrafted Career Velocity & Ascension Trajectory Canvas */}
                                        {exp.promotions && exp.promotions.length > 0 && (
                                            <CareerVelocityCanvas promotions={exp.promotions} />
                                        )}

                                        {/* Core Products Worked On */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
                                                Primary products engineered
                                            </h4>
                                            <div className={`grid gap-4 ${exp.products.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                                                {exp.products.map((product) => (
                                                    <div
                                                        key={product.name}
                                                        className="p-5 sm:p-6 rounded-xl bg-stone-50/70 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] space-y-2.5 hover:border-[#ff1744]/40 transition-all duration-200 shadow-sm hover:shadow-craft-card"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                                                                {product.name}
                                                            </span>
                                                            <a
                                                                href={product.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs font-mono text-[#ff1744] hover:text-rose-500 font-semibold inline-flex items-center gap-1"
                                                            >
                                                                <span>Live Product</span>
                                                                <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                            {product.roleNote}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Engineering Impact */}
                                        <div className="space-y-3">
                                            <h4 className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
                                                Key architectural highlights
                                            </h4>
                                            <ul className="space-y-2.5">
                                                {exp.achievements.map((item: string, aIdx: number) => (
                                                    <li
                                                        key={aIdx}
                                                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] mt-2 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technology Tags */}
                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                                            {exp.technologies.map((tech: string, tIdx: number) => (
                                                <span
                                                    key={tIdx}
                                                    className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 font-mono text-xs border border-black/[0.04] dark:border-white/[0.04]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Tab 2: Education & Academic Pedigree */}
                {activeTab === "education" && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/[0.08] dark:border-white/[0.10] space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                                        <span className="text-xs font-mono uppercase tracking-wider text-[#ff1744] font-semibold">
                                            Undergraduate Degree
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                                        {education.degree || "Bachelor of Science in Software Engineering"}
                                    </h3>
                                    <p className="text-base text-neutral-600 dark:text-neutral-300 font-medium">
                                        {education.institution || "Shahjalal University of Science and Technology (SUST)"}
                                    </p>
                                    <p className="text-xs sm:text-sm text-neutral-500">
                                        {education.location || "Sylhet, Bangladesh"} &middot; Class of {education.period || "2018 – 2023"}
                                    </p>
                                </div>

                                <span className="px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-semibold font-mono shrink-0 self-start">
                                    {education.period || "2018 – 2023"}
                                </span>
                            </div>

                            {/* Academic Coursework */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                                    Core Computer Science & Software Engineering Curriculum
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                                    {academicCourses.map((course: string, cIdx: number) => (
                                        <div
                                            key={cIdx}
                                            className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono text-neutral-700 dark:text-neutral-300"
                                        >
                                            {course}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
