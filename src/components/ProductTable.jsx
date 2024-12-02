import React from "react";
import { useProduct } from "../contexts/ProductContext";
import { TrashIcon } from "@heroicons/react/24/outline";

const ProductTable = () => {
  const { products, deleteProduct, loading } = useProduct();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">All Products List</h1>
      {loading ? (
        <div className="text-center py-4">Loading products...</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-yellow-50 text-left">
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
                      src={product?.images[0] }
                      alt={product?.title || "Product Image"}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4">{product?.title}</td>
                  <td className="py-2 px-4">{product?.category}</td>
                  <td className="py-2 px-4">{formatCurrency(product?.price)}</td>
                  <td className="py-2 px-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this product?"
                          )
                        ) {
                          deleteProduct(product._id);
                        }
                      }}
                    >
                      <TrashIcon className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/path/to/no-products-illustration.jpg"
                      alt="No Products"
                      className="w-32 h-32 mb-2"
                    />
                    <p>No products available.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;
