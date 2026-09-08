"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EngineerProfile } from "@/types/portfolio";
import { useViewport } from "@/components/viewport/ViewportController";
import { GraduationCap, LayoutDashboard, Play, Pause, Volume2, VolumeX, ExternalLink } from "lucide-react";

interface CinematicHeroProps {
    profile: EngineerProfile;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ profile }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { registerVideo, isReducedMotion } = useViewport();
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [activeClip, setActiveClip] = useState<"learner" | "instructor">("learner");

    const currentVideoSrc =
        activeClip === "learner"
            ? profile.heroReel.videoUrl
            : profile.heroReel.secondaryVideoUrl || profile.heroReel.videoUrl;

    // Register video with viewport manager
    useEffect(() => {
        if (videoRef.current) {
            registerVideo("hero-video", videoRef.current);
        }
        return () => {
            registerVideo("hero-video", null);
        };
    }, [registerVideo]);

    // Handle reliable autoplay
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = isMuted;
        video.defaultMuted = true;

        const attemptPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(() => {
                        // Mute and retry if audio autoplay blocked
                        video.muted = true;
                        setIsMuted(true);
                        video
                            .play()
                            .then(() => setIsPlaying(true))
                            .catch(() => setIsPlaying(false));
                    });
            }
        };

        if (video.readyState >= 2) {
            attemptPlay();
        } else {
            video.addEventListener("loadeddata", attemptPlay, { once: true });
        }
    }, [currentVideoSrc, isMuted]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
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

    const tabs = [
        { id: "learner" as const, label: "Learner Experience", Icon: GraduationCap },
        { id: "instructor" as const, label: "Instructor Dashboard", Icon: LayoutDashboard },
    ];

    return (
        <section
            id="hero"
            data-chapter-id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-20 pb-16 overflow-hidden bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
        >
            {/* Ambient subtle crimson gradient background (GPU composited) */}
            <div className="absolute inset-0 pointer-events-none opacity-35 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-[#ff1744]/15 via-crimson-900/10 to-rose-600/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center space-y-8">
                {/* Meta Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase">
                    <span className="px-3 py-1 bg-[#ff1744]/10 text-[#ff1744] border border-[#ff1744]/30 rounded-full font-semibold">
                        {profile.heroReel.badge}
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 rounded-full shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0">
                        {profile.education.shortInstitute} CSE Graduate
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 border border-neutral-300 dark:border-neutral-800 rounded-full flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                        80,000+ Production Installs
                    </span>
                </div>

                {/* Hero Titles */}
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                        {profile.name}
                    </h1>
                    <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-400 font-medium tracking-wide">
                        {profile.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        {profile.headline}
                    </p>
                </div>

                {/* Direct Product Highlights Row */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
                    <a
                        href="https://tutorlms.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 transition-all flex items-center gap-2 group shadow-craft-sm ring-1 ring-black/[0.04] dark:ring-0 hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">Tutor LMS 2.0 – 4.0</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
                    </a>
                    <a
                        href="https://www.joomshaper.com/easystore"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700/80 transition-all flex items-center gap-2 group shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-crimson-500" />
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">EasyStore by JoomShaper</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
                    </a>
                </div>

                {/* Cinematic Showreel Player Container */}
                <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-craft-elevated dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-black/[0.05] dark:ring-0 group">
                    {/* Aspect Ratio Box */}
                    <div className="relative w-full pb-[56.25%] bg-neutral-950">
                        <video
                            ref={videoRef}
                            data-video-id="hero-video"
                            key={currentVideoSrc}
                            src={currentVideoSrc}
                            poster={profile.heroReel.posterUrl}
                            autoPlay={!isReducedMotion}
                            loop
                            muted={isMuted}
                            playsInline
                            preload="auto"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Top View Selector Bar with Sliding Spring Anchor Tabs */}
                        <div
                            className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 dark:bg-neutral-950/85 backdrop-blur-md p-1 rounded-xl border border-neutral-200/90 dark:border-neutral-800/80 text-xs font-mono shadow-craft-card dark:shadow-lg"
                            
                        >
                            <span className="text-neutral-500 px-2 uppercase text-[10px] tracking-wider hidden sm:inline">
                                View Mode:
                            </span>
                            {tabs.map((tab) => {
                                const isSelected = activeClip === tab.id;
                                const TabIcon = tab.Icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveClip(tab.id)}
                                        style={{
                                            // @ts-ignore
                                            anchorName: `--video-tab-${tab.id}`,
                                        }}
                                        className={`relative z-10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                                            isSelected
                                                ? "text-white font-bold"
                                                : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                        }`}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                layoutId="hero-video-tab-indicator"
                                                className="absolute inset-0 bg-[#ff1744] rounded-lg shadow-[0_0_12px_rgba(255,23,68,0.6)] -z-10"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 450,
                                                    damping: 32,
                                                }}
                                            />
                                        )}
                                        <TabIcon className="w-3.5 h-3.5" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Subtle Video Seam Progress Track */}
                    <div className="relative w-full h-0.5 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                        {isPlaying && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                                className="h-full w-full bg-gradient-to-r from-transparent via-[#ff1744] to-[#ff1744]"
                            />
                        )}
                    </div>

                    {/* Dedicated Showcase Console & Metadata Shelf */}
                    <div className="p-4 sm:p-5 bg-white dark:bg-neutral-900/90 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between z-20 transition-colors">
                        <div className="text-left space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-[#ff1744] font-bold uppercase tracking-widest block">
                                    Chapter 00
                                </span>
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60 shadow-craft-subtle">
                                    Production Showcase
                                </span>
                            </div>
                            <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {profile.heroReel.title}
                            </h2>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">
                                {activeClip === "learner"
                                    ? "Tutor LMS Continuous Learning Player with Synchronized Notes & Quizzes (2.0–4.0)"
                                    : "Drag-and-Drop Course Curriculum Builder & Analytics Dashboard"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0 pl-4">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 hover:bg-[#ff1744] hover:text-white text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 transition-all duration-150 cursor-pointer shadow-craft-sm hover:shadow-craft-card active:scale-[0.95]"
                                aria-label={isPlaying ? "Pause Hero Reel" : "Play Hero Reel"}
                                title={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? (
                                    <Pause className="w-4 h-4" />
                                ) : (
                                    <Play className="w-4 h-4" />
                                )}
                            </button>

                            {/* Mute/Unmute Button */}
                            <button
                                onClick={toggleMute}
                                className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 transition-all duration-150 cursor-pointer shadow-craft-sm hover:shadow-craft-card active:scale-[0.95]"
                                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                                title={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <VolumeX className="w-4 h-4" />
                                ) : (
                                    <Volume2 className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
