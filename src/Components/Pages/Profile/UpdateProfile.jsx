import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  fetchUserDetailsAction,
  updateUserAction,
} from "../../../Redux/Slices/userSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Form schema
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  phoneNum: Yup.string().required("Bio is required"),
});

const UpdateProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch User Details
  useEffect(() => {
    dispatch(fetchUserDetailsAction(id));
  }, [dispatch, id]);

  //User data from store
  const users = useSelector((state) => state.users);
  const { userDetails, isUpdated, loading, appErr, serverErr } = users;
  console.log(userDetails);

  //formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      email: userDetails?.email,
      phoneNum: userDetails?.phoneNum,
    },
    onSubmit: (values) => {
      //dispath the action
      dispatch( updateUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  if (isUpdated) {
    navigate(`/profile/${id}`);
  }

  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto font-display">
        <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
          <h3 className="mt-6 text-center text-3xl font-extrabold text-lime-500">
            Hey {userDetails?.firstName}, <span className="text-center text-3xl font-extrabold text-gray-900">do you want to update your profile?</span>
          </h3>
          {/* Error */}
          {serverErr || appErr ? (
            <h2 className="text-slate-700 text-center mt-3 font-bold text-2xl">
              {serverErr} {appErr}{" "}
            </h2>
          ) : null}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lime-300"
                >
                  First Name
                </label>
                <div className="mt-1">
                  {/* First name */}
                  <input
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                  />
                </div>
                <div className="text-red-500">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-lime-300"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  {/* Last Name */}
                  <input
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                  />
                </div>
                {/* Err msg */}
                <div className="text-red-500">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lime-300"
                >
                  Email
                </label>
                <div className="mt-1">
                  {/* Email */}
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                  />
                </div>
                {/* err msg */}
                <div className="text-red-500">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-lime-300"
                >
                 Phone Number
                </label>
                <input
                  value={formik.values.phoneNum}
                  onChange={formik.handleChange("phoneNum")}
                  onBlur={formik.handleBlur("phoneNum")}
                  rows="5"
                  cols="10"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                  type="text"
                ></input>
                {/* Err msg */}
                <div className="text-red-500">
                  {formik.touched.phoneNum && formik.errors.phoneNum}
                </div>
              </div>
              <div className="flex justify-center">
                {/* submit btn */}
                {loading ? (
                  <button
                    disabled
                    className="w-1/2 flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-semibold text-gray-800 bg-lime-400 hover:bg-yellow-300"
                  >
                    <LoadingComponent/>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-1/2 flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-semibold text-gray-800 bg-lime-400 hover:bg-yellow-300"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>

            <div className="mt-4 mb-3">
              <div className="relative">
                <div className="flex flex-col justify-center items-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
