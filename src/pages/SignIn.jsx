import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";
import UseShowPassword from "../hooks/UseShowPassword";
const SignIn = () => {
  const { login, loading } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "", 
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await login(values);
    },
  });
  return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center py-20 md:py-10">
        <div className="basis-full">
          <Card
            color="transparent"
            shadow={false}
            className="w-full"
          >
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <img src={logo} alt="trendylogo" className="h-[110px]" />
              </div>
            </div>
            <p className="text-center text-[#eeb100] text-3xl">Admin Panel</p>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white w-[280px] md:w-[550px] mx-auto py-8 md:py-14 px-12 mt-6 mb-8 rounded-lg shadow-md shadow-gray-600"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div>
                  <Typography variant="h6" className="mb-3">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-300">{formik.errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <Typography variant="h6" className="mb-3">
                    Password
                  </Typography>
                  <Input
                    type={`${showPassword ? "text" : "password"}`}
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                  />
                  <span className="absolute top-[47px] right-[20px] cursor-pointer">
                    {showPassword ? (
                      <FaEye
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <FaEyeSlash
                        color="gray"
                        size={20}
                        onClick={handleShowPassword}
                      />
                    )}
                  </span>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-300">{formik.errors.password}</p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 mb-8 w-full bg-[#eeb100] p-2 text-gray-100 border-2 hover:bg-white hover:border-[#eeb100] hover:text-[#eeb100] hover:font-bold"
                fullWidth
                disabled={loading}
              >
                {loading ? <Spinner color="gray" /> : "Login"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
