export const projects = [
  {
    slug: "cool-app",
    title: "Cool App",
    overview: "A small web app that solves problem X with React.",
    story: "I built this app to learn Next.js and practice clean architecture.",
    techStack: ["React", "Next.js", "Tailwind", "Node.js"],
    documentation: (
      <>
        <h4>Architecture</h4>
        <p>React frontend with API routes in Next.js and a Node.js backend.</p>
        <pre className="bg-gray-100 p-4 rounded">npm install && npm run dev</pre>
      </>
    ),
    projectLink: "https://liveproject.com",
    repoLink: "https://github.com/myrepo/cool-app",
  },
  {
    slug: "chatbot-platform",
    title: "Chatbot Platform",
    overview: "A platform to build and deploy AI chatbots easily.",
    story: "Started this to explore AI integration in web apps.",
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind"],
    documentation: (
      <>
        <h4>API Usage</h4>
        <p>Integrates OpenAI API for real-time chatbot responses.</p>
        <pre className="bg-gray-100 p-4 rounded">npm install && npm run dev</pre>
      </>
    ),
    projectLink: "https://chatbot-platform.com",
    repoLink: "https://github.com/myrepo/chatbot-platform",
  },
];