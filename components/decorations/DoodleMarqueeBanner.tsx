"use client";

import React from "react";
import Image from "next/image";

interface DoodleMarqueeBannerProps {
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export const DoodleMarqueeBanner: React.FC<DoodleMarqueeBannerProps> = ({
    direction = "left",
    speed = 40,
    className = "",
}) => {
    // Array with an even count (8 segments) so mirrored tiles ping-pong seamlessly:
    // Segment 0 (even): [dark -> bright]
    // Segment 1 (odd):  [bright -> dark] (flipped)
    // Segment 2 (even): [dark -> bright]
    // Segment 3 (odd):  [bright -> dark] (flipped)
    // Segment 4 (even): [dark -> bright]
    // Segment 5 (odd):  [bright -> dark] (flipped)
    // Segment 6 (even): [dark -> bright]
    // Segment 7 (odd):  [bright -> dark] (flipped, ends at dark, connecting to [dark -> bright])
    const tileCount = 8;

    return (
        <div
            className={`w-full h-20 overflow-hidden bg-stone-100 dark:bg-[#0c0c0c] border-y border-black/[0.06] dark:border-white/[0.08] relative flex items-center select-none pointer-events-none transition-colors duration-200 ${className}`}
            aria-hidden="true"
        >
            {/* Soft ambient edge gradient masks */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-stone-100 dark:from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-stone-100 dark:from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

            {/* Seamless looping track: First Copy */}
            <div
                className="flex shrink-0 items-center animate-marquee"
                style={{
                    animationDirection: direction === "right" ? "reverse" : "normal",
                    animationDuration: `${speed}s`,
                }}
            >
                {[...Array(tileCount)].map((_, idx) => {
                    const isFlipped = idx % 2 === 1;
                    return (
                        <div
                            key={idx}
                            className="relative h-14 w-[600px] shrink-0 opacity-90 dark:opacity-95 flex items-center justify-center"
                            style={{
                                width: "600px",
                                height: "56px",
                                flexShrink: 0,
                                transform: isFlipped ? "scaleX(-1)" : "none",
                            }}
                        >
                            <Image
                                src="/assets/doodle-ribbon-transparent.png"
                                alt="Doodle ribbon marquee"
                                width={600}
                                height={56}
                                className="h-14 w-[600px] object-contain object-center filter dark:brightness-110 contrast-125"
                                priority={idx < 2}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Seamless looping track: Duplicate Copy for Continuous Loop */}
            <div
                className="flex shrink-0 items-center animate-marquee"
                aria-hidden="true"
                style={{
                    animationDirection: direction === "right" ? "reverse" : "normal",
                    animationDuration: `${speed}s`,
                }}
            >
                {[...Array(tileCount)].map((_, idx) => {
                    const isFlipped = idx % 2 === 1;
                    return (
                        <div
                            key={`dup-${idx}`}
                            className="relative h-14 w-[600px] shrink-0 opacity-90 dark:opacity-95 flex items-center justify-center"
                            style={{
                                width: "600px",
                                height: "56px",
                                flexShrink: 0,
                                transform: isFlipped ? "scaleX(-1)" : "none",
                            }}
                        >
                            <Image
                                src="/assets/doodle-ribbon-transparent.png"
                                alt=""
                                width={600}
                                height={56}
                                className="h-14 w-[600px] object-contain object-center filter dark:brightness-110 contrast-125"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
