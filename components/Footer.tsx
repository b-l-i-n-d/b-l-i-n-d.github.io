"use client";

import { siteConfig } from "@/config/site";
import { Link, Tooltip } from "@heroui/react";
import React from "react";
import {
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from "./icons";

const FOOTER_NAV = [
    { label: "Showreel", targetId: "hero" },
    { label: "Contents", targetId: "contents" },
    { label: "About", targetId: "about" },
    { label: "Experience", targetId: "experience" },
    { label: "Case Study", targetId: "case-study" },
    { label: "Motion Lab", targetId: "motion-lab" },
    { label: "Blueprints", targetId: "gallery" },
    { label: "Dossier", targetId: "profile" },
];

export const Footer: React.FC = () => {
    const handleScroll = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="w-full flex flex-col items-center justify-center py-12 px-4 gap-6 bg-stone-100/70 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border-t border-black/[0.06] dark:border-white/[0.08] transition-colors">
            {/* Quick Navigation Jump Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono">
                {FOOTER_NAV.map((item) => (
                    <a
                        key={item.label}
                        href={`#${item.targetId}`}
                        onClick={(e) => handleScroll(e, item.targetId)}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] dark:hover:text-white transition-colors cursor-pointer"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Social & Contact Presence */}
            <div className="flex items-center justify-center gap-5">
                <Tooltip content="GitHub Profile" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="GitHub"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <GithubIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="LinkedIn Profile" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.linkedin}
                        aria-label="LinkedIn"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="Send Email" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.mail}
                        aria-label="Email"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <EmailIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="Twitter / X" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.twitter}
                        aria-label="Twitter"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <TwitterIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
            </div>

            {/* Attribution & Legal */}
            <div className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center justify-center gap-2 text-center font-normal">
                <span>Handcrafted by Fahim Faisal</span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span>Software Engineer at Ollyo / Themeum</span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span className="text-neutral-400 dark:text-neutral-500 font-mono">B.Sc. in CSE from SUST</span>
            </div>
        </footer>
    );
};

export default Footer;
