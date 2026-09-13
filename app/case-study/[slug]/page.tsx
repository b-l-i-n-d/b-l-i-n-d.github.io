import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/config/portfolio-data";
import { ProjectCaseStudySection } from "@/components/showcase/ProjectCaseStudySection";
import { CaseStudyBreadcrumbBar } from "@/components/navigation/CaseStudyBreadcrumbBar";
import { CaseStudyFooterNav } from "@/components/navigation/CaseStudyFooterNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.flagshipProjects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.flagshipProjects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Architecture Case Study`,
    description: `${project.tagline}. High-scale systems architecture, 60 FPS motion design, and production code deep-dive by Fahim Faisal (@blind).`,
    openGraph: {
      title: `${project.title} | Fahim Faisal Software Engineer`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = portfolioData.flagshipProjects;
  const currentIndex = projects.findIndex((p) => p.id === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const currentProject = projects[currentIndex];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen pt-16 bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* Contextual Case Study Breadcrumb Bar */}
      <CaseStudyBreadcrumbBar
        currentProject={currentProject}
        currentIndex={currentIndex}
        totalProjects={projects.length}
        nextProject={nextProject}
      />

      {/* Main Case Study Interactive Deep-Dive Container */}
      <main>
        <ProjectCaseStudySection project={currentProject} />
      </main>

      {/* Next & Previous Project Traversal Footer */}
      <CaseStudyFooterNav prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
