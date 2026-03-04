import React from "react";

const databaseCleaner = {
  slug: "database-cleaner",
  title: "Database Cleaner",
  overview:
    "A tool to automate cleanup and maintenance of databases, removing old, duplicate, or orphaned records safely.",
  story:
    "I built this to improve database performance and reduce storage costs while ensuring data integrity in large systems.",
  techStack: [
    "Node.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Jest",
    "Tailwind CSS",
  ],
  documentation: (
    <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-2">
      <h2>Overview</h2>
      <p>
        Database Cleaner automates the process of identifying and removing redundant or obsolete data.
        It supports multiple databases and can be integrated into your existing backend workflows.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
        npm install
        npm run dev
      </pre>

      <h2>Configuration</h2>
      <p>
        Configure which tables or records should be cleaned via a simple JSON config file:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
{`{
  "tables": [
    { "name": "sessions", "olderThanDays": 30 },
    { "name": "logs", "olderThanDays": 90 }
  ],
  "dryRun": true
}`}
      </pre>

      <h2>Usage</h2>
      <p>
        Run the CLI to perform a dry run and see what records would be removed:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg shadow-sm overflow-x-auto">
        npm run clean -- --dry
      </pre>

      <h2>Testing</h2>
      <p>
        All cleaning scripts are fully tested using Jest. You can add your own test scenarios
        to ensure safe operation before running on production databases.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <p className="text-yellow-800">
          Tip: Always run in <strong>dryRun</strong> mode first to prevent accidental data loss!
        </p>
      </div>
    </div>
  ),
  projectLink: "https://database-cleaner.example.com",
  repoLink: "https://github.com/myrepo/database-cleaner",
};

export default databaseCleaner;