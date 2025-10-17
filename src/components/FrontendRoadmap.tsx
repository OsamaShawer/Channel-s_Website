import { motion } from "framer-motion";
import { Code2, Layout, Palette, Atom, Sparkles, Zap } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "../utils/animations";

function AnimatedBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-sky-500/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-500/20 via-violet-500/20 to-pink-500/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

export default function FrontendRoadmap() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero / Introduction */}
      <motion.section
        key="frontend-hero"
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
            <Sparkles className="h-6 w-6 text-sky-400" />
            <span className="text-sm font-medium text-slate-200">
              TD Cousins Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-sky-400 via-blue-300 to-violet-400 bg-clip-text text-transparent leading-tight"
          >
            Frontend Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300 font-light"
          >
            Frontend Development will make you develop and build animated,
            beautiful websites.
          </motion.p>
        </div>
      </motion.section>

      {/* What You Will Study */}
      <motion.section
        key="what-you-will-study"
        className="relative px-6 pb-32 sm:px-8 lg:px-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              What You Will Study
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
              Master the core foundations of building for the web.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "HTML",
                icon: Layout,
                desc: "HTML is the structure of a webpage — it forms the skeleton that holds all your content. Think of it as the blueprint of every site.",
              },
              {
                title: "CSS",
                icon: Palette,
                desc: "CSS is the design language of the web — it brings color, motion, and layout to life, transforming raw structure into visually stunning experiences.",
              },
              {
                title: "JavaScript",
                icon: Code2,
                desc: "JavaScript powers interactivity and logic — it makes websites dynamic, responsive, and capable of complex behaviors.",
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-300 hover:border-white/30 hover:shadow-white/10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
                    <item.icon className="h-6 w-6 text-sky-300" />
                  </div>
                  <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Frontend Frameworks */}
      <motion.section
        key="frontend-frameworks"
        className="relative px-4 pb-28 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text">
              Frontend Frameworks
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 font-light leading-relaxed">
              Explore modern tools that help you build faster and better.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "React",
                icon: Atom,
                desc: "React is a modern UI library that helps you build fast, dynamic, and interactive websites with component-based architecture.",
              },
              {
                title: "Angular",
                icon: Zap,
                desc: "Angular is a powerful framework that provides a complete solution for building scalable and maintainable web applications.",
              },
              {
                title: "Framer Motion",
                icon: Sparkles,
                desc: "Framer Motion adds life to your UI — it's a React library for stunning animations and fluid transitions with minimal effort.",
              },
            ].map((fw) => (
              <motion.article
                key={fw.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 shadow-professional-lg backdrop-blur transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
                    <fw.icon className="h-6 w-6 text-violet-300" />
                  </div>
                  <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    In Progress
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {fw.title}
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {fw.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
