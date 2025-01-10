import { useFormik } from "formik";
import * as Yup from "yup";
import { useProduct } from "../contexts/ProductContext";
import { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

const CreateProduct = () => {
  const [imagesPreview, setImagesPreview] = useState([]);
  const { loading, createNewProduct } = useProduct();

  useEffect(() => {
    return () => {
      imagesPreview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagesPreview]);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      subCategory: "",
      images: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      price: Yup.number()
        .required("Price is required")
        .typeError("Price must be a number"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      subCategory: Yup.string(),
      images: Yup.array()
        .min(2, "You need to upload at least 2 images")
        .max(6, "You can only upload up to 6 images")
        .required("Images are required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createNewProduct(values); 
        resetForm(); 
        setImagesPreview([]); 

      } catch (error) {
        console.error("Failed to create product:", error);
      }
    },
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    formik.setFieldValue("images", files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagesPreview(previews);
  };

  return (
    <div className="w-full">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Title and Price */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter product title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 text-sm">{formik.errors.title}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-2">Price:</label>
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm">{formik.errors.price}</p>
            )}
          </div>
        </div>

        {/* Category and Sub-Category */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Category:</label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400 bg-white"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="fragrance">Fragrance</option>
              <option value="body spray">Body Spray</option>
            </select>

            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-2">Sub-Category:</label>
            <input
              type="text"
              name="subCategory"
              placeholder="Enter product sub-category"
              value={formik.values.subCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2">Description:</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}
        </div>

        {/* Images */}
        <div>
          <label className="block font-semibold mb-2">Images:</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-yellow-400"
          />
          {formik.touched.images && formik.errors.images && (
            <p className="text-red-500 text-sm">{formik.errors.images}</p>
          )}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {imagesPreview.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-yellow-500 transition focus:outline-none focus:ring focus:ring-yellow-400"
          >
            {loading ? <Spinner /> : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
