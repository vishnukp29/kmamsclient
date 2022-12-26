import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePasswordAction } from "../../../Redux/Slices/userSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Form schema
const formSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string().required("Confirm Password is required"),
});

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  //formik
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmpassword) {
        toast.error("Passwords is Invalid");
      } else {
        //dispath the action
        dispatch(updatePasswordAction(values?.password));
      }
    },
    validationSchema: formSchema,
  });

  const users = useSelector((state) => state?.users);
  const { isPasswordUpdated, loading, appErr, serverErr, userAuth } = users;

  if (isPasswordUpdated) {
    Navigate(`/profile/${userAuth?._id}`);
  }

  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto font-display">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-extrabold text-lime-500">
            Change your{" "}
            <span className="mt-6 text-center text-4xl font-extrabold text-gray-800">
            Password
            </span>
          </h2>
          <h3 className="text-center pt-2 text-red-400">
            {serverErr || appErr ? (
              <p>
                {serverErr} {appErr}
              </p>
            ) : null}
          </h3>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-300">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="flex items-center pl-6 mb-6 border border-gray-50 bg-white rounded-lg">

                {/* Password */}

                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded focus:outline-none"
                  type="password"
                  placeholder=" Password"
                />
              </div>
              {/* Err msg */}
              <div className="text-red-400 mb-2">
                {formik.touched.password && formik.errors.password}
              </div>

              {/* Confirm Password */}
              <div className="flex items-center pl-6 mb-6 border border-gray-50 bg-white rounded-lg">

                {/* Password */}

                <input
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange("confirmpassword")}
                  onBlur={formik.handleBlur("confirmpassword")}
                  className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 focus:outline-none rounded"
                  type="confirmpassword"
                  placeholder="Confirm New Password"
                />
              </div>
              {/* Err msg */}
              <div className="text-red-400 mb-2">
                {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword}
              </div>

              <div className="mx-auto flex justify-center">
                {/* Submit btn */}
                {loading ? (
                  <button
                    disabled
                    className="inline-flex bg-yellow-300 justify-center w-1/2 px-4 py-2shadow-sm text-sm font-semibold rounded-md text-gray-800  "
                  >
                   <LoadingComponent/>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex bg-lime-400 justify-center w-1/2 px-4 py-2 shadow-sm text-sm font-semibold rounded-md text-gray-800  hover:bg-lime-500"
                  >
                    <span>Update Password</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
