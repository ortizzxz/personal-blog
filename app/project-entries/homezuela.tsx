import React from "react";

const project1 = {
  slug: "homezuela",
  title: "Homezuela",
  overview: "The first real property listing site for Venezuela.",
  story: "I always believed - and still do - software must serve a purpose to a real problem. In my home country, Venezuela, digitalization is far from reachable, and that's easily noticeable when browsing real estate: you find Facebook marketplace listings, WhatsApp as a public catalog, X Posts, Instagram accounts, but not a single proper descentralized real estate site. That's where I believe software should intervene to improve a current situation.",
  techStack: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind", "Sequelize", "Node.js"],
  documentation: (
    <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
      <h2>Project Overview</h2>
      <p>
      Homezuela is a comprehensive real estate platform designed to serve as a first-of-its-kind property listing site for Venezuela — combining curated property listings with insightful local content, market trends, and blog articles tailored to buyers, sellers, and investors.
        While the Venezuelan real estate market has many localized listing sites and aggregator tools, Homezuela aims to unify listings in one place and bring modern search and insights to users.
      </p>

      <h2>Role & Contributions</h2>
      <p>
        I'm building Homezuela as a full-stack application end-to-end, owning every part of the stack and workflow:
        <ul className="list-disc ml-6">
          <li>
            Frontend: Created a responsive, SEO-optimized UI using React and Next.js with Tailwind for modern, utility-first styling.
          </li>
          <li>
            Backend: APIs development will be done using Node.js with Sequelize ORM and data aggregation for listing information (from public sources and internal workflows).
          </li>
          <li>
            Deployment & Hosting: Yet TBD (static optimization in Next.js, serverless APIs where needed).
          </li>
        </ul>
      </p>

      <h2>Key Features</h2>
      <ul className="list-disc ml-6">
        <li>Search and filter property listings across Venezuela's major regions and cities (similar to other market portals).</li>
        <li>Integrated blog and local insights to help users understand real estate trends, buying tips, and regional differences (e.g., how prices have shifted or where demand is rising).  </li>
        <li>Responsive layouts optimized for both desktop and mobile experiences.</li>
      </ul>

      <h2>Live Status & Development</h2>
      <p>
        Homezuela is currently live for its preview and under development. Instead of just a technical demo, it is a property platform that reflects the real state of the development of the website — a market where multiple listing sites and real estate resources exist but are often fragmented. 
      </p>

      <h2>Highlights & Learnings</h2>
      <p>
        Building this platform helped deepen my expertise in:
        <ul className="list-disc ml-6">
          <li>Architecting full-stack apps with modern frameworks like Next.js with Sequelize.</li>
          <li>Dig deeper into Frontend development, specially UI designing.</li>
          <li>Handling large datasets and designing intuitive filters for property listings.</li>
          <li>Deploying a live, scalable SaaS-style product.</li>
        </ul>
      </p>

      <h2>Links</h2>
      <p>
        <a href="https://homezuela.vercel.app/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Live Website</a> |
        <a href="https://github.com/ortizzxz/homezuela" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">Source Code</a>
      </p>
    </div>
  ),
  projectLink: "https://homezuela.vercel.app/",
  repoLink: "https://github.com/ortizzxz/homezuela",
};

export default project1;