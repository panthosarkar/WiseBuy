import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#24262b] py-12 px-0 w-full mt-10 shadow-[0px_1px_10px_#000f37]">
      <div className="max-w-[1170px] mx-auto">
        <div className="flex flex-wrap">
          <FooterColumn title="Company">
            <FooterLink to="/">About us</FooterLink>
            <FooterLink to="/">Our Services</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get Help">
            <FooterLink to="/">FAQ</FooterLink>
            <FooterLink to="/">Shipping</FooterLink>
            <FooterLink to="/">Returns</FooterLink>
            <FooterLink to="/">Order Status</FooterLink>
            <FooterLink to="/">Payment Methods</FooterLink>
          </FooterColumn>

          <FooterColumn title="Exclusive Offers">
            <FooterLink to="/">Watch</FooterLink>
            <FooterLink to="/">Bag</FooterLink>
            <FooterLink to="/">Shoes</FooterLink>
            <FooterLink to="/">Dress</FooterLink>
          </FooterColumn>

          <FooterColumn title="Follow Us">
            <SocialLink to="/">
              <FaFacebook />
            </SocialLink>
            <SocialLink to="/">
              <FaInstagram />
            </SocialLink>
            <SocialLink to="/">
              <FaTwitter />
            </SocialLink>
            <SocialLink to="/">
              <FaLinkedinIn />
            </SocialLink>
          </FooterColumn>
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-12 flex justify-center items-center">
        <h5>&copy; 2023 Wise Buy</h5>
      </div>
    </div>
  );
}

const FooterColumn = ({ title, children }) => (
  <div className="inline-block mx-auto">
    <h4 className="text-lg text-[#ffffff] mb-8 font-medium pb-4 border-b-2 border-solid w-[200px]">
      {title}
    </h4>
    <ul className="list-none">{children}</ul>
  </div>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      className="text-base text-[#ffffff] font-light tracking-wide block transition-all duration-200 ease-in-out hover:font-normal hover:pl-3"
      to={to}
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ to, children }) => (
  <div className="inline-block justify-start mx-auto p-3">
    <Link
      className="text-2xl text-[#80ebff] transition-all duration-200 ease-in-out hover:text-[#00fa97]"
      to={to}
    >
      {children}
    </Link>
  </div>
);

export default Footer;
