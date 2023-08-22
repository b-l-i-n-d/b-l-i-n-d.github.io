import { DownloadIcon, MouseIcon, SendIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";

export default function Home() {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]
        "
        >
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Hello, I am &nbsp;</h1>
                <br />
                <h1 className={title({ color: "violet", size: "lg" })}>
                    Fahim Faisal&nbsp;
                </h1>
                <br />
                <h2 className={subtitle({ class: "mt-4" })}>
                    I am a full stack developer
                </h2>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    as={NextLink}
                    href={siteConfig.links.cv}
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                >
                    <DownloadIcon size={20} />
                    Download CV
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.github}
                >
                    <SendIcon size={20} />
                    Get in touch
                </Link>
            </div>

            <div className="mt-auto mb-8 flex flex-col items-center gap-4">
                <h2 className="font-semibold text-sm">Scroll down</h2>

                <MouseIcon size={20} className="animate-bounce" />
            </div>
        </section>
    );
}
