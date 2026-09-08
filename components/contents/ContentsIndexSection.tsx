import React from "react";
import { ContentsColumn, ContentsItem } from "@/types/portfolio";

interface ContentsIndexProps {
    className?: string;
}

const DEFAULT_COLUMNS: ContentsColumn[] = [
    {
        id: "one",
        numberScript: "One :",
        title: "Tutor LMS 2.0 to 4.0",
        items: [
            {
                id: "curriculum-builder",
                title: "Course & Curriculum Builder",
                subtitle: "Zero-CLS FLIP Reorder Tree",
                subtitlePosition: "above",
                targetId: "case-study",
                dotsCount: 1,
            },
            {
                id: "course-bundle",
                title: "Course Bundle & Analytics",
                subtitle: "Monetization Suite",
                subtitlePosition: "below",
                targetId: "case-study",
                dotsCount: 2,
            },
            {
                id: "quiz-engine",
                title: "Quiz & Assessment Suite",
                subtitle: "Automated Evaluation Engine",
                subtitlePosition: "below",
                targetId: "case-study",
                dotsCount: 3,
            },
            {
                id: "email-system",
                title: "Email Template Customizer",
                subtitle: "Visual Builder Engine",
                subtitlePosition: "below",
                targetId: "case-study",
                dotsCount: 4,
            },
        ],
    },
    {
        id: "two",
        numberScript: "Two :",
        title: "EasyStore E-Commerce",
        items: [
            {
                id: "variant-generator",
                title: "Variant Generator Engine",
                subtitle: "O(1) Matrix Lookup Table",
                subtitlePosition: "above",
                targetId: "experience",
                dotsCount: 1,
            },
            {
                id: "cart-checkout",
                title: "Optimistic Cart & Checkout",
                subtitle: "Sub-16ms Multi-Step Pipeline",
                subtitlePosition: "below",
                targetId: "experience",
                dotsCount: 2,
            },
            {
                id: "inventory-matrix",
                title: "Inventory Matrix & SKU Tree",
                subtitle: "Real-time Stock Synchronization",
                subtitlePosition: "below",
                targetId: "experience",
                dotsCount: 3,
            },
            {
                id: "headless-apis",
                title: "Headless APIs & Webhooks",
                subtitle: "State Machine Synchronization",
                subtitlePosition: "below",
                targetId: "experience",
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
                id: "bio-outro",
                title: "Senior Engineer Dossier",
                subtitle: "Academic Background & History",
                subtitlePosition: "above",
                targetId: "about",
                dotsCount: 1,
            },
            {
                id: "motion-lab-index",
                title: "Interactive Motion Lab",
                subtitle: "Hardware-Accelerated Prototypes",
                subtitlePosition: "below",
                targetId: "motion-lab",
                dotsCount: 2,
            },
            {
                id: "hybrid-gallery",
                title: "12 Architectural Blueprints",
                subtitle: "Production UI Specifications",
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

export const ContentsIndexSection: React.FC<ContentsIndexProps> = ({ className = "" }) => {
    const columns = DEFAULT_COLUMNS;

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
                            Direct jump table across production platforms, interactive lab experiments, and engineering blueprints.
                        </p>
                    </div>
                </div>

                {/* 3-Column Contents Grid matching Behance Design Pattern */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {columns.map((column) => (
                        <div key={column.id} className="space-y-6">
                            {/* Column Header: Handwritten Number + Clean Title */}
                            <div className="flex items-baseline gap-2.5 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
                                <span className="font-script text-3xl sm:text-4xl text-[#ff1744] select-none font-bold">
                                    {column.numberScript}
                                </span>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                    {column.title}
                                </h3>
                            </div>

                            {/* Column Content Items with CSS Native Transitions */}
                            <div className="space-y-2">
                                {column.items.map((item: ContentsItem) => {
                                    const itemId = item.id || item.targetId;
                                    return (
                                        <a
                                            key={itemId}
                                            href={`#${item.targetId}`}
                                            className="group relative block p-3 rounded-xl transition-all duration-200 active:scale-[0.98] border border-transparent hover:border-black/[0.06] dark:hover:border-white/[0.10] hover:bg-white/95 dark:hover:bg-white/[0.08] hover:backdrop-blur-md hover:shadow-sm"
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
