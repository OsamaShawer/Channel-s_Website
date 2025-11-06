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
} from "lucide-react";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/15 via-cyan-500/15 to-blue-500/15 blur-3xl"
      />
    </div>
  );
}

function ReactRoadmap() {
  const navigate = useNavigate();

  const handleAssignmentsClick = () => {
    navigate("/roadmap/react/assignments");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll">
      {/* Hero / Introduction */}
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <span className="text-base font-medium text-slate-200">
              TC Cousins Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            React JavaScript Library
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light">
            React is a powerful JavaScript library for building user interfaces,
            especially single-page applications. It makes it easy to create
            interactive UIs with reusable components and efficient rendering.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Star className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                Component-Based
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-blue-300" />
              <span className="text-base text-blue-200 font-semibold">
                Efficient
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Code2 className="h-5 w-5 text-indigo-300" />
              <span className="text-base text-indigo-200 font-semibold">
                Modern
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
              <Code2 className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                Learning Path
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Hands-On Practice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Build your React skills through interactive assignments and
              practical exercises designed to reinforce your learning.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
              <article
                onClick={handleAssignmentsClick}
                className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-cyan-300/50 hover:shadow-cyan-200/20 overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleAssignmentsClick();
                  }
                }}
                aria-label="Open React Assignments"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 ring-1 ring-inset ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-100">
                      <Code2 className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      <span className="text-xs text-cyan-200 font-semibold">
                        Active
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                    Assignments
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                    Practice with carefully crafted assignments and questions
                    that will strengthen your React skills and enhance your
                    component development abilities.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-cyan-300">
                    <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                    <span>Interactive exercises</span>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-100">
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
              <Target className="h-5 w-5 text-blue-300" />
              <span className="text-base text-blue-200 font-semibold">
                Skill Building
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              React Roadmap
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Follow our structured learning path to master React from basics to
              advanced concepts and modern web development practices.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-blue-300/50 hover:shadow-blue-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-indigo-500/25 ring-1 ring-inset ring-blue-400/20 group-hover:ring-blue-400/40 transition-all duration-100">
                        <Target className="h-6 w-6 text-blue-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Roadmap
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Complete structured learning path covering React
                      fundamentals, hooks, state management, routing, and modern
                      development practices for building scalable applications.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-blue-300">
                      <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                      <span>Step-by-step progression</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-blue-300/70 group-hover:text-blue-300 transition-colors duration-100">
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
              <Play className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                Visual Learning
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
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
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-cyan-300/50 hover:shadow-cyan-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 ring-1 ring-inset ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-100">
                        <Play className="h-6 w-6 text-cyan-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Code in Videos
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Master React through engaging video tutorials with
                      step-by-step examples. Watch directly on our platform or
                      follow along on YouTube for comprehensive explanations.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-cyan-300">
                      <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                      <span>Step-by-step tutorials</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-100">
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

      {/* Facts & Information */}
      <section className="relative px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <BookOpen className="h-5 w-5 text-blue-300" />
              <span className="text-base text-blue-200 font-semibold">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              React Knowledge Hub
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Deep dive into React's ecosystem with comprehensive guides, best
              practices, and expert insights.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <article className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-blue-300/50 hover:shadow-blue-200/20 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-indigo-500/25 ring-1 ring-inset ring-blue-400/20 group-hover:ring-blue-400/40 transition-all duration-100">
                        <BookOpen className="h-6 w-6 text-blue-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Full Explain in Text
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Discover comprehensive explanations about React's history,
                      features, and applications. For video explanations, our
                      YouTube tutorials provide additional insights.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-blue-300">
                      <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                      <span>Comprehensive guides</span>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-blue-300/70 group-hover:text-blue-300 transition-colors duration-100">
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
          <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-indigo-500/15 blur-3xl" />
        </div>
      </section>
    </main>
  );
}
export default ReactRoadmap;
