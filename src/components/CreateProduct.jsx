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
    onSubmit: async (values) => {
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
    <div className="w-full h-[80vh]">
      <form className="px-2" onSubmit={formik.handleSubmit}>
        {/* Title and Price */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="p-5">
            <label className="block text-xl font-semibold">Title:</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 rounded-lg w-full p-2"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500">{formik.errors.title}</p>
            )}
          </div>
          <div className="p-5">
            <label className="block text-xl font-semibold">Price:</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 rounded-lg w-full p-2"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500">{formik.errors.price}</p>
            )}
          </div>
        </div>

        {/* Category and Sub-Category */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="p-5">
            <label className="block text-xl font-semibold">Category:</label>
            <input
              type="text"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 rounded-lg w-full p-2"
            />
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500">{formik.errors.category}</p>
            )}
          </div>
          <div className="p-5">
            <label className="block text-xl font-semibold">Sub-Category:</label>
            <input
              type="text"
              name="subCategory"
              value={formik.values.subCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 rounded-lg w-full p-2"
            />
            {formik.touched.subCategory && formik.errors.subCategory && (
              <p className="text-red-500">{formik.errors.subCategory}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="p-5">
          <label className="block text-xl font-semibold">Description:</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            className="border-2 rounded-lg w-full p-2"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500">{formik.errors.description}</p>
          )}
        </div>

        {/* Images */}
        <div className="p-5">
          <label className="block text-xl font-semibold">Images:</label>
          <input
            type="file"
            name="images"
            multiple
            accept="images/*"
            onChange={handleImageChange}
            className="border-2 rounded-lg w-full p-2 mt-2"
          />
          {formik.touched.images && formik.errors.images && (
            <p className="text-red-500">{formik.errors.images}</p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-4">
            {imagesPreview.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index}`}
                className="w-32 h-32 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-5">
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-600 p-3 rounded-lg text-white hover:bg-white hover:text-yellow-600 border-2 transition"
          >
            {loading ? <Spinner /> : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
