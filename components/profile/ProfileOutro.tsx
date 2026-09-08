"use client";

import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/components/icons";

interface ProfileOutroProps {
    profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
    return (
        <section
            id="profile"
            data-chapter-id="profile"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-black/[0.06] dark:border-white/[0.08] bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-200"
        >
            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                            Engineer Dossier & Credentials
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        About Fahim Faisal
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Portrait & Core Identity */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-neutral-100 dark:bg-neutral-900 shadow-craft-elevated group">
                            <Image
                                src="/assets/profile-avatar.png"
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-xs text-[#ff1744] block font-semibold">
                                    Software Engineer
                                </span>
                                <span className="text-base font-bold text-white">
                                    {profile.name}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] space-y-2 text-xs shadow-sm">
                            <div className="text-neutral-500 font-medium">Availability Status</div>
                            <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                                Available for Senior Engineering Roles
                            </div>
                        </div>
                    </div>

                    {/* Bio & Academic Background */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            Professional Summary
                        </h3>
                        <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed max-w-[65ch]">
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
                            <div className="text-xs text-[#ff1744] font-semibold">
                                Formal Education
                            </div>
                            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                                {profile.education.degree}
                            </h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                {profile.education.institute}
                            </p>
                            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-black/[0.04] dark:border-white/[0.06] font-medium">
                                <span>{profile.education.period}</span>
                                <a
                                    href={profile.education.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-[#ff1744] hover:text-rose-500 transition-colors inline-flex items-center gap-1 font-semibold"
                                >
                                    <span>SUST Department</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/40 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-sm">
                                <MapPin className="w-4 h-4 text-[#ff1744] shrink-0" />
                                <span>{profile.location}</span>
                            </div>
                            <a
                                href={profile.contact.locationMap}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-neutral-500 hover:text-[#ff1744] transition-colors inline-flex items-center gap-1 font-medium"
                            >
                                <span>View Map</span>
                                <ExternalLink className="w-3 h-3" />
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
                                    className="p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-black/[0.06] dark:border-white/[0.08] space-y-2.5 shadow-sm hover:shadow-craft-card transition-all duration-150"
                                >
                                    <h4 className="text-xs text-[#ff1744] font-semibold">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-1 rounded-md text-xs bg-stone-100/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/[0.04] dark:border-white/[0.06] font-medium"
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
                            <h4 className="text-xs text-neutral-500 font-semibold">
                                Direct Contact Channels
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`mailto:${profile.contact.email}`}
                                    className="px-4 py-2 rounded-xl bg-[#ff1744] text-white hover:bg-rose-600 transition-colors text-xs font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96]"
                                >
                                    <EmailIcon className="w-3.5 h-3.5" />
                                    <span>Send Email</span>
                                </a>
                                <a
                                    href={profile.contact.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-black/[0.08] dark:border-white/[0.10] transition-colors text-xs font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96]"
                                >
                                    <LinkedinIcon className="w-3.5 h-3.5 text-[#ff1744]" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                                <a
                                    href={profile.contact.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-black/[0.08] dark:border-white/[0.10] transition-colors text-xs font-semibold flex items-center gap-2 shadow-sm active:scale-[0.96]"
                                >
                                    <GithubIcon className="w-3.5 h-3.5" />
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
