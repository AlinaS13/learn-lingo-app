import styles from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import login from "../../assets/svg/login.svg";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../loginModal/LoginModal";
import { RegistrationModal } from "../registrationModal/RegistrationModal";
import { useToggle } from "../../hooks/useToggle.js";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserName } from "../../redux/auth/authSelector";
import { logoutUser } from "../../redux/auth/authOperation";
import { useState } from "react";
import BurgerSVG from "../../assets/svg/header/Burger";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getUser);
  const userName = useSelector(getUserName);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const {
    isOpenRegistration,
    isOpenLogin,
    openModalLogin,
    closeModalLogin,
    openModalRegistration,
    closeModalRegistration,
  } = useToggle();
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoWrp}>
        <img src={logo} className={styles.logoImg} />
        <p className={styles.logoText}>LearnLingo</p>
      </NavLink>

      {isAuth ? (
        <nav className={styles.navWrp}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={styles.navLink}>
            Teachers
          </NavLink>
          <NavLink to="/favorites" className={styles.navLink}>
            Favorites
          </NavLink>
        </nav>
      ) : (
        <nav className={styles.navWrp}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={styles.navLink}>
            Teachers
          </NavLink>
        </nav>
      )}

      {isAuth ? (
        <div className={styles.authUserWrp}>
          <p className={styles.authUserName}> Hello, {userName}</p>
          <button
            className={styles.loginBtn}
            type="button"
            onClick={() => {
              dispatch(logoutUser());
              closeModalLogin();
              closeModalRegistration();
            }}
          >
            <img src={login} className={styles.loginSvg} />
          </button>
        </div>
      ) : (
        <div className={styles.authWrp}>
          <button
            className={styles.loginBtn}
            type="button"
            onClick={openModalLogin}
          >
            <img src={login} className={styles.loginSvg} />
            <span>Log in</span>
          </button>
          {isOpenLogin && (
            <LoginModal isOpen={isOpenLogin} onClose={closeModalLogin} />
          )}
          <button
            className={styles.registrationBtn}
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
      <Dropdown
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <button
        type="button"
        className={styles.burgerMenuBtn}
        onClick={() => setIsMenuActive(true)}
      >
        <BurgerSVG />
      </button>
      <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
    </header>
  );
};
