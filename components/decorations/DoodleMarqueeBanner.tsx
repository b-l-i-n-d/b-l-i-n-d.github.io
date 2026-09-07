"use client";

import React from "react";
import Image from "next/image";

interface DoodleMarqueeBannerProps {
    direction?: "left" | "right";
    speed?: number; // duration in seconds
    className?: string;
}

export const DoodleMarqueeBanner: React.FC<DoodleMarqueeBannerProps> = ({
    direction = "left",
    speed = 40,
    className = "",
}) => {
    return (
        <div
            className={`w-full overflow-hidden bg-[#0c0c0c] border-y border-neutral-800/80 py-2 relative flex select-none pointer-events-none ${className}`}
            aria-hidden="true"
        >
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

            {/* Seamless looping track */}
            <div
                className="flex shrink-0 items-center animate-marquee"
                style={{
                    animationDirection: direction === "right" ? "reverse" : "normal",
                    animationDuration: `${speed}s`,
                }}
            >
                {[...Array(6)].map((_, idx) => (
                    <div key={idx} className="relative h-14 w-[600px] shrink-0 opacity-85">
                        <Image
                            src="/assets/doodle-banner.gif"
                            alt=""
                            fill
                            unoptimized
                            sizes="600px"
                            className="object-cover object-center"
                            priority={idx < 2}
                        />
                    </div>
                ))}
            </div>

            <div
                className="flex shrink-0 items-center animate-marquee"
                aria-hidden="true"
                style={{
                    animationDirection: direction === "right" ? "reverse" : "normal",
                    animationDuration: `${speed}s`,
                }}
            >
                {[...Array(6)].map((_, idx) => (
                    <div key={`dup-${idx}`} className="relative h-14 w-[600px] shrink-0 opacity-85">
                        <Image
                            src="/assets/doodle-banner.gif"
                            alt=""
                            fill
                            unoptimized
                            sizes="600px"
                            className="object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-100%, 0, 0);
                    }
                }
                .animate-marquee {
                    animation: marquee ${speed}s linear infinite;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};
