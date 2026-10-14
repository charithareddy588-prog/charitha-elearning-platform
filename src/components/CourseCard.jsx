
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock3,
  Star,
  Users
} from 'lucide-react';

export function CourseCard({ course }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <Link
        to={`/course-details/${course.id}`}
        className="relative flex h-48 items-end overflow-hidden bg-indigo-700 p-5"
      >
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />

        <span className="relative rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
          {course.category}
        </span>

        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 transition group-hover:bg-indigo-600 group-hover:text-white">
          <ArrowRight size={18} />
        </span>
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 font-semibold">
            {course.level}
          </span>

          <span className="flex items-center gap-1 font-bold text-amber-600">
            <Star size={14} fill="currentColor" />
            {course.rating}
          </span>
        </div>

        <Link to={`/course-details/${course.id}`}>
          <h3 className="mt-4 min-h-[52px] text-lg font-bold leading-snug transition group-hover:text-indigo-700">
            {course.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-500">
          By {course.instructor}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock3 size={15} />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={15} />
            {course.students.toLocaleString()} students
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold">Free</span>

          <Link
            to={`/course-details/${course.id}`}
            className="text-sm font-bold text-indigo-600"
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
