import type { FC } from "react";
import style from "./Skill.module.css";
import { Html5Outlined } from "@ant-design/icons";
import { FaBootstrap, FaCss3, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
import { Carousel } from "antd";

const skills = [
  { name: "HTML", icon: <Html5Outlined />, class: style.html },
  { name: "CSS", icon: <FaCss3 />, class: style.css },
  { name: "Bootstrap", icon: <FaBootstrap />, class: style.bootstrap },
  { name: "Tailwind", icon: <RiTailwindCssFill />, class: style.tailwind },
  { name: "Javascript", icon: <FaJsSquare />, class: style.js },
  { name: "Typescript", icon: <BiLogoTypescript />, class: style.ts },
  { name: "ReactJs", icon: <RiReactjsLine />, class: style.react },
  { name: "NextJs", icon: <RiNextjsFill />, class: style.next },
  { name: "MongoDB", icon: <SiMongodb />, class: style.mongo },
  { name: "Mongoose", icon: <SiMongoose />, class: style.mongoose },
  { name: "NodeJs", icon: <FaNodeJs />, class: style.node },
  { name: "ExpressJs", icon: <SiExpress />, class: style.express },
];

const Skill: FC = () => {
  return (
    <section className={style.skillSection} id="skills">
      <div className={style.skillText}>
        <h2 className={style.sectionTitle}>My Skills</h2>
        <div className={style.underline}></div>
        <p className={style.subTitle}>
          Technologies I’ve worked with — visualized in glowing progress
          circles.
        </p>
      </div>
      <Carousel
        style={{
          width: "100%",
          height: "222px",
        //   background: "red",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        autoplay
        autoplaySpeed={1000}
        dots={false}
        slidesToShow={5}
        infinite
      >
        {skills.map((skill, index) => (
          <div key={index} className={style.skillItem}>
            <div className={`${style.circle} ${skill.class}`}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Skill;
