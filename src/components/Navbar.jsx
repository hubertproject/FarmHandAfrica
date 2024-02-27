import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const handleMenuItemClick = () => {
    setMenu(false);
  };

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 50, visibility: visible ? "visible" : "hidden" }}>
      <div className="flex flex-row justify-between p-3 px-2 md:px-8 bg-transparent font-quicksand">
        <div className="flex items-center">
          <NavLink to="/" className="p-0 cursor-pointer flex items-center">
            <img src={logo} alt="Logo" style={{ width: "80px", height: "20px" }} />
            <span className="text-black font-quicksand ml-4 text-2xl">FarmHand</span>
          </NavLink>
        </div>
        <div className="hidden md:flex gap-6 font-bold p-1 text-xl">
          <NavLink
            to="/"
            className="text-white mr-10 text-center transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleMenuItemClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleMenuItemClick}
          >
            About
          </NavLink>
        </div>
        <div className="flex md:hidden" onClick={handleMenuToggle}>
          <div className="p-2">
            <AiOutlineMenu size={30} style={{ color: "black" }} />
          </div>
        </div>
      </div>
      {menu && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }} className="md:hidden flex flex-col bg-white font-bold text-2xl text-center pt-8 pb-4 gap-4 h-fit transition-transform duration-300">
          <NavLink
            to="/"
            className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleMenuItemClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-green  transition-all cursor-pointer hover:shadow-md hover:shadow-maroon"
            activeClassName="active"
            onClick={handleMenuItemClick}
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
