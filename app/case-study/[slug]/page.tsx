import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioData } from "@/config/portfolio-data";
import { ProjectCaseStudySection } from "@/components/showcase/ProjectCaseStudySection";
import { CaseStudyBreadcrumbBar } from "@/components/navigation/CaseStudyBreadcrumbBar";
import { CaseStudyFooterNav } from "@/components/navigation/CaseStudyFooterNav";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = portfolioData.flagshipProjects || [];
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata(props: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = portfolioData.flagshipProjects?.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Technical Architecture Case Study`,
    description: project.summary || project.tagline,
    openGraph: {
      title: `${project.title} - Technical Architecture Case Study`,
      description: project.tagline || project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage(props: CaseStudyPageProps) {
  const { slug } = await props.params;
  const projects = portfolioData.flagshipProjects || [];
  const currentIndex = projects.findIndex((p) => p.id === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const currentProject = projects[currentIndex];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="relative min-h-screen pt-28 bg-stone-50 dark:bg-[#070709] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Emil Craft Atmosphere: Ambient Vignette & Architectural Ledger Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,23,68,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,23,68,0.12),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      {/* Contextual Case Study Breadcrumb Bar */}
      <CaseStudyBreadcrumbBar
        currentProject={currentProject}
        currentIndex={currentIndex}
        totalProjects={projects.length}
        nextProject={nextProject}
      />

      {/* Main Case Study Interactive Deep-Dive Container */}
      <div className="w-full">
        <ProjectCaseStudySection project={currentProject} />
      </div>

      {/* Next & Previous Project Traversal Footer */}
      <CaseStudyFooterNav prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
