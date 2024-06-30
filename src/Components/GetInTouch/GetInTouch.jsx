import React from "react";
import contactObj from "../../assets/images/bg-images/contact-obj.png";

function GetInTouch() {
  const GetInTouchInput = ({ type = "text", placeholder }) => (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className="w-[400px] p-2 border-none rounded-lg shadow-md outline-none bg-[#DEF6E5] "
      />
    </div>
  );
  return (
    <div className="h-[100vh] w-full inline-block justify-between my-0 mx-auto ">
      <div className="flex justify-center items-end  gap-12 ">
        <div className="flex flex-col w-[480px] mx-4 bg-[#91e2a8] rounded-2xl shadow-[2px_2px_10px_-4px_#000000]">
          <div className="flex flex-col items-center tracking-tighter w-full">
            <div className="text-[#275f6f] text-[48px] font-bold my-4">
              Get in Touch
            </div>
            <div className="w-[50%] h-[6px] bg-[#275f6f] rounded-lg mb-4"></div>
          </div>
          <div className="p-8 flex flex-col justify-center items-center">
            <GetInTouchInput placeholder="FirstName" />
            <GetInTouchInput placeholder="LastName" />
            <GetInTouchInput placeholder="Email" type="email" />
            <GetInTouchInput placeholder="Address" />
            <GetInTouchInput placeholder="How can we help?" type="password" />
          </div>
          <div className="flex my-8 mx-auto justify-center items-center w-full">
            <div className="flex justify-center items-center w-[200px] h-[50px] text-[#ffffff] rounded-3xl custom-gradient hover:bg-none hover:text-[#275f6f] hover:border-solid hover:border hover:border-[#275f6f] custom-shadow active:custom-gradient active:text-[#fff]">
              Send
            </div>
          </div>
        </div>
        <div className="w-[40vw]">
          <img src={contactObj} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
