import styles from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Header } from "../header/Header";
// import { getUser } from "../../redux/auth/authSelector";
// import { useSelector } from "react-redux";

export const Layout = () => {
  // const isLoggedIn = useSelector(getUser);
  return (
    <>
      <div className={styles.content}>
        <Header />
        {/* {!isLoggedIn && <Header />} */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
