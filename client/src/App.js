import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loader, NotFound } from "./Components";

const Layout = lazy(() => import("./Pages/Layout.jsx"));
const HomePage = lazy(() => import("./Pages/HomePage.jsx"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage.jsx"));
const SingleProjectPage = lazy(() => import("./Pages/SingleProjectPage.jsx"));
const PostsPage = lazy(() => import("./Pages/PostsPage.jsx"));
const SinglePostPage = lazy(() => import("./Pages/SinglePostPage.jsx"));
const ContactPage = lazy(() => import("./Pages/ContactPage.jsx"));

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Loader />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <Suspense fallback={<Loader />}>
                <SingleProjectPage />
              </Suspense>
            }
          />
          <Route
            path="/posts"
            element={
              <Suspense fallback={<Loader />}>
                <PostsPage />
              </Suspense>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <Suspense fallback={<Loader />}>
                <SinglePostPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
