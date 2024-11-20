import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CreateProduct from '../components/CreateProduct';
const AddProduct = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-4 px-4 md:px-28 md:gap-12">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6 mt-28">
        <p className="text-2xl mb-2 font-bold text-center">Add Product</p>
        <div className="text-center mb-5">Fill the form below to add a new product</div>
          <CreateProduct />
        </div>
      </div>
    </>
  );
}

export default AddProduct