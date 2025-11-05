import { Code2, Play, Sparkles, ChevronRight, Zap, Star } from "lucide-react";
import { VisibilityGuard } from "./VisibilityGuard";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/15 via-emerald-500/15 to-teal-500/15 blur-3xl"
      />
    </div>
  );
}

type Assignment = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "available" | "in-progress" | "completed";
};

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Introduction to Python",
    description:
      "Learn the basics of Python programming, including variables, data types, and simple operations.",
    icon: Code2,
    status: "in-progress",
  },
];

function PythonAssignments() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white smooth-scroll">
      {/* Hero / Header Section */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8">
        <StaticBlob />
        <div className="mx-auto max-w-3xl pt-28 pb-20 text-center sm:pt-32 sm:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span className="text-sm text-slate-300">TD Cousins Academy</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-emerald-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Python Assignments
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Here you will find the assignments of our Python course that will
            make you stronger and help you fully understand the videos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-100">
              <Star className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">
                Hands-On Learning
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors duration-100">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">
                Progressive Difficulty
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 border border-teal-500/20 hover:bg-teal-500/20 transition-colors duration-100">
              <Code2 className="h-4 w-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-medium">
                Practical Skills
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Cards Section */}
      <VisibilityGuard>
        <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 mb-4 hover:bg-emerald-500/20 transition-colors duration-100">
                <Code2 className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-emerald-300 font-medium">
                  Learning Path
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Your Python Journey
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Complete these assignments to build your Python programming
                skills step by step.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {assignments.map((assignment) => (
                <article
                  key={assignment.id}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur transition-all duration-100 hover:border-emerald-400/30 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-white/[0.04] hover:shadow-emerald-500/10 overflow-hidden"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 ring-1 ring-inset ring-emerald-400/20 group-hover:ring-emerald-400/40 transition-all duration-100">
                        <assignment.icon className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.status === "in-progress" && (
                          <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                        )}
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
                            assignment.status === "in-progress"
                              ? "bg-emerald-500/20 text-emerald-300 ring-emerald-400/30"
                              : assignment.status === "completed"
                              ? "bg-cyan-500/20 text-cyan-300 ring-cyan-400/30"
                              : "bg-amber-500/20 text-amber-300 ring-amber-400/30"
                          }`}
                        >
                          {assignment.status === "in-progress"
                            ? "In Progress"
                            : assignment.status === "completed"
                            ? "Completed"
                            : "Available"}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Assignment {assignment.id}
                    </h3>
                    <h4 className="mt-1 text-lg font-medium text-emerald-300">
                      {assignment.title}
                    </h4>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {assignment.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                        <span>
                          Watch the video and complete the exercises below
                        </span>
                      </div>
                    </div>

                    <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-3 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30 transition-all duration-100 hover:from-emerald-500/30 hover:to-cyan-500/30 hover:ring-emerald-400/50 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                      <Play className="h-4 w-4" />
                      <span>Start Assignment</span>
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-100" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/15 via-cyan-500/15 to-teal-500/15 blur-3xl" />
          </div>
        </section>
      </VisibilityGuard>
    </main>
  );
}

export default PythonAssignments;
