"use client";

import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { MapPin } from "lucide-react";

interface ProfileOutroProps {
    profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
    return (
        <section
            id="profile"
            data-chapter-id="profile"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-200 dark:border-neutral-800/80 bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-200"
        >
            {/* Ambient subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-crimson-600/10 blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-200 dark:border-neutral-800/80">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#ff1744] font-bold px-2.5 py-0.5 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded">
                            CHAPTER 09
                        </span>
                        <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                            Engineer Dossier & Credentials
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        About Fahim Faisal
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Portrait & Core Identity */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-craft-elevated ring-1 ring-black/[0.05] dark:ring-0 group">
                            <Image
                                src="/assets/profile-avatar.png"
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-xs font-mono text-[#ff1744] uppercase tracking-wider block font-bold">
                                    Software Engineer
                                </span>
                                <span className="text-sm font-bold text-white">
                                    {profile.name}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 space-y-2 text-xs font-mono shadow-craft-subtle ring-1 ring-black/[0.03] dark:ring-0">
                            <div className="text-neutral-500 uppercase">Availability Status</div>
                            <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Available for High-Impact Roles
                            </div>
                        </div>
                    </div>

                    {/* Bio & Academic Background */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            Professional Summary
                        </h3>
                        <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                            {profile.bioParagraphs?.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            )) || (
                                <p>
                                    Software Engineer specializing in frontend architecture, distributed systems integration, and fluid motion design systems. Experienced in shipping features to over 80,000 production sites worldwide.
                                </p>
                            )}
                        </div>

                        {/* Education Highlight Card */}
                        <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2 shadow-craft-card ring-1 ring-black/[0.04] dark:ring-0">
                            <div className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                Formal Education
                            </div>
                            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                                {profile.education.degree}
                            </h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                {profile.education.institute}
                            </p>
                            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                                <span>{profile.education.period}</span>
                                <a
                                    href={profile.education.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-mono text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Institution Portal ↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between shadow-craft-subtle ring-1 ring-black/[0.03] dark:ring-0">
                            <div className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-sm">
                                <MapPin className="w-4 h-4 text-[#ff1744] shrink-0" />
                                <span>{profile.location}</span>
                            </div>
                            <a
                                href={profile.contact.locationMap}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-mono text-neutral-500 hover:text-[#ff1744] transition-colors"
                            >
                                View Map ↗
                            </a>
                        </div>
                    </div>

                    {/* Technical Taxonomy Matrix */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            Technical Taxonomy & Competencies
                        </h3>
                        <div className="space-y-4">
                            {profile.skillCategories?.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 space-y-2.5 shadow-craft-subtle hover:shadow-craft-sm ring-1 ring-black/[0.03] dark:ring-0 transition-all duration-150"
                                >
                                    <h4 className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-1 text-xs font-mono bg-stone-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Direct Contact Outro Banner */}
                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-100 dark:from-neutral-900 via-white dark:via-neutral-900/90 to-stone-100 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-6 relative overflow-hidden shadow-craft-elevated ring-1 ring-black/[0.05] dark:ring-0 dark:shadow-2xl">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                            Get In Touch
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100">
                            Let’s Build Exceptional Software Together
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                            Available for full-time frontend and full-stack software engineering opportunities, high-impact consulting, and distributed systems work.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="px-6 py-3 rounded-xl bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-sm font-mono transition-all shadow-[0_0_15px_rgba(255,23,68,0.4)] active:scale-[0.97] transition-all duration-150 ease-out"
                        >
                            Email Me: {profile.contact.email} ↗
                        </a>
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-stone-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 text-sm font-mono shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out"
                        >
                            LinkedIn Profile ↗
                        </a>
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-stone-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 text-sm font-mono shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out"
                        >
                            GitHub Profile ↗
                        </a>
                    </div>

                    <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                        Crafted with Next.js 14, Tailwind CSS, Framer Motion, and CSS Anchor Positioning · Fahim Faisal © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </section>
    );
};
