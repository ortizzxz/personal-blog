import { Cpu, Database, Monitor } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-white py-2 px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-4">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Engineer by curiosity.
            <span className="block">Developer by passion.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            My journey into tech didn't start with pursuing a degree - actually it started with
            questions. I've always been drawn to understanding how systems
            work, how ideas become products, and how code turns into something
            people actually use. That curiosity evolved into a passion for
            building thoughtful solutions, and, having fun while doing so.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl mb-4 font-semibold tracking-tight">Tech Stack</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <div className="flex gap-2 items-center">
                <Monitor size={22} />
                <h4 className="font-semibold">Frontend</h4>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                React, Angular, Next.js, TypeScript, Tailwind CSS - focused on clean
                architecture and very intuitive UI.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <div className="flex gap-2 items-center">
              <Database size={22} />
              <h4 className="font-semibold">Backend</h4>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Java + Spring Boot, Node.js + Sequelize, APIs, databases, authentication systems, and scalable
                server-side logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
              <div className="flex gap-2 items-center">
                <Cpu size={22} />
                <h4 className="font-semibold">Engineering Mindset</h4>
              </div>
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