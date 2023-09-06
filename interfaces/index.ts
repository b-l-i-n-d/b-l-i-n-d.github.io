export interface IAbout {
    description: string;
    image: string;
    imageCaption: string;
    yearsOfExperience: number;
}

export interface IUser {
    name: string;
    shortDescription: string;
    heroImage: string;
    titles: string[];
}

export interface ISkill {
    name: string;
    image: string;
    category: string;
    invert?: boolean;
}

export interface IProject {
    title: string;
    description: string;
    image: string;
    carousel?: string[];
    tags: string[];
    links: {
        github?: string;
        live?: string;
    };
}

export interface IExperience {
    logo: string;
    position: string;
    company: string;
    website?: string;
    desc: string[];
    startDate: string;
    endDate?: string;
}

export interface IEducation {
    logo: string;
    institute: string;
    website?: string;
    degree: string;
    department: string;
    grade: {
        obtained: string;
        total: string;
    };
    startDate: string;
    endDate?: string;
}

export interface IData {
    about: IAbout;
    user: IUser;
    skills: ISkill[];
    projects: IProject[];
    experiences: IExperience[];
    educations: IEducation[];
}
