import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import {
  fadeUp,
  mobileFadeUp,
  staggerContainer,
  mobileStaggerContainer,
  viewportConfig,
  immediateViewportConfig,
  mobileViewportConfig,
  mobileBlobAnimation,
  desktopBlobAnimation,
  isMobile,
} from "../utils/animations";

function AnimatedBlob() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-red-500/20 via-pink-500/20 to-purple-500/20 blur-3xl"
        animate={mobile ? mobileBlobAnimation : desktopBlobAnimation}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/15 via-red-500/15 to-pink-500/15 blur-3xl"
        animate={
          mobile
            ? {
                ...mobileBlobAnimation,
                transition: {
                  ...mobileBlobAnimation.transition,
                  delay: 2,
                  duration: 18,
                },
              }
            : {
                ...desktopBlobAnimation,
                transition: {
                  ...desktopBlobAnimation.transition,
                  delay: 2,
                  duration: 25,
                },
              }
        }
      />
    </div>
  );
}

function AngularRoadmap() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Ensure content is visible after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Check for mobile
    setMobile(isMobile());

    return () => clearTimeout(timer);
  }, []);

  const handleAssignmentsClick = () => {
    navigate("/roadmap/angular/assignments");
  };

  // Choose animation variants based on device
  const fadeVariant = mobile ? mobileFadeUp : fadeUp;
  const staggerVariant = mobile ? mobileStaggerContainer : staggerContainer;
  const viewportVariant = mobile
    ? mobileViewportConfig
    : immediateViewportConfig;

  return (
    <main
      className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-bold smooth-scroll"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {/* Hero / Introduction */}
      <motion.section
        key="angular-hero"
        className="relative isolate px-6 sm:px-8 lg:px-12"
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
      >
        <AnimatedBlob />
        <div className="mx-auto max-w-4xl pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: mobile ? 0.4 : 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-3 rounded-full glass-card px-6 py-3 backdrop-blur shadow-professional"
          >
            <Sparkles className="h-5 w-5 text-red-300" />
            <span className="text-base font-medium text-slate-200">
              TD Cousins Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: mobile ? 0.5 : 0.75,
              ease: "easeOut",
              delay: 0.05,
            }}
            className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-red-400 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight"
          >
            Angular Framework
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: mobile ? 0.4 : 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="mx-auto mt-8 max-w-4xl text-2xl leading-8 text-slate-300 leading-relaxed font-light"
          >
            Angular is a comprehensive platform for building mobile and desktop
            web applications. It provides a complete solution with powerful
            tools, declarative templates, and dependency injection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: mobile ? 0.4 : 0.7,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Star className="h-5 w-5 text-red-300" />
              <span className="text-base text-red-200 font-semibold">
                Enterprise-Ready
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Zap className="h-5 w-5 text-pink-300" />
              <span className="text-base text-pink-200 font-semibold">
                TypeScript
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional">
              <Code2 className="h-5 w-5 text-purple-300" />
              <span className="text-base text-purple-200 font-semibold">
                Full-Stack
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Assignments */}
      <motion.section
        key="assignments"
        className="relative px-4 pb-24 sm:px-6 lg:px-8"
        variants={fadeVariant}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        whileInView="visible"
        viewport={viewportVariant}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={mobile ? mobileViewportConfig : viewportConfig}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Code2 className="h-5 w-5 text-red-300" />
              <span className="text-base text-red-200 font-semibold">
                Learning Path
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
              Hands-On Practice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Build your Angular skills through interactive assignments and
              practical exercises designed to reinforce your learning.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
              <motion.article
                variants={fadeVariant}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                {...(mobile ? {} : { whileHover: { scale: 1.02, y: -4 } })}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                onClick={handleAssignmentsClick}
                className={`group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 overflow-hidden cursor-pointer ${
                  mobile
                    ? ""
                    : "hover:border-red-300/50 hover:shadow-red-200/20"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleAssignmentsClick();
                  }
                }}
                aria-label="Open Angular Assignments"
              >
                {/* Decorative gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-pink-500/5 transition-opacity duration-100 ${
                    mobile ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/25 to-pink-500/25 ring-1 ring-inset ring-red-400/20 transition-all duration-100 ${
                        mobile ? "" : "group-hover:ring-red-400/40"
                      }`}
                    >
                      <Code2 className="h-6 w-6 text-red-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></div>
                      <span className="text-xs text-red-200 font-semibold">
                        Active
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                    Assignments
                  </h3>
                  <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                    Practice with carefully crafted assignments and questions
                    that will strengthen your Angular skills and enhance your
                    enterprise development abilities.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-red-300">
                    <div className="h-1 w-1 rounded-full bg-red-400"></div>
                    <span>Interactive exercises</span>
                  </div>
                  <div
                    className={`mt-4 flex items-center text-xs transition-colors duration-100 ${
                      mobile
                        ? "text-red-300/70"
                        : "text-red-300/70 group-hover:text-red-300"
                    }`}
                  >
                    <span>Start learning</span>
                    <ChevronRight
                      className={`h-3 w-3 ml-1 transition-transform duration-100 ${
                        mobile ? "" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section
        key="roadmap"
        className="relative px-4 pb-24 sm:px-6 lg:px-8"
        variants={fadeVariant}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        whileInView="visible"
        viewport={viewportVariant}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={mobile ? mobileViewportConfig : viewportConfig}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Target className="h-5 w-5 text-pink-300" />
              <span className="text-base text-pink-200 font-semibold">
                Skill Building
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Angular Roadmap
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Follow our structured learning path to master Angular from basics
              to advanced concepts and enterprise development practices.
            </p>
          </motion.div>
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportVariant}
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <motion.article
                  variants={fadeVariant}
                  {...(mobile ? {} : { whileHover: { scale: 1.02, y: -4 } })}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 overflow-hidden ${
                    mobile
                      ? ""
                      : "hover:border-pink-300/50 hover:shadow-pink-200/20"
                  }`}
                >
                  {/* Decorative gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 transition-opacity duration-100 ${
                      mobile ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/25 to-purple-500/25 ring-1 ring-inset ring-pink-400/20 transition-all duration-100 ${
                          mobile ? "" : "group-hover:ring-pink-400/40"
                        }`}
                      >
                        <Target className="h-6 w-6 text-pink-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Roadmap
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Complete structured learning path covering Angular
                      fundamentals, TypeScript, components, services, routing,
                      and modern development practices for building enterprise
                      applications.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-pink-300">
                      <div className="h-1 w-1 rounded-full bg-pink-400"></div>
                      <span>Step-by-step progression</span>
                    </div>
                    <div
                      className={`mt-4 flex items-center text-xs transition-colors duration-100 ${
                        mobile
                          ? "text-pink-300/70"
                          : "text-pink-300/70 group-hover:text-pink-300"
                      }`}
                    >
                      <span>Start roadmap</span>
                      <ChevronRight
                        className={`h-3 w-3 ml-1 transition-transform duration-100 ${
                          mobile ? "" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Code in Videos */}
      <motion.section
        key="videos"
        className="relative px-4 pb-24 sm:px-6 lg:px-8"
        variants={fadeVariant}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        whileInView="visible"
        viewport={viewportVariant}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={mobile ? mobileViewportConfig : viewportConfig}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <Play className="h-5 w-5 text-red-300" />
              <span className="text-base text-red-200 font-semibold">
                Visual Learning
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
              Video Tutorials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Learn through engaging video content with real-time coding
              examples and detailed explanations.
            </p>
          </motion.div>
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportVariant}
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <motion.article
                  variants={fadeVariant}
                  {...(mobile ? {} : { whileHover: { scale: 1.02, y: -4 } })}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 overflow-hidden ${
                    mobile
                      ? ""
                      : "hover:border-red-300/50 hover:shadow-red-200/20"
                  }`}
                >
                  {/* Decorative gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-pink-500/5 transition-opacity duration-100 ${
                      mobile ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/25 to-pink-500/25 ring-1 ring-inset ring-red-400/20 transition-all duration-100 ${
                          mobile ? "" : "group-hover:ring-red-400/40"
                        }`}
                      >
                        <Play className="h-6 w-6 text-red-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Code in Videos
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Master Angular through engaging video tutorials with
                      step-by-step examples. Watch directly on our platform or
                      follow along on YouTube for comprehensive explanations.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-red-300">
                      <div className="h-1 w-1 rounded-full bg-red-400"></div>
                      <span>Step-by-step tutorials</span>
                    </div>
                    <div
                      className={`mt-4 flex items-center text-xs transition-colors duration-100 ${
                        mobile
                          ? "text-red-300/70"
                          : "text-red-300/70 group-hover:text-red-300"
                      }`}
                    >
                      <span>Watch now</span>
                      <ChevronRight
                        className={`h-3 w-3 ml-1 transition-transform duration-100 ${
                          mobile ? "" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Facts & Information */}
      <motion.section
        key="facts"
        className="relative px-4 pb-28 sm:px-6 lg:px-8"
        variants={fadeVariant}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        whileInView="visible"
        viewport={viewportVariant}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={mobile ? mobileViewportConfig : viewportConfig}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 shadow-professional mb-4">
              <BookOpen className="h-5 w-5 text-pink-300" />
              <span className="text-base text-pink-200 font-semibold">
                Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Angular Knowledge Hub
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Deep dive into Angular's ecosystem with comprehensive guides, best
              practices, and expert insights.
            </p>
          </motion.div>
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportVariant}
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                <motion.article
                  variants={fadeVariant}
                  {...(mobile ? {} : { whileHover: { scale: 1.02, y: -4 } })}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative rounded-3xl glass-card p-8 shadow-professional-lg backdrop-blur transition-all duration-100 overflow-hidden ${
                    mobile
                      ? ""
                      : "hover:border-pink-300/50 hover:shadow-pink-200/20"
                  }`}
                >
                  {/* Decorative gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5 transition-opacity duration-100 ${
                      mobile ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/25 to-purple-500/25 ring-1 ring-inset ring-pink-400/20 transition-all duration-100 ${
                          mobile ? "" : "group-hover:ring-pink-400/40"
                        }`}
                      >
                        <BookOpen className="h-6 w-6 text-pink-300" />
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        In Progress
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white font-bold">
                      Full Explain in Text
                    </h3>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed leading-relaxed">
                      Discover comprehensive explanations about Angular's
                      history, features, and applications. For video
                      explanations, our YouTube tutorials provide additional
                      insights.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-pink-300">
                      <div className="h-1 w-1 rounded-full bg-pink-400"></div>
                      <span>Comprehensive guides</span>
                    </div>
                    <div
                      className={`mt-4 flex items-center text-xs transition-colors duration-100 ${
                        mobile
                          ? "text-pink-300/70"
                          : "text-pink-300/70 group-hover:text-pink-300"
                      }`}
                    >
                      <span>Explore knowledge</span>
                      <ChevronRight
                        className={`h-3 w-3 ml-1 transition-transform duration-100 ${
                          mobile ? "" : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
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
            className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/15 via-pink-500/15 to-purple-500/15 blur-3xl"
            animate={mobile ? mobileBlobAnimation : desktopBlobAnimation}
          />
        </motion.div>
      </motion.section>
    </main>
  );
}
export default AngularRoadmap;
