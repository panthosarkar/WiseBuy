import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../../Pictures/person_24dp_FILL1_wght400_GRAD0_opsz24.png";
import email_icon from "../../Pictures/mail_24dp_FILL1_wght400_GRAD0_opsz24.png";
import password_icon from "../../Pictures/lock_24dp_FILL1_wght400_GRAD0_opsz24.png";

const LoginSignup = ({ handleClose }) => {
  const [action, setAction] = useState("Login");
  return (
    <div className="login-signup">
      <div className="container">
        <div className="close-icon" onClick={handleClose}>
          &#x2716;
        </div>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forget-password">
              Forget password?<span>Click Here</span>
            </div>
          )}
          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
