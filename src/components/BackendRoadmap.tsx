import { useNavigate } from "react-router-dom";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  FlaskConical,
  Package,
} from "lucide-react";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-emerald-500/20 blur-3xl"
      />
    </div>
  );
}

export default function BackendRoadmap() {
  const navigate = useNavigate();

  const handleLanguageClick = (language: string) => {
    navigate(`/roadmap/${language.toLowerCase()}`);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white smooth-scroll">
      {/* Hero / Introduction */}
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            <span className="text-sm font-medium text-slate-200">
              TC Cousins Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Backend Development
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300 font-light">
            Backend Development empowers you to build robust, scalable, and
            efficient server-side applications that power modern web and mobile
            applications.
          </p>
        </div>
      </section>

      {/* What Is Backend */}
      <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional mb-6">
              <Server className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-200">
                Introduction
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              What Is Backend Development?
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
              Backend development is the foundation of web applications,
              handling server-side logic, database management, API creation, and
              ensuring data security and performance. It's where the magic
              happens behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="glass-card p-8 rounded-3xl shadow-professional-lg backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 ring-1 ring-inset ring-white/20 shadow-professional">
                  <Server className="h-7 w-7 text-emerald-200" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Server-Side Logic
                </h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                Backend developers create the server-side logic that processes
                requests, handles business logic, and manages application state.
                This includes authentication, authorization, data validation,
                and complex algorithms that power your applications.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl shadow-professional-lg backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-teal-500/30 ring-1 ring-inset ring-white/20 shadow-professional">
                  <Database className="h-7 w-7 text-cyan-200" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Database Management
                </h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                Backend development involves designing and managing databases,
                writing efficient queries, and ensuring data integrity. Master
                SQL and NoSQL databases to store, retrieve, and manipulate data
                efficiently for your applications.
              </p>
            </div>
          </div>

          <div className="mt-12 glass-card p-8 rounded-3xl shadow-professional-lg backdrop-blur">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Backend Development Matters
              </h3>
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
                Backend development is the engine that powers modern
                applications. It ensures scalability, security, and performance
                while handling millions of requests efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Performance
                </h4>
                <p className="text-sm text-slate-400">
                  Build fast, efficient APIs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Security
                </h4>
                <p className="text-sm text-slate-400">
                  Protect user data and systems
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Scalability
                </h4>
                <p className="text-sm text-slate-400">
                  Handle growth and traffic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Languages & Frameworks */}
      <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              Backend Technologies
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
              Master powerful backend frameworks and languages to build robust
              server-side applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Flask",
                subtitle: "Python",
                icon: FlaskConical,
                desc: "Flask is a lightweight and flexible Python web framework perfect for building web applications and APIs with simplicity and elegance.",
                path: "flask",
              },
              {
                title: "Express",
                subtitle: "JavaScript",
                icon: Code2,
                desc: "Express.js is a fast, unopinionated web framework for Node.js that simplifies building robust APIs and server-side applications.",
                path: "express",
              },
              {
                title: "Laravel",
                subtitle: "PHP",
                icon: Package,
                desc: "Laravel is a powerful PHP framework with elegant syntax, providing tools for building modern, scalable web applications.",
                path: "laravel",
              },
            ].map((item) => (
              <article
                key={item.title}
                onClick={() => handleLanguageClick(item.path)}
                className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-white/30 hover:shadow-white/10 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleLanguageClick(item.path);
                  }
                }}
                aria-label={`Navigate to ${item.title} roadmap`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 ring-1 ring-inset ring-white/10">
                    <item.icon className="h-6 w-6 text-emerald-300" />
                  </div>
                  <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-emerald-300 font-medium">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SQL - Primary to be learnt */}
      <section className="relative px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              Database Fundamentals
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
              Master the essential database language that powers data storage
              and retrieval.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article
              onClick={() => handleLanguageClick("sql")}
              className="group relative overflow-hidden rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-emerald-400/80 hover:shadow-emerald-400/20 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleLanguageClick("sql");
                }
              }}
              aria-label="Navigate to SQL roadmap"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 ring-2 ring-inset ring-emerald-400/30">
                  <Database className="h-7 w-7 text-emerald-200" />
                </div>
                <span className="rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-200 ring-2 ring-inset ring-emerald-400/40 shadow-professional">
                  Primary
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">SQL</h3>
              <p className="mt-1 text-sm text-emerald-300 font-medium">
                Database Language
              </p>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                SQL (Structured Query Language) is the primary language for
                managing and querying relational databases. Essential for every
                backend developer to master database operations, data
                manipulation, and complex queries.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
