import style from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import login from "../../assets/svg/login.svg";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoWrp}>
        <img src={logo} className={style.logoImg} />
        <p className={style.logoText}>LearnLingo</p>
      </div>
      <nav className={style.navWrp}>
        <NavLink to="/" className={style.navLink}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={style.navLink}>
          Teachers
        </NavLink>
      </nav>
      <div className={style.authWrp}>
        <button className={style.loginBtn}>
          <img src={login} className={style.loginSvg} />
          <span>Log in</span>
        </button>
        <button className={style.registrationBtn}>Registration</button>
      </div>
    </header>
  );
};
