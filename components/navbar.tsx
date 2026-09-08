"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import { siteConfig } from "@/config/site";
import clsx from "clsx";

import {
    EmailIcon,
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    SocialIcon,
    TwitterIcon,
    Logo,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { useViewport } from "@/components/viewport/ViewportController";

interface NavConfigItem {
    id: string;
    label: string;
    href: string;
    targetId: string;
    chapterIds: string[];
}

const NAV_ITEMS: NavConfigItem[] = [
    {
        id: "showreel",
        label: "Showreel",
        href: "#hero",
        targetId: "hero",
        chapterIds: ["hero"],
    },
    {
        id: "contents",
        label: "Contents",
        href: "#contents",
        targetId: "contents",
        chapterIds: ["contents"],
    },
    {
        id: "about",
        label: "About",
        href: "#about",
        targetId: "about",
        chapterIds: ["about"],
    },
    {
        id: "experience",
        label: "Experience",
        href: "#experience",
        targetId: "experience",
        chapterIds: ["experience"],
    },
    {
        id: "work",
        label: "Work",
        href: "#tutor-lms",
        targetId: "tutor-lms",
        chapterIds: ["tutor-lms", "easystore", "ecommerce", "motion-lab", "gallery"],
    },
    {
        id: "contact",
        label: "Contact",
        href: "#profile",
        targetId: "profile",
        chapterIds: ["profile"],
    },
];

export const Navbar = () => {
    const { activeChapter, setActiveChapter } = useViewport();
    const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
    const [clickedNavId, setClickedNavId] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Map active scroll chapter to corresponding navigation item
    const currentActiveItem =
        NAV_ITEMS.find((item) => item.chapterIds.includes(activeChapter)) ||
        NAV_ITEMS[0];
    const activeNavId = clickedNavId || currentActiveItem.id;

    const handleNavClick = (e: React.MouseEvent, item: NavConfigItem) => {
        e.preventDefault();
        setClickedNavId(item.id);
        if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
        clickTimerRef.current = setTimeout(() => {
            setClickedNavId(null);
        }, 1200);

        const element = document.getElementById(item.targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveChapter(item.targetId);
        }
    };

    return (
        <NextUINavbar
            maxWidth="xl"
            position="sticky"
            className="fixed"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <Link
                        className="flex justify-start items-center gap-1"
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

                {/* Desktop Nav with Anchor Positioning & Spring Glider Pill */}
                <ul
                    className="hidden sm:flex items-center gap-1 p-1 bg-stone-100/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-full border border-neutral-200/80 dark:border-neutral-800/80 shadow-craft-subtle ring-1 ring-black/[0.03] ml-2"
                    onMouseLeave={() => setHoveredNavId(null)}
                >
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeNavId === item.id;
                        const isHovered = hoveredNavId === item.id;

                        return (
                            <li key={item.id} className="relative">
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item)}
                                    onMouseEnter={() => setHoveredNavId(item.id)}
                                    style={{
                                        // @ts-ignore CSS Anchor Positioning token
                                        anchorName: `--top-nav-${item.id}`,
                                    }}
                                    className={clsx(
                                        "relative z-10 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-150 flex items-center gap-1.5 select-none cursor-pointer",
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
                                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-craft-sm dark:shadow-md border border-neutral-200/90 dark:border-neutral-700/60 -z-10"
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
                                            className="absolute inset-0 bg-neutral-200/60 dark:bg-neutral-800/40 rounded-full -z-10"
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

                                    <span>{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-4">
                    <div className="hidden md:flex gap-4">
                        <Tooltip content="Facebook" placement="bottom">
                            <Link
                                isExternal
                                href={siteConfig.links.facebook}
                                aria-label="Facebook"
                            >
                                <FacebookIcon className="text-default-500" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Twitter" placement="bottom">
                            <Link
                                isExternal
                                href={siteConfig.links.twitter}
                                aria-label="Twitter"
                            >
                                <TwitterIcon className="text-default-500" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Email" placement="bottom">
                            <Link
                                isExternal
                                href={siteConfig.links.mail}
                                aria-label="Email"
                            >
                                <EmailIcon className="text-default-500" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Github" placement="bottom">
                            <Link
                                isExternal
                                href={siteConfig.links.github}
                                aria-label="Github"
                            >
                                <GithubIcon className="text-default-500" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="LinkedIn" placement="bottom">
                            <Link
                                isExternal
                                href={siteConfig.links.linkedin}
                                aria-label="Linkedin"
                            >
                                <LinkedinIcon className="text-default-500" />
                            </Link>
                        </Tooltip>
                    </div>
                    <div className="md:hidden">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly variant="flat">
                                    <SocialIcon />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                variant="flat"
                                aria-label="Dropdown Menu"
                            >
                                <DropdownItem>
                                    <Link
                                        isExternal
                                        href={siteConfig.links.facebook}
                                        aria-label="Facebook"
                                        className="text-default-500 flex items-center gap-2"
                                    >
                                        <FacebookIcon /> Facebook
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        isExternal
                                        href={siteConfig.links.twitter}
                                        aria-label="Twitter"
                                        className="text-default-500 flex items-center gap-2"
                                    >
                                        <TwitterIcon /> Twitter
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        isExternal
                                        href={siteConfig.links.mail}
                                        aria-label="Email"
                                        className="text-default-500 flex items-center gap-2"
                                    >
                                        <EmailIcon /> Email
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        isExternal
                                        href={siteConfig.links.github}
                                        aria-label="Github"
                                        className="text-default-500 flex items-center gap-2"
                                    >
                                        <GithubIcon /> Github
                                    </Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link
                                        isExternal
                                        href={siteConfig.links.linkedin}
                                        aria-label="Linkedin"
                                        className="text-default-500 flex items-center gap-2"
                                    >
                                        <LinkedinIcon /> Linkedin
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly variant="flat">
                            <SocialIcon />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="flat" aria-label="Dropdown Menu">
                        <DropdownItem>
                            <Link
                                isExternal
                                href={siteConfig.links.facebook}
                                aria-label="Facebook"
                                className="text-default-500 flex items-center gap-2"
                            >
                                <FacebookIcon /> Facebook
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                isExternal
                                href={siteConfig.links.twitter}
                                aria-label="Twitter"
                                className="text-default-500 flex items-center gap-2"
                            >
                                <TwitterIcon /> Twitter
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                isExternal
                                href={siteConfig.links.mail}
                                aria-label="Email"
                                className="text-default-500 flex items-center gap-2"
                            >
                                <EmailIcon /> Email
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                isExternal
                                href={siteConfig.links.github}
                                aria-label="Github"
                                className="text-default-500 flex items-center gap-2"
                            >
                                <GithubIcon /> Github
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                isExternal
                                href={siteConfig.links.linkedin}
                                aria-label="Linkedin"
                                className="text-default-500 flex items-center gap-2"
                            >
                                <LinkedinIcon /> Linkedin
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

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
                                            ? "bg-white dark:bg-neutral-900 text-[#ff1744] font-bold shadow-craft-sm border border-neutral-200/80 dark:border-neutral-800"
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
