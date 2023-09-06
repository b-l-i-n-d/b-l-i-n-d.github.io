"use client";

import { IEducation, IExperience } from "@/interfaces";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { SchoolIcon, WorkIcon } from "../icons";
import ExperiencesCard from "./ExperiencesCard";

interface Props {
    experience: IExperience[];
    education: IEducation[];
}

const tabIcons: {
    [key: string]: React.ReactElement;
} = {
    experience: <WorkIcon />,
    education: <SchoolIcon />,
};

const ExperienceTabs: React.FC<Props> = ({ experience, education }) => {
    const categories = [
        experience.length > 0 && "Experience",
        education.length > 0 && "Education",
    ] as string[];

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Tabs
                aria-label="Experience Options"
                color="primary"
                variant="bordered"
            >
                {categories.map((category) => (
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
                        className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 w-full"
                    >
                        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                            <div className="left-6 md:left-1/2 absolute border-opacity-20 h-full border border-default-700"></div>
                            {category === "Experience"
                                ? experience
                                      .sort(
                                          (a, b) =>
                                              new Date(b.startDate).getTime() -
                                              new Date(a.startDate).getTime()
                                      )
                                      .map((experience, index) => (
                                          // @ts-ignore
                                          <ExperiencesCard
                                              key={experience.company}
                                              index={index}
                                              {...experience}
                                          />
                                      ))
                                : education.map((education, index) => (
                                      // @ts-ignore
                                      <ExperiencesCard
                                          key={education.institute}
                                          index={index}
                                          {...education}
                                      />
                                  ))}
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default ExperienceTabs;
