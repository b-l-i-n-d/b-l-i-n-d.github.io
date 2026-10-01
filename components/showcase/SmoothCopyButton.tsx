"use client";

import React, { useState, useCallback } from "react";
import { m } from "motion/react";
import { Copy, Check } from "lucide-react";

interface SmoothCopyButtonProps {
  textToCopy: string;
  idleLabel?: string;
  copiedLabel?: string;
  className?: string;
  iconOnly?: boolean;
  size?: "xs" | "sm" | "md";
}

const BUTTON_SIZES = {
  xs: "w-3 h-3",
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
} as const;

function copyTextToClipboard(text: string): boolean {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      return true;
    }
    if (typeof document !== "undefined") {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textArea);
      return success;
    }
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
  return false;
}

function useClipboardCopy(textToCopy: string, resetDelayMs = 1800) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (copied) return;

      const success = copyTextToClipboard(textToCopy);
      if (success) {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, resetDelayMs);
      }
    },
    [textToCopy, copied, resetDelayMs]
  );

  return { copied, handleCopy };
}

const CopyButtonMorphIcon: React.FC<{ copied: boolean; sizeClass: string }> = ({
  copied,
  sizeClass,
}) => (
  <div className={`relative ${sizeClass} shrink-0 flex items-center justify-center`}>
    <m.div
      animate={{
        scale: copied ? 0 : 1,
        opacity: copied ? 0 : 1,
        rotate: copied ? -45 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <Copy className={sizeClass} />
    </m.div>

    <m.div
      animate={{
        scale: copied ? 1 : 0,
        opacity: copied ? 1 : 0,
        rotate: copied ? 0 : 45,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="absolute inset-0 flex items-center justify-center text-emerald-600 dark:text-emerald-400 pointer-events-none"
    >
      <Check className={sizeClass} />
    </m.div>
  </div>
);

const CopyButtonTextStack: React.FC<{
  copied: boolean;
  idleLabel: string;
  copiedLabel: string;
}> = ({ copied, idleLabel, copiedLabel }) => (
  <span className="hidden sm:grid grid-cols-1 grid-rows-1 items-center justify-items-center">
    <span
      className={`col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap transition-[opacity,transform] duration-200 ease-out ${
        copied
          ? "opacity-0 -translate-y-1 scale-95 pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {idleLabel}
    </span>
    <span
      className={`col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap font-semibold text-emerald-600 dark:text-emerald-400 transition-[opacity,transform] duration-200 ease-out ${
        copied
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-1 scale-95 pointer-events-none"
      }`}
    >
      {copiedLabel}
    </span>
  </span>
);

export const SmoothCopyButton: React.FC<SmoothCopyButtonProps> = ({
  textToCopy,
  idleLabel = "Copy",
  copiedLabel = "Copied",
  className = "",
  iconOnly = false,
  size = "xs",
}) => {
  const { copied, handleCopy } = useClipboardCopy(textToCopy);
  const sizeClass = BUTTON_SIZES[size];

  return (
    <m.button
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
      title={copied ? "Copied to clipboard!" : `${idleLabel} to clipboard`}
      aria-label={copied ? "Copied to clipboard" : `${idleLabel} to clipboard`}
    >
      <CopyButtonMorphIcon copied={copied} sizeClass={sizeClass} />
      {!iconOnly && (
        <CopyButtonTextStack copied={copied} idleLabel={idleLabel} copiedLabel={copiedLabel} />
      )}
    </m.button>
  );
};
