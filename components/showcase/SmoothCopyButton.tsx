"use client";

import React, { useState, useCallback } from "react";
import { motion } from "motion/react";
import { Copy, Check } from "lucide-react";

interface SmoothCopyButtonProps {
  textToCopy: string;
  idleLabel?: string;
  copiedLabel?: string;
  className?: string;
  iconOnly?: boolean;
  size?: "xs" | "sm" | "md";
}

export const SmoothCopyButton: React.FC<SmoothCopyButtonProps> = ({
  textToCopy,
  idleLabel = "Copy",
  copiedLabel = "Copied",
  className = "",
  iconOnly = false,
  size = "xs",
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (copied) return;

      try {
        if (navigator?.clipboard?.writeText) {
          navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-secure contexts
          const textArea = document.createElement("textarea");
          textArea.value = textToCopy;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1800);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    },
    [textToCopy, copied]
  );

  const iconSize = size === "xs" ? "w-3 h-3" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const containerSize = size === "xs" ? "w-3 h-3" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 30,
      }}
      className={`relative inline-flex items-center justify-center gap-1.5 rounded-lg font-mono select-none transition-colors duration-200 cursor-pointer ${
        copied
          ? "!bg-emerald-500/10 dark:!bg-emerald-500/15 !border-emerald-500/30 !text-emerald-600 dark:!text-emerald-400"
          : ""
      } ${className}`}
      title={copied ? "Copied to clipboard!" : "Copy to clipboard"}
      aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
    >
      {/* Morphing Icon Container - Fixed size to prevent any layout shift */}
      <div className={`relative ${containerSize} shrink-0 flex items-center justify-center`}>
        {/* Copy Icon (scales out with twist on copy) */}
        <motion.div
          animate={{
            scale: copied ? 0 : 1,
            opacity: copied ? 0 : 1,
            rotate: copied ? -45 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <Copy className={iconSize} />
        </motion.div>

        {/* Check Icon (scales in with spring twist on copy) */}
        <motion.div
          animate={{
            scale: copied ? 1 : 0,
            opacity: copied ? 1 : 0,
            rotate: copied ? 0 : 45,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="absolute inset-0 flex items-center justify-center text-emerald-600 dark:text-emerald-400 pointer-events-none"
        >
          <Check className={iconSize} />
        </motion.div>
      </div>

      {/* Zero Layout Shift Text Stack: intrinsic max-width of both strings */}
      {!iconOnly && (
        <span className="grid grid-cols-1 grid-rows-1 items-center justify-items-center">
          {/* Idle Label */}
          <span
            className={`col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-out ${
              copied
                ? "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            {idleLabel}
          </span>

          {/* Copied Label */}
          <span
            className={`col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap font-semibold text-emerald-600 dark:text-emerald-400 transition-all duration-200 ease-out ${
              copied
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-1 scale-95 pointer-events-none"
            }`}
          >
            {copiedLabel}
          </span>
        </span>
      )}
    </motion.button>
  );
};
