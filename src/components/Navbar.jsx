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
      <ul className={`hidden md:flex`}>
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? `fixed left-0 top-0 w-[60%] h-full border-r mt-20 border-gray-900 ease-in-out duration-500 bg-[#000300]`
            : `fixed left-[-100%] ease-in-out duration-500`
        }
      >
        {/* <h1 className="text-3xl w-full font-bold text-[#00df9a]">REACT.</h1> */}
        <ul className="uppercase p-4 mt-4">
          <li className="p-4 border-b border-gray-800">Home</li>
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
