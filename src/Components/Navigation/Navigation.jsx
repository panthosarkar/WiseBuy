import React, { useState } from "react";
import "../Modals/LoginSignupModal";
import LoginSignupModal from "../Modals/LoginSignupModal";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation({ cartItemCount }) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="w-full m-auto top-0 z-1000 shadow-[0px_-5px_10px_#000f37] mb-10">
      <div className="w-[1200px] flex items-center justify-between my-0 mx-auto py-4 px-2 ">
        <div className="font-[Salsa] font-bold text-4xl cursor-pointer ">
          WiseBuy
        </div>
        <ul className=" flex gap-5 items-center justify-center list-none text-center [&>li]:w-20 [&>li]:h-6">
          <li>
            <Link
              className="text-base font-normal cursor-pointer transition-all duration-200 ease-in-out hover:text-xl hover:font-medium hover:underline hover:underline-offset-[16px]  "
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal cursor-pointer transition-all duration-200 ease-in-out hover:text-xl hover:font-medium hover:underline hover:underline-offset-[16px]  "
              to="/shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal cursor-pointer transition-all duration-200 ease-in-out hover:text-xl hover:font-medium hover:underline hover:underline-offset-[16px]  "
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal cursor-pointer transition-all duration-200 ease-in-out hover:text-xl hover:font-medium hover:underline hover:underline-offset-[16px]  "
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="flex  ">
          <Link to="/cart">
            <FaShoppingCart className="my-3 mx-5 text-xl bg-transparent border-none hover:text-[#275f6f] hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out" />
          </Link>
          {cartItemCount > 0 && (
            <div className="cartCounter">
              {cartItemCount <= 9 ? cartItemCount : "9+"}
            </div>
          )}
          <FaUser
            onClick={handleShow}
            className="my-3 mx-5 text-xl bg-transparent border-none hover:text-[#275f6f] hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
          />
          {showModal && <LoginSignupModal handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
