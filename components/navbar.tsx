"use client";

import { NAV_ITEMS, CASE_STUDY_CHAPTER_IDS } from "@/data/navigation";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/react";
import React, { useState } from "react";
import { GithubIcon, BlindSkullIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import { useViewport } from "./viewport/ViewportController";
import { motion } from "motion/react";

export const Navbar = () => {
  const { activeChapter, setActiveChapter } = useViewport();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [clickedNavId, setClickedNavId] = useState<string | null>(null);

  // Map viewport activeChapter to nav item (including sub-chapters like case study projects)
  const getActiveNavId = () => {
    if (clickedNavId) return clickedNavId;
    if (CASE_STUDY_CHAPTER_IDS.includes(activeChapter)) {
      return "case-study";
    }
    const matching = NAV_ITEMS.find((item) => item.chapter === activeChapter);
    return matching ? matching.id : "showreel";
  };

  const handleNavClick = (e: React.MouseEvent<any>, href: string, id: string) => {
    e.preventDefault();
    setClickedNavId(id);

    // If clicking a sub-chapter or standard hash link, smooth scroll to it
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Reset clicked state after scrolling completes so scroll spy resumes
    setTimeout(() => {
      setClickedNavId(null);
    }, 1000);
  };

  const activeId = getActiveNavId();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 
        Ultra-refined, fluid glassmorphism navigation container 
        Strict 2-layer subtle border hierarchy, micro-paddings, and pure backdrop-blur
      */}
      <div className="w-full backdrop-blur-xl bg-stone-50/80 dark:bg-[#080808]/80 border-b border-black/6 dark:border-white/8 transition-colors duration-200">
        <NextUINavbar
          maxWidth="xl"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="bg-transparent h-14 sm:h-16 px-4 sm:px-6"
        >
          {/* Brand Identity / Left Section */}
          <NavbarContent justify="start" className="gap-4">
            <NavbarBrand className="gap-2.5 max-w-fit">
              <Link
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero", "showreel")}
                className="flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-black/4 dark:bg-white/6 group-hover:bg-accent/10 dark:group-hover:bg-accent/20 transition-colors">
                  <BlindSkullIcon className="w-5 h-5 text-neutral-800 dark:text-neutral-200 group-hover:text-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-neutral-900 dark:text-white">
                    Fahim Faisal
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 tracking-tight">
                    Staff Engineer
                  </span>
                </div>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* Center Navigation Links (Desktop) */}
          <NavbarContent justify="center" className="hidden lg:flex gap-1">
            <div className="flex items-center gap-1 p-1 rounded-full bg-black/2 dark:bg-white/2 border border-black/4 dark:border-white/6 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredNavId === item.id;

                return (
                  <NavbarItem key={item.id} className="relative">
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                      onMouseEnter={() => setHoveredNavId(item.id)}
                      onMouseLeave={() => setHoveredNavId(null)}
                      className={`relative px-3.5 py-1.5 text-xs font-mono tracking-tight transition-colors duration-150 z-10 select-none ${
                        isActive
                          ? "text-neutral-900 dark:text-white font-semibold"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}

                      {/* Active Indicator Glow Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-black/6 dark:border-white/10 -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35,
                          }}
                        />
                      )}

                      {/* Hover subtle highlight if not active */}
                      {!isActive && isHovered && (
                        <motion.div
                          layoutId="navbar-hover-pill"
                          className="absolute inset-0 rounded-full bg-black/4 dark:bg-white/6 -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35,
                          }}
                        />
                      )}
                    </Link>
                  </NavbarItem>
                );
              })}
            </div>
          </NavbarContent>

          {/* Right Action Utilities (Theme Switch & Social) */}
          <NavbarContent justify="end" className="gap-2.5">
            <NavbarItem className="flex items-center gap-2">
              <Link
                isExternal
                href="https://github.com/b-l-i-n-d"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/6 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
              <ThemeSwitch />
            </NavbarItem>

            {/* Mobile Menu Toggle Button */}
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden text-neutral-700 dark:text-neutral-300"
            />
          </NavbarContent>

          {/* Mobile Drawer Menu */}
          <NavbarMenu className="bg-stone-50/95 dark:bg-[#080808]/95 backdrop-blur-2xl pt-6 px-6 border-t border-black/6 dark:border-white/8 gap-3">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest px-3">
                Index Navigation
              </span>
              <div className="grid gap-1 pt-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <NavbarMenuItem key={item.id}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href, item.id);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-xl font-mono text-sm transition-all ${
                          isActive
                            ? "bg-accent/10 text-accent font-bold border border-accent/20"
                            : "text-neutral-700 dark:text-neutral-300 hover:bg-black/4 dark:hover:bg-white/6"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      </Link>
                    </NavbarMenuItem>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-black/6 dark:border-white/8 flex items-center justify-between px-3">
              <span className="font-mono text-xs text-neutral-500">System Appearance</span>
              <ThemeSwitch />
            </div>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </header>
  );
};
