import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";
import AnimationWrapper from "../AnimationWrapper";
import { EmailIcon, MapPinIcon } from "../icons";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
    return (
        <AnimationWrapper id="contact" className="mx-auto container pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Contact</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-wrap py-10">
                <div className="flex w-full flex-col items-center justify-center gap-5 md:w-1/3">
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none bg-primary-50 max-w-full"
                        style={{
                            height: 200,
                            width: 300,
                        }}
                    >
                        <CardBody className="flex flex-col items-center justify-center gap-2">
                            <EmailIcon className="w-10 h-10" />
                            <h3 className="text-lg font-bold">Email</h3>
                        </CardBody>
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-sm text-foreground/80 line-clamp-1">
                                {siteConfig.links.mail.split(":")[1]}
                            </p>

                            <Button
                                as={Link}
                                href={siteConfig.links.mail}
                                className="text-tiny text-foreground bg-black/20"
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                            >
                                Send
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none bg-primary-50 max-w-full"
                        style={{
                            height: 200,
                            width: 300,
                        }}
                    >
                        <CardBody className="flex flex-col items-center justify-center gap-2">
                            <MapPinIcon className="w-10 h-10" />
                            <h3 className="text-lg font-bold">Loaction</h3>
                        </CardBody>
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-sm text-foreground/80">
                                {siteConfig.links.location}
                            </p>
                            <Link isExternal href={siteConfig.links.mapPin}>
                                <Button
                                    className="text-tiny text-foreground bg-black/20"
                                    variant="flat"
                                    color="default"
                                    radius="lg"
                                    size="sm"
                                >
                                    Map
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex w-full md:w-2/3">
                    <ContactForm />
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default Contact;
