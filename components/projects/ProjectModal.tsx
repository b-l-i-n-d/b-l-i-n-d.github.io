"use client";

import { IProject } from "@/interfaces";
import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { ArrowRight, ExternalLinkIcon, GithubIcon, LockIcon } from "../icons";

import {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { highlight } from "../primitives";

const ProjectModal: React.FC<IProject> = ({
    title,
    description,
    image,
    links,
    tags,
    carousel,
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} endContent={<ArrowRight size={16} />}>
                See details
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader></ModalHeader>
                            <ModalBody>
                                <div>
                                    {carousel ? (
                                        <Swiper
                                            // install Swiper modules
                                            modules={[
                                                Navigation,
                                                Pagination,
                                                Scrollbar,
                                                Autoplay,
                                                A11y,
                                            ]}
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{
                                                clickable: true,
                                                dynamicBullets: true,
                                            }}
                                            scrollbar={{ draggable: true }}
                                            autoplay
                                            loop
                                        >
                                            {carousel.map((image) => (
                                                <SwiperSlide key={image}>
                                                    <Image
                                                        src={image}
                                                        alt="Project Image"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    ) : (
                                        <Image
                                            src={image}
                                            alt="Project Image"
                                        />
                                    )}
                                </div>
                                <h3 className={highlight()}>{title}</h3>
                                <p className="text-sm">{description}</p>

                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    {tags.map((tag) => (
                                        <Chip
                                            key={tag}
                                            variant="flat"
                                            color="primary"
                                        >
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {links ? (
                                    Object.entries(links).map(
                                        ([key, value]) => (
                                            <Link
                                                isExternal
                                                href={value}
                                                key={key}
                                            >
                                                <Button
                                                    endContent={
                                                        key === "github" ? (
                                                            <GithubIcon
                                                                size={16}
                                                            />
                                                        ) : (
                                                            <ExternalLinkIcon
                                                                size={16}
                                                            />
                                                        )
                                                    }
                                                >
                                                    {key.toUpperCase()}
                                                </Button>
                                            </Link>
                                        )
                                    )
                                ) : (
                                    <Button
                                        onPress={onClose}
                                        endContent={<LockIcon size={16} />}
                                    >
                                        Private
                                    </Button>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectModal;
