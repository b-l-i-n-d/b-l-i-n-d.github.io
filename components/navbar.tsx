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
  { id: "contents", label: "Contents", href: "#contents", chapter: "contents" },
  { id: "about", label: "About", href: "#about", chapter: "about" },
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

                {/* Active Pill Glider (Spring Physics) */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-navbar-active-glider"
                    className="absolute inset-0 bg-neutral-200/80 dark:bg-white/10 rounded-full border border-black/[0.04] dark:border-white/[0.08] shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 38,
                    }}
                  />
                )}

                {/* Hover Preview Pill */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="desktop-navbar-hover-glider"
                    className="absolute inset-0 bg-black/[0.03] dark:bg-white/[0.04] rounded-full -z-0"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </NavbarContent>

      {/* Right: GitHub & Theme Switch */}
      <NavbarContent as="div" className="basis-auto shrink-0" justify="end">
        <NavbarItem as="div" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            isExternal
            href="https://github.com/b-l-i-n-d"
            aria-label="GitHub Repository"
            className="p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors shrink-0"
          >
            <GithubIcon size={20} className="shrink-0" />
          </Link>
          <div className="shrink-0 flex items-center">
            <ThemeSwitch />
          </div>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-xl text-neutral-600 dark:text-neutral-400 shrink-0"
          />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Dropdown Menu */}
      <NavbarMenu className="bg-stone-50/95 dark:bg-neutral-950/95 backdrop-blur-2xl pt-6 px-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;
            return (
              <NavbarMenuItem key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e: React.MouseEvent<any>) =>
                    handleNavClick(e, item.href, item.id, item.chapter)
                  }
                  className={`w-full py-3 px-4 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-neutral-200 dark:bg-white/10 text-neutral-900 dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent shrink-0" />}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
