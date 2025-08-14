export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}