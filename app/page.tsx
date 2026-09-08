import dynamic from "next/dynamic";
import { portfolioData } from "@/config/portfolio-data";
import { ChapterScrubber } from "@/components/navigation/ChapterScrubber";
import { CinematicHero } from "@/components/hero/CinematicHero";

import { DoodleMarqueeBanner } from "@/components/decorations/DoodleMarqueeBanner";
import { ContentsIndexSection } from "@/components/contents/ContentsIndexSection";
import { InteractiveMotionLab } from "@/components/motion-lab/InteractiveMotionLab";
import { ProfileOutro } from "@/components/profile/ProfileOutro";

// Dynamic imports for remaining client interactive components
const BehanceBioSection = dynamic(
    () => import("@/components/bio/BehanceBioSection").then((m) => m.BehanceBioSection),
    { ssr: true }
);

const ExperienceSection = dynamic(
    () => import("@/components/experience/ExperienceSection").then((m) => m.ExperienceSection),
    { ssr: true }
);

const ProjectCaseStudySection = dynamic(
    () => import("@/components/showcase/ProjectCaseStudySection").then((m) => m.ProjectCaseStudySection),
    { ssr: true }
);

const HybridGallery = dynamic(
    () => import("@/components/gallery/HybridGallery").then((m) => m.HybridGallery),
    { ssr: true }
);

export default function Home() {
    return (
        <main className="min-h-screen bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-rose-600 selection:text-white transition-colors duration-200">
            {/* Floating Chapter Dock Navigation (Desktop & Mobile) */}
            <ChapterScrubber chapters={portfolioData.chapters} />

            {/* Chapter 00: Flagship Cinematic Showreel Hero (Tutor LMS 2.0-4.0 & Enclave) */}
            <CinematicHero profile={portfolioData} />

            {/* Behance Ribbon Divider Banner */}
            <DoodleMarqueeBanner direction="left" speed={35} />

            {/* Chapter 01: Behance Contents Directory Section */}
            <ContentsIndexSection />

            {/* Chapter 02: Behance Bio, Portrait, Timeline & Interactive Skill Cloud */}
            <div className="content-auto">
                <BehanceBioSection profile={portfolioData} />
            </div>

            {/* Reverse Ribbon Divider Banner */}
            <div className="content-auto">
                <DoodleMarqueeBanner direction="right" speed={45} />
            </div>

            {/* Chapter 03: Professional Experience & Career Impact (Ollyo & SUST) */}
            <div className="content-auto">
                <ExperienceSection profile={portfolioData} />
            </div>

            {/* Chapters 04 - 07: 4-Stage Project Case Studies (Tutor LMS, Enclave, EdTech, DocApp) */}
            <div id="case-study">
                {portfolioData.flagshipProjects.map((project) => (
                    <div key={project.id} className="content-auto">
                        <ProjectCaseStudySection project={project} />
                    </div>
                ))}
            </div>

            {/* Chapter 08: Interactive Motion Lab (Micro-Interactions & Physics) */}
            <div className="content-auto">
                <InteractiveMotionLab items={portfolioData.interactiveBuilds} />
            </div>

            {/* Chapter 09: 12-Item Curated Hybrid Gallery & Lightbox */}
            <div className="content-auto">
                <HybridGallery items={portfolioData.hybridGallery} />
            </div>

            {/* Chapter 10: Verified Academic Credentials & Contact Outro */}
            <div className="content-auto">
                <ProfileOutro profile={portfolioData} />
            </div>
        </main>
    );
}
