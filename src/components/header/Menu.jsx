import CrossSVG from "../../assets/svg/header/Cross";
import { BsPersonCheckFill } from "react-icons/bs";
import styles from "./Menu.module.scss";
import login from "../../assets/svg/login.svg";
import { NavLink } from "react-router-dom";
import { LoginModal } from "../loginModal/LoginModal";
import { RegistrationModal } from "../registrationModal/RegistrationModal";
import { useToggle } from "../../hooks/useToggle.js";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserName } from "../../redux/auth/authSelector";
import { logoutUser } from "../../redux/auth/authOperation";

const Menu = ({ setIsMenuActive, isMenuActive }) => {
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
    <div className={`${styles.backdrop} ${isMenuActive ? styles.active : ""}`}>
      <div className={styles.navWrapper}>
        <div className={styles.crossWrapper}>
          <button
            className={styles.cross}
            type="button"
            onClick={() => setIsMenuActive(false)}
          >
            <CrossSVG />
          </button>
        </div>
        <div className={styles.containerMobileMenu}>
          {isAuth ? (
            <nav className={styles.navWrp}>
              <NavLink
                to="/"
                className={styles.navLink}
                onClick={() => setIsMenuActive(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/teachers"
                className={styles.navLink}
                onClick={() => setIsMenuActive(false)}
              >
                Teachers
              </NavLink>
              <NavLink
                to="/favorites"
                className={styles.navLink}
                onClick={() => setIsMenuActive(false)}
              >
                Favorites
              </NavLink>
            </nav>
          ) : (
            <nav className={styles.navWrp}>
              <NavLink
                to="/"
                className={styles.navLink}
                onClick={() => setIsMenuActive(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/teachers"
                className={styles.navLink}
                onClick={() => setIsMenuActive(false)}
              >
                Teachers
              </NavLink>
            </nav>
          )}
          {isAuth ? (
            <div className={styles.authUserWrp}>
              <p> Hello, {userName}</p>
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
                <BsPersonCheckFill color="#10BAFC" size={20} />
                <span>Registration</span>
              </button>
              {isOpenRegistration && (
                <RegistrationModal
                  isOpen={isOpenRegistration}
                  onClose={closeModalRegistration}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
