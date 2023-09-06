import { getData } from "@/app/api/api";
import { siteConfig } from "@/config/site";

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Tooltip } from "@nextui-org/tooltip";

import React from "react";
import {
    EmailIcon,
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
} from "./icons";

import { title } from "./primitives";

const About: React.FC = async () => {
    const { about } = await getData();
    return (
        <section id="about" className="mx-auto container px-4 pt-20 font-body">
            <div className="flex flex-wrap lg:flex-row">
                <div className="order-2 flex w-full flex-col gap-5 sm:w-1/2 lg:order-none lg:w-1/4">
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-title font-bold">About me</h2>
                            <div className="h-1 w-20 rounded-full bg-primary" />
                        </div>
                        <p className="text-justify">{about.description}</p>
                        <div className="divider" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-title font-bold">Contact</h2>
                            <div className="h-1 w-20 rounded-full bg-primary" />
                        </div>

                        <div className="flex gap-4">
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
                    </div>
                </div>
                <div className="order-1 flex flex-col w-full items-center justify-center pb-10 lg:order-none lg:w-2/4 lg:pb-0">
                    <Image
                        className="h-[30rem] md:h-[38rem] w-96 rounded-full object-cover outline-dashed outline-2 outline-offset-[16px] outline-primary"
                        src="https://github.com/b-l-i-n-d/b-l-i-n-d.github.io/blob/react/src/assets/avatar.jpg?raw=true"
                        alt="Profile Picture"
                    />
                    <Snippet
                        hideSymbol
                        hideCopyButton
                        className="mt-10"
                        variant="solid"
                        color="primary"
                    >
                        {about.imageCaption}
                    </Snippet>
                </div>
                <div className="order-3 grid w-full grid-rows-3 pt-5 sm:w-1/2 md:pt-0 lg:order-none lg:w-1/4">
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className={title({ color: "violet", size: "md" })}>
                            Years of experiences
                        </h2>
                        <div className="text-6xl font-bold">
                            {about.yearsOfExperience}
                        </div>
                    </div>
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className={title({ color: "violet", size: "md" })}>
                            Known Technology
                        </h2>
                        <div className="text-6xl font-bold">14</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
