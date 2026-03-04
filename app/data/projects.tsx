export const projects = [
  {
    slug: "cool-app",
    title: "Cool App",
    overview: "A small web app that solves problem X with React.",
    story: "I built this app to learn Next.js and practice clean architecture.",
    techStack: ["React", "Next.js", "Tailwind", "Node.js"],
    documentation: (
      <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
        <h2>Architecture</h2>
        <p>
          The frontend is built with React and Next.js, while the backend uses Node.js
          API routes. The structure follows a clean architecture approach to
          separate concerns and make the app maintainable.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          npm install && npm run dev
        </pre>

        <h2>Features</h2>
        <p>
          - Dynamic data fetching with Next.js <br />
          - Interactive UI built with TailwindCSS <br />
          - Modular components for easy reuse
        </p>

        <h2>Getting Started</h2>
        <p>Run the following commands to get the project up locally:</p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          git clone https://github.com/myrepo/cool-app
          cd cool-app
          npm install
          npm run dev
        </pre>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="text-yellow-800">
            Note: Make sure Node.js v18+ is installed before running the app.
          </p>
        </div>
      </div>
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
      <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
        <h2>Overview</h2>
        <p>
          Chatbot Platform allows developers to quickly create and deploy AI-powered
          chatbots. It leverages the OpenAI API to provide natural language
          responses.
        </p>

        <h2>Integration</h2>
        <p>
          Easily integrate the platform into your existing web app. Supports
          WebSocket and REST APIs for real-time responses.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          npm install && npm run dev
        </pre>

        <h2>Customization</h2>
        <p>
          Customize the chatbot personality and behavior via configuration files or
          a dashboard. Supports multiple AI models.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="text-yellow-800">
            Tip: Set your OpenAI API key in an `.env` file before starting.
          </p>
        </div>
      </div>
    ),
    projectLink: "https://chatbot-platform.com",
    repoLink: "https://github.com/myrepo/chatbot-platform",
  },
  {
    slug: "task-manager-pro",
    title: "Task Manager Pro",
    overview: "A productivity app to track tasks, deadlines, and projects efficiently.",
    story: "Created to improve team collaboration and task tracking in small projects.",
    techStack: ["React", "Next.js", "Tailwind", "Firebase"],
    documentation: (
      <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
        <h2>Introduction</h2>
        <p>
          Task Manager Pro is a web application that helps teams organize tasks,
          set deadlines, and track progress. It uses Firebase for authentication
          and real-time data sync.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Real-time task updates with Firebase Firestore</li>
          <li>User authentication and role management</li>
          <li>Drag-and-drop interface for task prioritization</li>
        </ul>

        <h2>Setup</h2>
        <p>Follow these steps to run locally:</p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          git clone https://github.com/myrepo/task-manager-pro
          cd task-manager-pro
          npm install
          npm run dev
        </pre>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="text-yellow-800">
            Note: Create a Firebase project and set your credentials in `.env.local`.
          </p>
        </div>
      </div>
    ),
    projectLink: "https://task-manager-pro.com",
    repoLink: "https://github.com/myrepo/task-manager-pro",
  },
  {
    slug: "task-manager-pro",
    title: "Task Manager Pro",
    overview: "A productivity app to track tasks, deadlines, and projects efficiently.",
    story: "Created to improve team collaboration and task tracking in small projects.",
    techStack: ["React", "Next.js", "Tailwind", "Firebase"],
    documentation: (
      <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
        <h2>Introduction</h2>
        <p>
          Task Manager Pro is a web application that helps teams organize tasks,
          set deadlines, and track progress. It uses Firebase for authentication
          and real-time data sync.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Real-time task updates with Firebase Firestore</li>
          <li>User authentication and role management</li>
          <li>Drag-and-drop interface for task prioritization</li>
        </ul>

        <h2>Setup</h2>
        <p>Follow these steps to run locally:</p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          git clone https://github.com/myrepo/task-manager-pro
          cd task-manager-pro
          npm install
          npm run dev
        </pre>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="text-yellow-800">
            Note: Create a Firebase project and set your credentials in `.env.local`.
          </p>
        </div>
      </div>
    ),
    projectLink: "https://task-manager-pro.com",
    repoLink: "https://github.com/myrepo/task-manager-pro",
  },
  {
    slug: "chatbot-platform",
    title: "Chatbot Platform",
    overview: "A platform to build and deploy AI chatbots easily.",
    story: "Started this to explore AI integration in web apps.",
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind"],
    documentation: (
      <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
        <h2>Overview</h2>
        <p>
          Chatbot Platform allows developers to quickly create and deploy AI-powered
          chatbots. It leverages the OpenAI API to provide natural language
          responses.
        </p>

        <h2>Integration</h2>
        <p>
          Easily integrate the platform into your existing web app. Supports
          WebSocket and REST APIs for real-time responses.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
          npm install && npm run dev
        </pre>

        <h2>Customization</h2>
        <p>
          Customize the chatbot personality and behavior via configuration files or
          a dashboard. Supports multiple AI models.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="text-yellow-800">
            Tip: Set your OpenAI API key in an `.env` file before starting.
          </p>
        </div>
      </div>
    ),
    projectLink: "https://chatbot-platform.com",
    repoLink: "https://github.com/myrepo/chatbot-platform",
  },
];