"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface BlogTemplateProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  readTime?: string;
  image?: string;
  content?: React.ReactNode; // JSX or MDX
}

export default function BlogTemplate({
  title,
  subtitle,
  author,
  date,
  readTime,
  content,
}: BlogTemplateProps) {
  return (
    <main className="w-full px-4 py-2 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900 transition"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Header */}
        <div>
          {/* meta */}
          <div className="text-sm text-gray-500 flex gap-3 flex-wrap justify-center mb-4">
            {date && <span className="flex gap-1 items-center"><Calendar />{date}</span>}
            {author && <span className="flex gap-1 items-center"><User />{author}</span>}
            {readTime && <span className="flex gap-1 items-center"><Clock />{readTime}</span>}
          </div>

          {/* title */}
          <h1 className="text-5xl tracking-tight leading-tight">
            {title}
          </h1>

          {/* subtitle */}
          {subtitle && (
            <h2 className="mt-4 text-xl text-gray-600">
              {subtitle}
            </h2>
          )}

        </div>
        {/* Blog Content */}
        <div className="prose max-w-none mx-auto mt-10">{content}</div>
      </div>
    </main>
  );
}