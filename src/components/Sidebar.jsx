import React from "react";
import {
  PlusCircleIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="h-[100vh] border border-l-0 border-t-0 border-b-0 border-r-1 border-gray-800 w-[95px] lg:w-[198px] flex flex-col gap-2 items-end">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center md:items-start mt-32 w-20 md:w-[110px] lg:w-[198px] gap-3 py-2 px-4 border border-t-1 border-r-0 border-b-1 border-l-1 border-gray-400 rounded-[4px] hover:bg-yellow-50 hover:border-0 ${
              isActive ? "bg-yellow-50" : ""
            }`
          }
        >
          <HomeIcon className="h-6 w-6" />
          <span className="hidden lg:block">Dashboard</span>
        </NavLink>

        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            `flex items-center md:items-start w-20 md:w-[110px] lg:w-[198px] gap-3 py-2 px-4 mt-8 border border-t-1 border-r-0 border-b-1 border-l-1 border-gray-400 rounded-[4px] hover:bg-yellow-50 hover:border-0 ${
              isActive ? "bg-yellow-50" : ""
            }`
          }
        >
          <PlusCircleIcon className="h-6 w-6" />
          <span className="hidden lg:block">Add Products</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center md:items-start w-20 md:w-[110px] lg:w-[198px] gap-3 py-2 px-4 mt-8 border border-t-1 border-r-0 border-b-1 border-l-1 border-gray-400 rounded-[4px] hover:bg-yellow-50 hover:border-0 ${
              isActive ? "bg-yellow-50" : ""
            }`
          }
        >
          <BuildingStorefrontIcon className="h-6 w-6" />
          <span className="hidden lg:block">Store</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center md:items-start w-20 md:w-[110px] lg:w-[198px] gap-3 py-2 px-4 mt-8 border border-t-1 border-r-0 border-b-1 border-l-1 border-gray-400 rounded-[4px] hover:bg-yellow-50 hover:border-0 ${
              isActive ? "bg-yellow-50" : ""
            }`
          }
        >
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          <span className="hidden lg:block">Orders</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
