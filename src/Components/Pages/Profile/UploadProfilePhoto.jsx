import React, { useEffect, useState } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { uploadProfilePhototAction } from "../../../Redux/Slices/userSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Css for dropzone
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const formSchema = Yup.object({
  profilePicture: Yup.string().required("Profile Picture is required"),
});

const UploadProfilePhoto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //formik
  const formik = useFormik({
    initialValues: {
      profilePicture: "",
    },
    onSubmit: (values) => {
      const data = {
        profilePicture: values?.profilePicture,
      };
      dispatch(uploadProfilePhototAction(values));
    },
    validationSchema: formSchema,
  });

  //store data
  const users = useSelector((state) => state?.users);
  const { profilePhoto, loading, appErr, serverErr, userAuth } = users;

  // preview
  const [preview, setPreview] = useState("");

  if (profilePhoto) {
    navigate(`/profile/${userAuth?._id}`);
  }

  let image = formik?.values?.profilePicture;
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-white overflow-hidden font-display">
      <div className="container px-4 mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-lime-500">
            Upload <span className="text-center text-3xl font-extrabold text-gray-800">Profile Photo</span>
          </h2>
          {/* Displya err here */}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-300">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              {/* Image container here thus Dropzone */}
              {appErr || serverErr ? (
                <h2 className="text-center text-red-500">
                  {serverErr} {appErr}
                </h2>
              ) : null}
              <Container className="">
                <Dropzone
                  onBlur={formik.handleBlur("profilePicture")}
                  accept="image/jpeg, image/png"
                  onDrop={(acceptedFiles) => {
                    formik.setFieldValue("profilePicture", acceptedFiles[0]);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="container">
                      <div
                        {...getRootProps({
                          className: "dropzone",
                          onDrop: (event) => event.stopPropagation(),
                        })}
                      >
                        <input {...getInputProps()} />
                        <p className="text-gray-300 text-lg cursor-pointer hover:text-gray-500">
                          Click here to select image
                        </p>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </Container>

              <div className="text-red-500">
                {formik.touched.profilePicture && formik.errors.profilePicture}
              </div>
              <p className="text-sm text-lime-400">
                PNG, JPG, GIF minimum size 400kb uploaded only 1 image
              </p>

              <div className="flex justify-center">
                {loading ? (
                  <button
                    disabled
                    className="inline-flex justify-center w-1/2 px-4 py-2 shadow-sm text-sm font-semibold rounded-md text-gray-800 bg-lime-400 hover:bg-yellow-300"
                    >
                    <LoadingComponent/>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex justify-center w-1/2 px-4 py-2 shadow-sm text-sm font-semibold rounded-md text-gray-800 bg-lime-400 hover:bg-yellow-300"
                  >
                    <UploadIcon
                      className="-ml-1 mr-2 h-5  text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Upload Photo</span>
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

export default UploadProfilePhoto;
