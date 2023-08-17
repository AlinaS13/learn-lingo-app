import { Formik, Form, Field } from "formik";
import styles from "./BookLessonForm.module.scss";
import * as yup from "yup";
import { toast } from "react-toastify";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Must be string")
    .required("Please enter your full name")
    .matches(
      /^[a-zA-Z0-9а-яА-ЯІіЇї]+[^ ]+( [^ ]+)$/,
      "Special symbols are not allowed"
    )
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
  const handleBookLesson = (userData) => {
    const bookLessonUserContasts = userData;
    console.log(bookLessonUserContasts);
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
            <label className={styles.bookLessonLabel}>
              <Field
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Full Name"
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
