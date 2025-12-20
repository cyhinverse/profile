export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  link?: string; // External link
  content?: string; // Detailed content for the detail page
  tags?: string[];
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content?: string; // HTML or Markdown content
}

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'zh';
