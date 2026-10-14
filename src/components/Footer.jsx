import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="text-xl font-extrabold">
            learnova<span className="text-indigo-600">.</span>
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
            Practical learning for curious minds. Build skills, learn at your
            pace, and make your next move with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold">Explore</h3>

          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <Link to="/courses" className="hover:text-indigo-600">
              All courses
            </Link>
            <Link to="/my-learning" className="hover:text-indigo-600">
              My learning
            </Link>
            <Link to="/register" className="hover:text-indigo-600">
              Create an account
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Learn at your pace</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Short lessons, practical projects, and progress you can track every
            step of the way.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Learnova. Built for lifelong learners.
      </div>
    </footer>
  );
}