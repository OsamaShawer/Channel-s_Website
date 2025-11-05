import React from "react";
import Main from "./components/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import Frontend from "./components/FrontendRoadmap";
import Python from "./components/PythonRoadmap";
import HTML from "./components/HTMLRoadmap";
import CSS from "./components/CSSRoadmap";
import JavaScriptRoadmap from "./components/JavaScriptRoadmap";
import ReactRoadmap from "./components/ReactRoadmap";
import Angular from "./components/AngularRoadmap";
import Express from "./components/ExpressRoadmap";
import { Navigation } from "./components/Navigation";
import { BackToTop } from "./components/BackToTop";
import PythonAssignments from "./components/PythonAssignments";
import { scrollRestoration } from "./utils/scrollRestoration";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Use scroll restoration utility for better performance
    scrollRestoration.resetScrollPosition();

    // Ensure scroll responsiveness after navigation
    const timer = setTimeout(() => {
      scrollRestoration.ensureScrollResponsiveness();
    }, 10);

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
        <Route
          path="/roadmap/html"
          element={
            <Page>
              <HTML />
            </Page>
          }
        />
        <Route
          path="/roadmap/css"
          element={
            <Page>
              <CSS />
            </Page>
          }
        />
        <Route
          path="/roadmap/javascript"
          element={
            <Page>
              <JavaScriptRoadmap />
            </Page>
          }
        />
        <Route
          path="/roadmap/react"
          element={
            <Page>
              <ReactRoadmap />
            </Page>
          }
        />
        <Route
          path="/roadmap/angular"
          element={
            <Page>
              <Angular />
            </Page>
          }
        />
        <Route
          path="/roadmap/express"
          element={
            <Page>
              <Express />
            </Page>
          }
        />
      </Routes>
      <BackToTop />
    </>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Use scroll restoration utility
    scrollRestoration.resetScrollPosition();
    scrollRestoration.ensureScrollResponsiveness();
  }, []);

  return (
    <div
      className="min-h-screen pt-16"
      style={{
        overflow: "visible",
        pointerEvents: "auto",
        touchAction: "pan-y",
        overscrollBehavior: "none",
      }}
    >
      {children}
    </div>
  );
}

export default App;
