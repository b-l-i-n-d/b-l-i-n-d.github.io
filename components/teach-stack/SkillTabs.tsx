"use client";

import { ISkill } from "../../interfaces";
import { BackendIcon, ClientIcon, ToolsIcon } from "../icons";
import SkillCard from "./SkillCard";

import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

interface Props {
    skills: ISkill[];
}

const tabIcons: {
    [key: string]: React.ReactElement;
} = {
    frontend: <ClientIcon />,
    backend: <BackendIcon />,
    tools: <ToolsIcon />,
};

const SkillTabs: React.FC<Props> = ({ skills }) => {
    const skillCategories = skills.reduce((acc, skill) => {
        if (!acc.includes(skill.category)) {
            acc.push(skill.category);
        }
        return acc;
    }, [] as string[]);

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Tabs
                aria-label="Teck Stack Options"
                color="primary"
                variant="bordered"
            >
                {skillCategories.map((category) => (
                    <Tab
                        key={category}
                        title={
                            <div className="flex items-center gap-1 sm:gap-2">
                                {tabIcons[category.toLowerCase()]}
                                <span className="text-xs sm:text-base">
                                    {category}
                                </span>
                            </div>
                        }
                    >
                        <div className="my-8 md:px-12 flex flex-wrap gap-4 justify-center items-center">
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <SkillCard key={skill.name} {...skill} />
                                ))}
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default SkillTabs;
