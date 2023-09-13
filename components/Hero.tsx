import { getData } from "@/app/api/api";
import Typewriter from "@/components/Typewriter";
import { DownloadIcon, MouseIcon, SendIcon } from "@/components/icons";
import { highlight, subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const Hero = async () => {
    const { user } = await getData();

    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center gap-4 py-28 h-screen"
        >
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Hello, I am &nbsp;</h1>
                <br />
                <h1 className={title({ color: "violet", size: "lg" })}>
                    {user.name}&nbsp;
                </h1>
                <br />
                <h2
                    className={subtitle({
                        class: "mt-4 inline-flex flex-wrap justify-center",
                    })}
                >
                    I am into&nbsp;{" "}
                    <span className={highlight({ color: "yellow" })}>
                        <Typewriter
                            options={{
                                strings: user.titles,
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h2>
            </div>

            <div className="flex gap-3">
                <Link isExternal as={NextLink} href={siteConfig.links.cv}>
                    <Button color="primary" radius="full">
                        <DownloadIcon size={20} />
                        Download CV
                    </Button>
                </Link>
                <Link href="#contact">
                    <Button variant="bordered" radius="full">
                        <SendIcon size={20} />
                        Get in touch
                    </Button>
                </Link>
            </div>

            <div className="mt-auto mb-8 flex flex-col items-center gap-4">
                <h2 className="font-semibold text-sm">Scroll down</h2>

                <MouseIcon size={20} className="animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;
