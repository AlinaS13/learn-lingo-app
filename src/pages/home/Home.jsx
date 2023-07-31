import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";
import style from "./Home.module.scss";

const HomePage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
};

export default HomePage;
