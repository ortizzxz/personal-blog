import ProjectTemplate from "@/app/template/ProjectTemplate";
import { project_entries } from "@/app/project-entries";
import { Suspense } from "react";

interface PageProps {
  params: { slug: string };
}


export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = project_entries.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <Suspense>
      <ProjectTemplate {...project} />
    </Suspense>
  );
}