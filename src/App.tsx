import React from "react";
import Main from "./components/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import Frontend from "./components/FrontendRoadmap";
import Python from "./components/PythonRoadmap";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./utils/animations";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Immediate scroll to top for better UX
    window.scrollTo({ top: 0, behavior: "instant" });

    // Then smooth scroll after a brief delay
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  return (
    <>
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
        </Routes>
      </AnimatePresence>
    </>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
      style={{
        // Ensure content is always visible
        opacity: 1,
        transform: "translateY(0)",
      }}
    >
      {children}
    </motion.div>
  );
}

export default App;
