"use client";

import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { GithubIcon, LinkedinIcon, EmailIcon } from "../icons";
import { ExternalLink, MapPin } from "lucide-react";

interface ProfileOutroProps {
    profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
    return (
        <section
            id="profile"
            data-chapter-id="profile"
            className="relative py-20 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-6">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                            Engineering Identity & Credentials
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-500 font-mono">
                        b-l-i-n-d &bull; Fahim Faisal (Abir)
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Portrait & Core Meta */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-neutral-200 dark:bg-neutral-800 shadow-craft-elevated group">
                            <Image
                                src="/assets/profile-avatar.png"
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-xs sm:text-sm text-[#ff1744] font-semibold block">
                                    Software Engineer
                                </span>
                                <span className="text-base sm:text-lg font-bold text-white">
                                    {profile.name}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] space-y-2 text-xs sm:text-sm shadow-sm">
                            <div className="text-neutral-500 font-medium">Availability Status</div>
                            <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0" />
                                Available for Senior Engineering Roles
                            </div>
                        </div>
                    </div>

                    {/* Bio & Academic Background */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Professional Summary
                        </h3>
                        <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-[65ch]">
                            {profile.bioParagraphs?.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            )) || (
                                <p>
                                    Software Engineer specializing in frontend architecture, distributed systems integration, and fluid motion design systems. Experienced in shipping features to over 120,000 production sites worldwide.
                                </p>
                            )}
                        </div>

                        {/* Education Highlight Card */}
                        <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] space-y-2 shadow-craft-card">
                            <div className="text-xs sm:text-sm text-[#ff1744] font-semibold">
                                Formal Education
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                                {profile.education.degree}
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                                {profile.education.institute}
                            </p>
                            <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500 pt-2 border-t border-black/[0.04] dark:border-white/[0.06] font-medium">
                                <span>{profile.education.period}</span>
                                <a
                                    href={profile.education.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs sm:text-sm text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1 font-semibold shrink-0"
                                >
                                    <span>SUST SWE Department</span>
                                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/40 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                                <MapPin className="w-4 h-4 text-[#ff1744] shrink-0" />
                                <span>{profile.location}</span>
                            </div>
                            <a
                                href={profile.contact.locationMap}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs sm:text-sm text-neutral-500 hover:text-[#ff1744] transition-colors inline-flex items-center gap-1 font-medium shrink-0"
                            >
                                <span>View Map</span>
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                            </a>
                        </div>
                    </div>

                    {/* Technical Taxonomy Matrix */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Technical Taxonomy &amp; Competencies
                        </h3>
                        <div className="space-y-4">
                            {profile.skillCategories?.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] space-y-2.5 shadow-sm hover:shadow-craft-card transition-all duration-150"
                                >
                                    <h4 className="text-xs sm:text-sm text-[#ff1744] font-semibold">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-3 py-1 rounded-md text-xs sm:text-sm bg-stone-100/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] font-medium shrink-0"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Direct Contact Channels */}
                        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
                            <h4 className="text-xs sm:text-sm text-neutral-500 font-semibold">
                                Direct Contact Channels
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`mailto:${profile.contact.email}`}
                                    className="px-4 py-2.5 rounded-xl bg-[#ff1744] text-white hover:bg-rose-600 transition-colors text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96] shrink-0"
                                >
                                    <EmailIcon className="w-4 h-4 shrink-0" />
                                    <span>Send Email</span>
                                </a>
                                <a
                                    href={profile.contact.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-black/[0.08] dark:border-white/[0.10] transition-colors text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96] shrink-0"
                                >
                                    <LinkedinIcon className="w-4 h-4 text-[#ff1744] shrink-0" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                                <a
                                    href={profile.contact.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-black/[0.08] dark:border-white/[0.10] transition-colors text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96] shrink-0"
                                >
                                    <GithubIcon className="w-4 h-4 shrink-0" />
                                    <span>View GitHub Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
