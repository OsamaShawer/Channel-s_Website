import React from "react";
import Main from "./components/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import Frontend from "./components/FrontendRoadmap";
import Python from "./components/PythonRoadmap";
import { Navigation } from "./components/Navigation";
import { BackToTop } from "./components/BackToTop";
import PythonAssignments from "./components/PythonAssignments";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./utils/animations";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Immediate scroll reset without animation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force layout recalculation
    document.body.offsetHeight;

    // Small delay to ensure everything is reset
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Main />
              </Page>
            }
          />
          <Route
            path="/roadmap/frontend"
            element={
              <Page>
                <Frontend />
              </Page>
            }
          />
          <Route
            path="/roadmap/python"
            element={
              <Page>
                <Python />
              </Page>
            }
          />
          <Route
            path="/roadmap/python/assignments"
            element={
              <Page>
                <PythonAssignments />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
      <BackToTop />
    </>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-16"
      style={{
        opacity: 1,
        transform: "translateY(0)",
        overflow: "visible",
      }}
    >
      {children}
    </motion.div>
  );
}

export default App;
