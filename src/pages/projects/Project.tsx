import style from "./Project.module.css";
import { projects } from "../../lib/Constant";
import { Tooltip } from "antd";
import type { FC } from "react";

const Project: FC = () => {
  return (
    <div className={style.parent}>
      <div className={style.wrapHeading}>
        <h2>Projects({projects.length})</h2>
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
            <a
              style={{ textDecoration: "none" }}
              target="blank"
              href={project.link}
            >
              <Tooltip title={"Click Here"} color="cyan">
                <span color="cyan">{project.title}</span>
              </Tooltip>
            </a>

            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
