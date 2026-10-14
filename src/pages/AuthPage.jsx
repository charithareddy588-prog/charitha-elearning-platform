import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Mail,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff
} from 'lucide-react';

import { Field } from '../components/Field';

export function AuthPage({ mode, signIn, register }) {
  const isLogin = mode === 'login';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  function submit(event) {
    event.preventDefault();
    setError('');

    if (!isLogin && password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (!isLogin && password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    const result = isLogin
      ? signIn(email, password)
      : register(name, email, password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    const destination = isLogin
      ? location.state?.from?.pathname || '/my-learning'
      : '/my-learning';

    navigate(destination, { replace: true });
  }

  return (
    <main className="grid min-h-[calc(100vh-72px)] bg-white lg:grid-cols-2">
      <section className="hidden overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold">
          <BookOpen size={26} /> learnova.
        </Link>

        <div className="max-w-lg">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
            {isLogin ? 'Welcome back' : 'Start something new'}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight">
            {isLogin
              ? 'A little progress every day adds up.'
              : 'Make room for your next big idea.'}
          </h1>

          <p className="mt-5 text-lg leading-8 text-indigo-100">
            {isLogin
              ? 'Pick up where you left off and keep building skills that open doors.'
              : 'Join curious learners and build your skills one lesson at a time.'}
          </p>
        </div>

        <p className="text-sm text-indigo-200">
          Learn at your pace. Grow your way.
        </p>
      </section>

      <section className="flex items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 lg:hidden"
          >
            <BookOpen size={20} /> learnova.
          </Link>

          <p className="mt-8 text-xs font-extrabold uppercase tracking-[.2em] text-indigo-600">
            {isLogin ? 'Your learning journey' : 'Create your account'}
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight">
            {isLogin ? 'Log in to Learnova' : 'Join Learnova'}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {isLogin
              ? 'Welcome back! Enter your details below.'
              : 'Set up your account and start exploring.'}
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            {!isLogin && (
              <Field
                id="name"
                label="Full name"
                icon={UserRound}
                value={name}
                onChange={setName}
                placeholder="Your name"
                autoComplete="name"
              />
            )}

            <Field
              id="email"
              label="Email address"
              icon={Mail}
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
            />

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50">
                <LockKeyhole size={18} className="text-slate-400" />

                <input
                  id="password"
                  type={show ? 'text' : 'password'}
                  required
                  minLength={isLogin ? undefined : 6}
                  autoComplete={
                    isLogin ? 'current-password' : 'new-password'
                  }
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={
                    isLogin ? 'Enter your password' : 'At least 6 characters'
                  }
                  className="w-full py-3.5 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShow((value) => !value)}
                  aria-label="Toggle password visibility"
                  className="text-slate-400"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <Field
                id="confirm"
                label="Confirm password"
                icon={LockKeyhole}
                value={confirm}
                onChange={setConfirm}
                placeholder="Repeat your password"
                type="password"
                autoComplete="new-password"
              />
            )}

            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-indigo-700"
            >
              {isLogin ? 'Log in' : 'Create account'}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="text-xs font-bold text-indigo-900">
                Demo account
              </p>

              <p className="mt-1 text-xs text-indigo-800">
                demo@learnova.dev · learnova123
              </p>

              <button
                onClick={() => {
                  setEmail('demo@learnova.dev');
                  setPassword('learnova123');
                }}
                className="mt-2 text-xs font-bold text-indigo-700 underline underline-offset-2"
              >
                Use demo credentials
              </button>
            </div>
          )}

          <p className="mt-7 text-center text-sm text-slate-500">
            {isLogin ? 'New to Learnova?' : 'Already have an account?'}{' '}
            <Link
              to={isLogin ? '/register' : '/login'}
              className="font-bold text-indigo-600"
            >
              {isLogin ? 'Create an account' : 'Log in'}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}