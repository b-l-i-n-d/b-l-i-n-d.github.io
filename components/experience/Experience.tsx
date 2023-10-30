import { getData } from "@/actions/get-data";
import AnimationWrapper from "../AnimationWrapper";
import ExperienceTabs from "./ExperienceTabs";

const Experience = async () => {
    const { experiences, educations } = await getData();

    return (
        <AnimationWrapper id="experience" className="mx-auto container pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="flex items-center justify-center pt-10">
                <ExperienceTabs
                    experience={experiences}
                    education={educations}
                />
            </div>
        </AnimationWrapper>
    );
};

export default Experience;
