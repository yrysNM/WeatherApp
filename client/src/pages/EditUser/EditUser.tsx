import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "../../hooks/redux.hook";

import type { blur } from "../../components/AuthTemplate/AuthTemplate";
import { CustomInputLayout } from "../../components/layouts/customInputLayout";

import "./editUser.scss";

const EditUser = () => {
  const { user } = useAppSelector((state) => state.currentUser);
  const [isBlur, setIsBlur] = useState<blur>({
    active: false,
    typeInput: "",
  });

  const formik = useFormik({
    initialValues: {
      username: user.username,
      email: user.email,
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Obligatory field!"),
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
      confirm_password: Yup.string()
        .label("confirm password")
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Obligatory field!")
        .min(8, "At least 8 characters."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="edit">
      <h1 className="title-fw500" style={{ textAlign: "center" }}>
        Account Settings concept
      </h1>
      <form className="form form-auth">
        <CustomInputLayout
          labelText="Full name"
          htmlFor="username"
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

        <CustomInputLayout
          labelText="Confirm Password"
          htmlFor="confirm_password"
          isBlur={isBlur}
        >
          <input
            name="confirm_password"
            id="confirm_password"
            className="input"
            type="password"
            autoComplete="on"
            value={formik.values.confirm_password}
            onFocus={() =>
              setIsBlur({ active: true, typeInput: "confirm_password" })
            }
            onBlur={(e) => {
              formik.handleBlur(e);
              setIsBlur({ active: false, typeInput: "confirm_password" });
            }}
            onChange={formik.handleChange}
            placeholder="Enter password…"
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <p className="sub-title errorText">
              {formik.errors.confirm_password}
            </p>
          ) : null}
        </CustomInputLayout>
        <button type="submit" className="btn-form">
          <span className="signInUpBtnSpan">Save</span>
        </button>
      </form>
    </div>
  );
};

export { EditUser };
