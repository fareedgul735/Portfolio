import type { FC } from "react";
import style from "./Project.module.css";
import { projects } from "../../lib/Constant";

const Project: FC = () => {
  return (
    <div className={style.parent}>
      <div className={style.wrapHeading}>
        <h2>Projects</h2>
        <div className={style.underLine}></div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className={style.card}>
          <div className={style.cardImage}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <div className={style.cardContent}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
