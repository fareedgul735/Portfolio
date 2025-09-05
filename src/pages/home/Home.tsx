import { useState, type FC } from "react";
import style from "./Home.module.css";
import { CloseOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const [showPic, setShowPic] = useState<boolean>(false);

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
          <a href="/fareedgul.pdf" target="_blank" rel="noopener noreferrer">
            <button className={style.cvBtn}>View CV</button>
          </a>
          <Link to={"/contact"}>
            <button className={style.hireMe}>Hire Me</button>
          </Link>
        </div>
      </div>

      <div className={style.right}>
        <img
          onClick={() => setShowPic(true)}
          src="/fareedgul.jpg"
          alt="Profile"
          className={style.profileImage}
        />
      </div>
      {showPic && (
        <div onClick={() => setShowPic(false)} className={style.overlay}>
          <button onClick={() => setShowPic(false)} className={style.closeBtn}>
           <CloseOutlined />
          </button>
          <div className={style.modal}>
            <img
              src={"/fareedgul.jpg"}
              alt="fareedgul"
              className={style.image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
