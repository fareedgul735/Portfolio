import type { FC } from "react";
import style from "./About.module.css";
import { CodeOutlined } from "@ant-design/icons";

const About: FC = () => {
  return (
    <section className={style.aboutSection} id="about">
      <h2 className={style.sectionTitle}>About Me</h2>
      <div className={style.underline}></div>

      <div className={style.aboutContent}>
        <h3 className={style.subTitle}>
          <CodeOutlined className={style.icon} /> Introduction
        </h3>

        <p className={style.aboutText}>
          My startup journey began in{" "}
          <span className={style.highlight}>2024</span>, when I first started
          exploring technology and building creative ideas into reality.
          Currently, I am pursuing a{" "}
          <span className={style.highlight}>
            BSCS degree at Virtual University of Pakistan
          </span>
          .
        </p>

        <p className={style.aboutText}>
          During my academic and self-learning journey, I worked on multiple
          projects that helped me strengthen my skills in{" "}
          <span className={style.highlight}>modern web technologies</span>. Step
          by step, I evolved from a curious learner into a{" "}
          <span className={style.highlight}>MERN Stack Developer</span>, capable
          of creating scalable, full-stack web applications.
        </p>

        <p className={style.aboutText}>
          My passion lies in{" "}
          <span className={style.highlight}>
            building impactful digital products
          </span>
          , experimenting with new tools, and continuously improving my
          problem-solving abilities. I believe in writing{" "}
          <span className={style.highlight}>clean, maintainable code</span> and
          delivering solutions that provide value to users. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
