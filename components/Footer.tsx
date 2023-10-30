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
        <footer className="w-full flex flex-col items-center justify-center py-3 gap-3 bg-default-100">
            <div className="flex items-center justify-center gap-2">
                {siteConfig.navItems.map((item) => (
                    <Link key={item.label} href={item.href} isBlock>
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-center gap-4">
                <Tooltip content="Facebook" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.facebook}
                        aria-label="Facebook"
                    >
                        <FacebookIcon className="text-default-500" />
                    </Link>
                </Tooltip>
                <Tooltip content="Twitter" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.twitter}
                        aria-label="Twitter"
                    >
                        <TwitterIcon className="text-default-500" />
                    </Link>
                </Tooltip>
                <Tooltip content="Email" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.mail}
                        aria-label="Email"
                    >
                        <EmailIcon className="text-default-500" />
                    </Link>
                </Tooltip>
                <Tooltip content="Github" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                </Tooltip>
                <Tooltip content="LinkedIn" placement="top">
                    <Link
                        isExternal
                        href={siteConfig.links.linkedin}
                        aria-label="Linkedin"
                    >
                        <LinkedinIcon className="text-default-500" />
                    </Link>
                </Tooltip>
            </div>

            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/b-l-i-n-d"
                title="Github Profile"
            >
                <span className="text-default-600">Made with ❤️ | </span>
                <p className="text-primary">Fahim Faisal</p>
            </Link>
        </footer>
    );
};

export default Footer;
