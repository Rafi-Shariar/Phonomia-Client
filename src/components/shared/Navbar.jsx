import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router';
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { IoCartSharp, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavLink to="/brands" className="block py-3">
        <IoMdPhonePortrait className="inline mr-2" />
        Brands
      </NavLink>

      <NavLink to="/compare" className="block py-3">
        <MdOutlineCompareArrows className="inline mr-2" />
        Compare
      </NavLink>

      <NavLink to="/store" className="block py-3">
        <FaStore className="inline mr-2" />
        Store
      </NavLink>
    </>
  );

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-black text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">

          {/* LOGO */}
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-28 lg:w-44" />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10 text-lg">
            {links}
            <IoCartSharp size={28} />
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden flex items-center gap-4">
            <IoCartSharp size={24} />
            <button onClick={() => setOpen(true)}>
              <IoMenu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-black text-white z-50 transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <IoClose size={26} />
          </button>
        </div>

        <div className="p-6 text-lg">
          {links}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
