import React from "react";

const fodmap = {
  slug: "fodmap-searcher",
  title: "FODMAP Searcher",
  overview:
    "A browser that helps you look for a specific ingredient or food and displays FODMAP index and nutritional facts.",
  story: "The best solutions are the ones that solve a real problem - and this one couldn't be more real.\nA couple of years ago I went through an episode of IBS, to which doctors told me to strictly follow a low FODMAP diet.\nYes, I did not have any clue what that meant and when I tried to search online for low FODMAP food or recipes... NOTHING (in Spanish) so I knew (as a good software dev) I had to do something to change that",
  techStack: [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "MySQL",
    "Railway / Vercel / Render",
  ],
  documentation: (
    <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-3 mb-2">
      <h2 className="font-medium">Project Overview</h2>
      <p>
        FODMAP Searcher was a full-stack application I designed and built to solve a real problem: finding reliable FODMAP information in Spanish.
        The app allows users to search for ingredients or foods and instantly see both their FODMAP index and nutritional facts.
      </p>

      <h2 className="font-medium">Role & Contributions</h2>
      <p>
        I was responsible for the entire stack, including:
        <ul className="list-disc ml-6">
          <li>Frontend using React and TypeScript with a clean, responsive UI.</li>
          <li>Backend services with Java and Spring Boot for API orchestration and data handling.</li>
          <li>Database design and management using MySQL.</li>
          <li>Deployment and orchestration using Railway, Vercel, and Render to ensure smooth, scalable hosting.</li>
        </ul>
        I managed everything from database schema design to API development, frontend integration, and deployment pipelines.
      </p>

      <h2 className="font-medium">Key Features</h2>
      <ul className="list-disc ml-6">
        <li>Search for ingredients or foods and display FODMAP index and nutritional data.</li>
        <li>Real-time filtering and data visualization for better user experience.</li>
        <li>CLI scripts for database cleanup and maintenance (fully tested with Jest).</li>
      </ul>

      <h2 className="font-medium">Project Status</h2>
      <p>
        This project is no longer actively maintained, but it was a complete full-stack implementation that demonstrates my ability to handle every part of a product lifecycle—from idea to deployment.
      </p>

      <h2 className="font-medium">Highlights & Learnings</h2>
      <p>
        This project taught me valuable lessons in:
        <ul className="list-disc ml-6">
          <li>End-to-end system design and orchestration.</li>
          <li>Integrating multiple technologies in a cohesive workflow.</li>
          <li>Handling real user problems and turning them into working software solutions.</li>
        </ul>
      </p>

      <h2 className="font-medium">Links</h2>
      <p>
        <a href="https://github.com/ortizzxz/HostalManagementBackEnd" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">Backend Source Code</a>
        <a href="https://github.com/ortizzxz/HostalManagementFrontEnd" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">Frontend Source Code</a>
      </p>
    </div>
  ),
  projectLink: "https://github.com/ortizzxz/HostalManagementBackEnd",
  repoLink: "https://github.com/ortizzxz/HostalManagementBackEnd",
};

export default fodmap;