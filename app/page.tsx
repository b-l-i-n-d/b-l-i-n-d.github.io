import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/teach-stack/Skills";

export default async function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
        </>
    );
}
