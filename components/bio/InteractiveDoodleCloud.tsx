"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Move } from "lucide-react";
import { SKILLS_DOODLE, type SkillDoodle } from "@/data/doodles";

export const InteractiveDoodleCloud: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillDoodle | null>(null);
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-2.5 border-t border-black/6 dark:border-white/8 pt-6">
      {/* Scoped styles ensuring 100% reliable responsive scatter coordinates */}
      <style>{`
        .doodle-pos-doodle-0 { left: 4%; top: 8%; }
        .doodle-pos-doodle-1 { left: 54%; top: 12%; }
        .doodle-pos-doodle-2 { left: 7%; top: 40%; }
        .doodle-pos-doodle-3 { left: 60%; top: 38%; }
        .doodle-pos-doodle-4 { left: 5%; top: 70%; }
        .doodle-pos-doodle-5 { left: 52%; top: 68%; }

        @media (min-width: 640px) {
          .doodle-pos-doodle-0 { left: 4%; top: 8%; }
          .doodle-pos-doodle-1 { left: 64%; top: 10%; }
          .doodle-pos-doodle-2 { left: 34%; top: 38%; }
          .doodle-pos-doodle-3 { left: 78%; top: 40%; }
          .doodle-pos-doodle-4 { left: 6%; top: 68%; }
          .doodle-pos-doodle-5 { left: 68%; top: 68%; }
        }
      `}</style>

      {/* Header with Title and subtle playful hint */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
          Also best at :
        </h4>
        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 opacity-90 select-none">
          <Move className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
          <span>drag to test physics</span>
        </span>
      </div>

      {/* Interactive Sketchpad Canvas */}
      <div
        ref={containerRef}
        className="relative w-full h-52 sm:h-56 rounded-2xl bg-black/2 dark:bg-white/2 border border-black/6 dark:border-white/8 p-4 overflow-hidden group select-none shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:border-black/12 dark:hover:border-white/15"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 0.75px, transparent 0.75px)`,
          backgroundSize: "20px 20px",
          color: "rgba(128, 128, 128, 0.08)",
        }}
      >
        {/* Flowing Dashed Vector Trajectory Waves */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500"
          viewBox="0 0 400 190"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Trajectory 1: Upper Harmonic Wave */}
          <motion.path
            d="M 15 95 Q 90 25, 185 85 T 385 65"
            stroke="#ff1744"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -56 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 16,
            }}
            style={{
              opacity: hoveredSkill ? 0.45 : 0.22,
              filter: hoveredSkill ? "drop-shadow(0 0 4px rgba(255, 23, 68, 0.4))" : "none",
            }}
          />

          {/* Trajectory 2: Lower Kinetic Wave */}
          <motion.path
            d="M 25 155 Q 160 85, 270 145 T 380 115"
            stroke="#ff1744"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 48 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            style={{
              opacity: hoveredSkill ? 0.35 : 0.16,
            }}
          />

          {/* Architectural Crosshair / Registration Targets */}
          <g className="opacity-20 dark:opacity-30">
            <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="1" />
            <circle cx="380" cy="170" r="4" stroke="currentColor" strokeWidth="1" />
            <line x1="372" y1="170" x2="388" y2="170" stroke="currentColor" strokeWidth="1" />
            <line x1="380" y1="162" x2="380" y2="178" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>

        {/* Floating Draggable Doodle Words positioned organically with responsive coordinates */}
        {SKILLS_DOODLE.map((item) => {
          const isHovered = hoveredSkill?.name === item.name;
          const isDragged = draggedSkill === item.name;

          return (
            <motion.div
              key={item.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.35}
              dragSnapToOrigin
              onDragStart={() => setDraggedSkill(item.name)}
              onDragEnd={() => setDraggedSkill(null)}
              onMouseEnter={() => setHoveredSkill(item)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill((prev) => (prev?.name === item.name ? null : item))}
              initial={{ rotate: item.rot }}
              animate={{
                rotate: isHovered || isDragged ? 0 : item.rot,
                scale: isDragged ? 1.25 : isHovered ? 1.15 : 1,
                zIndex: isHovered || isDragged ? 30 : 10,
              }}
              whileTap={{ scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 25,
              }}
              className={`absolute cursor-grab active:cursor-grabbing select-none group/item doodle-pos-${item.id}`}
            >
              <div className="relative inline-flex items-center">
                {/* Hand-Drawn Glow Backdrop on hover */}
                {isHovered && (
                  <motion.div
                    layoutId="doodle-glow"
                    className="absolute -inset-2 rounded-xl bg-[#ff1744]/10 dark:bg-[#ff1744]/15 -z-10 blur-sm pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}

                {/* Main Doodle Script Text with aesthetic varying scale */}
                <span
                  className={`font-script tracking-wide ${item.size} ${item.weight} whitespace-nowrap transition-colors duration-200 ${
                    isHovered || isDragged
                      ? "text-[#ff1744] drop-shadow-[0_2px_8px_rgba(255,23,68,0.35)]"
                      : "text-neutral-700 dark:text-neutral-200 group-hover/item:text-[#ff1744]"
                  }`}
                >
                  {item.name}
                </span>

                {/* Animated Hand-drawn Underline Scribble when active */}
                {isHovered && (
                  <motion.svg
                    className="absolute -bottom-1.5 left-0 w-full h-2 pointer-events-none overflow-visible"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M 0 4 Q 25 7, 50 3 T 100 5"
                      stroke="#ff1744"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    />
                  </motion.svg>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dedicated Single-Line Telemetry Status Line */}
      <div className="min-h-[26px] flex items-center justify-between gap-2 px-1 text-xs font-mono select-none overflow-hidden">
        <AnimatePresence mode="wait">
          {hoveredSkill ? (
            <motion.div
              key={hoveredSkill.name}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 min-w-0 overflow-hidden"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] shrink-0 animate-pulse" />
              <span className="font-bold text-neutral-900 dark:text-white shrink-0 whitespace-nowrap">
                {hoveredSkill.name}:
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 truncate whitespace-nowrap">
                {hoveredSkill.subtitle}
              </span>
            </motion.div>
          ) : (
            <span className="text-neutral-400 dark:text-neutral-600 flex items-center gap-1.5 text-[11px] truncate whitespace-nowrap">
              <span className="shrink-0">6 craft specializations</span>
              <span>&bull;</span>
              <span className="truncate">hover or drag doodles to inspect telemetry</span>
            </span>
          )}
        </AnimatePresence>

        {hoveredSkill && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-[#ff1744]/10 text-[#ff1744] text-[10px] font-bold tracking-wider uppercase shrink-0 whitespace-nowrap"
          >
            {hoveredSkill.badge}
          </motion.span>
        )}
      </div>
    </div>
  );
};
