import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Blog {
  slug: string;
  title: string;
  overview: string;
  techStack?: string[];
  projectLink?: string;
  repoLink?: string;
  content: string;
}

const blogsDir = path.join(process.cwd(), "app/assets/blog");

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const fullPath = path.join(blogsDir, file);
    const source = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(source);
    return {
      slug: data.slug || file.replace(/\.mdx$/, ""),
      title: data.title,
      overview: data.overview,
      techStack: data.techStack,
      projectLink: data.projectLink,
      repoLink: data.repoLink,
      content,
    };
  });
}

export function getBlogBySlug(slug: string): Blog | null {
  return getAllBlogs().find((b) => b.slug === slug) || null;
}