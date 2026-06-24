export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  tech: string[];
  year: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  coursework: string;
}
