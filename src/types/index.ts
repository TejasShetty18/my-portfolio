export interface Experience {
    company: string,
    role: string,
    period: string,
    description: string[]
}

export interface Projects {
    title: string,
    description: string,
    techStack: string[],
    link: string
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface Education {
    college: string,
    degree: string,
    period: string,
    percent: string
}

export interface Certification {
    title: string;
    issuer: string;
    link: string;
    icon?: string; // Optional: to handle different provider logos logic
}