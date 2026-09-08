"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
} from "@heroui/react";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { useViewport } from "@/components/viewport/ViewportController";

interface NavItem {
    id: string;
    label: string;
    href: string;
    targetId: string;
}

const NAV_ITEMS: NavItem[] = [
    { id: "showreel", label: "Showreel", href: "#hero", targetId: "hero" },
    { id: "contents", label: "Contents", href: "#contents", targetId: "contents" },
    { id: "about", label: "About", href: "#about", targetId: "about" },
    { id: "work", label: "Experience", href: "#experience", targetId: "experience" },
    { id: "casestudy", label: "Case Study", href: "#case-study", targetId: "case-study" },
    { id: "lab", label: "Motion Lab", href: "#motion-lab", targetId: "motion-lab" },
    { id: "specs", label: "Blueprints", href: "#gallery", targetId: "gallery" },
    { id: "contact", label: "Dossier", href: "#profile", targetId: "profile" },
];

export const Navbar = () => {
    const { activeChapter, setActiveChapter } = useViewport();
    const [activeNavId, setActiveNavId] = useState<string>("showreel");
    const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clickedNavId, setClickedNavId] = useState<string | null>(null);

    // Map activeChapter from scroll observer to corresponding nav item
    useEffect(() => {
        // If user recently clicked a nav link, honor that item during smooth scroll
        if (clickedNavId) {
            setActiveNavId(clickedNavId);
            return;
        }

        const map: Record<string, string> = {
            hero: "showreel",
            contents: "contents",
            about: "about",
            experience: "work",
            "case-study": "casestudy",
            "motion-lab": "lab",
            gallery: "specs",
            profile: "contact",
        };

        if (activeChapter && map[activeChapter]) {
            setActiveNavId(map[activeChapter]);
        }
    }, [activeChapter, clickedNavId]);

    // Clear clicked lock after smooth scroll completes
    useEffect(() => {
        if (!clickedNavId) return;
        const timer = setTimeout(() => {
            setClickedNavId(null);
        }, 800);
        return () => clearTimeout(timer);
    }, [clickedNavId]);

    const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
        e.preventDefault();
        setClickedNavId(item.id);
        setActiveNavId(item.id);

        const targetEl = document.getElementById(item.targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveChapter(item.targetId);
        }
    };

    return (
        <NextUINavbar
            maxWidth="2xl"
            position="sticky"
            className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.06]"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Left: Brand / Logo */}
            <NavbarContent className="basis-auto shrink-0" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit shrink-0">
                    <Link
                        className="flex justify-start items-center gap-1 cursor-pointer"
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            setClickedNavId("showreel");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setActiveChapter("hero");
                        }}
                    >
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* Center: Desktop Nav with Spring Glider Pill & Never-Wrap Single Line */}
            <NavbarContent className="hidden md:flex flex-1 justify-center" justify="center">
                <ul
                    className="flex items-center gap-0.5 xl:gap-1 p-1 bg-white/80 dark:bg-[#161618]/80 backdrop-blur-xl rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-sm max-w-fit shrink-0"
                    onMouseLeave={() => setHoveredNavId(null)}
                >
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeNavId === item.id;
                        const isHovered = hoveredNavId === item.id;

                        return (
                            <li key={item.id} className="relative shrink-0">
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    onMouseEnter={() => setHoveredNavId(item.id)}
                                    style={{
                                        // @ts-ignore CSS Anchor Positioning token
                                        anchorName: `--top-nav-${item.id}`,
                                    }}
                                    className={clsx(
                                        "relative z-10 px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-150 flex items-center gap-1.5 select-none cursor-pointer whitespace-nowrap shrink-0",
                                        isActive
                                            ? "text-neutral-950 dark:text-white font-bold"
                                            : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {/* Active Spring Gliding Pill */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="top-nav-active-indicator"
                                            className="absolute inset-0 bg-white dark:bg-white/[0.12] rounded-full shadow-sm border border-black/[0.06] dark:border-white/[0.10] -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 32,
                                                mass: 0.7,
                                            }}
                                        />
                                    )}

                                    {/* Soft Hover Ghost Indicator */}
                                    {isHovered && !isActive && (
                                        <motion.div
                                            layoutId="top-nav-hover-ghost"
                                            className="absolute inset-0 bg-neutral-200/50 dark:bg-white/[0.06] rounded-full -z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 480,
                                                damping: 34,
                                                mass: 0.5,
                                            }}
                                        />
                                    )}

                                    {/* Active Crimson Accent Micro-Dot */}
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] shadow-[0_0_8px_rgba(255,23,68,0.8)] shrink-0" />
                                    )}

                                    <span className="whitespace-nowrap">{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </NavbarContent>

            {/* Right: Desktop Theme Switch */}
            <NavbarContent
                className="hidden md:flex basis-auto shrink-0"
                justify="end"
            >
                <NavbarItem className="flex gap-4">
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            {/* Mobile / Tablet Toggle */}
            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            {/* Mobile Drawer Menu */}
            <NavbarMenu className="bg-stone-50/95 dark:bg-neutral-950/95 backdrop-blur-xl pt-6">
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeNavId === item.id;
                        return (
                            <NavbarMenuItem key={item.id}>
                                <button
                                    onClick={(e) => {
                                        handleNavClick(e, item);
                                        setIsMenuOpen(false);
                                    }}
                                    className={clsx(
                                        "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left font-mono text-sm",
                                        isActive
                                            ? "bg-white dark:bg-neutral-900 text-[#ff1744] font-bold shadow-sm border border-black/[0.06] dark:border-white/[0.08]"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                                    )}
                                >
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-[#ff1744] shadow-[0_0_10px_rgba(255,23,68,0.8)]" />
                                    )}
                                </button>
                            </NavbarMenuItem>
                        );
                    })}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
