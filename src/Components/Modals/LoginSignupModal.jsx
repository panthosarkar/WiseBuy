import React, { useState } from "react";
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
      <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 absolute backdrop-blur-md -z-[1]"></div>
      <div className="flex flex-col m-auto mt-[100px] w-[500px] bg-white rounded-lg pb-[30px] shadow-[2px_1px_10px_0px_black]">
        <div
          className="text-right m-8 text-2xl cursor-pointer text-[#2b9898] hover:text-[#1e6a6a]"
          onClick={handleClose}
        >
          &#x2716;
        </div>
        <div className="flex flex-col items-center gap-2 w-full mt-0">
          <div className="text-[#2b9898] text-5xl font-bold">{action}</div>
          <div className="w-[60px] h-[6px] bg-[#2b9898] rounded-lg mt-4"></div>
        </div>
        <div className="mt-[40px] flex flex-col gap-6">
          {action === "Login" ? (
            <div className="flex items-center m-auto w-[380px] h-[60px] bg-[#eaeaea] rounded-md">
              <img
                src={user_icon}
                className="my-0 mx-[30px] w-[30px] h-[30px]"
                alt=""
              />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] overflow-x-scroll text-xl"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Name"
              />
            </div>
          ) : (
            <div className="flex items-center m-auto w-[380px] h-[60px] bg-[#eaeaea] rounded-md">
              <img
                src={user_icon}
                className="my-0 mx-[30px] w-[30px] h-[30px]"
                alt=""
              />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] overflow-x-scroll text-xl"
                type="email"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
          )}
          <div className="flex items-center m-auto w-[380px] h-[60px] bg-[#eaeaea] rounded-md">
            <img
              src={password_icon}
              className="my-0 mx-[30px] w-[30px] h-[30px]"
              alt=""
            />
            <input
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] overflow-x-scroll text-xl"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {action === "Sign Up" ? (
            <div className="signup-condition-container">
              <div className="flex items-center m-auto w-[380px] h-[60px] bg-[#eaeaea] rounded-md">
                <img
                  src={email_icon}
                  className="my-0 mx-[30px] w-[30px] h-[30px]"
                  alt=""
                />
                <input
                  className="h-[50px] w-[300px] bg-transparent border-none outline-none text-[#797979] overflow-x-scroll text-xl"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="pl-[62px] mt-[27px] text-[#797979] text-xl">
                Have an account?
                <span
                  className="text-[#2b9898] cursor-pointer ml"
                  onClick={() => {
                    setAction("Login");
                  }}
                >
                  Sign in
                </span>
              </div>
              <div className="flex gap-[30px] my-[30px] w-full justify-center items-center ">
                <div className="flex justify-center items-center w-[200px] h-[50px] text-[#fff] bg-[#2b9898] rounded-[50px] text-xl font-bold cursor-pointer hover:bg-[#eaeaea] hover:text-[#676767]">
                  Sign Up
                </div>
              </div>
            </div>
          ) : (
            <div className="login-condition-container">
              <div className="pl-[62px] mt-[27px] text-[#797979] text-xl">
                Forget password?
                <span className="text-[#2b9898] cursor-pointer ml-[10px]">
                  Click Here
                </span>
              </div>
              <div className="pl-[62px] mt-[27px] text-[#797979] text-xl">
                Don't have account?
                <span
                  className="text-[#2b9898] cursor-pointer ml-[10px]"
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign up
                </span>
              </div>
              <div
                className="flex gap-[30px] my-[30px] w-full justify-center items-center "
                onClick={handleSubmit}
              >
                <div className="flex justify-center items-center w-[200px] h-[50px] text-[#fff] bg-[#2b9898] rounded-[50px] text-xl font-bold cursor-pointer hover:bg-[#eaeaea] hover:text-[#676767]">
                  Log in
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
