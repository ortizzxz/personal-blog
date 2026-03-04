export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
          404
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            Go Home
          </a>

          <a
            href="/blogs"
            className="px-6 py-3 rounded-2xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
          >
            Read Blog
          </a>
        </div>

        <div className="mt-16 text-sm text-gray-400">
          <p>Lost in the internet?</p>
        </div>
      </div>
    </div>
  );
}
