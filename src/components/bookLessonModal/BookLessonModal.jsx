import { RxCross2 } from "react-icons/rx";
import styles from "./BookLessonModal.module.scss";
import { useEffect } from "react";
import { BookLessonForm } from "../bookLessonForm/bookLessonForm";

export const BookLessonModal = ({
  isOpen,
  onClose,
  name,
  surname,
  avatar_url,
}) => {
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
      <div className={styles.modalBox}>
        {" "}
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
          <h2 className={styles.modalTitle}>Book trial lesson</h2>
          <p className={styles.modalText}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={styles.teacherInfoWrp}>
            <img
              src={avatar_url}
              height="44px"
              width="44px"
              alt="Teacher Img"
              className={styles.teacherImg}
            />
            <div className={styles.teacherNameWrp}>
              <span>Your teacher</span>
              <p>
                {name} {surname}
              </p>
            </div>
          </div>
          <BookLessonForm onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
