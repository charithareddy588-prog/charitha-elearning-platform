import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, BookOpen } from 'lucide-react';

import { courses, categories } from '../courses';
import { CourseCard } from '../components/CourseCard';

export function Courses() {
  const [params] = useSearchParams();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(
    params.get('category') || 'All categories'
  );
  const [level, setLevel] = useState('All levels');
  const [sort, setSort] = useState('recommended');

  const filtered = useMemo(() => {
    let list = courses.filter((course) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        `${course.title} ${course.description} ${course.instructor} ${course.category}`
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === 'All categories' || course.category === category;

      const matchesLevel =
        level === 'All levels' || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });

    if (sort === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    if (sort === 'title') {
      list = [...list].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return list;
  }, [search, category, level, sort]);

  function resetFilters() {
    setSearch('');
    setCategory('All categories');
    setLevel('All levels');
    setSort('recommended');
  }

  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
            Course library
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Explore courses
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Find a course that fits your goals, interests, and schedule.
          </p>

          <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:border-indigo-400 focus-within:bg-white">
            <Search size={20} className="shrink-0 text-slate-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search courses, skills or instructors..."
              className="w-full bg-transparent text-sm outline-none"
            />

            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
          <select
            aria-label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            aria-label="Level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            {['All levels', 'Beginner', 'Intermediate', 'Advanced'].map(
              (item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </select>

          <select
            aria-label="Sort courses"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            <option value="recommended">Sort: Recommended</option>
            <option value="rating">Highest rated</option>
            <option value="title">Course name A–Z</option>
          </select>

          <button
            onClick={resetFilters}
            className="rounded-xl px-3 py-2 text-sm font-bold text-indigo-600 hover:bg-indigo-50"
          >
            Reset filters
          </button>
        </div>

        <p className="mb-6 text-sm text-slate-500">
          Showing{' '}
          <b className="text-slate-900">{filtered.length}</b> courses
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <BookOpen size={28} className="mx-auto text-indigo-600" />

            <h2 className="mt-4 text-xl font-bold">
              No courses found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try another search or reset your filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}