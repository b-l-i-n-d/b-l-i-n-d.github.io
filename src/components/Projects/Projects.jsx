import projectData from '../../assets/MOCK_DATA.json';
import Card from './Card';

function Projects() {
    const cards = projectData.map((project) => (
        <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            tags={project.tags}
            links={project.links}
        />
    ));

    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 py-5">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-5 py-10">{cards}</div>
        </section>
    );
}

export default Projects;
