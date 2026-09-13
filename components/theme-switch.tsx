"use client";

import { cn } from "cn";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
  };
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isTransitioningRef = useRef<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme || theme) === "dark";

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return;

    const nextTheme = isDark ? "light" : "dark";

    // Fallback for browsers without View Transitions API or if reduced motion is requested
    if (
      typeof document === "undefined" ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // Get exact coordinates from click event or button center in viewport
    const rect = buttonRef.current?.getBoundingClientRect();
    const x =
      e && typeof e.clientX === "number" && e.clientX > 0
        ? e.clientX
        : rect
          ? rect.left + rect.width / 2
          : window.innerWidth - 32;
    const y =
      e && typeof e.clientY === "number" && e.clientY > 0
        ? e.clientY
        : rect
          ? rect.top + rect.height / 2
          : 32;

    // Radius needed to cover entire viewport from origin
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Set CSS custom properties on :root synchronously so compositor catches them at frame 0
    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-r", `${Math.ceil(endRadius)}px`);

    // Disable CSS color transitions during snapshot capture so final styles are recorded immediately
    document.documentElement.classList.add("is-transitioning");
    isTransitioningRef.current = true;

    try {
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      });

      transition.finished
        .catch((err) => {
          console.debug("View transition skipped or aborted:", err);
        })
        .finally(() => {
          isTransitioningRef.current = false;
          document.documentElement.classList.remove("is-transitioning");
        });
    } catch (err) {
      isTransitioningRef.current = false;
      document.documentElement.classList.remove("is-transitioning");
      setTheme(nextTheme);
    }
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "p-1.5 rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-400 opacity-80",
          className,
          classNames?.base
        )}
        aria-label="Toggle theme"
      >
        <div className="w-[22px] h-[22px] flex items-center justify-center text-neutral-500">
          <SunFilledIcon size={22} />
        </div>
      </div>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative w-8 h-8 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent select-none cursor-pointer",
        className,
        classNames?.base
      )}
      onClick={(e) => toggleTheme(e)}
    >
      <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
        {isDark ? (
          <MoonFilledIcon size={18} className="transition-transform duration-200" />
        ) : (
          <SunFilledIcon size={18} className="transition-transform duration-200" />
        )}
      </div>
    </button>
  );
};
