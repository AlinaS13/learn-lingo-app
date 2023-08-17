import styles from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Header } from "../header/Header";

export const Layout = () => {
  return (
    <>
      <div className={styles.content}>
        <Header />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
