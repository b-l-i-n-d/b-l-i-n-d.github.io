import { portfolioData } from "@/config/portfolio-data";
import { ViewportProvider } from "@/components/viewport/ViewportController";
import { ChapterScrubber } from "@/components/navigation/ChapterScrubber";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectCaseStudySection } from "@/components/showcase/ProjectCaseStudySection";
import { InteractiveMotionLab } from "@/components/motion-lab/InteractiveMotionLab";
import { HybridGallery } from "@/components/gallery/HybridGallery";
import { ProfileOutro } from "@/components/profile/ProfileOutro";

export default function Home() {
    return (
        <ViewportProvider>
            <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950">
                {/* Floating Chapter Dock Navigation */}
                <ChapterScrubber chapters={portfolioData.chapters} />

                {/* Chapter 00: Flagship Cinematic Showreel Hero (Tutor LMS 3.0-4.0 & EasyStore) */}
                <CinematicHero profile={portfolioData} />

                {/* Chapter 01: Professional Experience & Career Impact */}
                <ExperienceSection profile={portfolioData} />

                {/* Chapters 02 - 04: 4-Stage Project Case Studies */}
                {portfolioData.flagshipProjects.map((project) => (
                    <ProjectCaseStudySection key={project.id} project={project} />
                ))}

                {/* Chapter 05: Interactive Motion Lab (60 FPS Micro-Interactions) */}
                <InteractiveMotionLab items={portfolioData.interactiveBuilds} />

                {/* Chapter 06: 12-Item Curated Hybrid Gallery & Lightbox */}
                <HybridGallery items={portfolioData.hybridGallery} />

                {/* Chapter 07: Verified Academic Credentials & Contact Outro */}
                <ProfileOutro profile={portfolioData} />
            </main>
        </ViewportProvider>
    );
}
