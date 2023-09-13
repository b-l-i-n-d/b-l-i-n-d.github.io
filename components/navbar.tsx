"use client";

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

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";

import {
    EmailIcon,
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const sectionElements = document.querySelectorAll("section"); // Query all section elements

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Set the active section ID
                    }
                });
            },
            { rootMargin: "-50% 0% -50% 0%" }
        ); // Adjust rootMargin as needed

        sectionElements.forEach((section) => {
            observer.observe(section); // Observe each section
        });

        return () => {
            observer.disconnect(); // Clean up the observer
        };
    }, []);

    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="fixed">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Logo />
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden sm:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarItem key={item.href + index}>
                            <NextLink
                                data-active={
                                    activeSection === item.label.toLowerCase()
                                }
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-semibold"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-4">
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
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link
                    isExternal
                    href={siteConfig.links.github}
                    aria-label="Github"
                >
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <NextLink
                                data-active={
                                    activeSection === item.label.toLowerCase()
                                }
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-semibold"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
