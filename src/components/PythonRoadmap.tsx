import { motion } from "framer-motion";
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
import { fadeUp, viewportConfig } from "../utils/animations";
import { VisibilityGuard } from "./VisibilityGuard";

function AnimatedBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/15 via-emerald-500/15 to-teal-500/15 blur-3xl"
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

function PythonRoadmap() {
  const navigate = useNavigate();

  const handleAssignmentsClick = () => {
    navigate("/roadmap/python/assignments");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll">
      {/* Hero / Introduction */}
      <motion.section
        key="python-hero"
        className="relative isolate px-6 sm:px-8 lg:px-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <AnimatedBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional"
          >
            <Sparkles className="h-5 w-5 text-emerald-300" />
            <span className="text-base font-medium text-slate-200">
              TD Cousins Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Python Programming Language
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light"
          >
            Python is one of the most famous programming languages, used in many
            domains such as web development, data science, AI, automation, and
            more. Its simple syntax and powerful capabilities make it perfect
            for beginners and experts alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Star className="h-5 w-5 text-emerald-300" />
              <span className="text-base text-emerald-200 font-semibold">
                Beginner Friendly
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                High Performance
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Code2 className="h-5 w-5 text-teal-300" />
              <span className="text-base text-teal-200 font-semibold">
                Versatile
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Assignments */}
      <VisibilityGuard>
        <section
          key="assignments"
          className="relative px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
                <Code2 className="h-5 w-5 text-emerald-300" />
                <span className="text-base text-emerald-200 font-semibold">
                  Learning Path
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Hands-On Practice
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
                Build your Python skills through interactive assignments and
                practical exercises designed to reinforce your learning.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.article
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                onClick={handleAssignmentsClick}
                className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-emerald-300/50 hover:shadow-emerald-200/20 overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleAssignmentsClick();
                  }
                }}
                aria-label="Open Python Assignments"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 ring-1 ring-inset ring-emerald-400/20 group-hover:ring-emerald-400/40 transition-all duration-100">
                      <Code2 className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-xs text-emerald-200 font-semibold">
                        Active
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                    Assignments
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                    Practice with carefully crafted assignments and questions
                    that will strengthen your programming skills and enhance
                    your logical thinking abilities.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
                    <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                    <span>Interactive exercises</span>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-emerald-300/70 group-hover:text-emerald-300 transition-colors duration-100">
                    <span>Start learning</span>
                    <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>
      </VisibilityGuard>

      {/* Challenges */}
      <motion.section
        key="challenges"
        className="relative px-4 pb-24 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Target className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                Skill Building
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Coding Challenges
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Push your limits with progressively challenging coding problems
              that will sharpen your problem-solving skills.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.02 },
              },
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.article
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-cyan-300/50 hover:shadow-cyan-200/20 overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-teal-500/25 ring-1 ring-inset ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-100">
                    <Target className="h-6 w-6 text-cyan-300" />
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                  Challenges
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                  Test your skills with carefully designed challenges and coding
                  katas that progress from beginner to advanced levels, building
                  your confidence step by step.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-300">
                  <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                  <span>Progressive difficulty</span>
                </div>
                <div className="mt-4 flex items-center text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-100">
                  <span>Take challenge</span>
                  <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      {/* Code in Videos */}
      <motion.section
        key="videos"
        className="relative px-4 pb-24 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Play className="h-5 w-5 text-emerald-300" />
              <span className="text-base text-emerald-200 font-semibold">
                Visual Learning
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Video Tutorials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Learn through engaging video content with real-time coding
              examples and detailed explanations.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.02 },
              },
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.article
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-emerald-300/50 hover:shadow-emerald-200/20 overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 ring-1 ring-inset ring-emerald-400/20 group-hover:ring-emerald-400/40 transition-all duration-100">
                    <Play className="h-6 w-6 text-emerald-300" />
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                  Code in Videos
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                  Master Python through engaging video tutorials with
                  step-by-step examples. Watch directly on our platform or
                  follow along on YouTube for comprehensive explanations.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
                  <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                  <span>Step-by-step tutorials</span>
                </div>
                <div className="mt-4 flex items-center text-xs text-emerald-300/70 group-hover:text-emerald-300 transition-colors duration-100">
                  <span>Watch now</span>
                  <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      {/* Facts & Information */}
      <motion.section
        key="facts"
        className="relative px-4 pb-28 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <BookOpen className="h-5 w-5 text-cyan-300" />
              <span className="text-base text-cyan-200 font-semibold">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Python Knowledge Hub
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Deep dive into Python's ecosystem with comprehensive guides, best
              practices, and expert insights.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.02 },
              },
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.article
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 hover:border-cyan-300/50 hover:shadow-cyan-200/20 overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-teal-500/25 ring-1 ring-inset ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-100">
                    <BookOpen className="h-6 w-6 text-cyan-300" />
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                  Facts & Information About Python
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                  Discover comprehensive explanations about Python's history,
                  features, and applications. For video explanations, our
                  YouTube tutorials provide additional insights.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-300">
                  <div className="h-1 w-1 rounded-full bg-cyan-400"></div>
                  <span>Comprehensive guides</span>
                </div>
                <div className="mt-4 flex items-center text-xs text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-100">
                  <span>Explore knowledge</span>
                  <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-100" />
                </div>
              </div>
            </motion.article>
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
            className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/15 via-cyan-500/15 to-teal-500/15 blur-3xl"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section>
    </main>
  );
}
export default PythonRoadmap;
