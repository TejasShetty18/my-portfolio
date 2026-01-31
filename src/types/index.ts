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