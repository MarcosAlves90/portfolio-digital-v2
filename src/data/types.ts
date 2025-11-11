export interface Project {
  title: string;
  description: string;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
  skills: string[];
  year?: number;
  company?: string;
}

export interface Experience {
  period: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
}
