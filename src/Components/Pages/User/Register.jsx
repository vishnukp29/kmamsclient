import React from "react";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {toast} from 'react-toastify'
import { registerUserAction } from "../../../Redux/Slices/userSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Form schema
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  phoneNum: Yup.string().required("Mobile Number is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string().required("Confirm Password is required"),
});

const Register = () => {

    //dispath
    const dispatch = useDispatch();
    const navigate= useNavigate()
  
    //formik
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum:"",
        password: "",
        confirmpassword: "",
      },
      onSubmit: values => {
        if (values.password !== values.confirmpassword) {
          toast.error('Passwords is Invalid')
        }
        else{
          const userData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNum: values.phoneNum,
            password: values.password,
          }
          //dispath the action
        dispatch(registerUserAction(userData));
        console.log(userData);
        }
      },
      validationSchema: formSchema,
    });
  
    //select state from store
    const storeData = useSelector(store => store?.users);
    const { loading, registered } = storeData;
  
    //redirect
    if (registered) {
      toast.success('Registered successfully, Login')
      navigate('/login')
    }

  return (
    <section className="min-h-screen  py-10 2xl:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto font-display">
          <div className="flex  w-full sm:flex flex-wrap mt-8">
            <h2 className="mb-5 text-6xl text-lime-500 font-bold ">
              SHOP OWNERS{" "}
            </h2>
            <h2 className="mb-5 text-6xl text-gray-900 font-bold ">
              REGISTER HERE
            </h2>
          </div>
          <div className="flex flex-wrap items-start -mx-4 mt-8">
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-2 lg:px-10 py-6 lg:py-12 bg-gray-900 rounded-xl border border-gray-500 drop-shadow-lg ">
                <form  onSubmit={formik.handleSubmit}>
                  <h2 className="mb-5 text-4xl text-lime-300 font-bold font-heading">
                    REGISTER HERE
                  </h2>

                  {/* First name */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleBlur("firstName")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>

                  {/* Last name */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>

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


                  {/* Mobile Number */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.phoneNum}
                      onChange={formik.handleChange("phoneNum")}
                      onBlur={formik.handleBlur("phoneNum")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="phoneNum"
                      placeholder="Mobile Number"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.phoneNum && formik.errors.phoneNum}
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

                  {/* Confirm Password */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                       value={formik.values.confirmpassword}
                       onChange={formik.handleChange("confirmpassword")}
                       onBlur={formik.handleBlur("confirmpassword")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="confirmpassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.confirmpassword && formik.errors.confirmpassword}
                  </div>

                  <div className="inline-flex mb-10"></div>

                  {loading ? (
                    <button
                    type="submit"
                    className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                  >
                    <LoadingComponent/>
                  </button>
                  ) : (
                    <button
                    type="submit"
                    className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                  >
                    Register
                  </button>
                  )}
                </form>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:mb-0 mt-10">
              <div className="max-w-md">
                <span className=" text-lime-500 font-bold text-4xl">
                  Follow the Instructions to Join
                </span>
                <h2 className="mt-2 text-2xl font-bold font-heading text-gray-900">
                  Instructions 1
                </h2>
                <h2 className="mt-2 text-2xl font-bold font-heading text-gray-900">
                  Instructions 2
                </h2>
                <h2 className="mt-2 text-2xl font-bold font-heading text-gray-900">
                  Instructions 3
                </h2>
                <h2 className="mt-2 text-2xl font-bold font-heading text-gray-900">
                  Instructions 4
                </h2>
                <h2 className="mt-2 text-2xl font-bold font-heading text-gray-900">
                  Instructions 5
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
