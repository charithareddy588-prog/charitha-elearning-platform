import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Palette,
  BriefcaseBusiness,
  TrendingUp,
  Star
} from 'lucide-react';

import { courses } from '../courses';
import { CourseCard } from '../components/CourseCard';

export function Home() {
  const categories = [
    { name: 'Development', icon: Code2 },
    { name: 'Design', icon: Palette },
    { name: 'Business', icon: BriefcaseBusiness },
    { name: 'Marketing', icon: TrendingUp }
  ];

  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-3.5 py-2 text-xs font-bold text-indigo-700 shadow-sm">
              ✦ Learn something that moves you forward
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Your next skill starts{' '}
              <span className="text-indigo-600">right here.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover practical courses taught by people who do the work.
              Learn at your own pace and turn curiosity into confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-indigo-700"
              >
                Explore courses <ArrowRight size={17} />
              </Link>

              <Link
                to="/my-learning"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700"
              >
                <BookOpen size={17} /> My learning
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              <span>✓ Learn at your pace</span>
              <span>✓ Beginner friendly</span>
              <span>✓ Track your progress</span>
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-indigo-100 pt-6">
              <Star size={20} className="text-amber-400" fill="currentColor" />
              <div>
                <p className="text-sm font-extrabold">4.9/5 average rating</p>
                <p className="text-xs text-slate-500">
                  From our learning community
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-indigo-100">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
              alt="Students learning together"
              className="h-[300px] w-full rounded-[1.5rem] object-cover sm:h-[390px]"
            />

            <div className="relative mx-3 -mt-12 max-w-[260px] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <BookOpen size={20} />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Your next chapter</p>
                  <p className="text-sm font-extrabold">Keep learning!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
          Explore by interest
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight">
          Find your learning path
        </h2>

        <p className="mt-3 text-slate-500">
          Start with a topic that inspires you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to={`/courses?category=${encodeURIComponent(name)}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </span>

              <span className="flex-1">
                <span className="block font-bold">{name}</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Explore courses
                </span>
              </span>

              <ArrowRight
                size={17}
                className="text-slate-300 group-hover:text-indigo-600"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-100/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
                Handpicked for you
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Popular courses
              </h2>
              <p className="mt-3 text-slate-500">
                Useful skills, clear lessons, real momentum.
              </p>
            </div>

            <Link
              to="/courses"
              className="text-sm font-bold text-indigo-600"
            >
              See all courses →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-[2rem] bg-indigo-600 p-8 text-white sm:p-10 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-indigo-200">
              Your next chapter
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Small lessons. Big possibilities.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100">
              Choose a course, make a little progress each day, and build
              skills that stay with you.
            </p>
          </div>

          <div className="md:text-right">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700"
            >
              Start learning <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}