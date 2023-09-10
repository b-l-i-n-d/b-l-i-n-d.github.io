import { IProject } from "@/interfaces";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextImage from "next/image";
import React from "react";
import { ArrowRight, GithubIcon } from "../icons";
import ProjectModal from "./ProjectModal";

const ProjectCard: React.FC<IProject> = ({
    title,
    image,
    description,
    links,
    tags,
    carousel,
}) => {
    return (
        <Card>
            <CardHeader title="Projet Image">
                <Image
                    as={NextImage}
                    src={image}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
                />
            </CardHeader>
            <CardBody title="Project Title">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm line-clamp-1">{description}</p>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {tags.map((tag) => (
                            <Chip
                                key={tag}
                                size="sm"
                                variant="flat"
                                color="primary"
                            >
                                {tag}
                            </Chip>
                        ))}
                    </div>
                </div>
            </CardBody>
            <CardFooter title="Project Links" className="justify-center gap-4">
                <ProjectModal
                    title={title}
                    description={description}
                    image={image}
                    links={links}
                    tags={tags}
                    carousel={carousel}
                />
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
