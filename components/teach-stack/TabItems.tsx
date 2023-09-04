"use client";

import { ISkill } from "../../interfaces";
import { BackendIcon, ClientIcon, ToolsIcon } from "../icons";

import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import SkillCards from "./SkillCards";

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

const TabItems: React.FC<Props> = ({ skills }) => {
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
                        <div className="my-8 mx-auto md:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-4 flex-wrap grid-flow-row-dense">
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <SkillCards key={skill.name} {...skill} />
                                ))}
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default TabItems;
