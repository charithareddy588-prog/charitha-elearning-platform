import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { MyLearning } from './pages/MyLearning';
import { AuthPage } from './pages/AuthPage';
import { Help } from './pages/Help';
import { NotFound } from './pages/NotFound';

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function seedDemoAccount() {
  const users = readStorage('learnova_users', []);

  const alreadyExists = users.some(
    (user) => user.email === 'demo@learnova.dev'
  );

  if (!alreadyExists) {
    users.push({
      id: 'demo-user',
      name: 'Demo Student',
      email: 'demo@learnova.dev',
      password: 'learnova123'
    });

    localStorage.setItem(
      'learnova_users',
      JSON.stringify(users)
    );
  }
}

function App() {
  const [user, setUser] = useState(() =>
    readStorage('learnova_current_user', null)
  );

  const [enrollments, setEnrollments] = useState(() =>
    readStorage('learnova_enrollments', {})
  );

  const [progress, setProgress] = useState(() =>
    readStorage('learnova_progress', {})
  );

  const [toast, setToast] = useState('');
  const location = useLocation();

  useEffect(() => {
    seedDemoAccount();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'learnova_enrollments',
      JSON.stringify(enrollments)
    );
  }, [enrollments]);

  useEffect(() => {
    localStorage.setItem(
      'learnova_progress',
      JSON.stringify(progress)
    );
  }, [progress]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function notify(message) {
    setToast(message);

    window.setTimeout(() => {
      setToast('');
    }, 2600);
  }

  function signIn(email, password) {
    const users = readStorage('learnova_users', []);

    const found = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!found) {
      return {
        ok: false,
        message: 'Email or password is incorrect.'
      };
    }

    const safeUser = {
      id: found.id,
      name: found.name,
      email: found.email
    };

    localStorage.setItem(
      'learnova_current_user',
      JSON.stringify(safeUser)
    );

    setUser(safeUser);

    return { ok: true };
  }

  function register(name, email, password) {
    const users = readStorage('learnova_users', []);
    const normalizedEmail = email.trim().toLowerCase();

    const alreadyExists = users.some(
      (item) => item.email.toLowerCase() === normalizedEmail
    );

    if (alreadyExists) {
      return {
        ok: false,
        message: 'An account with this email already exists.'
      };
    }

    const createdUser = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password
    };

    users.push(createdUser);

    localStorage.setItem(
      'learnova_users',
      JSON.stringify(users)
    );

    const safeUser = {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email
    };

    localStorage.setItem(
      'learnova_current_user',
      JSON.stringify(safeUser)
    );

    setUser(safeUser);

    return { ok: true };
  }

  function signOut() {
    localStorage.removeItem('learnova_current_user');
    setUser(null);
  }

  const myCourseIds = user
    ? enrollments[user.id] || []
    : [];

  function isEnrolled(courseId) {
    return myCourseIds.includes(courseId);
  }

  function enroll(courseId) {
    if (!user) {
      return false;
    }

    setEnrollments((previous) => ({
      ...previous,
      [user.id]: [
        ...new Set([
          ...(previous[user.id] || []),
          courseId
        ])
      ]
    }));

    return true;
  }

  function completed(courseId) {
    if (!user) {
      return [];
    }

    return progress[user.id]?.[courseId] || [];
  }

  function toggleLesson(courseId, lessonId) {
    if (!user) {
      return;
    }

    setProgress((previous) => {
      const userProgress = previous[user.id] || {};
      const lessonIds = userProgress[courseId] || [];

      const updatedIds = lessonIds.includes(lessonId)
        ? lessonIds.filter((id) => id !== lessonId)
        : [...lessonIds, lessonId];

      return {
        ...previous,
        [user.id]: {
          ...userProgress,
          [courseId]: updatedIds
        }
      };
    });
  }

  const courseDetailsProps = {
    user,
    isEnrolled,
    enroll,
    completed,
    toggleLesson,
    notify
  };

  const authPage = ['/login', '/register'].includes(
    location.pathname
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar user={user} signOut={signOut} />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/course-details"
          element={
            <CourseDetails {...courseDetailsProps} />
          }
        />

        <Route
          path="/course-details/:id"
          element={
            <CourseDetails {...courseDetailsProps} />
          }
        />

        {/* Support and Help page */}
        <Route
          path="/help"
          element={<Help />}
        />

        {/* Keep old course URLs working */}
        <Route
          path="/courses/:id"
          element={
            <CourseDetails {...courseDetailsProps} />
          }
        />

        <Route
          path="/my-learning"
          element={
            <MyLearning
              user={user}
              ids={myCourseIds}
              completed={completed}
            />
          }
        />

        <Route
          path="/login"
          element={
            <AuthPage
              mode="login"
              signIn={signIn}
            />
          }
        />

        <Route
          path="/register"
          element={
            <AuthPage
              mode="register"
              register={register}
            />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      {!authPage && <Footer />}

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
