import React, { useState } from "react";
import "../Navigation/Navigation.css";
import "../Modals/LoginSignup";
import LoginSignup from "../Modals/LoginSignup";
import { Link } from "react-router-dom";

function Navigation() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="nav-container">
      <div className="nav-elements">
        <div className="logo">WiseBuy</div>
        <ul>
          <li>
            <Link to=".">Home</Link>
          </li>
          <li>
            <Link to=".">Shop</Link>
          </li>
          <li>
            <Link to=".">Contact</Link>
          </li>
          <li>
            <Link to=".">About</Link>
          </li>
        </ul>
        <div className="cart-login">
          <Link to=".">
            <span class="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="." onClick={handleShow}>
            <span class="material-symbols-outlined">person</span>
          </Link>
          {showModal && <LoginSignup handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
