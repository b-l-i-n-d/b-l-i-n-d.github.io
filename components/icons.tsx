"use client";

import { IconSvgProps } from "@/types";
import { motion, type Variants } from "motion/react";
import * as React from "react";
import { cn } from "cn";

/**
 * Motion variants for BlindSkullIcon
 * - Left & right 'X' eyes spin in opposing directions with spring dynamics on hover
 * - Jaw / teeth execute micro-chatter
 * - Ambient eye halos breathe in idle state
 */
const containerVariants: Variants = {
  rest: {
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 24,
    },
  },
  hover: {
    y: -1.5,
    rotate: [-2, 2, -1, 0],
    scale: 1.08,
    transition: {
      y: {
        type: "spring",
        stiffness: 420,
        damping: 18,
      },
      scale: {
        type: "spring",
        stiffness: 420,
        damping: 18,
      },
      rotate: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  },
  tap: {
    scale: 0.92,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 22,
    },
  },
};

const leftEyeVariants: Variants = {
  rest: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 24,
    },
  },
  hover: {
    rotate: 90,
    scale: 1.25,
    transition: {
      type: "spring",
      stiffness: 460,
      damping: 15,
    },
  },
};

const rightEyeVariants: Variants = {
  rest: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 24,
    },
  },
  hover: {
    rotate: -90,
    scale: 1.25,
    transition: {
      type: "spring",
      stiffness: 460,
      damping: 15,
      delay: 0.04,
    },
  },
};

const jawVariants: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: [0, 1.2, 0, 1.2, 0],
    transition: {
      duration: 0.38,
      ease: "easeInOut",
    },
  },
};

/**
 * BlindSkullIcon
 * The definitive brand mark for alias "blind":
 * Minimalist geometric skull with glowing 'X' eyes, counter-spinning springs,
 * subtle cranium float, and micro-chattering teeth.
 */
export const BlindSkullIcon: React.FC<IconSvgProps> = ({ size = 28, width, height, className }) => {
  const finalSize = size || width || height || 28;

  return (
    <motion.svg
      height={finalSize}
      viewBox="0 0 24 24"
      width={finalSize}
      fill="none"
      className={cn("overflow-visible select-none shrink-0", className)}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={containerVariants}
      aria-label="blind alias skull brand mark"
      role="img"
    >
      <defs>
        {/* Signature Electric Crimson Gradient */}
        <linearGradient id="blind-skull-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d6d" />
          <stop offset="50%" stopColor="#ff1744" />
          <stop offset="100%" stopColor="#c50028" />
        </linearGradient>

        {/* Multi-tier Neon Bloom Filter */}
        <filter id="blind-skull-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ff1744" floodOpacity="0.85" />
          <feDropShadow dx="0" dy="0" stdDeviation="4.0" floodColor="#ff1744" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Skull Cranium, Cheekbones & Jaw Contour */}
      <motion.path
        d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-800 dark:text-neutral-100 transition-colors"
        initial={{ pathLength: 0.95 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Inverted Triangle Crimson Nose Cavity */}
      <motion.path
        d="m12.5 17-.5-1-.5 1h1z"
        fill="url(#blind-skull-crimson)"
        stroke="#ff1744"
        strokeWidth="0.8"
        strokeLinejoin="round"
        filter="url(#blind-skull-glow)"
      />

      {/* Teeth Separators with Spring Micro-Chatter */}
      <motion.g variants={jawVariants}>
        <line
          x1="10.5"
          y1="20"
          x2="10.5"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-70 dark:opacity-85"
        />
        <line
          x1="13.5"
          y1="20"
          x2="13.5"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-70 dark:opacity-85"
        />
      </motion.g>

      {/* LEFT 'X' EYE (Rotates +90deg with spring and expands on hover) */}
      <motion.g variants={leftEyeVariants} style={{ transformOrigin: "9px 12px" }}>
        {/* Ambient Breathing Eye Halo */}
        <circle cx="9" cy="12" r="3.2" fill="#ff1744" opacity="0.25" className="animate-pulse" />

        {/* Cross Strokes */}
        <line
          x1="7.2"
          y1="10.2"
          x2="10.8"
          y2="13.8"
          stroke="#ff1744"
          strokeWidth="1.75"
          strokeLinecap="round"
          filter="url(#blind-skull-glow)"
        />
        <line
          x1="10.8"
          y1="10.2"
          x2="7.2"
          y2="13.8"
          stroke="#ff1744"
          strokeWidth="1.75"
          strokeLinecap="round"
          filter="url(#blind-skull-glow)"
        />
      </motion.g>

      {/* RIGHT 'X' EYE (Rotates -90deg with spring and expands on hover) */}
      <motion.g variants={rightEyeVariants} style={{ transformOrigin: "15px 12px" }}>
        {/* Ambient Breathing Eye Halo */}
        <circle cx="15" cy="12" r="3.2" fill="#ff1744" opacity="0.25" className="animate-pulse" />

        {/* Cross Strokes */}
        <line
          x1="13.2"
          y1="10.2"
          x2="16.8"
          y2="13.8"
          stroke="#ff1744"
          strokeWidth="1.75"
          strokeLinecap="round"
          filter="url(#blind-skull-glow)"
        />
        <line
          x1="16.8"
          y1="10.2"
          x2="13.2"
          y2="13.8"
          stroke="#ff1744"
          strokeWidth="1.75"
          strokeLinecap="round"
          filter="url(#blind-skull-glow)"
        />
      </motion.g>
    </motion.svg>
  );
};

export const Logo: React.FC<IconSvgProps> = (props) => {
  return <BlindSkullIcon {...props} />;
};

export const EmailIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
};

export const LinkedinIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      fill="currentColor"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

export const XIcon = TwitterIcon;

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
};

export const ArrowRight = ({ size = 24, width, height, className, ...props }: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("shrink-0", className)}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const MoonFilledIcon = ({ size = 24, width, height, className, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    className={cn("shrink-0", className)}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({ size = 24, width, height, className, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    className={cn("shrink-0", className)}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
