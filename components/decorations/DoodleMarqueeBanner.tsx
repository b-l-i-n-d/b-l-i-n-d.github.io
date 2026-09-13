import React from "react";

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
  // 6 tiles per track (even count guarantees perpetual Bright-with-Bright and Dark-with-Dark pairing)
  // 6 tiles * 568px step = 3,408px per track (6,816px dual-track), spanning any ultrawide viewport.
  // Each 588px image extends by 10px on both sides of the 568px step, creating an exact 20px overlap.
  // Alternating scaleX(-1) mirrors every odd tile so:
  // - Junction 0-1: Dark side meets Dark side
  // - Junction 1-2: Bright side meets Bright side
  // - Track Boundary (Tile 5 -> next Tile 0): Bright side meets Bright side
  // 12px feather mask cross-fades strokes seamlessly across the 20px overlap.
  const tileCount = 6;
  const tileStepWidth = 568;
  const imageWidth = 588;
  const imageOffset = 10;

  return (
    <div
      className={`w-full h-20 overflow-hidden bg-stone-100 dark:bg-[#0c0c0c] border-y border-black/6 dark:border-white/8 relative flex items-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft ambient edge gradient masks for banner container */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-stone-100 dark:from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-stone-100 dark:from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

      {/* Seamless looping track: First Copy */}
      <div
        className="flex shrink-0 items-center animate-marquee"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: `${speed}s`,
          transform: "translate3d(0,0,0)",
          willChange: "transform",
        }}
      >
        {[...Array(tileCount)].map((_, idx) => {
          const isFlipped = idx % 2 === 1;
          return (
            <div
              key={idx}
              className="relative h-14 shrink-0 opacity-90 dark:opacity-95 overflow-visible"
              style={{
                width: `${tileStepWidth}px`,
                height: "56px",
                flexShrink: 0,
                transform: isFlipped ? "scaleX(-1)" : "none",
                transformOrigin: "center center",
              }}
            >
              <img
                src="/assets/doodle-ribbon-transparent.png"
                alt=""
                width={imageWidth}
                height={56}
                loading="lazy"
                decoding="async"
                className="absolute top-0 h-14 max-w-none object-fill filter dark:brightness-110 contrast-125 pointer-events-none select-none"
                style={{
                  left: `-${imageOffset}px`,
                  width: `${imageWidth}px`,
                  height: "56px",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
                }}
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
          transform: "translate3d(0,0,0)",
          willChange: "transform",
        }}
      >
        {[...Array(tileCount)].map((_, idx) => {
          const isFlipped = idx % 2 === 1;
          return (
            <div
              key={`dup-${idx}`}
              className="relative h-14 shrink-0 opacity-90 dark:opacity-95 overflow-visible"
              style={{
                width: `${tileStepWidth}px`,
                height: "56px",
                flexShrink: 0,
                transform: isFlipped ? "scaleX(-1)" : "none",
                transformOrigin: "center center",
              }}
            >
              <img
                src="/assets/doodle-ribbon-transparent.png"
                alt=""
                width={imageWidth}
                height={56}
                loading="lazy"
                decoding="async"
                className="absolute top-0 h-14 max-w-none object-fill filter dark:brightness-110 contrast-125 pointer-events-none select-none"
                style={{
                  left: `-${imageOffset}px`,
                  width: `${imageWidth}px`,
                  height: "56px",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
