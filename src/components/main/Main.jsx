import styles from "./Main.module.scss";
import mainImg from "../../assets/images/main-img.jpg";
import { NavLink } from "react-router-dom";

export const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainContentFlex}>
        <div className={styles.mainContentWrp}>
          {" "}
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <NavLink className={styles.getStartedLink} to="/teachers">
            Get started
          </NavLink>
          {/* <button type="button" onClick={}>Get started</button> */}
        </div>
        <img src={mainImg} alt="mainImg" />
      </div>
      <ul className={styles.advancesList}>
        <li>
          <span className={styles.advancesNumber}>
            32,000<span>&nbsp;+</span>
          </span>
          <span className={styles.advancesText}>Experienced tutors</span>
        </li>
        <li>
          <span className={styles.advancesNumber}>
            300,000<span>&nbsp;+</span>
          </span>
          <span className={styles.advancesText}>5-star tutor reviews</span>
        </li>
        <li>
          <span className={styles.advancesNumber}>
            120<span>&nbsp;+</span>
          </span>
          <span className={styles.advancesText}>Subjects taught</span>
        </li>
        <li>
          <span className={styles.advancesNumber}>
            200<span>&nbsp;+</span>
          </span>
          <span className={styles.advancesText}>Tutor nationalities</span>
        </li>
      </ul>
    </section>
  );
};
