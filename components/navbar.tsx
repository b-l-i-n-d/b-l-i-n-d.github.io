"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, BlindSkullIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import { useViewport } from "./viewport/ViewportController";
import { motion } from "motion/react";

const NAV_ITEMS = [
  { id: "showreel", label: "Showreel", href: "#hero", chapter: "hero" },
  { id: "about", label: "About", href: "#about", chapter: "about" },
  { id: "contents", label: "Contents", href: "#contents", chapter: "contents" },
  { id: "experience", label: "Experience", href: "#experience", chapter: "experience" },
  { id: "case-study", label: "Case Study", href: "#case-study", chapter: "case-study" },
  { id: "motion-lab", label: "Motion Lab", href: "#motion-lab", chapter: "motion-lab" },
  { id: "gallery", label: "Blueprints", href: "#gallery", chapter: "gallery" },
  { id: "dossier", label: "Dossier", href: "#profile", chapter: "profile" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { activeChapter, setActiveChapter } = useViewport();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [clickedNavId, setClickedNavId] = useState<string | null>(null);

  // Map viewport activeChapter or route pathname to nav item
  const getActiveNavId = () => {
    if (clickedNavId) return clickedNavId;
    if (pathname && pathname.startsWith("/case-study")) {
      return "case-study";
    }
    const caseStudyIds = ["tutor-lms", "enclave", "edtech", "docapp", "case-study"];
    if (caseStudyIds.includes(activeChapter)) {
      return "case-study";
    }
    const matching = NAV_ITEMS.find((item) => item.chapter === activeChapter);
    return matching ? matching.id : "showreel";
  };

  const activeNavId = getActiveNavId();

  const handleNavClick = (e: React.MouseEvent<any>, href: string, id: string, chapter: string) => {
    e.preventDefault();
    setClickedNavId(id);

    if (pathname !== "/") {
      setIsMenuOpen(false);
      router.push(`/${href}`);
      setTimeout(() => setClickedNavId(null), 800);
      return;
    }

    const targetId = href.replace("#", "");
    const element =
      document.getElementById(targetId) ||
      document.querySelector(`[data-chapter-id="${targetId}"]`);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navbarHeight);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveChapter(chapter, 1200);
    }
    setIsMenuOpen(false);
    setTimeout(() => setClickedNavId(null), 1200);
  };

  const handleBrandClick = (e: React.MouseEvent<any>) => {
    if (pathname === "/") {
      e.preventDefault();
      setClickedNavId("showreel");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveChapter("hero", 1200);
    } else {
      setIsMenuOpen(false);
      router.push("/");
    }
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 inset-x-0 z-50 bg-stone-50/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-200"
      classNames={{
        wrapper: "px-4 sm:px-6 lg:px-8 max-w-7xl h-16",
      }}
    >
      {/* Left: Brand / Logo with Skull 'X' Eyes and Abir Chromatic Identity */}
      <NavbarContent as="div" className="basis-auto shrink-0" justify="start">
        <NavbarBrand className="gap-3 max-w-fit shrink-0">
          <Link
            color="foreground"
            className="flex justify-start items-center gap-3 cursor-pointer group select-none text-neutral-900 dark:text-white shrink-0"
            href="/"
            onClick={handleBrandClick}
          >
            <div className="relative flex items-center justify-center shrink-0 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,23,68,0.45)] transition-all duration-300">
              <BlindSkullIcon size={28} className="shrink-0" />
            </div>
            <div className="flex flex-col select-none shrink-0">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-mono text-sm font-bold tracking-wider text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                  blind
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,23,68,0.8)] animate-pulse shrink-0" />
                <span className="text-neutral-300 dark:text-neutral-700 text-xs font-light">/</span>
                <span className="chroma-text-navbar font-bold text-sm tracking-tight">Abir</span>
              </div>
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-400 tracking-wider uppercase leading-tight mt-0.5 hidden sm:inline">
                Fahim Faisal
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center: Desktop Nav with Spring Glider Pill & Never-Wrap Single Line */}
      <NavbarContent as="div" className="hidden md:flex flex-1 justify-center" justify="center">
        <ul
          className="flex items-center gap-0.5 xl:gap-1 p-1 bg-white/80 dark:bg-[#161618]/80 backdrop-blur-xl rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-sm max-w-fit shrink-0"
          onMouseLeave={() => setHoveredNavId(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;
            const isHovered = hoveredNavId === item.id;

            return (
              <li key={item.id} className="relative shrink-0">
                <Link
                  href={item.href}
                  onClick={(e: React.MouseEvent<any>) =>
                    handleNavClick(e, item.href, item.id, item.chapter)
                  }
                  onMouseEnter={() => setHoveredNavId(item.id)}
                  className={`relative z-10 block px-3 py-1.5 text-xs font-medium tracking-tight whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? "text-neutral-900 dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Active Floating Pill with spring layout physics */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-neutral-100 dark:bg-white/[0.12] rounded-full border border-black/[0.04] dark:border-white/[0.14] shadow-xs -z-0"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                      mass: 0.8,
                    }}
                  />
                )}

                {/* Hover Aura indicator if not active */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 bg-neutral-100/60 dark:bg-white/[0.05] rounded-full -z-0"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 38,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </NavbarContent>

      {/* Right: Actions, Theme Switcher & Mobile Menu Toggle */}
      <NavbarContent as="div" className="basis-auto shrink-0 gap-2.5" justify="end">
        {/* GitHub Source Link */}
        <NavbarItem className="hidden sm:flex">
          <Link
            isExternal
            aria-label="GitHub Repository"
            href="https://github.com/b-l-i-n-d/b-l-i-n-d.github.io"
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
        </NavbarItem>

        {/* Tactile Dark/Light Theme Switch */}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        {/* Mobile Hamburger Toggle */}
        <NavbarItem className="md:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="w-9 h-9 flex items-center justify-center text-neutral-700 dark:text-neutral-200"
          />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Drawer Menu */}
      <NavbarMenu className="bg-stone-50/95 dark:bg-neutral-950/95 backdrop-blur-2xl pt-6 px-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex flex-col gap-2 max-w-sm mx-auto w-full">
          <div className="pb-3 mb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-400">
              Directory Chapters
            </span>
          </div>

          {NAV_ITEMS.map((item, index) => {
            const isActive = activeNavId === item.id;
            return (
              <NavbarMenuItem key={item.id}>
                <Link
                  className={`w-full py-2.5 px-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                  href={item.href}
                  onClick={(e: React.MouseEvent<any>) =>
                    handleNavClick(e, item.href, item.id, item.chapter)
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-400">
                    0{index}
                  </span>
                </Link>
              </NavbarMenuItem>
            );
          })}

          <div className="pt-4 mt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 font-mono">
            <span>Fahim Faisal / Portfolio</span>
            <Link
              isExternal
              href="https://github.com/b-l-i-n-d/b-l-i-n-d.github.io"
              className="text-accent hover:underline flex items-center gap-1"
            >
              GitHub Source ↗
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
