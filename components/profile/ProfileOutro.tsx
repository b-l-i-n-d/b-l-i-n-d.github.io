"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { EngineerProfile } from "@/types/portfolio";
import { GithubIcon, LinkedinIcon, EmailIcon, XIcon } from "../icons";
import {
  ExternalLink,
  MapPin,
  Gamepad2,
  GraduationCap,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";

interface ProfileOutroProps {
  profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(profile.contact.email || "fahim.faisal.abir@gmail.com");
    } catch {
      // Fallback if clipboard API is restricted
    }

    // Always clear existing timer on repetitive clicks to prevent desync
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setCopied(true);
    setPulseKey((k) => k + 1);

    // Reset after 2.2s of inactivity
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="profile"
      data-chapter-id="profile"
      className="relative py-20 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#080808] text-neutral-900 dark:text-white border-t border-black/6 dark:border-white/8 transition-colors duration-200 overflow-hidden"
    >
      <div id="contact" className="absolute -top-20 left-0 pointer-events-none" />

      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        {/* Top Chapter Dispatch */}
        <div className="flex items-center justify-between border-b border-black/8 dark:border-white/8 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Chapter 07 // Final Dispatch
            </span>
          </div>
          <span className="font-script text-base sm:text-lg text-accent -rotate-2 select-none">
            let&apos;s build together &bull; 2026
          </span>
        </div>

        {/* Main Content Grid: Ultra-Lean, Zero Text Bloat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 Cols): Big Punchy Headline & Direct Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Senior Roles &bull; Worldwide
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                Let&apos;s engineer something{" "}
                <span className="font-script text-accent font-normal italic tracking-normal text-4xl sm:text-5xl lg:text-6xl block sm:inline">
                  exceptional.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                Specialized in fluid design systems, zero-latency state models, and scalable
                frontend architectures.
              </p>
            </div>

            {/* Tactile Quick Contact Hub */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary Action Button */}
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm active:scale-[0.98]"
                >
                  <EmailIcon className="w-4 h-4" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>

                {/* Tactile Non-Shrinking Copy Email Button with Spam-Proof Spring Transitions */}
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  className={`group relative px-4 py-3 rounded-full text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-2.5 transition-colors duration-200 border cursor-pointer select-none ${
                    copied
                      ? "bg-emerald-500/[0.08] dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                      : "bg-black/4 dark:bg-white/5 hover:bg-black/7 dark:hover:bg-white/9 border-black/8 dark:border-white/10"
                  }`}
                  title="Click to copy email address"
                >
                  {/* Morphing Icon: Interruptible continuous spring transitions (no mode='wait' stutter) */}
                  <div className="relative w-4 h-4 shrink-0">
                    <motion.div
                      animate={{
                        scale: copied ? 0 : 1,
                        opacity: copied ? 0 : 0.6,
                        rotate: copied ? -45 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </motion.div>

                    <motion.div
                      key={`check-${pulseKey}`}
                      initial={pulseKey > 1 ? { scale: 1.25 } : false}
                      animate={{
                        scale: copied ? 1 : 0,
                        opacity: copied ? 1 : 0,
                        rotate: copied ? 0 : 45,
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                    </motion.div>
                  </div>

                  {/* Fixed Email Text - Permanently preserved so button NEVER shrinks */}
                  <span className="tracking-tight">
                    {profile.contact.email || "fahim.faisal.abir@gmail.com"}
                  </span>

                  {/* Animated Spring Status Tag (Persistent key to prevent flickering on repetitive clicks) */}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        key="copied-pill"
                        initial={{ opacity: 0, scale: 0.85, width: 0, x: -4 }}
                        animate={{ opacity: 1, scale: 1, width: "auto", x: 0 }}
                        exit={{ opacity: 0, scale: 0.85, width: 0, x: -4 }}
                        transition={{ type: "spring", stiffness: 480, damping: 26 }}
                        className="overflow-hidden inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-emerald-500/20 dark:bg-emerald-500/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 whitespace-nowrap"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Social Channels Strip */}
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-2">
                <a
                  href={profile.contact.linkedin || "https://linkedin.com/in/fahim-faisal-abir"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <span>&bull;</span>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <span>&bull;</span>
                <a
                  href={profile.socialLinks?.twitter || "https://x.com/fahim_faisal_ab"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>

            {/* Playful Off-Duty Reflexes Micro-Strip (1 Scannable Line, Zero Text Bloat) */}
            <div className="pt-4 border-t border-black/6 dark:border-white/8 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="w-7 h-7 rounded-lg bg-black/4 dark:bg-white/6 flex items-center justify-center shrink-0 text-accent">
                <Gamepad2 className="w-3.5 h-3.5" />
              </div>
              <p className="leading-snug">
                <strong className="text-neutral-800 dark:text-neutral-200">Off-Duty:</strong> Squad
                Sniper in Warzone &bull; Kinetic drift in Chase &bull; Sub-140ms reflex junkie.
              </p>
            </div>
          </div>

          {/* Right Column (5 Cols): Clean Visual Dossier */}
          <div className="lg:col-span-5 flex flex-col items-start sm:items-center lg:items-end">
            <div className="w-full max-w-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-black/10 dark:border-white/10 shrink-0 group">
                  <Image
                    src={profile.avatar || "/assets/profile-avatar.png"}
                    alt="Fahim Faisal (Abir)"
                    fill
                    sizes="80px"
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <span className="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-[9px] font-mono text-white/90">
                    @blind
                  </span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-script text-accent text-base -rotate-2 block select-none">
                    designer &bull; coder &bull; sniper
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    Fahim Faisal{" "}
                    <span className="text-sm font-normal text-neutral-400">(Abir)</span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Software Engineer &bull; Ollyo
                  </p>
                </div>
              </div>

              {/* Quick Spec Matrix (Compact & Typographic) */}
              <div className="space-y-2.5 pt-3 border-t border-black/6 dark:border-white/8 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono">Pedigree</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    SUST SWE (2018–2023)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono">
                    Core Focus
                  </span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Fluid UI &bull; State Models
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono">Scale</span>
                  <span className="font-semibold text-accent">120K+ Production Academies</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono">Location</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Dhaka, BD (UTC+6)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
