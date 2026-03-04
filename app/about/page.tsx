"use client"

import { motion } from "framer-motion";
import { Code2, Rocket, Briefcase, GraduationCap, Cpu, Database, Globe } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-white py-2 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Engineer by curiosity.
            <span className="block">Builder by passion.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            My journey into tech didn’t start with a job title — it started with
            questions. I’ve always been drawn to understanding how systems
            work, how ideas become products, and how code turns into something
            people actually use. That curiosity evolved into a passion for
            building thoughtful, scalable digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative border-l border-gray-200 pl-7 space-y-16">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[46px] top-1 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <Rocket size={18} />
            </div>
            <h3 className="text-xl font-semibold">The Beginning</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              I began by experimenting — small projects, simple websites, late
              nights debugging. What started as exploration quickly became
              discipline. I realized building software wasn’t just technical —
              it was creative problem-solving.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[46px] top-1 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-xl font-semibold">Studies & Learning</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              I strengthened my foundation through structured study and
              self-driven courses — diving into computer science fundamentals,
              system design, algorithms, and modern web technologies. Learning
              became a continuous habit, not a phase.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[46px] top-1 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <Briefcase size={18} />
            </div>
            <h3 className="text-xl font-semibold">Professional Experience</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Through real-world projects and professional work, I learned the
              importance of collaboration, scalability, and writing maintainable
              systems. Shipping features is important — but designing software
              that lasts is what truly matters.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[46px] top-1 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <Code2 size={18} />
            </div>
            <h3 className="text-xl font-semibold">Projects with Purpose</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Every project I build has intention. Some solve real problems I’ve
              faced. Others push me into unfamiliar territory — new frameworks,
              architectural patterns, or performance challenges. Each one
              represents growth.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-28">
          <h3 className="text-2xl font-semibold tracking-tight">Tech Stack</h3>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <Globe className="mb-4" size={22} />
              <h4 className="font-semibold">Frontend</h4>
              <p className="mt-2 text-sm text-gray-600">
                React, Next.js, TypeScript, Tailwind CSS — focused on clean
                architecture and intuitive UI.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <Database className="mb-4" size={22} />
              <h4 className="font-semibold">Backend</h4>
              <p className="mt-2 text-sm text-gray-600">
                Node.js, APIs, databases, authentication systems, and scalable
                server-side logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <Cpu className="mb-4" size={22} />
              <h4 className="font-semibold">Engineering Mindset</h4>
              <p className="mt-2 text-sm text-gray-600">
                System design, performance optimization, clean code
                principles, and long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}