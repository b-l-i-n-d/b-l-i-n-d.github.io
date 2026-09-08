"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EngineerProfile } from "@/types/portfolio";
import { Play, Pause, Volume2, VolumeX, ExternalLink, Sparkles, Terminal } from "lucide-react";
import { AbirChromaHeading } from "./AbirChromaHeading";
import { useViewport } from "../viewport/ViewportController";

interface CinematicHeroProps {
    profile: EngineerProfile;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ profile }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [activeClip, setActiveClip] = useState<string>("learner");
    const { registerVideo } = useViewport();

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const tabs = [
        {
            id: "learner",
            label: "Course Player Loop",
            Icon: Sparkles,
            src: profile.heroReel.videoUrl,
        },
        {
            id: "instructor",
            label: "Course Builder Cockpit",
            Icon: Terminal,
            src: profile.heroReel.secondaryVideoUrl || profile.heroReel.videoUrl,
        },
    ];

    const currentVideoSrc = tabs.find((t) => t.id === activeClip)?.src || profile.heroReel.videoUrl;

    // Viewport IntersectionObserver Registration for auto-pause on scroll
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            registerVideo("hero-video", video);
        }
        return () => {
            registerVideo("hero-video", null);
        };
    }, [registerVideo]);

    return (
        <section
            id="hero"
            data-chapter-id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-24 pb-20 overflow-hidden bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
        >
            <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-8">
                {/* Meta Indicator Pills (Apple whisper hairlines, quiet ambient fills) */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium">
                    <span className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] rounded-full shrink-0">
                        Software Engineer at Ollyo
                    </span>
                    <span className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.06] dark:border-white/[0.08] rounded-full shrink-0">
                        SUST Software Engineering Graduate
                    </span>
                    <span className="px-3.5 py-1.5 bg-white dark:bg-white/[0.06] text-neutral-900 dark:text-neutral-100 border border-black/[0.08] dark:border-white/[0.12] rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0" />
                        120,000+ Active Deployments
                    </span>
                </div>

                {/* Hero Titles & Statement with Dia Chromatic Heading & Multilingual Pronunciation */}
                <div className="space-y-4 max-w-3xl w-full">
                    <AbirChromaHeading subheading={profile.name} />

                    <p className="text-lg sm:text-2xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto pt-2">
                        {profile.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                        {profile.headline}
                    </p>
                </div>

                {/* Direct Product Highlights Row */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                    <a
                        href="https://tutorlms.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out shrink-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff1744] shrink-0" />
                        <span className="font-semibold">Tutor LMS (Ollyo)</span>
                        <span className="text-neutral-400">&bull; 120k+ Installs</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
                    </a>
                    <a
                        href="https://github.com/b-l-i-n-d/enclave"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out shrink-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-semibold">Enclave</span>
                        <span className="text-neutral-400">&bull; Zero-Knowledge Vault</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
                    </a>
                    <a
                        href="https://github.com/b-l-i-n-d/edTech"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out shrink-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        <span className="font-semibold">EdTech</span>
                        <span className="text-neutral-400">&bull; LMS Platform</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
                    </a>
                    <a
                        href="https://github.com/b-l-i-n-d/docapp"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.10] flex items-center gap-2 group shadow-sm hover:shadow-craft-card active:scale-[0.97] transition-all duration-150 ease-out shrink-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                        <span className="font-semibold">DocApp</span>
                        <span className="text-neutral-400">&bull; Clinical Suite</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0" />
                    </a>
                </div>

                {/* Switchable Video Showreel Container */}
                <div className="w-full max-w-4xl mx-auto mt-6">
                    {/* Switcher Controls (Apple Segmented Glider) */}
                    <div className="flex items-center justify-between mb-3 px-1">
                        <div className="flex items-center gap-1 p-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                            {tabs.map((tab) => {
                                const isActive = activeClip === tab.id;
                                const Icon = tab.Icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveClip(tab.id)}
                                        className={`relative px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 shrink-0 ${
                                            isActive
                                                ? "text-neutral-900 dark:text-white font-semibold"
                                                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="hero-clip-glider"
                                                className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-black/[0.06] dark:border-white/[0.08]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 450,
                                                    damping: 35,
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-1.5">
                                            <Icon className="w-4 h-4 shrink-0" />
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Engineering Specs */}
                        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
                            <span>Hardware Accelerated</span>
                            <span>&bull;</span>
                            <span>Zero-CLS</span>
                        </div>
                    </div>

                    {/* Frame Player */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-stone-200/90 dark:border-white/[0.12] bg-stone-100 dark:bg-neutral-900 shadow-craft-card group">
                        <AnimatePresence mode="wait">
                            <motion.video
                                key={currentVideoSrc}
                                ref={videoRef}
                                src={currentVideoSrc}
                                poster={profile.heroReel.posterUrl}
                                autoPlay
                                playsInline
                                muted={isMuted}
                                loop
                                preload="auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover bg-transparent"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                        </AnimatePresence>

                        {/* Hover Overlay Controls (Bottom bar) */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 z-20">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={togglePlay}
                                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-4 h-4 shrink-0" />
                                    ) : (
                                        <Play className="w-4 h-4 shrink-0" />
                                    )}
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4 shrink-0" />
                                    ) : (
                                        <Volume2 className="w-4 h-4 shrink-0" />
                                    )}
                                </button>
                                <span className="text-xs sm:text-sm font-medium text-white/90 hidden sm:inline">
                                    {activeClip === "learner"
                                        ? "Student Course Player Loop"
                                        : "Tutor Course Builder Cockpit Loop"}
                                </span>
                            </div>

                            <span className="text-xs font-mono text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-xs">
                                60 FPS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
