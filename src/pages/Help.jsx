
import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function Help() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const supportEmail = 'support@learnova.dev';

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-14 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <MessageCircle size={18} />
            Learnova Support
          </div>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-900 dark:text-white">
            How can we help you?
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Need help with your account, courses, enrollment, or
            learning progress? Contact our support team.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <section className="rounded-2xl bg-violet-600 p-7 text-white md:col-span-2">
            <Mail size={34} />

            <h2 className="mt-5 text-2xl font-bold">
              Contact our team
            </h2>

            <p className="mt-3 leading-7 text-violet-100">
              Fill in the form and prepare an email for our support
              team. We are here to help with your learning journey.
            </p>

            <div className="mt-7 border-t border-white/20 pt-5">
              <p className="text-sm text-violet-100">
                Support email
              </p>

              <a
                href="mailto:support@learnova.dev"
                className="mt-2 inline-block break-all font-semibold hover:underline"
              >
                support@learnova.dev
              </a>

              <p className="mt-4 text-xs text-violet-100">
                Replace this sample address with your real support
                email before publishing your website.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send a message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold dark:text-slate-200"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold dark:text-slate-200"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold dark:text-slate-200"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold dark:text-slate-200"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your issue..."
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                <Send size={18} />
                Contact Support
              </button>

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                This button opens your default email application.
                The message is not sent directly by the website.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
