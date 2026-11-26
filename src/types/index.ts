export interface Profile {
  name: string;
  initials: string;
  role: string;
  location: string;
  university: string;
  headline: string;
  seoDescription: string;
  summary: string;
  about: string[];
  email: string | null;
  github: string | null;
  linkedin: string | null;
  cv: string | null;
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  status: 'En curso' | 'Titulado';
}

export interface SkillGroup {
  name: string;
  label: string;
  technologies: string[];
  icon: 'code' | 'globe' | 'database' | 'network' | 'chart' | 'server' | 'wrench';
  size?: 'wide';
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  context: string;
  details: string[];
  technologies: string[];
  illustration: 'automation' | 'data' | 'web';
}
