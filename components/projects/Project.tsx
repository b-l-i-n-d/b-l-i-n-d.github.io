import { getData } from "@/actions/get-data";
import AnimationWrapper from "../AnimationWrapper";
import ProjectCard from "./ProjectCard";

const Project = async () => {
    const { projects } = await getData();

    return (
        <AnimationWrapper id="projects" className="mx-auto container pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
                <h3 className="text-default-500">Featured projects</h3>
            </div>

            <div className="lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </AnimationWrapper>
    );
};

export default Project;
