import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NetworkStatus from "./components/NetworkStatus";
import React, { Suspense } from "react";
import { Spin } from "antd";

const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about/About"));
const Service = React.lazy(() => import("./pages/services/Service"));
const Project = React.lazy(() => import("./pages/projects/Project"));
const Skill = React.lazy(() => import("./pages/skills/Skill"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Experience = React.lazy(() => import("./pages/experience/Experience"));

const App = () => {
  return (
    <>
      <NetworkStatus />
      <Suspense
        fallback={
          <div className="lazyloading">
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
