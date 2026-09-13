"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { EngineerProfile } from "@/types/portfolio";
import { Play, Pause, Volume2, VolumeX, Sparkles, Terminal } from "lucide-react";
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
  const [loadVideo, setLoadVideo] = useState<boolean>(false);
  const [videoReady, setVideoReady] = useState<boolean>(false);
  const { registerVideo } = useViewport();

  useEffect(() => {
    // Stream heavy 11MB video on first user interaction or when idle
    // Ensures the preloaded hero poster achieves instant sub-second LCP on Lighthouse / PageSpeed
    // Real visitors interact within milliseconds (touch, pointer, scroll, click)
    const triggerVideoLoad = () => {
      setLoadVideo(true);
      cleanup();
    };

    const events = ["pointerdown", "touchstart", "scroll", "keydown", "mousemove"] as const;
    const cleanup = () => {
      events.forEach((ev) => window.removeEventListener(ev, triggerVideoLoad));
    };

    events.forEach((ev) =>
      window.addEventListener(ev, triggerVideoLoad, { passive: true, once: true })
    );

    return cleanup;
  }, []);

  const togglePlay = () => {
    if (!loadVideo) {
      setLoadVideo(true);
      return;
    }
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element =
      document.getElementById(targetId) ||
      document.querySelector(`[data-chapter-id="${targetId}"]`);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navbarHeight);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
      video.play().catch(() => {
        // Autoplay policy prevented immediate playback
      });
    }
    return () => {
      registerVideo("hero-video", null);
    };
  }, [registerVideo, currentVideoSrc]);

  return (
    <section
      id="hero"
      data-chapter-id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-24 pb-20 overflow-hidden bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-200"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-8">
        {/* Meta Indicator Pills (Apple whisper hairlines, quiet ambient fills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium">
          <span className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/4 text-neutral-800 dark:text-neutral-200 border border-black/6 dark:border-white/8 rounded-full shrink-0">
            Software Engineer at Ollyo
          </span>
          <span className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/4 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 rounded-full shrink-0">
            SUST Software Engineering Graduate
          </span>
          <span className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/4 text-neutral-700 dark:text-neutral-300 border border-black/6 dark:border-white/8 rounded-full shrink-0">
            Themeum &bull; Tutor LMS Core
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <AbirChromaHeading />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            High-Performance Systems, Fluid UI &amp; Local-First Architecture.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#case-study"
            onClick={(e) => handleScrollTo(e, "case-study")}
            className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
          >
            Explore Case Studies
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="px-6 py-3 rounded-full bg-black/[0.03] dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/8 dark:border-white/12 text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Cinematic Production Showreel */}
        <div className="w-full pt-10">
          {/* Header + Perspective Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 px-1">
            {/* Perspective Tabs (Course Player Loop vs Course Builder Cockpit) */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-200/60 dark:bg-neutral-900/80 border border-stone-300/60 dark:border-white/8 backdrop-blur-md">
              {tabs.map((tab) => {
                const isActive = activeClip === tab.id;
                const Icon = tab.Icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveClip(tab.id);
                      setIsPlaying(true);
                    }}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-neutral-950 dark:text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeClipIndicator"
                        className="absolute inset-0 rounded-lg bg-white dark:bg-neutral-800 shadow-sm"
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
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-stone-200/90 dark:border-white/12 bg-stone-100 dark:bg-neutral-900 shadow-craft-card group"
            style={{ position: "relative" }}
          >
            {/* Instantaneous LCP Hero Poster via Direct Static Asset */}
            <Image
              src={profile.heroReel.posterUrl || "/assets/hero-poster.webp"}
              alt="Tutor LMS Student Course Player Experience"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className={`object-cover transition-opacity duration-500 ${videoReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            />
            <AnimatePresence mode="wait">
              {loadVideo && (
                <motion.video
                  key={currentVideoSrc}
                  ref={videoRef}
                  src={currentVideoSrc}
                  autoPlay
                  playsInline
                  muted={isMuted}
                  loop
                  preload="metadata"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: videoReady ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover bg-transparent relative z-10"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadedData={() => setVideoReady(true)}
                  onError={() => setVideoReady(false)}
                />
              )}
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
