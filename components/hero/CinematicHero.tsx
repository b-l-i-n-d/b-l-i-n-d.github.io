"use client";

import React, { useState, useRef, useEffect } from "react";
import { EngineerProfile } from "@/types/portfolio";
import { useViewport } from "@/components/viewport/ViewportController";

interface CinematicHeroProps {
    profile: EngineerProfile;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ profile }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeClip, setActiveClip] = useState<"learner" | "instructor">("learner");
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const modalVideoRef = useRef<HTMLVideoElement | null>(null);
    const { isReducedMotion, registerVideo } = useViewport();

    const learnerVideo = profile.heroReel.videoUrl;
    const instructorVideo =
        profile.heroReel.secondaryVideoUrl ||
        "https://tutorlms.com/wp-content/uploads/2026/07/home-hero-instructor-3.mp4";

    const currentVideoSrc = activeClip === "learner" ? learnerVideo : instructorVideo;

    // Register primary video with ViewportController for throttled 1-decoder active playback
    useEffect(() => {
        registerVideo("hero-video", videoRef.current);
        return () => registerVideo("hero-video", null);
    }, [registerVideo]);

    const togglePlayPause = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        const newMuted = !isMuted;
        videoRef.current.muted = newMuted;
        setIsMuted(newMuted);
    };

    return (
        <section
            id="hero"
            data-chapter-id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-20 pb-16 overflow-hidden bg-neutral-950 text-white"
        >
            {/* Ambient subtle crimson gradient background (GPU composited) */}
            <div className="absolute inset-0 pointer-events-none opacity-35">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-[#ff1744]/15 via-crimson-900/10 to-rose-600/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center space-y-8">
                {/* Meta Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase">
                    <span className="px-3 py-1 bg-[#ff1744]/10 text-[#ff1744] border border-[#ff1744]/30 rounded-full font-semibold">
                        {profile.heroReel.badge}
                    </span>
                    <span className="px-3 py-1 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-full">
                        {profile.education.shortInstitute} CSE Graduate
                    </span>
                    <span className="px-3 py-1 bg-neutral-900 text-emerald-400 border border-neutral-800 rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        80,000+ Production Installs
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

                {/* Direct Product Highlights Row */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
                    <a
                        href="https://tutorlms.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 transition-all flex items-center gap-2 group"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                        <span className="font-semibold text-neutral-100">Tutor LMS 3.0 – 4.0</span>
                        <span className="text-neutral-500 group-hover:text-neutral-300">↗</span>
                    </a>
                    <a
                        href="https://www.joomshaper.com/easystore"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 transition-all flex items-center gap-2 group"
                    >
                        <span className="w-2 h-2 rounded-full bg-crimson-500" />
                        <span className="font-semibold text-neutral-100">EasyStore by JoomShaper</span>
                        <span className="text-neutral-500 group-hover:text-neutral-300">↗</span>
                    </a>
                </div>

                {/* Cinematic Showreel Player Container */}
                <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
                    {/* Perspective Stage / Aspect Ratio Box */}
                    <div className="relative w-full pb-[56.25%] bg-neutral-950">
                        <video
                            ref={videoRef}
                            src={currentVideoSrc}
                            poster={profile.heroReel.posterUrl}
                            autoPlay={!isReducedMotion}
                            loop
                            muted={isMuted}
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Top View Selector Bar */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-2 py-1.5 rounded-xl border border-neutral-800/80 text-xs font-mono">
                            <span className="text-neutral-500 px-1 uppercase text-[10px] tracking-wider hidden sm:inline">
                                View Mode:
                            </span>
                            <button
                                onClick={() => setActiveClip("learner")}
                                className={`px-2.5 py-1 rounded-lg transition-all ${
                                    activeClip === "learner"
                                        ? "bg-[#ff1744] text-white font-bold shadow-[0_0_10px_rgba(255,23,68,0.5)]"
                                        : "text-neutral-400 hover:text-white"
                                }`}
                            >
                                Learner Experience
                            </button>
                            <button
                                onClick={() => setActiveClip("instructor")}
                                className={`px-2.5 py-1 rounded-lg transition-all ${
                                    activeClip === "instructor"
                                        ? "bg-[#ff1744] text-white font-bold shadow-[0_0_10px_rgba(255,23,68,0.5)]"
                                        : "text-neutral-400 hover:text-white"
                                }`}
                            >
                                Instructor Dashboard
                            </button>
                        </div>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent flex items-center justify-between z-20">
                        <div className="text-left">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-[#ff1744] font-bold uppercase tracking-widest block">
                                    Chapter 00
                                </span>
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300 border border-neutral-700/50">
                                    60 FPS Native Video
                                </span>
                            </div>
                            <h2 className="text-base sm:text-lg font-bold text-neutral-100">
                                {profile.heroReel.title}
                            </h2>
                            <span className="text-xs text-neutral-400 hidden sm:inline-block">
                                {activeClip === "learner"
                                    ? "Tutor LMS Continuous Learning Player with Synchronized Notes & Quizzes"
                                    : "Drag-and-Drop Course Curriculum Builder & Analytics Dashboard"}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlayPause}
                                className="px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/70 text-xs font-mono flex items-center gap-1.5 transition-all"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                {isPlaying ? (
                                    <>
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                        </svg>
                                        <span className="hidden sm:inline">Pause</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        <span className="hidden sm:inline">Play</span>
                                    </>
                                )}
                            </button>

                            {/* Mute Button */}
                            <button
                                onClick={toggleMute}
                                className="px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/70 text-xs font-mono flex items-center gap-1.5 transition-all"
                                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                            >
                                {isMuted ? (
                                    <>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                        </svg>
                                        <span>Unmute</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-3.5 h-3.5 text-[#ff1744]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                        <span>Mute</span>
                                    </>
                                )}
                            </button>

                            {/* Cinema Mode Button */}
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="px-3.5 py-1.5 rounded-lg bg-[#ff1744] hover:bg-rose-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(255,23,68,0.5)]"
                                aria-label="Expand showreel to fullscreen cinema mode"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span className="hidden sm:inline">Cinema Mode</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA & Verified Fast Links */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                        href="#contents"
                        className="px-6 py-3 rounded-xl bg-[#ff1744] hover:bg-crimson-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,23,68,0.35)]"
                    >
                        Browse Contents ↓
                    </a>
                    <a
                        href="#about"
                        className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm transition-all flex items-center gap-2"
                    >
                        <span>Profile & Bio</span>
                        <span className="text-[#ff1744]">→</span>
                    </a>
                    <a
                        href={profile.contact.cvUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 text-sm transition-all flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download CV</span>
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
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#ff1744] font-bold uppercase tracking-wider">
                                Cinema Mode · {profile.heroReel.title}
                            </span>
                            <span className="text-xs text-neutral-400 font-mono">
                                ({activeClip === "learner" ? "Learner Experience" : "Instructor Experience"})
                            </span>
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all font-mono text-sm"
                            aria-label="Close cinema mode"
                        >
                            ✕ Close [ESC]
                        </button>
                    </div>
                    <div className="relative w-full max-w-6xl pb-[56.25%] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
                        <video
                            ref={modalVideoRef}
                            src={currentVideoSrc}
                            autoPlay
                            loop
                            controls
                            playsInline
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
