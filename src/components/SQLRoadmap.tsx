import { useNavigate } from "react-router-dom";
import {
  Code2,
  BookOpen,
  Play,
  Sparkles,
  Target,
  ChevronRight,
  Star,
  Zap,
  Database,
} from "lucide-react";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-violet-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-500/15 via-indigo-500/15 to-purple-500/15 blur-3xl"
      />
    </div>
  );
}

function SQLRoadmap() {
  const navigate = useNavigate();

  const handleAssignmentsClick = () => {
    navigate("/roadmap/sql/assignments");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll">
      {/* Hero / Introduction */}
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-5 w-5 text-indigo-300" />
            <span className="text-base font-medium text-slate-200">
              TC Cousins Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-indigo-400 via-purple-300 to-violet-400 bg-clip-text text-transparent leading-tight">
            SQL Database Language
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light">
            SQL (Structured Query Language) is the primary language for managing
            and querying relational databases. Essential for every backend
            developer to master database operations, data manipulation, and
            complex queries.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional border-2 border-indigo-400/50">
              <Star className="h-5 w-5 text-indigo-300" />
              <span className="text-base text-indigo-200 font-semibold">
                Primary
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Essential
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Database className="h-5 w-5 text-violet-300" />
              <span className="text-base text-violet-200 font-semibold">
                Database Language
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Assignments */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Code2 className="h-5 w-5 text-indigo-300" />
              <span className="text-base text-indigo-200 font-semibold">
                Learning Path
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Hands-On Practice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Build your SQL skills through interactive assignments and
              practical exercises designed to reinforce your learning.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
              <article
                onClick={handleAssignmentsClick}
                className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-indigo-300/50 hover:shadow-indigo-200/20 overflow-hidden cursor-pointer border-2 border-indigo-400/30"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleAssignmentsClick();
                  }
                }}
                aria-label="Open SQL Assignments"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-purple-500/25 ring-1 ring-inset ring-indigo-400/20 group-hover:ring-indigo-400/40 transition-all duration-100">
                      <Code2 className="h-6 w-6 text-indigo-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                      <span className="rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 px-3 py-1 text-xs font-semibold text-indigo-200 ring-2 ring-inset ring-indigo-400/40">
                        Primary
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                    Assignments
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                    Practice with carefully crafted assignments and questions
                    that will strengthen your SQL skills and enhance your
                    database management abilities.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-indigo-300">
                    <div className="h-1 w-1 rounded-full bg-indigo-400"></div>
                    <span>Interactive exercises</span>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-indigo-300/70 group-hover:text-indigo-300 transition-colors duration-100">
                    <span>Start learning</span>
                    <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Target className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Skill Building
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
              SQL Roadmap
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Follow our structured learning path to master SQL from basics to
              advanced concepts and modern database management practices.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-purple-300/50 hover:shadow-purple-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-violet-500/25 ring-1 ring-inset ring-purple-400/20 group-hover:ring-purple-400/40 transition-all duration-100">
                        <Target className="h-6 w-6 text-purple-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Roadmap
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Complete structured learning path covering SQL
                      fundamentals, queries, joins, subqueries, indexes, and
                      modern database practices for building efficient data
                      management systems.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-purple-300">
                      <div className="h-1 w-1 rounded-full bg-purple-400"></div>
                      <span>Step-by-step progression</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-purple-300/70 group-hover:text-purple-300 transition-colors duration-100">
                      <span>Start roadmap</span>
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code in Videos */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Play className="h-5 w-5 text-indigo-300" />
              <span className="text-base text-indigo-200 font-semibold">
                Visual Learning
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Video Tutorials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Learn through engaging video content with real-time coding
              examples and detailed explanations.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-indigo-300/50 hover:shadow-indigo-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-purple-500/25 ring-1 ring-inset ring-indigo-400/20 group-hover:ring-indigo-400/40 transition-all duration-100">
                        <Play className="h-6 w-6 text-indigo-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Code in Videos
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Master SQL through engaging video tutorials with
                      step-by-step examples. Watch directly on our platform or
                      follow along on YouTube for comprehensive explanations.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-indigo-300">
                      <div className="h-1 w-1 rounded-full bg-indigo-400"></div>
                      <span>Step-by-step tutorials</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-indigo-300/70 group-hover:text-indigo-300 transition-colors duration-100">
                      <span>Watch now</span>
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="relative px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <BookOpen className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
              SQL Knowledge Hub
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Deep dive into SQL's ecosystem with comprehensive guides, best
              practices, and expert insights.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-purple-300/50 hover:shadow-purple-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-violet-500/25 ring-1 ring-inset ring-purple-400/20 group-hover:ring-purple-400/40 transition-all duration-100">
                        <BookOpen className="h-6 w-6 text-purple-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Documentation
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Discover comprehensive explanations about SQL's history,
                      features, and applications. For video explanations, our
                      YouTube tutorials provide additional insights.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-purple-300">
                      <div className="h-1 w-1 rounded-full bg-purple-400"></div>
                      <span>Comprehensive guides</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-purple-300/70 group-hover:text-purple-300 transition-colors duration-100">
                      <span>Explore knowledge</span>
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-violet-500/15 blur-3xl" />
        </div>
      </section>
    </main>
  );
}
export default SQLRoadmap;
