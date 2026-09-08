"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EngineerProfile } from "@/types/portfolio";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    ExternalLink,
    Maximize2,
    GraduationCap,
    LayoutDashboard,
} from "lucide-react";
import { useViewport } from "@/components/viewport/ViewportController";

interface CinematicHeroProps {
    profile: EngineerProfile;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ profile }) => {
    const { registerVideo, isReducedMotion } = useViewport();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [activeClip, setActiveClip] = useState<"learner" | "instructor">("learner");

    const currentVideoSrc =
        activeClip === "learner"
            ? profile.heroReel.videoUrl
            : profile.heroReel.secondaryVideoUrl || profile.heroReel.videoUrl;

    useEffect(() => {
        if (videoRef.current) {
            registerVideo("hero-video", videoRef.current);
        }
        return () => {
            registerVideo("hero-video", null);
        };
    }, [registerVideo]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const attemptPlay = () => {
            if (!isReducedMotion) {
                video
                    .play()
                    .then(() => setIsPlaying(true))
                    .catch(() => {
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
    }, [currentVideoSrc, isReducedMotion]);

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
        { id: "learner" as const, label: "Learner experience", Icon: GraduationCap },
        { id: "instructor" as const, label: "Curriculum builder", Icon: LayoutDashboard },
    ];

    return (
        <section
            id="hero"
            data-chapter-id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-24 pb-20 overflow-hidden bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-8">
                {/* Meta Indicator Pills (Apple whisper hairlines, quiet ambient fills) */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium">
                    <span className="px-3 py-1 bg-black/[0.03] dark:bg-white/[0.04] text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] rounded-full">
                        Software Engineer at Ollyo / Themeum
                    </span>
                    <span className="px-3 py-1 bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] rounded-full">
                        SUST CSE Graduate
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-white/[0.06] text-neutral-900 dark:text-neutral-100 border border-black/[0.08] dark:border-white/[0.12] rounded-full flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        120,000+ Active Deployments
                    </span>
                </div>

                {/* Hero Titles & Statement */}
                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {profile.name}
                    </h1>
                    <p className="text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
                        {profile.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                        {profile.headline}
                    </p>
                </div>

                {/* Direct Product Highlights Row */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                    <a
                        href="https://tutorlms.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                        <span className="font-semibold text-neutral-900 dark:text-white">Tutor LMS 2.0 to 4.0</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-white transition-colors" />
                    </a>
                    <a
                        href="https://www.joomshaper.com/easystore"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out"
                    >
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="font-semibold text-neutral-900 dark:text-white">EasyStore by JoomShaper</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-white transition-colors" />
                    </a>
                </div>

                {/* Cinematic Showreel Player Container */}
                <div className="w-full max-w-5xl relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-white dark:bg-neutral-950 shadow-craft-elevated dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
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
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-1 rounded-xl border border-black/[0.06] dark:border-white/[0.10] text-xs shadow-craft-card">
                            <span className="text-neutral-500 px-2 text-xs font-medium hidden sm:inline">
                                Perspective:
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
                                                ? "text-white font-semibold"
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
                    <div className="p-4 sm:p-5 bg-white dark:bg-neutral-900/90 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between z-20 transition-colors">
                        <div className="text-left space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                                <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                                    Flagship Interaction Reel
                                </span>
                            </div>
                            <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {profile.heroReel.title}
                            </h2>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">
                                {activeClip === "learner"
                                    ? "Continuous learning cockpit with real-time video telemetry, synchronized notes, and zero-CLS assessment"
                                    : "Drag-and-drop course curriculum builder with optimistic state synchronization"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0 pl-4">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 hover:bg-[#ff1744] hover:text-white text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all duration-150 cursor-pointer shadow-sm hover:shadow-craft-card active:scale-[0.95]"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
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
                                className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all duration-150 cursor-pointer shadow-sm hover:shadow-craft-card active:scale-[0.95]"
                                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                                title={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <VolumeX className="w-4 h-4" />
                                ) : (
                                    <Volume2 className="w-4 h-4" />
                                )}
                            </button>

                            {/* External Production Link */}
                            <a
                                href={profile.heroReel.productUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all duration-150 shadow-sm hover:shadow-craft-card active:scale-[0.95]"
                                aria-label="Open production site in new tab"
                                title="Open production site"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
