import type { FC } from "react";
import style from "./Home.module.css";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Home: FC = () => {
  return (
    <div className={style.parent}>
      <div className={style.left}>
        <h2>
          Assalamoaliqom I'm <span className={style.highlight}>Fareed Gul</span>
        </h2>
        <h3>
          And I'm <span className={style.highlight}>MERNSTACK</span> Developer
        </h3>
        <p className={style.description}>
          I’m a passionate{" "}
          <span className={style.highlight}>MERN Stack Developer</span>. I
          specialize in{" "}
          <span className={style.highlight}>
            JavaScript, React.js, Next.js{" "}
          </span>
          and have built full-stack projects with excellent front-end
          experiences. On the back-end, I work with{" "}
          <span className={style.highlight}>
            Node.js, Express.js, MongoDB & Mongoose
          </span>{" "}
          to deliver scalable and efficient solutions. My goal is to create
          modern, responsive, and high-performance web applications.
        </p>
        <div className={style.contactInfo}>
          <p>
            <PhoneOutlined className={style.icon} /> 03243259241
          </p>
          <p>
            <MailOutlined className={style.icon} />
            fareedgul735@gmail.com
          </p>
        </div>

        <div className={style.buttons}>
          <button className={style.cvBtn}>View CV</button>
        </div>
      </div>

      <div className={style.right}>
        <img
          src=""
          alt="Profile"
          className={style.profileImage}
        />
      </div>
    </div>
  );
};

export default Home;
