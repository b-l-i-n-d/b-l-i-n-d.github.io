import { getData } from "@/actions/get-data";

import React from "react";
import AnimationWrapper from "../AnimationWrapper";
import SkillTabs from "./SkillTabs";

const Skills: React.FC = async () => {
    const { skills } = await getData();

    return (
        <AnimationWrapper id="skills" className="mx-auto container pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Tech Stack</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="flex items-center justify-center pt-10">
                <SkillTabs skills={skills} />
            </div>
        </AnimationWrapper>
    );
};

export default Skills;
