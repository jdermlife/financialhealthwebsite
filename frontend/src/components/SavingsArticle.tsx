import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const sections = [
  {
    number: '01',
    title: 'Start with a savings goal that matters',
    body: 'Saving becomes easier when your money has a clear purpose. Choose one goal you can picture: a starter emergency fund, a trip, a home deposit, or a little more breathing room each month. Give it a target amount and a realistic date so that progress feels measurable.',
  },
  {
    number: '02',
    title: 'Know what you can save',
    body: 'Review the last month of income and essential expenses, then choose an amount that will not force you to borrow later. Starting with $10 or $25 each week is still a meaningful habit. Consistency matters more than picking an impressive number on day one.',
  },
  {
    number: '03',
    title: 'Automate the habit',
    body: 'Schedule an automatic transfer for the day after you are paid. Moving the money before you have a chance to spend it turns saving from a monthly decision into a dependable system. Keep the transfer small enough that you can leave it running.',
  },
  {
    number: '04',
    title: 'Give your savings the right home',
    body: 'Keep short-term savings separate from your everyday spending account. Compare savings accounts by interest rate, fees, withdrawal rules, and deposit protection. The best account is competitive, easy to understand, and not so easy to access that every impulse becomes a withdrawal.',
  },
  {
    number: '05',
    title: 'Review and grow',
    body: 'Check your progress once a month rather than every day. Celebrate milestones, adjust after expensive months, and increase your automatic transfer whenever your income rises or a regular expense ends. Small increases can create substantial momentum over time.',
  },
];

const SavingsArticle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=900&fit=crop"
            alt="Savings jar, coins, and a small plant"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-green-950/70" />
          <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-300 transition-colors hover:text-white"
            >
              <span aria-hidden="true">←</span> Back to articles
            </Link>
            <div className="mb-5">
              <span className="rounded bg-green-600 px-3 py-1 text-xs font-bold tracking-wider text-white">
                SAVINGS
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              How to Start Growing Your Savings in 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              A practical guide to building a savings habit that fits your real life, starting with the money you have today.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300">
              <span className="font-semibold text-green-300">By Admin</span>
              <span aria-hidden="true">•</span>
              <time dateTime="2026-04-10">April 10, 2026</time>
              <span aria-hidden="true">•</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <p className="text-xl leading-9 text-gray-700">
                Growing your savings is not about finding one perfect trick. It is about building a simple system you can repeat—even when life gets busy or your budget feels tight.
              </p>

              <div className="my-10 rounded-2xl border border-green-100 bg-green-50 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">A good first milestone</p>
                <p className="mt-2 text-lg leading-8 text-gray-700">
                  Aim for a starter emergency fund that can cover one common surprise, such as a car repair, medical bill, or urgent trip. Reaching that first useful goal can make the next one feel possible.
                </p>
              </div>

              <div className="space-y-10">
                {sections.map((section) => (
                  <section key={section.number} id={`step-${section.number}`}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-blue-600 text-sm font-bold text-white shadow-md">
                        {section.number}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        <p className="mt-3 text-base leading-8 text-gray-600">{section.body}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-14 rounded-2xl bg-gray-900 p-7 text-white sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wider text-green-400">Your next step</p>
                <h2 className="mt-2 text-2xl font-bold">Make your first transfer today</h2>
                <p className="mt-3 leading-7 text-gray-300">
                  Pick your goal, choose an amount you can repeat, and schedule the transfer. Your savings plan does not need to start big—it just needs to start.
                </p>
              </section>

              <p className="mt-8 text-sm leading-6 text-gray-500">
                This article is for educational purposes only and does not constitute financial advice. Consider your circumstances before making financial decisions.
              </p>
            </div>

            <aside className="lg:order-last">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-wider text-green-700">In this guide</p>
                <nav className="mt-4" aria-label="Article sections">
                  <ol className="space-y-4">
                    {sections.map((section) => (
                      <li key={section.number}>
                        <a
                          href={`#step-${section.number}`}
                          className="flex gap-3 text-sm leading-5 text-gray-600 transition-colors hover:text-green-700"
                        >
                          <span className="font-bold text-green-600">{section.number}</span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SavingsArticle;
