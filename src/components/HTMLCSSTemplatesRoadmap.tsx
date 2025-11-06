import { Sparkles, Star, Zap, FileText } from "lucide-react";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/15 via-blue-500/15 to-indigo-500/15 blur-3xl"
      />
    </div>
  );
}

function HTMLCSSTemplatesRoadmap() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll">
      {/* Hero / Introduction */}
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-5 w-5 text-blue-300" />
            <span className="text-base font-medium text-slate-200">
              TC Cousins Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            HTML & CSS Templates
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light">
            Build beautiful, responsive website templates using HTML and CSS.
            Learn to create landing pages, portfolios, and modern web layouts
            from scratch.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Star className="h-5 w-5 text-blue-300" />
              <span className="text-base text-blue-200 font-semibold">
                Templates
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-indigo-300" />
              <span className="text-base text-indigo-200 font-semibold">
                Responsive
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <FileText className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Layouts
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HTMLCSSTemplatesRoadmap;
