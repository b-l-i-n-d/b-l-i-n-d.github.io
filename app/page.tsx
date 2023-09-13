import About from "@/components/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/projects/Project";
import Skills from "@/components/teach-stack/Skills";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Project />
            <Contact />
        </>
    );
}
