import { blog_entries } from "@/app/blog-entries";
import BlogTemplate from "@/app/template/BlogTemplate";
import { Suspense } from "react";

interface PageProps {
  params: { slug: string };
}


export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = blog_entries.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <Suspense>
      <BlogTemplate {...project} />
    </Suspense>
  );
}