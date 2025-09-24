import { useState, type FC } from "react";
import style from "./Experience.module.css";
import { experienceData } from "../../lib/Constant";

const Experience: FC = () => {
  const [moreWords, setMoreWords] = useState<string | null>(null);
  const showText = (id: any) => {
    setMoreWords((prev) => (prev === id ? null : id));
  };
  return (
    <div className={style.parent}>
      <div className={style.wrapExperience}>
        <h2>Experience</h2>
        <div className={style.underLine}></div>
      </div>
      {experienceData.map((expData) => (
        <div className={style.card} key={expData.id}>
          <div className={style.cardImage}>
            <img src={expData.img} alt={expData.id} />
          </div>
          <div className={style.cardContent}>
            <h4>{expData.title}</h4>
            <p>
              {expData.shortDesc}
              <span
                className={style.seeMore}
                onClick={() => showText(expData.id)}
              >
                {moreWords === expData.id ? " See Less..." : " See More..."}
              </span>
              {moreWords === expData.id && <p>{expData.longDesc}</p>}
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
      ))}
    </div>
  );
};

export default Experience;
