import { useState, type FC } from "react";
import style from "./Service.module.css";
import { Link } from "react-router-dom";
import { servicesData } from "../../lib/Constant";

const Services: FC = () => {
  const [moreWords, setMoreWords] = useState<string | null>(null);

  const toggleText = (id: string) => {
    setMoreWords((prev) => (prev === id ? null : id));
  };

  return (
    <div className={style.parent}>
      <div className={style.wrapServices}>
        <h2>My Services</h2>
        <div className={style.underLine}></div>
      </div>

      {servicesData.map((service) => (
        <div className={style.card} key={service.id}>
          <div className={style.cardImage}>
            <img src={service.img} alt={service.title} />
          </div>
          <div className={style.cardContent}>
            <h4>{service.title}</h4>
            <p>
              {service.shortDesc}
              <span
                className={style.seeMore}
                onClick={() => toggleText(service.id)}
              >
                {moreWords === service.id ? " See Less..." : " See More..."}
              </span>
              {moreWords === service.id && (
                <p>
                  {service.longDesc}
                  <b>{service.hosting}</b>
                </p>
              )}
            </p>

            <Link to={"/contact"} className={style.pdfBtn}>
              Hire Me
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
