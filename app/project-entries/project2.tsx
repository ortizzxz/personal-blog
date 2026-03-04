import React from "react";

const project2 = {
  slug: "task-manager-app",
  title: "Task Manager App",
  overview: "A productivity app with drag-and-drop tasks and dark mode.",
  story: "Built this to improve task management and workflow tracking.",
  techStack: ["React", "Redux", "Node.js", "MongoDB", "Express"],
  documentation: (
    <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
      <h2>Features</h2>
      <ul>
        <li>Drag-and-drop task management</li>
        <li>Dark mode toggle</li>
        <li>Persistent storage with MongoDB</li>
        <li>Realtime updates using Express and WebSockets</li>
      </ul>

      <h2>Getting Started</h2>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
        npm install
        npm run dev
      </pre>

      <h2>Tips</h2>
      <p>
        Use the dashboard to quickly create projects, assign tasks, and monitor
        progress.
      </p>
    </div>
  ),
  projectLink: "https://task-manager-app.com",
  repoLink: "https://github.com/myrepo/task-manager-app",
};


export default project2;