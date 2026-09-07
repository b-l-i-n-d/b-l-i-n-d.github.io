"use client";

import React, { useState } from "react";
import { EngineerProfile } from "@/types/portfolio";
import { useViewport } from "@/components/viewport/ViewportController";

interface CinematicHeroProps {
    profile: EngineerProfile;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ profile }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const { isReducedMotion } = useViewport();

    const videoSrc = `${profile.heroReel.videoUrl}&autoplay=${isReducedMotion ? 0 : 1}&muted=${isMuted ? 1 : 0}&loop=1&background=1`;
    const expandedVideoSrc = `${profile.heroReel.videoUrl}&autoplay=1&muted=0&loop=1`;

    return (
        <section
            id="hero"
            data-chapter-id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-20 pb-16 overflow-hidden bg-neutral-950 text-white"
        >
            {/* Ambient subtle gradient background (GPU composited) */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-rose-500/5 to-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center space-y-8">
                {/* Meta Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase">
                    <span className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-full">
                        {profile.heroReel.badge}
                    </span>
                    <span className="px-3 py-1 bg-neutral-900 text-neutral-400 border border-neutral-800 rounded-full">
                        {profile.education.shortInstitute} CSE Graduate
                    </span>
                    <span className="px-3 py-1 bg-neutral-900 text-emerald-400 border border-neutral-800 rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Engineering Roles
                    </span>
                </div>

                {/* Hero Titles */}
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-100">
                        {profile.name}
                    </h1>
                    <p className="text-xl sm:text-2xl text-neutral-400 font-medium tracking-wide">
                        {profile.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        {profile.headline}
                    </p>
                </div>

                {/* Cinematic Showreel Player Container */}
                <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                    {/* Aspect ratio box */}
                    <div className="relative w-full pb-[56.25%] bg-neutral-950">
                        <iframe
                            src={videoSrc}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            allow="autoplay; fullscreen; picture-in-picture"
                            title={profile.heroReel.title}
                        />
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent flex items-center justify-between z-20">
                        <div className="text-left">
                            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                                Chapter 00
                            </span>
                            <h2 className="text-base sm:text-lg font-bold text-neutral-100">
                                {profile.heroReel.title}
                            </h2>
                            <span className="text-xs text-neutral-400 hidden sm:inline-block">
                                {profile.heroReel.tagline}
                            </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/70 text-xs font-mono flex items-center gap-1.5 transition-all"
                                aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
                            >
                                {isMuted ? (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                        </svg>
                                        <span>Unmute</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                        <span>Mute</span>
                                    </>
                                )}
                            </button>

                            <button
                                onClick={() => setIsExpanded(true)}
                                className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
                                aria-label="Expand showreel to fullscreen cinema mode"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span>Cinema Mode</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA & Verified Fast Links */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                        href="#ecommerce"
                        className="px-6 py-3 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 font-semibold text-sm transition-all shadow-lg hover:shadow-neutral-200/20"
                    >
                        Explore Case Studies ↓
                    </a>
                    <a
                        href={profile.contact.cvUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm transition-all flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download CV</span>
                    </a>
                    <a
                        href={profile.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-sm transition-all flex items-center gap-2"
                    >
                        <span>GitHub</span>
                        <span className="text-xs text-neutral-500 font-mono">@b-l-i-n-d</span>
                    </a>
                </div>
            </div>

            {/* Cinema Fullscreen Modal */}
            {isExpanded && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="w-full max-w-6xl flex justify-between items-center pb-4 text-white">
                        <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                            Cinema Mode · {profile.heroReel.title}
                        </span>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all font-mono text-sm"
                            aria-label="Close cinema mode"
                        >
                            ✕ Close [ESC]
                        </button>
                    </div>
                    <div className="relative w-full max-w-6xl pb-[56.25%] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                        <iframe
                            src={expandedVideoSrc}
                            className="absolute inset-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            title="Fullscreen Showreel"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
