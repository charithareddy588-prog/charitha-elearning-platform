import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
        Error 404
      </p>

      <h1 className="mt-3 text-3xl font-black">
        Page not found
      </h1>

      <p className="mt-3 text-slate-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700"
      >
        Back to home
      </Link>
    </main>
  );
}