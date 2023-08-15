import style from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import login from "../../assets/svg/login.svg";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../loginModal/LoginModal";
import { RegistrationModal } from "../registrationModal/RegistrationModal";
import { useToggle } from "../../hooks/useToggle.js";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserName } from "../../redux/auth/authSelector";
import { logoutUser } from "../../redux/auth/authOperation";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getUser);
  const userName = useSelector(getUserName);
  const {
    isOpenRegistration,
    isOpenLogin,
    openModalLogin,
    closeModalLogin,
    openModalRegistration,
    closeModalRegistration,
  } = useToggle();
  return (
    <header className={style.header}>
      <div className={style.logoWrp}>
        <img src={logo} className={style.logoImg} />
        <p className={style.logoText}>LearnLingo</p>
      </div>
      {isAuth ? (
        <nav className={style.navWrp}>
          <NavLink to="/" className={style.navLink}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={style.navLink}>
            Teachers
          </NavLink>
          <NavLink to="/favorites" className={style.navLink}>
            Favorites
          </NavLink>
        </nav>
      ) : (
        <nav className={style.navWrp}>
          <NavLink to="/" className={style.navLink}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={style.navLink}>
            Teachers
          </NavLink>
        </nav>
      )}

      {isAuth ? (
        <div className={style.authUserWrp}>
          <p> Hello, {userName}</p>
          <button
            className={style.loginBtn}
            type="button"
            onClick={() => {
              dispatch(logoutUser());
              closeModalLogin();
              closeModalRegistration();
            }}
          >
            <img src={login} className={style.loginSvg} />
          </button>
        </div>
      ) : (
        <div className={style.authWrp}>
          <button
            className={style.loginBtn}
            type="button"
            onClick={openModalLogin}
          >
            <img src={login} className={style.loginSvg} />
            <span>Log in</span>
          </button>
          {isOpenLogin && (
            <LoginModal isOpen={isOpenLogin} onClose={closeModalLogin} />
          )}
          <button
            className={style.registrationBtn}
            type="button"
            onClick={openModalRegistration}
          >
            Registration
          </button>
          {isOpenRegistration && (
            <RegistrationModal
              isOpen={isOpenRegistration}
              onClose={closeModalRegistration}
            />
          )}
        </div>
      )}
    </header>
  );
};
