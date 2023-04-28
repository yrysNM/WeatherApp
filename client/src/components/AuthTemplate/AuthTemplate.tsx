import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CustomInputLayout } from "../layouts/customInputLayout/CustomInputLayout";

import "./authTemplate.scss";

type blur = {
  active: boolean;
  typeInput: string;
};

type inputValues = {
  email: string;
  password: string;
};

interface IAuthTemplate {
  isLogin: boolean;
  getValueInput: ({ email, password }: inputValues) => void;
}

export const AuthTemplate = ({ isLogin, getValueInput }: IAuthTemplate) => {
  const [isBlur, setIsBlur] = useState<blur>({
    active: false,
    typeInput: "",
  });

  // const validate = (values: inputValues) => {
  //   const errors: inputValues = {
  //     email: "",
  //     password: "",
  //   };

  //   if (!values.email) {
  //     errors.email = "Obligatory field!";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Wrong email address";
  //   }

  //   if (!values.password) {
  //     errors.password = "Obligatory field!";
  //   } else if (values.password.length < 8) {
  //     errors.password = "At least 8 characters";
  //   } else if (
  //     // eslint-disable-next-line no-useless-escape
  //     /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
  //       values.password
  //     )
  //   ) {
  //     errors.password =
  //       "Must consist of Latin letters, special characters, and single digits.";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      username: !isLogin
        ? Yup.string().required("Obligatory field!")
        : Yup.string(),
      email: Yup.string()
        .email("Wrong email address.")
        .required("Obligatory field!"),
      password: Yup.string()
        .required("Obligatory field!")
        .min(8, "At least 8 characters.")
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
          "Must consist of Latin letters, special characters, and single digits."
        ),
    }),
    onSubmit: (values) => {
      getValueInput(values);
    },
  });

  return (
    <div className="auth-wrapper">
      <form
        className="form form-auth"
        onSubmit={formik.handleSubmit}
        style={{
          gridTemplate: isLogin
            ? "repeat(2, 60px) 48px / minmax(250px, 400px)"
            : "repeat(3, 60px) 48px / minmax(250px, 400px)",
        }}
      >
        {!isLogin && (
          <CustomInputLayout
            labelText="Full name"
            htmlFor="full_name"
            isBlur={isBlur}
          >
            <input
              name="username"
              id="username"
              className="input"
              type="text"
              autoComplete="on"
              value={formik.values.username}
              onFocus={() => setIsBlur({ active: true, typeInput: "username" })}
              onBlur={(e) => {
                formik.handleBlur(e);
                setIsBlur({ active: false, typeInput: "username" });
              }}
              onChange={formik.handleChange}
              placeholder="Enter full name"
            />
            {formik.errors.username && formik.touched.username ? (
              <p className="sub-title errorText">{formik.errors.username}</p>
            ) : null}
          </CustomInputLayout>
        )}
        <CustomInputLayout labelText="Email" htmlFor="email" isBlur={isBlur}>
          <input
            name="email"
            id="email"
            type="email"
            className="input"
            value={formik.values.email}
            onFocus={() => setIsBlur({ active: true, typeInput: "email" })}
            onBlur={(e) => {
              setIsBlur({ active: false, typeInput: "email" });
              formik.handleBlur(e);
            }}
            onChange={formik.handleChange}
            placeholder="Enter Email-address..."
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="sub-title errorText">{formik.errors.email}</p>
          ) : null}
        </CustomInputLayout>

        <CustomInputLayout
          labelText="Password"
          htmlFor="password"
          isBlur={isBlur}
        >
          <input
            name="password"
            id="password"
            className="input"
            type="password"
            autoComplete="on"
            value={formik.values.password}
            onFocus={() => setIsBlur({ active: true, typeInput: "password" })}
            onBlur={(e) => {
              formik.handleBlur(e);
              setIsBlur({ active: false, typeInput: "password" });
            }}
            onChange={formik.handleChange}
            placeholder="Enter password…"
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="sub-title errorText">{formik.errors.password}</p>
          ) : null}
        </CustomInputLayout>

        <button type="submit" className="btn-form">
          {isLogin ? (
            <span className="signInUpBtnSpan">Sign in</span>
          ) : (
            <span className="signInUpBtnSpan">Sign up via Email</span>
          )}
        </button>
      </form>

      <BottomTexts isLogin={isLogin} />
    </div>
  );
};

const BottomTexts: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  return (
    <div className="bottomTexts">
      {isLogin && (
        <Link to={"/restorePassword"}>
          <span className="sub-title navigateSpan">Forgot your password?</span>
        </Link>
      )}

      {isLogin ? (
        <p className="textSignUpIn">
          Don't have an account yet?{" "}
          <Link to={"/register"}>
            <span className="navigateSpan">Sign up</span>
          </Link>
        </p>
      ) : (
        <p className="textSignUpIn">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="navigateSpan">Then sign in</span>
          </Link>
        </p>
      )}
    </div>
  );
};
