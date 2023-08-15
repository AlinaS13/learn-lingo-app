import { RxCross2 } from "react-icons/rx";
import { LoginForm } from "../loginForm/LoginForm";
import styles from "./LoginModal.module.scss";
import { useEffect } from "react";

export const LoginModal = ({ isOpen, onClose }) => {
  const closeModal = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={onClose}
        >
          <RxCross2 className={styles.modalCloseSvg} />
        </button>
        <h2 className={styles.modalTitle}>Log In</h2>
        <p className={styles.modalText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <LoginForm />
      </div>
    </div>
  );
};
