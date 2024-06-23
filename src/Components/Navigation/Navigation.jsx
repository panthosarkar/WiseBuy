import React, { useState } from "react";
import "../../assets/styles/navigation.css";
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
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="cart-login">
          <Link to="/cart">
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
