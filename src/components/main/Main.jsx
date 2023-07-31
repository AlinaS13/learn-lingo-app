import style from "./Main.module.scss";
import mainImg from "../../assets/images/main-img.jpg";

export const Main = () => {
  return (
    <main className={style.mainContainer}>
      <div className={style.mainContentFlex}>
        <div className={style.mainContentWrp}>
          {" "}
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button>Get started</button>
        </div>
        <img src={mainImg} alt="mainImg" />
      </div>
      <ul className={style.advancesList}>
        <li>
          <span className={style.advancesNumber}>
            32,000<span>&nbsp;+</span>
          </span>
          <span className={style.advancesText}>Experienced tutors</span>
        </li>
        <li>
          <span className={style.advancesNumber}>
            300,000<span>&nbsp;+</span>
          </span>
          <span className={style.advancesText}>5-star tutor reviews</span>
        </li>
        <li>
          <span className={style.advancesNumber}>
            120<span>&nbsp;+</span>
          </span>
          <span className={style.advancesText}>Subjects taught</span>
        </li>
        <li>
          <span className={style.advancesNumber}>
            200<span>&nbsp;+</span>
          </span>
          <span className={style.advancesText}>Tutor nationalities</span>
        </li>
      </ul>
    </main>
  );
};
