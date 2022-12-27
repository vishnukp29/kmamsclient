import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginUserAction } from "../../../Redux/Slices/userSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Form schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const store = useSelector((state) => state?.users);
  const { userAuth, loading} = store;

  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //dispath the action
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  //redirect
  if (userAuth) {
    toast.success("Logined successfully");
    navigate("/");
  }
  return (
    <section className="min-h-screen  py-10 2xl:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto font-display px-4">
          <div className="flex  w-full sm:flex flex-wrap mt-8 ">
            <h2 className="mb-5 lg:text-6xl text-4xl text-lime-500 font-bold ">
              SHOP OWNERS
            </h2>
            <h2 className="mb-5 lg:text-6xl text-5xl text-gray-900 font-bold lg:mx-4">
              {"  "}
              LOGIN HERE
            </h2>
          </div>
          <div className="flex flex-wrap items-start -mx-4 mt-8">
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-8 lg:px-10 py-6 lg:py-12 bg-gray-900 rounded-xl border border-gray-500 drop-shadow-lg ">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="mb-5 lg:text-4xl text-2xl text-lime-300 font-bold font-heading">
                    LOGIN HERE
                  </h2>

                  {/* Email */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.email && formik.errors.email}
                  </div>

                  {/* Password */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.password && formik.errors.password}
                  </div>

                  <div className="inline-flex mb-10"></div>

                  {loading ? (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                    >
                      <LoadingComponent />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                    >
                      Login
                    </button>
                  )}
                </form>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5 lg:mb-0 mt-10 bg-slate-50 rounded-lg ">
              <div className="max-w-md">
                <span className=" text-lime-500 font-bold text-2xl lg:text-3xl">
                  Follow these Instructions to Login
                </span>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  Click on “Register” button in case not registered yet.
                </h2>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  Already registered candidates may login here with their registered email and password.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
