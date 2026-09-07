"use client";

import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";

interface ProfileOutroProps {
    profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
    return (
        <section
            id="profile"
            data-chapter-id="profile"
            className="py-24 px-4 sm:px-6 lg:px-12 border-t border-neutral-800/80 bg-neutral-950 text-white relative overflow-hidden"
        >
            {/* Ambient subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-crimson-600/10 blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Chapter Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#ff1744] font-bold px-2.5 py-0.5 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded">
                            CHAPTER 06
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                            Academic & Technical Credentials
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight">
                        About & Verified Credentials
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Bio & Academic Credentials */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-700">
                                <Image
                                    src="/assets/profile-avatar.png"
                                    alt="Fahim Faisal Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-white">
                                    {profile.name}
                                </h3>
                                <p className="text-xs font-mono text-[#ff1744]">
                                    Software Engineer @ Ollyo · SUST CSE
                                </p>
                                <p className="text-xs text-neutral-400">
                                    Specializing in high-performance frontend architecture, responsive systems, and locked 60 FPS interactions.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-neutral-100">
                                Engineering Background
                            </h3>
                            {profile.bioParagraphs.map((para, idx) => (
                                <p key={idx} className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* SUST Education Card */}
                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-[#ff1744] font-bold uppercase tracking-wider">
                                    Higher Education
                                </span>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    {profile.education.status}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-neutral-100">
                                {profile.education.institute}
                            </h4>
                            <p className="text-sm text-neutral-400">
                                {profile.education.degree} · {profile.education.department}
                            </p>
                            <div className="pt-2">
                                <a
                                    href={profile.education.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-mono text-[#ff1744] hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                                >
                                    <span>Institution Portal ↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex items-center justify-between">
                            <div className="flex items-center gap-2.5 text-neutral-300 text-sm">
                                <span>📍</span>
                                <span>{profile.location}</span>
                            </div>
                            <a
                                href={profile.contact.locationMap}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-mono text-neutral-400 hover:text-[#ff1744] transition-colors"
                            >
                                View Map ↗
                            </a>
                        </div>
                    </div>

                    {/* Technical Taxonomy Matrix */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className="text-xl font-bold text-neutral-100">
                            Technical Taxonomy & Competencies
                        </h3>
                        <div className="space-y-4">
                            {profile.skillCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 space-y-2.5"
                                >
                                    <h4 className="text-xs font-mono text-[#ff1744] font-semibold uppercase tracking-wider">
                                        {category.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-1 text-xs font-mono bg-neutral-950 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors"
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
                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                            Get In Touch
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-100">
                            Let’s Build Exceptional Software Together
                        </h3>
                        <p className="text-sm text-neutral-400 max-w-xl mx-auto">
                            Available for full-time frontend and full-stack software engineering opportunities, high-impact consulting, and distributed systems work.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="px-6 py-3 rounded-xl bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-sm font-mono transition-all shadow-[0_0_15px_rgba(255,23,68,0.4)]"
                        >
                            Email Me: {profile.contact.email} ↗
                        </a>
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-mono transition-all"
                        >
                            LinkedIn Profile ↗
                        </a>
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-mono transition-all"
                        >
                            GitHub @b-l-i-n-d ↗
                        </a>
                    </div>

                    {/* Animated Behance-Style Signature Box */}
                    <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
                        <span>© 2024–2026 {profile.name} · All Rights Reserved</span>
                        <span className="text-neutral-400">
                            Universal 60 FPS · Zero Repaints · Locked Performance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
