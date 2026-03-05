import React from "react";

const project2 = {
  slug: "agro-manager",
  title: "AgroManager",
  overview: "A management web application orientated towards the agro industry and farm owners.",
  story: "I grew up spending my summers on a farm, and that experience stayed with me. When it came time to choose a profession, I ended up pursuing computer science - but those farm roots never really left. My closest friends often joke that my two biggest passions sit at opposite extremes. That's when I realized: technology doesn't have to be far removed from farming. That idea became AgroManager - a web solution designed to help farmers digitalize their assets and manage their operations more easily.",
  techStack: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind"],
  documentation: (
  <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
    <h2>Project Overview</h2>
    <p>
      AgroManager is a full-stack management platform designed to help farm owners and agro-industry operators digitize and organize their operations. 
      Inspired by my upbringing around farm life, this project combines agricultural knowledge with modern web technologies to bring structure, visibility, and efficiency to farm management.
    </p>

    <h2>Vision</h2>
    <p>
      Many farms still rely heavily on manual tracking, spreadsheets, or informal processes. 
      AgroManager aims to centralize operational data - tasks, assets, workflows, and progress - into a single digital dashboard built specifically for agricultural environments.
    </p>

    <h2>Role & Architecture</h2>
    <p>
      I'm currently designing and building the entire application end-to-end:
      <ul className="list-disc ml-6">
        <li>
          Frontend: Built a dynamic UI using React + Node.js for predictable state management across complex dashboards and SSR.
        </li>
        <li>
          Backend: The site will serve RESTful APIs and the backend stack is yet to be assigned. The strongest suit would be Node.js and Express to manage business logic and data flow and share TS types.
        </li>
        <li>
          Database: Modeled flexible schemas using MySQL to handle evolving farm structures, tasks, animals and operational records.
        </li>
      </ul>
      From database schema design to frontend UX decisions and deployment strategy, I'm currently orchestrating the entire stack.
    </p>

    <h2>Core Features</h2>
    <ul className="list-disc ml-6">
      <li>Dashboard for tracking projects, assignments, and productivity.</li>
      <li>Persistent data storage with MySQL.</li>
      <li>Easy to use UI and UX planned for people with little technology exposure.</li>
    </ul>

    <h2>Technical Highlights</h2>
    <ul className="list-disc ml-6">
      <li>Designed with scalability in mind for multi-farm users and multi-tenant environments.</li>
      <li>ACID principles and proper database normalization. Parallel queries.</li>
    </ul>

    <h2>Project Status</h2>
    <p>
      AgroManager is currently under development - the last update was the finishal of a proper initial database schema and database seeding, as well as the initial UI design. 
      The site is planned to be live once a MVP is reached.
    </p>

    <h2>Links</h2>
    <p>
      <a href="https://agro-rose.vercel.app/" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">
        Live Site
      </a>
       {" "}|
      <a href="https://github.com/ortizzxz/agro" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">
        Source Code
      </a>
    </p>
  </div>
),
  projectLink: "https://agro-rose.vercel.app/",
  repoLink: "https://github.com/ortizzxz/agro",
};


export default project2;