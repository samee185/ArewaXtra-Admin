import { useFormik } from "formik";
import * as Yup from "yup";
import { useProduct } from "../contexts/ProductContext";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
const CreateProduct = () => {
  const [imagesPreview, setImagesPreview] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      subCategory: "",
      sizes: [],
      images: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      price: Yup.number().required("Price is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      subCategory: Yup.string().required("Sub-Category is required"),
      images: Yup.array()
        .min(4, "You need to upload at least 4 images")
        .max(6, "You can only upload up to 6 images")
        .required("Images are required"),
    }),

    onSubmit: async (values) => {
      console.log(values);
      await createNewProduct(values);
    },
  });

  const { loading, createNewProduct } = useProduct();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.slice(0, 6); 

    formik.setFieldValue("images", selectedImages);

    const imagePreviews = selectedImages.map((file) =>
      URL.createObjectURL(file)
    );
    setImagesPreview(imagePreviews);
  };

  return (
    <div className="w-full h-[80vh] overflow-y-auto">
      <form className="px-2" onSubmit={formik.handleSubmit}>
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="px-5">
            <label className="block text-xl text-black font-semibold">
              Title:
            </label>
            <input
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2 px-8"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500">{formik.errors.title}</p>
            )}
          </div>
          <div className="p-5">
            <label className="block text-xl text-black font-semibold">
              Price:
            </label>
            <input
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2 px-8"
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500">{formik.errors.price}</p>
            )}
          </div>
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="px-5">
            <label className="block text-xl text-black font-semibold">
              Category:
            </label>
            <input
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2 px-8"
              type="text"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500">{formik.errors.category}</p>
            )}
          </div>
          <div className="p-5">
            <label className="block text-xl text-black font-semibold">
              Sub-Category:
            </label>
            <input
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2 px-8"
              type="text"
              name="subCategory"
              value={formik.values.subCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.subCategory && formik.errors.subCategory && (
              <p className="text-red-500">{formik.errors.subCategory}</p>
            )}
          </div>
        </div>
        <div className="p-5">
          <label className="block text-xl text-black font-semibold">
            Description:
            <textarea
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={"4"}
            />
          </label>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500">{formik.errors.description}</p>
          )}
        </div>
        <div className="p-5">
          <label className="block text-xl text-black font-semibold">
            Images:
            <input
              className="border-2 border-purple-300 rounded-lg focus:outline-none w-[100%] p-2 mt-2"
              type="file"
              name="images"
              multiple
              accept="images/*"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.images && formik.errors.images && (
            <p className="text-red-500">{formik.errors.images}</p>
          )}
          {imagesPreview.length > 0 && (
            <div className="mt-2 grid grid-cols-2 gap-4">
              {imagesPreview.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className="w-[150px] h-[150px] object-cover"
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-5">
          <button
            type="submit"
            className="bg-purple-800 text-white p-3 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 transition duration-1000"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Create Product" }
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
