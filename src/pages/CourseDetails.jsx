
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  PlayCircle,
  Star,
  Users
} from 'lucide-react';

import { courses } from '../courses';
import { CourseCard } from '../components/CourseCard';
import { Progress } from '../components/Progress';

export function CourseDetails({
  user,
  isEnrolled,
  enroll,
  completed,
  toggleLesson,
  notify
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  // No course ID: display a dedicated course selection page.
  if (!id) {
    return (
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"
            >
              <ArrowLeft size={16} />
              Browse all courses
            </Link>

            <p className="mt-7 text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
              Course information
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Course Details
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore course descriptions, instructors, skill levels,
              curriculum, and learning outcomes. Choose a course to view
              the full details and enroll.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black">
                Available courses
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {courses.length} courses available to explore
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600"
            >
              Search and filter courses
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-black">
          Course not found
        </h1>

        <p className="mt-3 text-slate-500">
          This course does not exist or may have been removed.
        </p>

        <Link
          to="/course-details"
          className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
        >
          Browse course details
        </Link>
      </main>
    );
  }

  const enrolled = isEnrolled(course.id);
  const doneLessons = completed(course.id);

  const percentage = Math.round(
    (doneLessons.length / course.lessons.length) * 100
  );

  function handleEnroll() {
    if (!user) {
      navigate('/login', {
        state: {
          from: {
            pathname: `/course-details/${course.id}`
          }
        }
      });
      return;
    }

    const success = enroll(course.id);

    if (success) {
      notify(
        enrolled
          ? 'You are already enrolled in this course.'
          : 'You have enrolled successfully!'
      );
    }
  }

  function handleLesson(index) {
    if (!enrolled) {
      notify('Please enroll in this course first.');
      return;
    }

    toggleLesson(course.id, index);
  }

  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            to="/course-details"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <ArrowLeft size={16} />
            All course details
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1.5 text-xs font-bold text-indigo-200">
                {course.category}
              </span>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 leading-7 text-slate-300">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Star
                    size={16}
                    className="text-amber-400"
                    fill="currentColor"
                  />
                  {course.rating} rating
                </span>

                <span className="flex items-center gap-1.5">
                  <Users size={16} />
                  {course.students.toLocaleString()} students
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 size={16} />
                  {course.duration}
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-300">
                Instructor:{' '}
                <strong className="text-white">
                  {course.instructor}
                </strong>
                {' · '}
                {course.role}
              </p>

              <button
                onClick={handleEnroll}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-indigo-400"
              >
                {enrolled ? 'Continue learning' : 'Enroll for free'}
                <ArrowRight size={17} />
              </button>
            </div>

            <img
              src={course.image}
              alt={course.title}
              className="h-64 w-full rounded-3xl object-cover shadow-2xl sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <h2 className="text-2xl font-black">
            What you'll learn
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <p className="text-sm leading-6 text-slate-600">
                  {outcome}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-black">
            Course curriculum
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {course.lessons.length} lessons · {course.duration}
          </p>

          <div className="mt-6 space-y-3">
            {course.lessons.map((lesson, index) => {
              const isDone = doneLessons.includes(index);

              return (
                <div
                  key={lesson}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {isDone ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <PlayCircle size={20} />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">
                      {index + 1}. {lesson}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Lesson {index + 1}
                    </p>
                  </div>

                  <button
                    onClick={() => handleLesson(index)}
                    disabled={!enrolled}
                    className={`rounded-lg px-3 py-2 text-xs font-bold ${
                      isDone
                        ? 'bg-emerald-50 text-emerald-700'
                        : enrolled
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {isDone ? 'Completed' : 'Mark done'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <GraduationCap size={25} />
          </span>

          <h2 className="mt-4 text-xl font-black">
            Your learning plan
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Learn at your own pace and track your progress through every lesson.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
            <BookOpen size={18} />
            {course.lessons.length} lessons
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
            <Clock3 size={18} />
            {course.duration}
          </div>

          <div className="mt-6">
            {enrolled ? (
              <>
                <Progress value={percentage} />

                <p className="mt-2 text-xs text-slate-500">
                  {doneLessons.length} of {course.lessons.length} lessons completed
                </p>
              </>
            ) : (
              <p className="rounded-xl bg-indigo-50 p-3 text-sm text-indigo-700">
                Enroll to track your progress and mark lessons as completed.
              </p>
            )}
          </div>

          <button
            onClick={handleEnroll}
            className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700"
          >
            {enrolled ? 'Continue learning' : 'Enroll for free'}
          </button>
        </aside>
      </section>
    </main>
  );
}
