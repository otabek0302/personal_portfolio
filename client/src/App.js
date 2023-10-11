import React from "react";
import { Loader, NotFound } from "./Components";

import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import SingleProjectPage from "./Pages/SingleProjectPage.jsx";
import PostsPage from "./Pages/PostsPage.jsx";
import SinglePostPage from "./Pages/SinglePostPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";


const App = () => {
  const user = true;

  if (!user) return <Loader />
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/projects/:projectId" element={<Layout><SingleProjectPage /></Layout>} />
        <Route path="/posts" element={<Layout><PostsPage /></Layout>} />
        <Route path="/posts/:postId" element={<Layout><SinglePostPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
