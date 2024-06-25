import React, { useState } from "react";
import "../../assets/styles/login_signup_modal.css";
import user_icon from "../../assets/images/icons/person_24dp_FILL1_wght400_GRAD0_opsz24.png";
import email_icon from "../../assets/images/icons/mail_24dp_FILL1_wght400_GRAD0_opsz24.png";
import password_icon from "../../assets/images/icons/lock_24dp_FILL1_wght400_GRAD0_opsz24.png";

const LoginSignupModal = ({ handleClose }) => {
  const [action, setAction] = useState("Login");
  return (
    <div className="login-signup">
      <div className="modal-overlay"></div>
      <div className="login-signup-container">
        <div className="close-icon" onClick={handleClose}>
          &#x2716;
        </div>
        <div className="login-signup-header">
          <div className="login-signup-text">{action}</div>
          <div className="login-signup-underline"></div>
        </div>
        <div className="login-signup-inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="login-signup-input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="login-signup-input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="login-signup-input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? (
            <div className="signup-condition-container">
              <div className="forget-password">
                Have an account?
                <span
                  onClick={() => {
                    setAction("Login");
                  }}
                >
                  Sign in
                </span>
              </div>
              <div className="login-signup-submit-container">
                <div className="login-signup-submit">Sign Up</div>
              </div>
            </div>
          ) : (
            <div className="login-condition-container">
              <div className="forget-password">
                Forget password?<span>Click Here</span>
              </div>
              <div className="dont-have-account">
                Don't have account?
                <span
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign up
                </span>
              </div>
              <div className="login-signup-submit-container">
                <div className="login-signup-submit">Log in</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
