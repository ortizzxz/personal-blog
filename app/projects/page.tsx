"use client"
import Link from "next/link";
import { project_entries } from "../project-entries";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Wait for hydration
    setIsHydrated(true);
  }, []);

  const skeletons = Array(6).fill(0); // Number of skeleton cards

  return (
    <main className="w-full  px-6 py-2">
      <h1 className="text-5xl mb-8 text-center">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isHydrated
          ? project_entries.map((project) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-transform duration-300"
                >
                  <h2 className="text-xl mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.overview}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))
          : skeletons.map((_, index) => (
              <div
                key={index}
                className="animate-pulse p-6 bg-gray-100 border border-gray-200 rounded-2xl h-60"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}