/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [galleryContainerClass, setGalleryContainerClass] = useState("");

  const handleChange = () => {
    setMenu(!menu);
    setGalleryContainerClass(menu ? "" : "z-0"); // Set z-index based on menu state
  };

  return (
    <div className={`fixed top-0 w-full z-50 ${galleryContainerClass}`}>
    <div className="flex flex-row justify-between p-3 px-2 md:px-8 bg-white font-quicksand">
      <div className="flex items-center">
        <NavLink to="/" className="p-1 cursor-pointer">
            <img src={logo} alt="Logo" style={{ width: "100px", height: "40px" }} />
          </NavLink>
        </div>
         

        <nav className="hidden md:flex gap-6 font-bold p-1 text-xl">
          <NavLink
            to="/"
            className="text-green mr-10 text-center transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleChange}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleChange}
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleChange}
          >
            
          </NavLink>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={30} style={{ color: "black" }} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-bold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
      >
        <NavLink
          to="/"
          className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
          activeClassName="active"
          onClick={handleChange}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
          activeClassName="active"
          onClick={handleChange}
        >
          About
        </NavLink>
        <NavLink
          to="/courses"
          className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
          activeClassName="active"
          onClick={handleChange}
        >
           
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;