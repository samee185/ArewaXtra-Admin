import React from 'react';
import logo from "../assets/logo.png";
import { useAuth } from '../contexts/AuthContext';
const Navbar = () => {
 const { logout } = useAuth();
  return (
    <>
      <nav className="bg-gray-100 fixed w-[100%] px-7 py-2 md:px-28 md:py-4 flex items-center justify-between ">
        <div>
          <img src={logo} alt="Trendy-Logo" className="h-20" />
        </div>

        <div className="">
          <span className="bg-white border border-yellow-600 py-[6px] px-6 text-[14px] md:text-[16px] text-yellow-600 rounded-[30px] transition duration-900 cursor-pointer hover:font-bold " onClick={logout}>
            logout
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;