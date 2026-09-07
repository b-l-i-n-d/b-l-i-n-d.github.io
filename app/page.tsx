import { portfolioData } from "@/config/portfolio-data";
import { ViewportProvider } from "@/components/viewport/ViewportController";
import { ChapterScrubber } from "@/components/navigation/ChapterScrubber";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { DoodleMarqueeBanner } from "@/components/decorations/DoodleMarqueeBanner";
import { ContentsIndexSection } from "@/components/contents/ContentsIndexSection";
import { BehanceBioSection } from "@/components/bio/BehanceBioSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectCaseStudySection } from "@/components/showcase/ProjectCaseStudySection";
import { InteractiveMotionLab } from "@/components/motion-lab/InteractiveMotionLab";
import { HybridGallery } from "@/components/gallery/HybridGallery";
import { ProfileOutro } from "@/components/profile/ProfileOutro";

export default function Home() {
    return (
        <ViewportProvider>
            <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-rose-600 selection:text-white">
                {/* Floating Chapter Dock Navigation */}
                <ChapterScrubber chapters={portfolioData.chapters} />

                {/* Chapter 00: Flagship Cinematic Showreel Hero (Tutor LMS 3.0-4.0 & EasyStore) */}
                <CinematicHero profile={portfolioData} />

                {/* Behance Ribbon Divider Banner */}
                <DoodleMarqueeBanner direction="left" speed={35} />

                {/* Chapter 01: Behance Contents Directory Section */}
                <ContentsIndexSection />

                {/* Chapter 02: Behance Bio, Portrait, Timeline & Interactive Skill Cloud */}
                <BehanceBioSection profile={portfolioData} />

                {/* Reverse Ribbon Divider Banner */}
                <DoodleMarqueeBanner direction="right" speed={45} />

                {/* Chapter 03: Professional Experience & Career Impact (Ollyo & SUST) */}
                <ExperienceSection profile={portfolioData} />

                {/* Chapters 04 - 06: 4-Stage Project Case Studies */}
                {portfolioData.flagshipProjects.map((project) => (
                    <ProjectCaseStudySection key={project.id} project={project} />
                ))}

                {/* Chapter 07: Interactive Motion Lab (60 FPS Micro-Interactions) */}
                <InteractiveMotionLab items={portfolioData.interactiveBuilds} />

                {/* Chapter 08: 12-Item Curated Hybrid Gallery & Lightbox */}
                <HybridGallery items={portfolioData.hybridGallery} />

                {/* Chapter 09: Verified Academic Credentials & Contact Outro */}
                <ProfileOutro profile={portfolioData} />
            </main>
        </ViewportProvider>
    );
}
