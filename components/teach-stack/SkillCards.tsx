"use client";

import { ISkill } from "@/interfaces";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FastAverageColor } from "fast-average-color";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";

const SkillCards: React.FC<ISkill> = ({ name, image, invert }) => {
    const { theme } = useTheme();

    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        new FastAverageColor()
            .getColorAsync(image)
            .then((color) => {
                const rgba = color.rgb.split(")");
                setBgColor(rgba[0] + ",0.07)");
            })
            .catch((e) => {
                console.log(e);
            });
    }, [image]);

    return (
        <Card
            key={name}
            isBlurred
            className={`border-none bg-background/60 dark:bg-default-100/50 hover:-translate-y-1`}
            shadow="sm"
        >
            <CardBody>
                <div
                    style={{
                        backgroundColor: bgColor,
                    }}
                    className={`h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center`}
                >
                    <Image
                        as={NextImage}
                        alt={name}
                        width={100}
                        height={100}
                        className={`h-12 w-12 md:h-[4.5rem] md:w-[4.5rem] object-contain ${
                            theme === "dark" && invert && "invert"
                        }`}
                        src={image}
                    />
                </div>
            </CardBody>
            <CardFooter className="justify-center">
                <h3 className="font-semibold text-center text-sm md:text-base">
                    {name}
                </h3>
            </CardFooter>
        </Card>
    );
};

export default SkillCards;
