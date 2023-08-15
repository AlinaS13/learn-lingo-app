import { MagnifyingGlass } from "react-loader-spinner";
import styles from "./Loaer.module.scss";
export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
