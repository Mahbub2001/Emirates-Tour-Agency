import React from "react";
import "./Footer.Module.css";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-28 footer flex justify-center text-center text-white">
      <div className="mt-16">
        <h1 className="text-3xl font-bold">
          Emirats <span className="text-blue-700 ">Agency</span>
        </h1>
        <p className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          voluptatum sint, <br /> maxime officia blanditiis omnis eos nulla
          molestiae unde accusamus!
        </p>
        <div className="mt-4 flex justify-center gap-5 p-5 ">
          <div className="bg-white p-3 rounded-full">
            <FaFacebook className="text-2xl text-black " />
          </div>
          <div className="bg-white p-3 rounded-full">
            <FaTwitter className="text-2xl text-black " />
          </div>
          <div  className="bg-white p-3 rounded-full">
            <FaYoutube className="text-2xl text-black " />
          </div>
          <div  className="bg-white p-3 rounded-full">
            <FaSkype className="text-2xl text-black " />
          </div>
        </div>
        <div className="md:flex gap-20 justify-center">
            <p className="text-1xl text-white font-bold">Home</p>
            <p className="text-1xl text-white font-bold">Blogs</p>
            <p className="text-1xl text-white font-bold">Login</p>
            <p className="text-1xl text-white font-bold">Contacts</p>
        </div>
        <p className="text-center text-white font-semibold mt-10">Copyright ©2022 All rights reserved | This template is made with  by <span className="text-blue-600 text-2xl">Mahbub Ahmed Turza</span></p>
      </div>
    </div>
  );
};

export default Footer;
