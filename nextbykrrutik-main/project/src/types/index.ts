export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  fullDescription?: string;
  technologies?: string[];
  outcomes?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  preview: string;
  date: string;
  readTime: string;
  fullContent?: string;
}

export interface NavItem {
  id: string;
  label: string;
  section: string;
}