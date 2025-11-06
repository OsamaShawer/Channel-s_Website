import { Sparkles, Star, Zap, Layers } from "lucide-react";

function StaticBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/15 to-purple-500/15 blur-3xl"
      />
    </div>
  );
}

function HTMLCSSJSTemplatesRoadmap() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll">
      {/* Hero / Introduction */}
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <span className="text-base font-medium text-slate-200">
              TC Cousins Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
            HTML & CSS & JS Templates
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light">
            Create interactive, dynamic website templates combining HTML
            structure, CSS styling, and JavaScript functionality. Build complete
            web applications with modern features.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Star className="h-5 w-5 text-violet-300" />
              <span className="text-base text-violet-200 font-semibold">
                Interactive
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Dynamic
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Layers className="h-5 w-5 text-fuchsia-300" />
              <span className="text-base text-fuchsia-200 font-semibold">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HTMLCSSJSTemplatesRoadmap;
