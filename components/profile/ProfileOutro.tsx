import React from "react";
import Image from "next/image";
import { EngineerProfile } from "@/types/portfolio";
import { GithubIcon, LinkedinIcon, EmailIcon, XIcon } from "../icons";
import {
  ExternalLink,
  MapPin,
  Gamepad2,
  Crosshair,
  Zap,
  GraduationCap,
  ArrowUpRight,
  Target,
} from "lucide-react";

interface ProfileOutroProps {
  profile: EngineerProfile;
}

export const ProfileOutro: React.FC<ProfileOutroProps> = ({ profile }) => {
  return (
    <section
      id="profile"
      data-chapter-id="profile"
      className="relative py-24 px-4 sm:px-6 lg:px-12 bg-stone-50 dark:bg-[#070707] text-neutral-900 dark:text-white border-t border-black/6 dark:border-white/8 transition-colors duration-200"
    >
      <div id="contact" className="absolute -top-20 left-0 pointer-events-none" />

      {/* Subtle atmospheric radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#ff1744]/[0.02] dark:bg-[#ff1744]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* 1. Header Identity & Dossier Bar (Priority 1: Who, Where & Status) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/6 dark:border-white/8 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.6)] shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Engineering Dossier &amp; Profile
            </span>
          </div>

          {/* Quick Metadata Pill Strip */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03] dark:bg-white/4 border border-black/[0.05] dark:border-white/6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                Available for Senior Roles
              </span>
            </span>
            <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">&bull;</span>
            <span className="hidden md:inline">Dhaka, Bangladesh</span>
            <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">&bull;</span>
            <span className="hidden md:inline">b-l-i-n-d &bull; Fahim Faisal (Abir)</span>
          </div>
        </div>

        {/* 2. Main Narrative & Credentials Grid (Clean, Non-Boxy Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 Cols): Story, Personal Gaming Vibe, & Direct Contact */}
          <div className="lg:col-span-7 space-y-12">
            {/* Section 2A: Professional Summary (Priority Order: Core Engineering Achievements) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff1744]">
                  Executive Summary
                </h3>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Engineering high-scale UI systems, tactile state machines, and resilient
                architectures.
              </h2>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {profile.bioParagraphs?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>) || (
                  <p>
                    Software Engineer specializing in frontend architecture, distributed systems
                    integration, and fluid motion design systems. Experienced in shipping features
                    to over 120,000 production sites worldwide.
                  </p>
                )}
              </div>
            </div>

            {/* Section 2B: Off-Duty & Video Games (Personal Touch with Artistic Vibe) */}
            <div className="pt-8 border-t border-black/6 dark:border-white/8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Gamepad2 className="w-4 h-4 text-[#ff1744]" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                    Off-Duty // Tactical Gaming &amp; High-Tick Reflexes
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 uppercase tracking-wider">
                  Sub-140ms Reaction
                </span>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                When not architecting software, I spend significant time in competitive video games.
                Currently active in{" "}
                <strong className="text-neutral-900 dark:text-white font-semibold">
                  Call of Duty: Warzone
                </strong>{" "}
                (playing as designated Squad Sniper) and precision pursuit titles like{" "}
                <strong className="text-neutral-900 dark:text-white font-semibold">Chase</strong>.
              </p>

              {/* Clean Artistic Showcase of Games (No Heavy Box Grids) */}
              <div className="space-y-4 pt-1">
                {/* COD Warzone Row - Squad Sniper */}
                <div className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-black/2 dark:hover:bg-white/2 transition-colors duration-150">
                  <div className="w-9 h-9 rounded-lg bg-black/4 dark:bg-white/6 flex items-center justify-center shrink-0 text-[#ff1744] mt-0.5">
                    <Crosshair className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                          Call of Duty: Warzone
                        </h4>
                        <span className="text-xs text-neutral-400 font-mono">
                          &bull; Squad Sniper
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#ff1744] font-medium inline-flex items-center gap-1">
                        <Target className="w-3 h-3 shrink-0" />
                        Overwatch &bull; Long-Range
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      Designated squad sniper across Verdansk &amp; Urzikstan drops: first-shot
                      accuracy, long-range overwatch, bullet velocity prediction, high-tick squad
                      comms, and clutch endgame rotations under pressure.
                    </p>
                  </div>
                </div>

                {/* Chase Row */}
                <div className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-black/2 dark:hover:bg-white/2 transition-colors duration-150">
                  <div className="w-9 h-9 rounded-lg bg-black/4 dark:bg-white/6 flex items-center justify-center shrink-0 text-[#ff1744] mt-0.5">
                    <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        Chase
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400">
                        Kinetic Flow &bull; Pursuit
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      High-speed vehicle pursuit, dynamic trajectory anticipation, and kinetic drift
                      physics at zero latency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Pull-Quote */}
              <blockquote className="border-l-2 border-[#ff1744]/40 pl-4 py-1 text-xs sm:text-sm italic text-neutral-500 dark:text-neutral-400">
                &ldquo;Reading 150-player chaotic lobbies as a sniper and executing high-speed
                pursuits demands the exact same muscle memory as building zero-latency UI:
                split-second state transitions, frame-perfect anticipation, and zero tolerance for
                dropped frames.&rdquo;
              </blockquote>
            </div>

            {/* Section 2C: Direct Action / Contact (Tactile Emil Kowalski Buttons, No Copy Button) */}
            <div className="pt-8 border-t border-black/6 dark:border-white/8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                  Direct Channels
                </span>
                <span className="text-[11px] font-mono text-neutral-400">RESPONSE: &lt;24H</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Send Email Button */}
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm active:scale-[0.97]"
                  style={{
                    transition:
                      "transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease",
                  }}
                >
                  <EmailIcon className="w-4 h-4 shrink-0" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </a>

                {/* LinkedIn Button (https://www.linkedin.com/in/b-l-i-n-d/) */}
                <a
                  href={profile.contact.linkedin || "https://www.linkedin.com/in/b-l-i-n-d/"}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/6 dark:border-white/8 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2 active:scale-[0.97]"
                  style={{ transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                </a>

                {/* GitHub Button */}
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/6 dark:border-white/8 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2 active:scale-[0.97]"
                  style={{ transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                </a>

                {/* X Button */}
                <a
                  href={profile.socialLinks?.twitter || "https://x.com/fahimfaisalffa"}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/4 hover:bg-black/6 dark:hover:bg-white/8 border border-black/6 dark:border-white/8 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-2 active:scale-[0.97]"
                  style={{ transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <XIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Follow on X</span>
                  <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Identity Portrait, Academic Pedigree & Technical Taxonomy */}
          <div className="lg:col-span-5 space-y-10">
            {/* Artistic Sketch Portrait & Compact Identity */}
            <div className="flex items-center gap-5 pb-8 border-b border-black/6 dark:border-white/8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-black/8 dark:border-white/10 shrink-0 group">
                <Image
                  src="/assets/profile-avatar.png"
                  alt={profile.name}
                  fill
                  sizes="96px"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1 right-1 px-1 rounded bg-black/60 text-[9px] font-mono text-white/90">
                  @blind
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[#ff1744]">
                    Software Engineer
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-baseline gap-2">
                  <span>{profile.name}</span>
                  <span className="text-xs text-neutral-400 font-normal font-mono">(Abir)</span>
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  Core SWE &bull; Ollyo / Tutor LMS
                </p>
              </div>
            </div>

            {/* Credentials & Location Rows (Clean Metadata, No Heavy Nested Boxes) */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
                Credentials &amp; Location
              </span>

              {/* Formal Education */}
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <GraduationCap className="w-4 h-4 text-[#ff1744] shrink-0 mt-0.5" />
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {profile.education.degree}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                      {profile.education.period}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {profile.education.institute}
                  </p>
                  <a
                    href={profile.education.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#ff1744] hover:underline inline-flex items-center gap-1 font-mono pt-0.5"
                  >
                    <span>Verified Curriculum (SUST SWE)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-black/4 dark:border-white/6">
                <div className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#ff1744] shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <a
                  href={
                    profile.contact.locationMap || "https://maps.google.com/?q=Dhaka,Bangladesh"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-400 hover:text-[#ff1744] transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Technical Taxonomy & Competencies (Clean Typographic Hierarchy, No Boxy Cards) */}
            <div className="space-y-6 pt-4 border-t border-black/6 dark:border-white/8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                  Technical Taxonomy
                </span>
                <span className="text-[10px] font-mono text-neutral-400">4 CORE PILLARS</span>
              </div>

              <div className="space-y-5">
                {profile.skillCategories?.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-200">
                        {category.name}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-400">0{idx + 1}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-mono bg-black/[0.03] dark:bg-white/4 text-neutral-700 dark:text-neutral-300 border border-black/4 dark:border-white/6 hover:border-[#ff1744]/30 transition-colors"
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
        </div>
      </div>
    </section>
  );
};
