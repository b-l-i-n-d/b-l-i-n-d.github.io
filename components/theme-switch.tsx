"use client";

import { SwitchProps, useSwitch, VisuallyHidden } from "@heroui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
    className,
    classNames,
}) => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = (resolvedTheme || theme) === "dark";

    const onChange = () => {
        setTheme(isDark ? "light" : "dark");
    };

    const {
        Component,
        slots,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: !isDark,
        "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`,
        onChange,
    });

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
                <div className="w-[22px] h-[22px] flex items-center justify-center text-default-500">
                    <SunFilledIcon size={22} />
                </div>
            </div>
        );
    }

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    "px-px transition-opacity hover:opacity-80 cursor-pointer",
                    className,
                    classNames?.base
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            "w-auto h-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                        classNames?.wrapper
                    ),
                })}
            >
                {isDark ? (
                    <MoonFilledIcon size={22} />
                ) : (
                    <SunFilledIcon size={22} />
                )}
            </div>
        </Component>
    );
};
