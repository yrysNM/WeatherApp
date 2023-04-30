import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../hooks/redux.hook";

import { CustomInputLayout } from "../layouts/customInputLayout";

import "./profile.scss";

export const Profile = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const { isLogged, user } = useAppSelector((state) => state.currentUser);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput] = useState("ergegr");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <div className="profile">
        <CustomInputLayout
          labelText="Full name"
          htmlFor="full_name"
          isBlur={{ typeInput: "username", active: true }}
        >
          <div className="profile-block">
            <span className="title">
              {isLogged ? user?.username : "Anonymous"}
            </span>
          </div>
        </CustomInputLayout>
        <CustomInputLayout
          labelText="Email"
          htmlFor="full_name"
          isBlur={{ typeInput: "email", active: true }}
        >
          <div className="profile-block">
            <span className="title">{isLogged ? user?.email : "None"}</span>
          </div>
        </CustomInputLayout>
        <CustomInputLayout
          labelText="Password"
          htmlFor="full_name"
          isBlur={{ typeInput: "password", active: true }}
        >
          <div className="profile-block_password">
            <input
              type={passwordType}
              disabled
              value={passwordInput}
              name="password"
              className="form-control"
              placeholder="Password"
            />
            <div className="input-group-btn">
              <button
                className="btn btn-outline-primary"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <i className="ion-eye-disabled"></i>
                ) : (
                  <i className="ion-eye"></i>
                )}
              </button>
            </div>
          </div>
        </CustomInputLayout>
      </div>
      <button
        className="btn btn-edit"
        onClick={() => {
          navigate(`/edit/user/${user.username}`);
          onClose();
        }}
      >
        Edit
      </button>
    </>
  );
};
