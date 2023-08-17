import { RxCross2 } from "react-icons/rx";
import styles from "./BookLessonModal.module.scss";
import "./styles.css";
import { useEffect, useState } from "react";
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
          <div>
            <div className={styles.radioInputWrp}>
              <h3>What is your main reason for learning English?</h3>
              <input
                className="custom-radio"
                type="radio"
                name="reasonForLearning"
                value="Career and business"
                id="custom-1"
                // checked={reasonForLearning === "Career and business"}
                // onChange={setReasonForLearning("Career and business")}
              />
              <label htmlFor="custom-1" className={styles.radioInput}>
                Career and business
              </label>
              <input
                className="custom-radio"
                type="radio"
                name="reasonForLearning"
                value="Lesson for kids"
                id="custom-2"
                // checked={reasonForLearning === "Lesson for kids"}
                // onChange={setReasonForLearning("reasonForLearning")}
              />
              <label htmlFor="custom-2" className={styles.radioInput}>
                Lesson for kids
              </label>
              <input
                className="custom-radio"
                type="radio"
                name="reasonForLearning"
                value="Living abroad"
                id="custom-3"
                // checked={reasonForLearning === "Living abroad"}
                // onChange={setReasonForLearning("Living abroad")}
              />
              <label htmlFor="custom-3" className={styles.radioInput}>
                Living abroad
              </label>
              <input
                className="custom-radio"
                type="radio"
                name="reasonForLearning"
                value="Exams and coursework"
                id="custom-4"
                // checked={reasonForLearning === "Exams and coursework"}
                // onChange={setReasonForLearning("Exams and coursework")}
              />
              <label htmlFor="custom-4" className={styles.radioInput}>
                Exams and coursework
              </label>
              <input
                className="custom-radio"
                type="radio"
                name="reasonForLearning"
                value="Culture, travel or hobby"
                id="custom-5"
                // checked={reasonForLearning === "Culture, travel or hobby"}
                // onChange={() => setReasonForLearning(value)}
              />
              <label htmlFor="custom-5" className={styles.radioInput}>
                Culture, travel or hobby
              </label>
            </div>
          </div>
          <BookLessonForm onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
