export type ProjectStageType = 'architecture' | 'flow' | 'code' | 'live';

export interface ProjectStage {
    type?: ProjectStageType;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    diagramType?: 'er' | 'sequence' | 'system' | 'state';
    diagramSpec?: string;
    codeSnippet?: {
        language: string;
        filename: string;
        code: string;
        explanation?: string;
    };
    mediaUrl?: string;
    liveUrl?: string;
}

export interface ProjectCaseStudy {
    id: string;
    chapterNumber: string;
    title: string;
    tagline: string;
    category: string;
    timeline: string;
    role: string;
    stack: string[];
    summary?: string;
    heroVideoUrl?: string;
    heroPoster?: string;
    liveUrl?: string;
    githubUrl?: string;
    secondaryGithubUrl?: string;
    stats: {
        label: string;
        value: string;
    }[];
    stages: Record<ProjectStageType, ProjectStage>;
}

export interface InteractiveUIItem {
    id: string;
    title: string;
    tagline: string;
    category: string;
    description: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    fpsTarget: number;
    highlights: string[];
}

export interface GalleryItem {
    id: string;
    number: string;
    title: string;
    category: string;
    badge: string;
    description: string;
    details: string[];
    technologies: string[];
    demoUrl?: string;
    sourceUrl?: string;
}

export type HybridItem = GalleryItem;

export interface WorkExperience {
    id: string;
    role: string;
    company: string;
    department?: string;
    period: string;
    startDate: string;
    endDate?: string;
    website: string;
    location: string;
    products: {
        name: string;
        url: string;
        roleNote: string;
    }[];
    description: string;
    achievements: string[];
    technologies: string[];
}

export interface Chapter {
    id: string;
    number: string;
    title: string;
    label: string;
}

export interface EngineerProfile {
    name: string;
    tagline: string;
    headline: string;
    bioParagraphs: string[];
    location: string;
    education: {
        institute: string;
        shortInstitute: string;
        degree: string;
        department: string;
        status: string;
        link: string;
        period: string;
    };
    contact: {
        email: string;
        github: string;
        linkedin: string;
        locationMap: string;
        cvUrl: string;
    };
    heroReel: {
        title: string;
        tagline: string;
        badge: string;
        videoUrl: string;
        secondaryVideoUrl?: string;
        posterUrl: string;
        runtime: string;
        framerate: string;
        productTitle: string;
        productUrl: string;
    };
    experiences: WorkExperience[];
    chapters: Chapter[];
    flagshipProjects: ProjectCaseStudy[];
    interactiveBuilds: InteractiveUIItem[];
    hybridGallery: GalleryItem[];
    skillCategories: {
        name: string;
        skills: string[];
    }[];
}
