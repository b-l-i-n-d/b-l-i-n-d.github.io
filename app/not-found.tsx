import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Layers, ShieldCheck, Cpu } from "lucide-react";
import { BlindSkullIcon } from "@/components/icons";
import { DoodleMarqueeBanner } from "@/components/decorations/DoodleMarqueeBanner";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-between bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <div className="grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl w-full text-center space-y-8">
          {/* Brand Skull & Glitch 404 Badge */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative p-4 rounded-3xl bg-neutral-200/60 dark:bg-neutral-900/60 border border-black/8 dark:border-white/10 shadow-craft-card">
              <BlindSkullIcon size={48} className="text-neutral-800 dark:text-white" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>404 // ROUTE_NOT_FOUND</span>
            </div>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Architectural Blueprint Not Located
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
              The case study, interactive flow, or system specification you requested does not exist
              or has been relocated.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm shadow-craft-card hover:shadow-craft-elevated active:scale-[0.98] transition-all duration-150"
            >
              <ArrowLeft className="w-4 h-4 text-accent" />
              <span>Return to Portfolio Overview</span>
            </Link>
          </div>

          {/* Quick Jumps to Verified Case Studies */}
          <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block text-center">
              Available Production Case Studies:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Link
                href="/case-study/tutor-lms"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 hover:border-accent/40 text-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-rose-500" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent">
                    Tutor LMS 4.0
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">120K+ Scale</span>
              </Link>

              <Link
                href="/case-study/enclave"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 hover:border-accent/40 text-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent">
                    Enclave Vault
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">Zero-Knowledge</span>
              </Link>

              <Link
                href="/case-study/edtech"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 hover:border-accent/40 text-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-sky-500" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent">
                    EdTech Monorepo
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">RTK Query</span>
              </Link>

              <Link
                href="/case-study/docapp"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 hover:border-accent/40 text-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent">
                    DocApp Suite
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">Clinical State</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Ribbon Marquee at Footer */}
      <div className="w-full">
        <DoodleMarqueeBanner direction="left" speed={30} />
      </div>
    </div>
  );
}
