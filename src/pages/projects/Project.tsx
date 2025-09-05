import { useState, type FC } from "react";
import style from "./Project.module.css";
import { categories, projects } from "../../lib/Constant";
import { Tooltip } from "antd";

const Project: FC = () => {
  const [activeCategory, setActiveCategoy] = useState<string>("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories === activeCategory);
  return (
    <div className={style.parent}>
      <div className={style.wrapHeading}>
        <h2>Projects</h2>
        <div className={style.underLine}></div>
      </div>
      <div className={style.navbar}>
        {categories.map((cat, index) => (
          <Tooltip title={cat} color="cyan">
            <span
              onClick={() => setActiveCategoy(cat)}
              className={`${style.navBtn} ${
                activeCategory === cat ? style.active : ""
              }`}
              key={index}
            >
              {cat}
            </span>
          </Tooltip>
        ))}
      </div>
      {filteredProjects.map((project) => (
        <div key={project.id} className={style.card}>
          <div className={style.cardImage}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <div className={style.cardContent}>
            <a
              style={{ textDecoration: "none", }}
              target="blank"
              href={project.link}
            >
              <h4>{project.title}</h4>
            </a>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
