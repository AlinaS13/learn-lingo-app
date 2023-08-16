import styles from "./NotFound.module.scss";
import notFound from "../../assets/images/not-found.jpg";
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.notFoundText}>Page not found</p>
      <img src={notFound} alt="Not Found" width="350px" height="350px" />
    </div>
  );
};

export default NotFoundPage;
