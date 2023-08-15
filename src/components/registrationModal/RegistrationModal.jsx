import { RxCross2 } from "react-icons/rx";
import { RegistrationForm } from "../registrationForm/RegistrationForm";
import styles from "./RegistrationModal.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/auth/authSelector";

export const RegistrationModal = ({ isOpen, onClose }) => {
  const isAuth = useSelector(getUser);
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
        <h2 className={styles.modalTitle}>Registration</h2>
        <p className={styles.modalText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <RegistrationForm />
      </div>
    </div>
  );
};
