import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../assets/styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Our Services</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Shipping</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">Order Status</Link>
              </li>
              <li>
                <Link to="/">Payment Methods</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Exclusive Offers</h4>
            <ul>
              <li>
                <Link to=".">Watch</Link>
              </li>
              <li>
                <Link to=".">Bag</Link>
              </li>
              <li>
                <Link to=".">Shoes</Link>
              </li>
              <li>
                <Link to=".">Dress</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Link to=".">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h5>@Copyright by Pantho</h5>
      </div>
    </div>
  );
}

export default Footer;
