import Link from "next/link";
import { projects } from "../data/projects";  

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="w-72 p-6 border rounded-2xl hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{project.title}</h2>
            <p className="mt-2 text-gray-600 text-sm">{project.overview}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}