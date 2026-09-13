"use client";

import { FOOTER_NAV } from "@/data/navigation";

import { siteConfig } from "@/config/site";
import { Link, Tooltip } from "@heroui/react";
import React from "react";
import { EmailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center py-12 px-4 gap-6 bg-stone-100/70 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border-t border-black/6 dark:border-white/8 transition-colors">
      {/* Quick Navigation Jump Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono">
        {FOOTER_NAV.map((item) => (
          <a
            key={item.label}
            href={`#${item.targetId}`}
            onClick={(e) => handleScroll(e, item.targetId)}
            className="text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors cursor-pointer"
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
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 p-1"
          >
            <GithubIcon className="w-5 h-5 shrink-0" />
          </Link>
        </Tooltip>
        <Tooltip content="LinkedIn Profile" placement="top">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 p-1"
          >
            <LinkedinIcon className="w-5 h-5 shrink-0" />
          </Link>
        </Tooltip>
        <Tooltip content="Send Email" placement="top">
          <Link
            isExternal
            href={siteConfig.links.mail}
            aria-label="Email"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 p-1"
          >
            <EmailIcon className="w-5 h-5 shrink-0" />
          </Link>
        </Tooltip>
        <Tooltip content="X (Twitter)" placement="top">
          <Link
            isExternal
            href={siteConfig.links.twitter}
            aria-label="X"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0 p-1"
          >
            <TwitterIcon className="w-5 h-5 shrink-0" />
          </Link>
        </Tooltip>
      </div>

      {/* Attribution & Legal */}
      <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center justify-center gap-2 text-center font-normal">
        <span>Handcrafted by Fahim Faisal</span>
        <span className="text-neutral-300 dark:text-neutral-700 shrink-0">•</span>
        <span>Software Engineer at Ollyo</span>
        <span className="text-neutral-300 dark:text-neutral-700 shrink-0">•</span>
        <span className="text-neutral-600 dark:text-neutral-400 font-mono">
          B.Sc. in SWE from SUST
        </span>
      </div>
    </footer>
  );
};

export default Footer;
