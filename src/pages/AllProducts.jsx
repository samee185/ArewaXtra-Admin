import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductTable from '../components/ProductTable';

const AllProducts = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-4 px-4 md:px-28 md:gap-12">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6 mt-28 h-[80vh] overflow-auto">
          <ProductTable />
        </div>
      </div>
    </>
  );
}

export default AllProducts