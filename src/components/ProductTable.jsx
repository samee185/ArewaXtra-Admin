import React from "react";
import { useProduct } from "../contexts/ProductContext"; 
import {
  TrashIcon,
} from "@heroicons/react/24/outline";
const ProductTable = () => {
  const { products, deleteProduct } = useProduct();

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">All Products List</h1>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-purple-300 text-left">
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="border-b">
                  <td className="py-2 px-4">
                    <img
                      src={product?.images[0]}
                      alt={product?.title}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4">{product?.title}</td>
                  <td className="py-2 px-4">{product?.category}</td>
                  <td className="py-2 px-4">{`$${product?.price}`}</td>
                  <td className="py-2 px-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
