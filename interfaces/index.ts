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

interface IExperience {
    position: string;
    company: string;
    website?: string;
    description: string[];
    startDate: string;
    endDate?: string;
}

interface IEducation {
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

interface IData {
    about: IAbout;
    user: IUser;
    skills: ISkill[];
    projects: IProject[];
    experience: IExperience[];
    education: IEducation[];
}
