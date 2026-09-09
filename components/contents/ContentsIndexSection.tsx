"use client";

import React, { useRef } from "react";
import { ContentsColumn, ContentsItem } from "@/types/portfolio";

interface ContentsIndexProps {
    className?: string;
}

const DEFAULT_COLUMNS: ContentsColumn[] = [
    {
        id: "one",
        numberScript: "One :",
        title: "Tutor LMS",
        items: [
            {
                id: "curriculum-builder",
                title: "Course & Curriculum Builder",
                subtitle: "Zero-CLS FLIP Reorder Tree",
                subtitlePosition: "above",
                targetId: "tutor-lms",
                dotsCount: 1,
            },
            {
                id: "core-registry",
                title: "Tutor Core Component Registry",
                subtitle: "Decoupled Hydration & Extension",
                subtitlePosition: "below",
                targetId: "tutor-lms",
                dotsCount: 2,
            },
            {
                id: "motion-coordinator",
                title: "useTutorMotion Coordinator Hook",
                subtitle: "WCAG 2.1 AAA Motion State",
                subtitlePosition: "below",
                targetId: "tutor-lms",
                dotsCount: 3,
            },
            {
                id: "lesson-cockpit",
                title: "Lesson Cockpit & Telemetry",
                subtitle: "Sub-50ms Response · 120K+ Academies",
                subtitlePosition: "below",
                targetId: "tutor-lms",
                dotsCount: 4,
            },
        ],
    },
    {
        id: "two",
        numberScript: "Two :",
        title: "Engineered Systems",
        items: [
            {
                id: "enclave-vault",
                title: "Enclave Zero-Knowledge Vault",
                subtitle: "Argon2id · AES-256-GCM · React Native",
                subtitlePosition: "above",
                targetId: "enclave",
                dotsCount: 1,
            },
            {
                id: "enclave-sync",
                title: "Google Drive 3-Way Sync Engine",
                subtitle: "Hardware Biometrics & Dynamic TOTP",
                subtitlePosition: "below",
                targetId: "enclave",
                dotsCount: 2,
            },
            {
                id: "edtech-platform",
                title: "EdTech Learning Monorepo",
                subtitle: "Automated Quiz Engine & RTK Query",
                subtitlePosition: "below",
                targetId: "edtech",
                dotsCount: 3,
            },
            {
                id: "docapp-suite",
                title: "DocApp Healthcare Suite",
                subtitle: "Multi-Role RBAC & Appointment Engine",
                subtitlePosition: "below",
                targetId: "docapp",
                dotsCount: 4,
            },
        ],
    },
    {
        id: "three",
        numberScript: "Three :",
        title: "Dossier & Motion Specs",
        items: [
            {
                id: "bio-dossier",
                title: "Senior Engineer Dossier",
                subtitle: "Academic Background · SUST B.Sc. SWE",
                subtitlePosition: "above",
                targetId: "about",
                dotsCount: 1,
            },
            {
                id: "motion-lab-index",
                title: "Interactive Motion Lab",
                subtitle: "Hardware-Accelerated Physics Prototypes",
                subtitlePosition: "below",
                targetId: "motion-lab",
                dotsCount: 2,
            },
            {
                id: "hybrid-gallery",
                title: "12 Architectural Blueprints",
                subtitle: "Production UI & Systems Specifications",
                subtitlePosition: "below",
                targetId: "gallery",
                dotsCount: 3,
            },
            {
                id: "contact-direct",
                title: "Direct Channels & Resume",
                subtitle: "GitHub, LinkedIn, Direct Email",
                subtitlePosition: "below",
                targetId: "profile",
                dotsCount: 4,
            },
        ],
    },
];

const contentsAnchorCss = `
#contents .contents-grid { position: relative; }
#contents .cc-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transform: scale(0.98);
  transition:
    opacity 0.18s ease,
    top 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    left 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}
.dark #contents .cc-indicator {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.10);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
#contents .contents-grid[data-hover="true"] .cc-indicator {
  opacity: 1;
  transform: scale(1);
  animation: contentsIndexPop 0.22s ease;
}
@keyframes contentsIndexPop {
  0%   { transform: scale(0.985); }
  40%  { transform: scale(1.008); }
  100% { transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  #contents .cc-indicator {
    transition: none;
    animation: none;
  }
}
`;

export const ContentsIndexSection: React.FC<ContentsIndexProps> = ({ className = "" }) => {
    const columns = DEFAULT_COLUMNS;
    const gridRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

    const placeIndicator = (target: HTMLAnchorElement) => {
        const grid = gridRef.current;
        const indicator = indicatorRef.current;
        if (!grid || !indicator) return;

        const gridRect = grid.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const firstPlacement = grid.dataset.placed !== "true";
        if (firstPlacement) {
            indicator.style.transition = "opacity 0.18s ease";
        }

        indicator.style.top = `${targetRect.top - gridRect.top}px`;
        indicator.style.left = `${targetRect.left - gridRect.left}px`;
        indicator.style.width = `${targetRect.width}px`;
        indicator.style.height = `${targetRect.height}px`;

        grid.dataset.placed = "true";
        grid.dataset.hover = "true";

        if (firstPlacement) {
            requestAnimationFrame(() => {
                indicator.style.transition = "";
            });
        }
    };

    const clearIndicator = () => {
        const grid = gridRef.current;
        if (!grid) return;
        grid.dataset.hover = "false";
    };

    const handlePointerEnter = (event: React.PointerEvent<HTMLAnchorElement>) => {
        placeIndicator(event.currentTarget);
    };

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        const element =
            document.getElementById(targetId) ||
            document.querySelector(`[data-chapter-id="${targetId}"]`) ||
            document.querySelector(`[data-project-id="${targetId}"]`);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            if (typeof window !== "undefined" && window.history?.pushState) {
                window.history.pushState(null, "", `#${targetId}`);
            }
        }
    };

    const renderDots = (count: number) => {
        const dotBase =
            "block w-1.5 h-1.5 rounded-full transition-all duration-200 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-[#ff1744] group-hover:shadow-[0_0_8px_rgba(255,23,68,0.8)] group-hover:scale-125";

        if (count === 1) {
            return (
                <div className="pt-2 shrink-0">
                    <span className={dotBase} />
                </div>
            );
        }

        if (count === 2) {
            return (
                <div className="pt-2 flex flex-col gap-1 shrink-0">
                    <span className={dotBase} />
                    <span className={dotBase} />
                </div>
            );
        }

        if (count === 3) {
            return (
                <div className="pt-2 grid grid-cols-2 gap-1 w-3.5 shrink-0">
                    <span className={dotBase} />
                    <span className={dotBase} />
                    <span className={dotBase} />
                </div>
            );
        }

        return (
            <div className="pt-2 grid grid-cols-2 gap-1 w-3.5 shrink-0">
                <span className={dotBase} />
                <span className={dotBase} />
                <span className={dotBase} />
                <span className={dotBase} />
            </div>
        );
    };

    return (
        <section
            id="contents"
            data-chapter-id="contents"
            className={`relative py-24 px-6 sm:px-10 lg:px-16 bg-stone-50 dark:bg-[#0c0c0c] text-neutral-900 dark:text-white border-t border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-colors duration-200 ${className}`}
        >
            <style dangerouslySetInnerHTML={{ __html: contentsAnchorCss }} />

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Header (Clean, quiet, informative) */}
                <div className="space-y-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-8">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                            Index Directory
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Contents & Navigation
                        </h2>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
                            Direct jump table across flagship enterprise platforms, engineered mobile systems, and architectural blueprints.
                        </p>
                    </div>
                </div>

                {/* 3-Column Contents Grid with a single grid-wide sliding Hover Indicator */}
                <div
                    ref={gridRef}
                    onPointerLeave={clearIndicator}
                    className="contents-grid relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
                >
                    <div ref={indicatorRef} className="cc-indicator" aria-hidden="true" />

                    {columns.map((column) => (
                        <div key={column.id} className="space-y-6 min-w-0">
                            {/* Column Header: Handwritten Number + Clean Title */}
                            <div className="flex items-baseline gap-2.5 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
                                <span className="font-script text-3xl sm:text-4xl text-[#ff1744] select-none font-bold">
                                    {column.numberScript}
                                </span>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                    {column.title}
                                </h3>
                            </div>

                            {/* Column Content Items, each an anchor target for the shared indicator */}
                            <div className="space-y-2">
                                {column.items.map((item: ContentsItem) => {
                                    const itemId = item.id || item.targetId;
                                    return (
                                        <a
                                            key={itemId}
                                            href={`#${item.targetId}`}
                                            onClick={(e) => handleItemClick(e, item.targetId)}
                                            onPointerEnter={handlePointerEnter}
                                            className="group relative block p-3 rounded-xl active:scale-[0.98] transition-transform duration-150"
                                        >
                                            <div className="flex items-start gap-3">
                                                {/* Dots cluster matching Behance token pattern */}
                                                {renderDots(item.dotsCount || 1)}

                                                {/* Content text */}
                                                <div className="flex-1 min-w-0">
                                                    {item.subtitlePosition === "above" && (
                                                        <span className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-0.5 group-hover:text-[#ff1744] transition-colors">
                                                            {item.subtitle}
                                                        </span>
                                                    )}

                                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ff1744] transition-colors leading-snug">
                                                        {item.title}
                                                    </h4>

                                                    {item.subtitlePosition === "below" && (
                                                        <span className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-0.5 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                                                            {item.subtitle}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
