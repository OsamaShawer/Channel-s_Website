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
import {
  viewportConfig,
  immediateViewportConfig,
  cardHover,
} from "../utils/animations";
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
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-sky-500/40 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-500/30 via-violet-500/30 to-pink-500/30 blur-3xl"
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
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-x-hidden overflow-y-visible">
      <section className="relative isolate px-6 sm:px-8 lg:px-12">
        <AnimatedBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional"
          >
            <Sparkles className="h-5 w-5 text-sky-400" />
            <span className="text-sm font-medium text-slate-200">
              Modern Tech Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-sky-400 via-blue-300 to-violet-400 bg-clip-text text-transparent leading-tight"
          >
            Welcome to TD Cousins
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300 font-light"
          >
            TD Cousins is an academy that provides you with lots of tutorials in
            programming and engineering. Learn by doing with a curated path and
            beautiful resources.
          </motion.p>
        </div>
      </section>

      <VisibilityGuard>
        <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={immediateViewportConfig}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
                Fields of Study
              </h2>
              <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
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
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {fieldsOfStudy.map((field) => {
                const isFrontend = field.name === "Frontend Development";
                const handleActivate = () => {
                  if (isFrontend) navigate("/roadmap/frontend");
                };
                return (
                  <motion.article
                    key={field.name}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ duration: 0.1, ease: "easeOut" }}
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
                      "group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-violet-400/40 interactive " +
                      (isFrontend ? "cursor-pointer" : "")
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
              className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/25 via-sky-500/25 to-fuchsia-500/25 blur-3xl"
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            />
          </motion.div>
        </section>
      </VisibilityGuard>

      <section className="relative px-6 pb-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              Our Courses
            </h2>
            <p className="mt-6 text-lg text-slate-300 font-light">
              Explore our growing collection of programming and engineering
              tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => {
              const isPython = course.name === "Python";
              const handleActivate = () => {
                if (isPython) navigate("/roadmap/python");
              };
              return (
                <motion.article
                  key={course.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
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
                    "group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-violet-400/40 interactive " +
                    (isPython ? "cursor-pointer" : "")
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
