export type ProjectStageType = 'architecture' | 'flow' | 'code' | 'live';
export type CaseStudyStage = ProjectStageType;

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
    isPrivate?: boolean;
    stats: {
        label: string;
        value: string;
    }[];
    stages: Record<ProjectStageType, ProjectStage>;
}

export type FlagshipProject = ProjectCaseStudy;

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
    isPrivate?: boolean;
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
    isPrivate?: boolean;
}

export type HybridItem = GalleryItem;

export interface PromotionStage {
    year: string;
    role: string;
    highlight?: string;
    isCurrent?: boolean;
}

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
    promotions?: PromotionStage[];
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

export interface SystemArchitectureMetric {
    label: string;
    value: string;
    detail: string;
}

export interface ContentsItem {
    id?: string;
    number?: string;
    title: string;
    subtitle: string;
    category?: string;
    subtitlePosition?: 'above' | 'below';
    targetId: string;
    dotsCount?: number;
}

export interface ContentsColumn {
    id: string;
    numberScript: string;
    title: string;
    items: ContentsItem[];
}

export interface ContentsSectionData {
    superTitle: string;
    title: string;
    description: string;
    items: ContentsItem[];
}

export type AcademicCourse = string;

export interface EngineerProfile {
    name: string;
    role: string;
    avatar?: string;
    tagline: string;
    headline: string;
    bioParagraphs: string[];
    skillCategories: {
        name: string;
        skills: string[];
    }[];
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
    workExperiences?: WorkExperience[];
    chapters: Chapter[];
    flagshipProjects: FlagshipProject[];
    interactiveBuilds: InteractiveUIItem[];
    hybridGallery: GalleryItem[];
    academicCourses?: string[];
    education: {
        degree: string;
        institution?: string;
        institute?: string;
        shortInstitute?: string;
        department?: string;
        location?: string;
        graduationYear?: string;
        period?: string;
        status?: string;
        thesis?: string;
        cgpa?: string;
        achievements?: string[];
        relevantCourses?: string[];
        link?: string;
    };
    location?: string;
    contact: {
        email?: string;
        github?: string;
        linkedin?: string;
        locationMap?: string;
        cvUrl?: string;
    };
    socialLinks?: {
        github?: string;
        linkedin?: string;
        email?: string;
        twitter?: string;
    };
}

export type Education = EngineerProfile["education"];
export type ShowcaseItem = GalleryItem;
export type PortfolioProfile = EngineerProfile;
export type MotionExperiment = InteractiveUIItem;
export type CaseStudyProject = ProjectCaseStudy & { gallery?: GalleryItem[] };
export type ArchitectureStage = ProjectStage;
