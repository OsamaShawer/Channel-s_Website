import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
import { viewportConfig, immediateViewportConfig } from "../utils/animations";
import { VisibilityGuard } from "./VisibilityGuard";

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

function AnimatedBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-sky-500/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-500/20 via-violet-500/20 to-pink-500/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

export default function Main() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <section className="relative isolate px-4 sm:px-6 lg:px-8">
        <AnimatedBlob />
        <div className="mx-auto max-w-3xl pt-28 pb-20 text-center sm:pt-32 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span className="text-sm text-slate-300">Modern Tech Academy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-sky-300 via-white to-violet-300 bg-clip-text text-transparent"
          >
            Welcome to TD Cousins
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300"
          >
            TD Cousins is an academy that provides you with lots of tutorials in
            programming and engineering. Learn by doing with a curated path and
            beautiful resources.
          </motion.p>
        </div>
      </section>

      <VisibilityGuard>
        <section className="relative px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={immediateViewportConfig}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 text-center"
            >
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Fields of Study
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-slate-300">
                At TD Cousins, you can dive into various areas of technology and
                engineering — from frontend design to intelligent systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={immediateViewportConfig}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {fieldsOfStudy.map((field) => {
                const isFrontend = field.name === "Frontend Development";
                const handleActivate = () => {
                  if (isFrontend) navigate("/roadmap/frontend");
                };
                return (
                  <motion.article
                    key={field.name}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                    role={isFrontend ? "button" : undefined}
                    tabIndex={isFrontend ? 0 : -1}
                    onClick={handleActivate}
                    onKeyDown={(e) => {
                      if (!isFrontend) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleActivate();
                      }
                    }}
                    aria-label={
                      isFrontend
                        ? "Open Frontend Development roadmap"
                        : undefined
                    }
                    className={
                      "group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-400/40 " +
                      (isFrontend ? "cursor-pointer" : "")
                    }
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
                        <field.icon className="h-5 w-5 text-violet-300" />
                      </div>
                      {field.name !== "Data Science and Machine Learning" ? (
                        <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                          In Progress
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">{field.name}</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {field.tagline}
                    </p>

                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-sky-400/0 transition-opacity group-hover:opacity-100"
                      initial={false}
                      whileHover={{
                        boxShadow: "0 0 0 1px rgba(139,92,246,0.25)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 via-sky-500/20 to-fuchsia-500/20 blur-3xl"
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            />
          </motion.div>
        </section>
      </VisibilityGuard>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Courses
            </h2>
            <p className="mt-3 text-slate-300">
              Explore our growing collection of programming and engineering
              tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => {
              const isPython = course.name === "Python";
              const handleActivate = () => {
                if (isPython) navigate("/roadmap/python");
              };
              return (
                <motion.article
                  key={course.name}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  role={isPython ? "button" : undefined}
                  tabIndex={isPython ? 0 : -1}
                  onClick={handleActivate}
                  onKeyDown={(e) => {
                    if (!isPython) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleActivate();
                    }
                  }}
                  aria-label={
                    isPython ? "Open Python course roadmap" : undefined
                  }
                  className={
                    "group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-400/40 " +
                    (isPython ? "cursor-pointer" : "")
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
                      <course.icon className="h-5 w-5 text-sky-300" />
                    </div>
                    {course.inProgress ? (
                      <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{course.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {course.tagline}
                  </p>

                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-sky-400/0 transition-opacity group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      boxShadow: "0 0 0 1px rgba(56,189,248,0.25)",
                    }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
