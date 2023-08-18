import { Formik, Form, Field } from "formik";
import styles from "./BookLessonForm.module.scss";
import "./styles.css";
import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Must be string")
    .required("Please enter your name")
    .matches(/^[a-zA-Z0-9а-яА-ЯІіЇї]+$/, "Special symbols are not allowed")
    .min(3, "Your username i s too short")
    .max(16, "Username cannot be longer than 16 characters"),
  email: yup
    .string()
    .email("Invalid email")
    .typeError("Must be string")
    .trim()
    .required("Please enter your email")
    .min(7, "Your email is too short")
    .max(35, "Email cannot be longer than 35 characters")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email format"
    ),
  phone: yup
    .string()
    .typeError("Must be string")
    .trim()
    .required("Please enter your phone number")
    .min(10, "Your phone number is too short")
    .max(13, "phone number cannot be longer than 13 characters")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid phone number format"
    ),
});

export const BookLessonForm = ({ onClick }) => {
  const [reasonForLearning, setReasonForLearning] = useState(
    "Career and business"
  );
  function handleRadioCheck(e) {
    const value = e.target.value;
    setReasonForLearning(value);
  }
  const handleBookLesson = (userData) => {
    const bookLessonUserContasts = userData;
    toast.success("Thanks for your book! We contact you soon");
    onClick();
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      validateOnBlur
      onSubmit={(userData) => handleBookLesson(userData)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => {
        return (
          <Form className={styles.bookLessonForm}>
            <div className={styles.radioInputWrp}>
              <h3>What is your main reason for learning English?</h3>
              <div>
                <input
                  checked={reasonForLearning === "Career and business"}
                  className="custom-radio"
                  type="radio"
                  name="reasonForLearning"
                  value="Career and business"
                  id="custom-1"
                  onChange={handleRadioCheck}
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
                  checked={reasonForLearning === "Lesson for kids"}
                  onChange={handleRadioCheck}
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
                  checked={reasonForLearning === "Living abroad"}
                  onChange={handleRadioCheck}
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
                  checked={reasonForLearning === "Exams and coursework"}
                  onChange={handleRadioCheck}
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
                  checked={reasonForLearning === "Culture, travel or hobby"}
                  onChange={handleRadioCheck}
                />
                <label htmlFor="custom-5" className={styles.radioInput}>
                  Culture, travel or hobby
                </label>
              </div>
            </div>
            <label className={styles.bookLessonLabel}>
              <Field
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={`${styles.bookLessonField} ${
                  errors.name && touched.name ? styles.error : ""
                } ${!errors.name && touched.name ? styles.success : ""}`}
              />
              {touched.name && errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
              )}
            </label>

            <label className={styles.bookLessonLabel}>
              <Field
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.bookLessonField}
              />
              {touched.email && errors.email && (
                <p className={styles.errorMessage}>{errors.email}</p>
              )}
            </label>

            <label className={styles.bookLessonLabel}>
              <Field
                autoComplete="off"
                name="phone"
                type="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={styles.bookLessonField}
              />
              {touched.phone && errors.phone && (
                <p className={styles.errorMessage}>{errors.phone}</p>
              )}
            </label>

            <button
              type="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={styles.bookLessonButton}
            >
              Book
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
