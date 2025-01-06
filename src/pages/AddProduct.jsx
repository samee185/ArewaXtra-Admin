import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CreateProduct from '../components/CreateProduct';

const AddProduct = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-6 px-4 md:px-20 md:gap-12 bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="basis-1/6">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="basis-5/6 mt-32">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
              Add Product
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Fill the form below to add a new product
            </p>
            <div className="h-[60vh]  overflow-y-auto">
            <CreateProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
