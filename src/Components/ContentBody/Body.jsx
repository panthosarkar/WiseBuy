import React, { useState } from "react";
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
      <div className="top-0 left-0 w-full m-auto flex justify-center items-center mb-[50px]">
        <div className="w-[90%] h-[780px] custom-gradient absolute rounded-2xl m-[100px] z-[-2]" />
        <div className="w-[1462px] h-[862px] bg-[#80ebff] rounded-2xl z-0 flex justify-center items-center">
          <div className="left-0 top-0 w-[500px] my-[200px] mx-[100px]">
            <h1 className="font-[Salsa] text-4xl tracking-widest">
              Shop Smarter, Save More.
            </h1>
            <p className="text-lg tracking-[2px]">
              Our platform empowers informed decisions with price comparisons &
              personalized recommendations. Experience intelligent shopping.
            </p>
            <div className="flex justify-start items-center my-[100px] mx-auto gap-[50px]">
              <div className="login-btn">
                <button
                  className="text-lg font-medium py-[10px] px-[30px] border border-solid border-[#275f6f] w-[200px] cursor-pointer rounded-xl text-[#275f6f] hover:text-[#c4f1d2] hover:bg-gradient-to-br from-[#2b9898] to-[#275f6f] transition-all duration-200 ease-in-out"
                  type="button"
                  onClick={handleShow}
                >
                  Login
                </button>
                {showModal && <LoginSignupModal handleClose={handleClose} />}
              </div>
              <div className="shop-btn">
                <Link to="/shop">
                  <button
                    className="text-lg font-medium py-[10px] px-[30px] border border-solid border-[#275f6f] w-[200px] cursor-pointer rounded-xl text-[#c4f1d2] custom-gradient hover:text-[#275f6f] hover:bg-none transition-all duration-200 ease-in-out"
                    type="button"
                  >
                    Shop now
                  </button>
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
