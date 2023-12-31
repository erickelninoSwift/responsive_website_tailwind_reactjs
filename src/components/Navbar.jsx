import React from "react";
import "../index.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24">
      <h1 className="text-3xl w-full font-bold text-[#00df9a]">REACT.</h1>
      <ul className={`flex ${nav ? "" : "hidden"}`}>
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div>
        {!nav ? (
          <AiOutlineClose size={20} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleNav} />
        )}
      </div>
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r-gray-900 mt-[50px] ${
          nav && "hidden"
        }`}
      >
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4 border-b border-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
