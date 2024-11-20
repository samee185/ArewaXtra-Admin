 import React from 'react';
 import logo from "../assets/logo.png";
 import { useAuth } from '../contexts/AuthContext';
 const Navbar = () => {
  const { logout } = useAuth();
   return (
     <>
       <nav className="bg-yellow-50 fixed w-[100%] px-7 py-2 md:px-24 md:py-4 flex items-center justify-between">
         <div>
           <img src={logo} alt="Trendy-Logo" className="h-20" />
         </div>

         <div className="">
           <span className="bg-white py-[6px] px-6 text-[14px] md:text-[16px] rounded-[30px] shadow-md shadow-gray-400 transition duration-900 cursor-pointer hover:font-bold " onClick={logout}>
             Sign Out
           </span>
         </div>
       </nav>
     </>
   );
 }
 
 export default Navbar;