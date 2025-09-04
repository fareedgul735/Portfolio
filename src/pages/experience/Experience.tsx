import { useState, type FC } from "react";
import style from "./Experience.module.css";

const Experience: FC = () => {
  const [moreWords, setMoreWords] = useState<boolean>(false);
  const showText = () => {
    setMoreWords(true);
  };
  return (
    <div className={style.parent}>
      <div className={style.wrapExperience}>
        <h2>Experience</h2>
        <div className={style.underLine}></div>
      </div>
      <div className={style.card}>
        <div className={style.cardImage}>
          <img src="/FareedExperienceLetterPic.jpg" alt="ExperienceLetter" />
        </div>
        <div className={style.cardContent}>
          <h4>Frontend Developer Internship</h4>
          <p>
            Worked as a <b>Frontend Developer Intern</b> (3 months) where I
            handled <b>Next.js, TypeScript</b> and <b>SCSS</b> for building a
            project.
            <span className={style.seeMore} onClick={showText}>
              {moreWords ? " See Less..." : " See More..."}
            </span>
            {moreWords && (
              <p>
                The project idea was to create a platform where school, college
                or tuition heads/owners can send and manage students’ documents,
                signatures and messages via email. Multiple recipients can
                receive any file and perform actions. Although due to some
                issues the final deployment wasn’t delivered, the internship
                gave me <b>3 months of valuable hands-on experience</b> in
                frontend development.
              </p>
            )}
          </p>
          <a
            href="/Fareed Gul Internship Letter.pdf"
            target="blank"
            className={style.pdfBtn}
          >
            View PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
