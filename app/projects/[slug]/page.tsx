// /projects/[slug]/page.tsx
import ProjectTemplate from "@/app/template/ProjectTemplate";
import { projects } from "../../data/projects";
import { use } from "react"; // special React 18+ hook for Usable objects

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = use(params);  
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return <ProjectTemplate {...project} />;
}