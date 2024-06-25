import React, { useState } from "react";
import "../../assets/styles/body.css";
import bodyObj from "../../assets/images/bg-images/bg-obj.png";
import "../Modals/LoginSignupModal";
import LoginSignupModal from "../Modals/LoginSignupModal";
import { Link } from "react-router-dom";

function Body() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="fullbody">
      <div className="body-container">
        <div className="body-back" />
        <div className="body-content">
          <div className="body-text">
            <h1>Shop Smarter, Save More.</h1>
            <p>
              Our platform empowers informed decisions with price comparisons &
              personalized recommendations. Experience intelligent shopping.
            </p>
            <div className="body-btns">
              <div className="login-btn">
                <button type="button" onClick={handleShow}>
                  Login
                </button>
                {showModal && <LoginSignupModal handleClose={handleClose} />}
              </div>
              <div className="shop-btn">
                <Link to="/shop">
                  <button type="button">Shop now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="body-obj">
            <img src={bodyObj} alt="" />
          </div>
          <div className="body-popular">
            <div className="body-popular-header"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
