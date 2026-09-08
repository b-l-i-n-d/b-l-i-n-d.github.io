import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";
import {
    EmailIcon,
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from "./icons";

const Footer: React.FC = async () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-8 gap-4 bg-stone-100 dark:bg-[#0c0c0e] border-t border-black/[0.06] dark:border-white/[0.08] transition-colors">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
                {siteConfig.navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] dark:hover:text-white transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center gap-5">
                <Tooltip content="GitHub" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="GitHub"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <GithubIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="LinkedIn" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.linkedin}
                        aria-label="LinkedIn"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="Email" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.mail}
                        aria-label="Email"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <EmailIcon className="w-4 h-4" />
                    </Link>
                </Tooltip>
                <Tooltip content="Twitter" placement="top">
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

            <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1 font-normal">
                <span>Handcrafted by Fahim Faisal</span>
                <span className="text-neutral-400 dark:text-neutral-600">•</span>
                <span>Software Engineer at Ollyo / Themeum</span>
            </div>
        </footer>
    );
};

export default Footer;
