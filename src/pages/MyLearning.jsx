import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  PlayCircle
} from 'lucide-react';

import { courses } from '../courses';
import { Progress } from '../components/Progress';

export function MyLearning({ user, ids, completed }) {
  if (!user) {
    return (
      <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-20 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <GraduationCap size={30} />
        </span>

        <h1 className="mt-5 text-3xl font-black">
          Your learning space
        </h1>

        <p className="mx-auto mt-3 max-w-md text-slate-500">
          Log in to see your enrolled courses and pick up where you left off.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/login"
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold"
          >
            Log in
          </Link>

          <Link
            to="/courses"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
          >
            Explore courses
          </Link>
        </div>
      </main>
    );
  }

  const myCourses = courses.filter((course) => ids.includes(course.id));

  const lessonsDone = myCourses.reduce(
    (total, course) => total + completed(course.id).length,
    0
  );

  const finished = myCourses.filter(
    (course) => completed(course.id).length === course.lessons.length
  ).length;

  return (
    <main className="min-h-screen">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
            Student dashboard
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Welcome back, {user.name.split(' ')[0]}.
          </h1>

          <p className="mt-3 text-slate-500">
            Every lesson is a step forward. Keep your momentum going.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Enrolled courses', myCourses.length, BookOpen],
              ['Lessons completed', lessonsDone, PlayCircle],
              ['Courses completed', finished, GraduationCap]
            ].map(([label, value, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Icon size={21} />
                </span>

                <div>
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-black">Your courses</h2>
            <p className="mt-2 text-sm text-slate-500">
              Continue learning or review completed lessons.
            </p>
          </div>

          <Link
            to="/courses"
            className="text-sm font-bold text-indigo-600"
          >
            Find another course →
          </Link>
        </div>

        {myCourses.length ? (
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {myCourses.map((course) => {
              const count = completed(course.id).length;
              const percentage = Math.round(
                (count / course.lessons.length) * 100
              );

              return (
                <article
                  key={course.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white sm:flex-row"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover sm:h-auto sm:w-44"
                  />

                  <div className="flex min-w-0 flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">
                        {course.category}
                      </span>

                      <span className="text-xs font-semibold text-slate-400">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      By {course.instructor}
                    </p>

                    <div className="mt-5">
                      <Progress value={percentage} />

                      <p className="mt-2 text-xs text-slate-500">
                        {count} of {course.lessons.length} lessons completed
                      </p>
                    </div>

                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700"
                    >
                      {percentage === 100 ? 'Review course' : 'Continue learning'}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <BookOpen size={28} className="mx-auto text-indigo-600" />

            <h2 className="mt-4 text-xl font-bold">
              Ready to start learning?
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              You haven't enrolled in a course yet. Explore the library and
              choose your first learning path.
            </p>

            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
            >
              Browse courses <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}