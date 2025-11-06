import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Code2,
  Braces,
  Boxes,
  Layout,
  Server,
  Sparkles,
  Palette,
  Layers,
  Brain,
  LineChart,
  Smartphone,
  Monitor,
} from "lucide-react";
import { VisibilityGuard } from "./VisibilityGuard";
import { scrollRestoration } from "../utils/scrollRestoration";

type Course = {
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  inProgress?: boolean;
};

const courses: Course[] = [
  {
    name: "HTML",
    tagline: "Structure the web",
    icon: Layout,
    inProgress: true,
  },
  { name: "CSS", tagline: "Design with style", icon: Boxes, inProgress: true },
  {
    name: "JavaScript",
    tagline: "Program the web",
    icon: Code2,
    inProgress: true,
  },
  {
    name: "React",
    tagline: "Modern UI development",
    icon: BookOpen,
    inProgress: true,
  },
  {
    name: "Express",
    tagline: "Backend development",
    icon: Server,
    inProgress: true,
  },
  { name: "Python", tagline: "General-purpose programming", icon: Braces },
];

type Field = {
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
};

const fieldsOfStudy: Field[] = [
  {
    name: "Frontend Development",
    tagline: "Build stunning interfaces",
    icon: Palette,
  },
  {
    name: "Backend Development",
    tagline: "Power your apps with efficient backends",
    icon: Server,
  },
  {
    name: "Full Stack Development",
    tagline: "Master both worlds of development",
    icon: Layers,
  },
  {
    name: "Data Science and Machine Learning",
    tagline: "Turn data into insights",
    icon: Brain,
  },
  {
    name: "Time Series Analysis",
    tagline: "Analyze data over time",
    icon: LineChart,
  },
  {
    name: "Mobile Application Development",
    tagline: "Create powerful mobile experiences",
    icon: Smartphone,
  },
  {
    name: "Desktop Application Development",
    tagline: "Develop robust desktop software",
    icon: Monitor,
  },
];

function StaticBlob() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className={`absolute -top-32 -right-32 ${
          isMobile ? "h-64 w-64" : "h-96 w-96"
        } rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-sky-500/30 ${
          isMobile ? "blur-2xl" : "blur-3xl"
        }`}
      />
      <div
        aria-hidden
        className={`absolute -bottom-32 -left-32 ${
          isMobile ? "h-80 w-80" : "h-[28rem] w-[28rem]"
        } rounded-full bg-gradient-to-tr from-sky-500/20 via-violet-500/20 to-pink-500/20 ${
          isMobile ? "blur-2xl" : "blur-3xl"
        }`}
      />
    </div>
  );
}

export default function Main() {
  const navigate = useNavigate();

  // Ensure scroll responsiveness
  useEffect(() => {
    scrollRestoration.ensureScrollResponsiveness();

    const handleScroll = () => {
      scrollRestoration.preventScrollBlocking();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-x-hidden overflow-y-visible motion-safe"
      style={{
        pointerEvents: "auto",
        touchAction: "pan-y",
        overscrollBehavior: "none",
      }}
    >
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <StaticBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional">
            <Sparkles className="h-5 w-5 text-sky-400" />
            <span className="text-sm font-medium text-slate-200">
              Modern Tech Academy
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-sky-400 via-blue-300 to-violet-400 bg-clip-text text-transparent leading-tight">
            Welcome to TC Cousins
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300 font-light">
            TC Cousins is an academy that provides you with lots of tutorials in
            programming and engineering. Learn by doing with a curated path and
            beautiful resources.
          </p>
        </div>
      </section>

      <VisibilityGuard>
        <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
                Fields of Study
              </h2>
              <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
                At TC Cousins, you can dive into various areas of technology and
                engineering — from frontend design to intelligent systems.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {fieldsOfStudy.map((field) => {
                const isFrontend = field.name === "Frontend Development";
                const isBackend = field.name === "Backend Development";
                const handleActivate = () => {
                  if (isFrontend) navigate("/roadmap/frontend");
                  if (isBackend) navigate("/roadmap/backend");
                };
                return (
                  <article
                    key={field.name}
                    role={isFrontend || isBackend ? "button" : undefined}
                    tabIndex={isFrontend || isBackend ? 0 : -1}
                    onClick={handleActivate}
                    onKeyDown={(e) => {
                      if (!isFrontend && !isBackend) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleActivate();
                      }
                    }}
                    aria-label={
                      isFrontend
                        ? "Open Frontend Development roadmap"
                        : isBackend
                        ? "Open Backend Development roadmap"
                        : undefined
                    }
                    className={
                      "group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-violet-400/40 interactive " +
                      (isFrontend || isBackend ? "cursor-pointer" : "")
                    }
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 to-violet-500/30 ring-1 ring-inset ring-white/20 shadow-professional">
                        <field.icon className="h-6 w-6 text-violet-200" />
                      </div>
                      {field.name !== "Data Science and Machine Learning" ? (
                        <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1.5 text-xs font-semibold text-amber-200 ring-1 ring-inset ring-amber-400/40 shadow-professional">
                          In Progress
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {field.name}
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed">
                      {field.tagline}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/25 via-sky-500/25 to-fuchsia-500/25 blur-3xl" />
          </div>
        </section>
      </VisibilityGuard>

      <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              Our Courses
            </h2>
            <p className="mt-6 text-lg text-slate-300 font-light">
              Explore our growing collection of programming and engineering
              tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const isPython = course.name === "Python";
              const isHTML = course.name === "HTML";
              const isCSS = course.name === "CSS";
              const isJavaScript = course.name === "JavaScript";
              const isReact = course.name === "React";
              const isExpress = course.name === "Express";
              const isClickable =
                isPython ||
                isHTML ||
                isCSS ||
                isJavaScript ||
                isReact ||
                isExpress;

              const handleActivate = () => {
                if (isPython) navigate("/roadmap/python");
                if (isHTML) navigate("/roadmap/html");
                if (isCSS) navigate("/roadmap/css");
                if (isJavaScript) navigate("/roadmap/javascript");
                if (isReact) navigate("/roadmap/react");
                if (isExpress) navigate("/roadmap/express");
              };

              return (
                <article
                  key={course.name}
                  role={isClickable ? "button" : undefined}
                  tabIndex={isClickable ? 0 : -1}
                  onClick={handleActivate}
                  onKeyDown={(e) => {
                    if (!isClickable) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleActivate();
                    }
                  }}
                  aria-label={
                    isPython
                      ? "Open Python course roadmap"
                      : isHTML
                      ? "Open HTML course roadmap"
                      : isCSS
                      ? "Open CSS course roadmap"
                      : isJavaScript
                      ? "Open JavaScript course roadmap"
                      : isReact
                      ? "Open React course roadmap"
                      : isExpress
                      ? "Open Express course roadmap"
                      : undefined
                  }
                  className={
                    "group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-violet-400/40 interactive " +
                    (isClickable ? "cursor-pointer" : "")
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 to-violet-500/30 ring-1 ring-inset ring-white/20 shadow-professional">
                      <course.icon className="h-6 w-6 text-sky-200" />
                    </div>
                    {course.inProgress ? (
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1.5 text-xs font-semibold text-amber-200 ring-1 ring-inset ring-amber-400/40 shadow-professional">
                        In Progress
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {course.name}
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed">
                    {course.tagline}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
