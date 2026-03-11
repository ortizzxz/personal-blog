"use client";
import Link from "next/link";
import { project_entries } from "./project-entries";
import { Linkedin, Github } from "lucide-react";
import { blog_entries } from "./blog-entries";

export default function Home() {
  const featuredProjects = project_entries;
  const featuredBlogs = [...blog_entries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-start py-2 bg-white gap-8 mx-auto px-8">
        {/* Hero */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-gray-400">Hey there! I'm</p>
          <h1 className="mt-2 text-5xl md:text-6xl tracking-tight leading-tight">
            Jesús Ortiz
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl text-gray-700">
            I like building clean and scalable full stack solutions.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I focus on writing clean, well-structured code that is easy to maintain and scalable.
            I also believe development should be fun. Currently, I work as a Full Stack Developer and enjoy discovering and experimenting with new technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-80 transition"
            >
              View Projects
            </Link>
            <span
              onClick={() => (window.location.href = '/about')}
              className="px-6 py-3 rounded-2xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
            >
              About Me
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/jesusdortizreyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ortizzxz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Latest Blog Entries */}
        <div
          className="flex-1 max-w-md"
        >
          <h3 className="text-2xl font-medium ">Blog Entries</h3>
          <div className="flex flex-col gap-4">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.slug}
                onClick={() => (window.location.href = `/blog/${blog.slug}`)}
                className="p-6 border border-gray-200 rounded-2xl cursor-pointer 
                 w-full md:w-80 lg:w-84 bg-gray-50
                 hover:shadow-md hover:border-gray-300
                 transform transition-transform duration-300 ease-in-out"
              >
                <h4 className="text-lg">{blog.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{blog.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Featured Projects */}
      <div className="w-full mx-auto px-8 my-1 mb-4">
        <h3 className="text-3xl font-medium tracking-tight mb-4">Personal Projects</h3>

        <div className="flex flex-wrap gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              onClick={() => (window.location.href = `/projects/${project.slug}`)}
              className="p-6 border border-gray-200 rounded-2xl cursor-pointer
              w-full md:w-80 lg:w-84 bg-gray-50
              hover:shadow-md hover:border-gray-300
              transform transition-transform duration-300 ease-in-out"
            >
              <h4 className="text-lg font-medium">{project.title}</h4>

              <p className="mt-2 text-gray-600 text-sm">
                {project.overview}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-gray-200 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}