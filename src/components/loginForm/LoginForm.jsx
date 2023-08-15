import { Formik, Form, Field } from "formik";
import styles from "./LoginForm.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperation";
// import { useToggle } from "../../hooks/useToggle";

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 16 characters"),
});

export const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(loginUser(userData));
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
      validationSchema={SignInSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(userData) => handleLogin(userData)}
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
          <Form className={styles.loginForm}>
            <label className={styles.loginLabel}>
              <Field
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.loginField}
              />
              {touched.email && errors.email && (
                <p className={styles.errorMessage}>{errors.email}</p>
              )}
            </label>

            <label className={styles.loginLabel}>
              <Field
                autoComplete="off"
                name="password"
                type={passwordType}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={styles.loginField}
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
              className={styles.loginButton}
            >
              Log In
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
