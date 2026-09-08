"use client";

import clsx from "clsx";
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

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
    className,
    classNames,
}) => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const isTransitioningRef = useRef<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = (resolvedTheme || theme) === "dark";

    const toggleTheme = () => {
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

        // Get exact center of the button element
        const rect = buttonRef.current?.getBoundingClientRect();
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 32;
        const y = rect ? rect.top + rect.height / 2 : 32;

        // Radius needed to reach the furthest corner of the screen from the button center
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

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

            transition.ready
                .then(() => {
                    const animation = document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0px at ${x}px ${y}px)`,
                                `circle(${endRadius}px at ${x}px ${y}px)`,
                            ],
                        },
                        {
                            duration: 550,
                            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                            pseudoElement: "::view-transition-new(root)",
                        }
                    );
                    return animation.finished;
                })
                .catch((err) => {
                    // Catch AbortError if transition was skipped or aborted
                    console.debug("View transition skipped or aborted:", err);
                })
                .finally(() => {
                    isTransitioningRef.current = false;
                });
        } catch (err) {
            isTransitioningRef.current = false;
            setTheme(nextTheme);
        }
    };

    if (!mounted) {
        return (
            <div
                className={clsx(
                    "w-8 h-8 flex items-center justify-center cursor-pointer opacity-80",
                    className,
                    classNames?.base
                )}
                aria-label="Toggle theme"
            >
                <div className="w-[22px] h-[22px] flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                    <SunFilledIcon size={22} />
                </div>
            </div>
        );
    }

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={clsx(
                "p-1.5 rounded-xl transition-all duration-200 hover:opacity-80 active:scale-95 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer focus:outline-none",
                className,
                classNames?.base
            )}
        >
            <div className={clsx("w-[22px] h-[22px] flex items-center justify-center", classNames?.wrapper)}>
                {isDark ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
            </div>
        </button>
    );
};
