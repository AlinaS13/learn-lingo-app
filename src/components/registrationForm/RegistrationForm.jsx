import { Formik, Form, Field } from "formik";
import styles from "./RegistrationForm.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { setUser } from "../../redux/auth/authSlicе";
import { registrationUser } from "../../redux/auth/authOperation";

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
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .typeError("Must be string")
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 16 characters")
    .test(
      "password",
      "Password is little secure.Please enter an uppercase letter, a lowercase letter, and a number",
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(value || "")
    ),
});

export const RegistrationForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();

  const handleRegister = (userData) => {
    dispatch(registrationUser(userData));
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, userData.email, userData.password)
    //   .then(({ user }) => {
    //     console.log(user);
    //   })
    //   .catch(console.error);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(userData) => {
        handleRegister(userData);
      }}
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
          <Form className={styles.registrationForm}>
            <label className={styles.registrationLabel}>
              {" "}
              <Field
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={`${styles.registrationField} ${
                  errors.name && touched.name ? styles.error : ""
                } ${!errors.name && touched.name ? styles.success : ""}`}
              />
              {touched.name && errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
              )}
            </label>

            <label className={styles.registrationLabel}>
              <Field
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.registrationField}
              />
              {touched.email && errors.email && (
                <p className={styles.errorMessage}>{errors.email}</p>
              )}
            </label>

            <label className={styles.registrationLabel}>
              <Field
                autoComplete="off"
                name="password"
                type={passwordType}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={styles.registrationField}
              />
              <div className={styles.eyeBox} onClick={togglePassword}>
                {passwordType === "password" ? (
                  <BsEyeSlash fill="#121417" />
                ) : (
                  <BsEye fill="#121417" />
                )}
              </div>
              {touched.password && errors.password && (
                <p className={styles.errorMessage}>{errors.password}</p>
              )}
            </label>
            <button
              type="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={styles.registrationButton}
            >
              Sign Up
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
