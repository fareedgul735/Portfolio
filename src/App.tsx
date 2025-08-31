import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
import Project from "./pages/projects/Project";
import Skill from "./pages/skills/Skill";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
