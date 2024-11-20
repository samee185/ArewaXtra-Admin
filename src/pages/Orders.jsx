import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Orders = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex px-4 md:px-28 ">
        <Sidebar />
      </div>
    </>
  );
}

export default Orders