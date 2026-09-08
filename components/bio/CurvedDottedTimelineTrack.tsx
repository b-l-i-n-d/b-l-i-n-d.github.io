"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface CurvedDottedTimelineTrackProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    itemRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

export const CurvedDottedTimelineTrack: React.FC<CurvedDottedTimelineTrackProps> = ({
    containerRef,
    itemRefs,
}) => {
    // Default initial path for instant SSR / pre-measurement
    const [pathD, setPathD] = useState<string>(
        "M 10 13 C 18 42, 16 70, 10 99 C 2 128, 4 156, 10 184 C 18 214, 16 244, 10 273 C 6 288, 10 298, 10 310"
    );
    const [svgHeight, setSvgHeight] = useState<number>(330);

    const updatePath = useCallback(() => {
        if (!containerRef.current || !itemRefs.current) return;
        const container = containerRef.current;
        const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

        if (items.length < 2) return;

        const containerRect = container.getBoundingClientRect();
        setSvgHeight(Math.max(containerRect.height, 320));

        // Compute exact center coordinates (x, y) of each milestone dot
        const dots = items.map((item) => {
            const dotEl = item.querySelector<HTMLElement>("[data-timeline-dot]");
            if (dotEl) {
                const dotRect = dotEl.getBoundingClientRect();
                return {
                    x: Math.round(dotRect.left - containerRect.left + dotRect.width / 2),
                    y: Math.round(dotRect.top - containerRect.top + dotRect.height / 2),
                };
            }
            const itemRect = item.getBoundingClientRect();
            return {
                x: 10,
                y: Math.round(itemRect.top - containerRect.top + 12),
            };
        });

        // Generate fluid S-curves passing directly through each dot
        const anchorX = dots[0].x || 10;
        let d = `M ${anchorX} ${dots[0].y}`;

        for (let i = 0; i < dots.length - 1; i++) {
            const p0 = dots[i];
            const p1 = dots[i + 1];
            const dy = p1.y - p0.y;

            // Alternate sway direction: smooth, subtle serpentine curve
            const dir = i % 2 === 0 ? 1 : -1;
            const sway = 8 * dir;

            const cp1x = anchorX + sway;
            const cp1y = p0.y + dy * 0.32;
            const cp2x = anchorX + sway * 0.6;
            const cp2y = p0.y + dy * 0.72;

            d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${anchorX} ${p1.y}`;
        }

        // Elegant trailing tail fading out beneath the SUST education node
        const last = dots[dots.length - 1];
        d += ` C ${anchorX - 4} ${last.y + 12}, ${anchorX} ${last.y + 24}, ${anchorX} ${last.y + 36}`;

        setPathD(d);
    }, [containerRef, itemRefs]);

    useEffect(() => {
        // Defer measurement to next animation frame to prevent forced reflow during hydration
        const rafId = requestAnimationFrame(() => {
            updatePath();
        });

        const observer = new ResizeObserver(() => {
            updatePath();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        window.addEventListener("resize", updatePath);
        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
            window.removeEventListener("resize", updatePath);
        };
    }, [containerRef, itemRefs, updatePath]);

    return (
        <svg
            className="absolute left-0 top-0 w-8 pointer-events-none overflow-visible z-0"
            style={{ height: svgHeight }}
            viewBox={`0 0 32 ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* Flow gradient: vibrant crimson at top (SWE 2026), soft rose in middle, muted at education */}
                <linearGradient id="timeline-flow-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff1744" stopOpacity="0.95" />
                    <stop offset="35%" stopColor="#ff1744" stopOpacity="0.75" />
                    <stop offset="70%" stopColor="#f43f5e" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.25" />
                </linearGradient>
            </defs>

            {/* Subtle luminous ambient aura behind the dashed track */}
            <motion.path
                d={pathD}
                stroke="#ff1744"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
                className="opacity-20 blur-[1.5px]"
                animate={{ strokeDashoffset: [0, 16] }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Crisp Handcrafted "- - -" Dotted Curved Animated Line */}
            <motion.path
                d={pathD}
                stroke="url(#timeline-flow-gradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, 16] }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </svg>
    );
};
