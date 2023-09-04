import { getData } from "@/app/api/api";

import { ISkill } from "@/interfaces";
import React from "react";
import TabItems from "./TabItems";

const Skills: React.FC = async () => {
    const {
        skills,
    }: {
        skills: ISkill[];
    } = await getData();

    return (
        <section id="skills" className="mx-auto max-w-7xl mt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Tech Stack</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="flex items-center justify-center pt-10">
                <TabItems skills={skills} />
            </div>
        </section>
    );
};

export default Skills;
