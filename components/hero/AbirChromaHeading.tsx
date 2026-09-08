"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface NameEntry {
    name: string;
    lang: string;
    meaning: string;
    flag: string;
}

const NAME_CYCLES: NameEntry[] = [
    { name: "Abir", lang: "English", meaning: "Radiant Color", flag: "✨" },
    { name: "আবির", lang: "Bengali", meaning: "Festive Color & Joy", flag: "🇧🇩" },
    { name: "عَبِير", lang: "Arabic", meaning: "Sweet Fragrance", flag: "🇸🇦" },
    { name: "阿比尔", lang: "Chinese", meaning: "Radiant Hues & Fragrance", flag: "🇨🇳" },
    { name: "Abir", lang: "Spanish", meaning: "Esplendor Radiante", flag: "🇪🇸" },
    { name: "अबीर", lang: "Hindi", meaning: "Sacred Color Powder", flag: "🇮🇳" },
    { name: "アビール", lang: "Japanese", meaning: "Vibrance & Hues", flag: "🇯🇵" },
];

interface AbirChromaHeadingProps {
    subheading?: string;
    className?: string;
}

/**
 * Splits text into grapheme clusters so multilingual scripts
 * (Bengali diacritics, Arabic ligatures, Japanese Katakana) don't fracture.
 */
function getGraphemes(text: string, lang = "en"): string[] {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        try {
            const segmenter = new Intl.Segmenter(lang, { granularity: "grapheme" });
            return Array.from(segmenter.segment(text)).map((s) => s.segment);
        } catch {
            return text.split("");
        }
    }
    return text.split("");
}

export const AbirChromaHeading: React.FC<AbirChromaHeadingProps> = ({
    subheading = "Fahim Faisal",
    className,
}) => {
    const [index, setIndex] = useState<number>(0);

    const current = NAME_CYCLES[index];

    // Cycle through names more slowly (every 4.5 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % NAME_CYCLES.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const graphemes = useMemo(() => {
        return getGraphemes(current.name);
    }, [current.name]);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % NAME_CYCLES.length);
    };

    return (
        <div
            className={clsx(
                "relative flex flex-col items-center justify-center text-center select-none w-full max-w-4xl mx-auto space-y-4 px-2",
                className
            )}
        >
            {/* 
              * Main Hero Heading: Letter-by-Letter Staggered Animation from Bottom to Top
              * Slow, smooth vertical flow with pure monochrome gradient clipped strictly to font glyphs
              */}
            <div
                onClick={handleNext}
                className="relative cursor-pointer group py-2 sm:py-3 max-w-full overflow-visible"
                title="Click to cycle name"
            >
                <h1 className="min-h-[1.35em] flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.2] sm:leading-[1.15] overflow-visible px-2">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={current.name}
                            className="inline-flex items-center justify-center flex-wrap overflow-visible py-2"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {graphemes.map((char, charIdx) => (
                                <span
                                    key={`${current.name}-${charIdx}`}
                                    className="inline-block overflow-visible py-2 sm:py-3 px-0.5"
                                >
                                    <motion.span
                                        className="inline-block chroma-text leading-[1.2] py-1.5 sm:py-2"
                                        variants={{
                                            // Enters from bottom
                                            initial: {
                                                y: "120%",
                                                opacity: 0,
                                                scale: 0.94,
                                            },
                                            // Lands at baseline
                                            animate: {
                                                y: "0%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    delay: charIdx * 0.08,
                                                    duration: 0.75,
                                                    ease: [0.16, 1, 0.3, 1], // Smooth Apple-style decelerate
                                                },
                                            },
                                            // Exits to top
                                            exit: {
                                                y: "-120%",
                                                opacity: 0,
                                                scale: 0.94,
                                                transition: {
                                                    delay: charIdx * 0.05,
                                                    duration: 0.45,
                                                    ease: [0.7, 0, 0.84, 0], // Accelerate upward
                                                },
                                            },
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
                </h1>
            </div>

            {/* Subtle Metadata Pill: Flag + Language + Meaning (Pure monochrome) */}
            <div className="flex items-center justify-center min-h-[2rem]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.lang}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono shadow-sm"
                    >
                        <span className="shrink-0">{current.flag}</span>
                        <span className="font-semibold text-neutral-900 dark:text-neutral-200 shrink-0">
                            {current.lang}
                        </span>
                        <span className="text-neutral-300 dark:text-neutral-700 shrink-0">&bull;</span>
                        <span className="text-neutral-700 dark:text-neutral-300 font-sans font-medium">
                            &ldquo;{current.meaning}&rdquo;
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Quiet Subtitle: Fahim Faisal & Scope */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 pt-0.5 px-2">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 shrink-0">
                    {subheading}
                </span>
                <span className="text-neutral-300 dark:text-neutral-700 shrink-0">&bull;</span>
                <span className="shrink-0">Software Engineer</span>
                <span className="text-neutral-300 dark:text-neutral-700 shrink-0">&bull;</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-bold shrink-0">@blind</span>
            </div>
        </div>
    );
};
