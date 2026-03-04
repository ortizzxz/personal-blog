"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "./data/projects";
import { Linkedin, Github } from "lucide-react";

export default function Home() {
  // Get the last three projects
  const featuredProjects = projects.slice(-3).reverse(); // reverse so newest first

  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-start py-2 px-4 bg-white gap-8 max-w-7xl mx-auto">
        {/* Hero and Developer Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400">Hey, I'm</p>

          <h1 className="mt-2 text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Jesús Ortiz
          </h1>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-700">
            I like building clean and scalable full stack solutions.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Focused on performance, developer experience, and modern web architecture. I enjoy turning complex problems into elegant solutions and continuously exploring new technologies.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="#about"
              className="px-6 py-3 rounded-2xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              About Me
            </Link>
          </div>

          {/* Developer Highlights */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Latest Blog Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 max-w-md"
        >
          <h3 className="text-2xl font-semibold mb-6">Latest Blog Entries</h3>
          <div className="flex flex-col gap-4">
            <Link
              href="#blog"
              className="p-4 border rounded-2xl hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg">Understanding React Suspense</h4>
              <p className="mt-1 text-gray-600 text-sm">
                A deep dive into how Suspense improves UX and performance in React apps.
              </p>
            </Link>
            <Link
              href="#blog"
              className="p-4 border rounded-2xl hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg">Scaling Node.js APIs</h4>
              <p className="mt-1 text-gray-600 text-sm">
                Techniques and patterns for building scalable and maintainable Node.js backends.
              </p>
            </Link>
            <Link
              href="#blog"
              className="p-4 border rounded-2xl hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg">Modern CSS Grid Layouts</h4>
              <p className="mt-1 text-gray-600 text-sm">
                Practical tips for building responsive layouts with CSS Grid in 2026.
              </p>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Featured Projects */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 my-2"
      >
        <h3 className="text-2xl font-semibold tracking-tight mb-6">Featured Projects</h3>

        <div className="flex flex-wrap justify-center gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="p-6 border rounded-2xl hover:shadow-lg transition w-full md:w-80 lg:w-84"
            >
              <h4 className="font-semibold text-lg">{project.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{project.overview}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}