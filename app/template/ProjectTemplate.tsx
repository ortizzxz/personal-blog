"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectTemplateProps {
  title: string;
  subtitle?: string;
  overview: string;
  story: string;
  techStack: string[];
  documentation: React.ReactNode; // You can pass JSX for code snippets, diagrams, etc.
  projectLink?: string;
  repoLink?: string;
}

export default function ProjectTemplate({
  title,
  subtitle,
  overview,
  story,
  techStack,
  documentation,
  projectLink,
  repoLink,
}: ProjectTemplateProps) {
  return (
    <main className="w-full px-4 py-2 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900 transition"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl  tracking-tight leading-tight text-center">
            {title}
          </h1>
          {subtitle && (
            <h2 className="mt-2 text-2xl font-semibold text-gray-700 text-center">
              {subtitle}
            </h2>
          )}
          <p className="mt-6 text-lg text-gray-600 text-center">{overview}</p>

          {/* links */}
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
              >
                Visit Project
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
              >
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-3xl mb-1 text-center">The Story</h3>
          <p className="text-gray-600 leading-relaxed text-center">{story}</p>
        </motion.section>

        {/* Technical Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h3 className="text-3xl mb-1 text-center">
            Technical Documentation
          </h3>

          {/* tech stack pills */}
          <div className="mb-6 flex justify-center flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Documentation Content */}
          <div className="prose max-w-none mx-auto">{documentation}</div>
        </motion.section>
      </div>
    </main>
  );
}