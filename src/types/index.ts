export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string; // ISO date string YYYY-MM-DD
  excerpt: string;
  content: string; // Markdown
  author: Author;
  readingTime?: string;
  featured?: boolean;
  coverImage?: string;
}
