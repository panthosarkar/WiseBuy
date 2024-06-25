import React from "react";
import "../../assets/styles/get_in_touch.css";
import contactObj from "../../assets/images/bg-images/contact-obj.png";

function GetInTouch() {
  return (
    <div className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="get-in-touch-header">
          <div className="get-in-touch-text">Get in Touch</div>
          <div className="get-in-touch-underline"></div>
        </div>
        <div className="get-in-touch-inputs">
          <div className="get-in-touch-input">
            <input type="text" placeholder="FirstName" />
          </div>
          <div className="get-in-touch-input">
            <input type="text" placeholder="LastName" />
          </div>
          <div className="get-in-touch-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="get-in-touch-input">
            <input type="text" placeholder="Address" />
          </div>
          <div className="get-in-touch-input">
            <input type="password" placeholder="How can we help?" />
          </div>
        </div>
        <div className="get-in-touch-submit-container">
          <div className="get-in-touch-submit">Send</div>
        </div>
      </div>
      <div className="get-in-touch-img">
        <img src={contactObj} alt="" />
      </div>
    </div>
  );
}

export default GetInTouch;
