import React, { useState } from "react";
import "../../assets/styles/login_signup_modal.css";
import user_icon from "../../assets/images/icons/person_24dp_FILL1_wght400_GRAD0_opsz24.png";
import email_icon from "../../assets/images/icons/mail_24dp_FILL1_wght400_GRAD0_opsz24.png";
import password_icon from "../../assets/images/icons/lock_24dp_FILL1_wght400_GRAD0_opsz24.png";
import axios from "axios";
import { apiUrl } from "../../utils/url";

const LoginSignupModal = ({ handleClose }) => {
  const [action, setAction] = useState("Login");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const postData = {
      username,
      password,
      expiresInMins: 30,
    };

    axios
      .post(`${apiUrl()}/auth/login`, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignup = () => {
    axios
      .post(`${apiUrl()}/auth/login`, {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("Sign up successful:", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = () => {
    if (action === "Login") {
      handleLogin();
    } else if (action === "Sign Up") {
      handleSignup();
    }
  };

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
            <div className="login-signup-input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Name"
              />
            </div>
          ) : (
            <div className="login-signup-input">
              <img src={user_icon} alt="" />
              <input
                type="email"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
          )}
          <div className="login-signup-input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {action === "Sign Up" ? (
            <div className="signup-condition-container">
              <div className="login-signup-input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
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
              <div
                className="login-signup-submit-container"
                onClick={handleSubmit}
              >
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
