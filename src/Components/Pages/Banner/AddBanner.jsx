import React, { useEffect, useState } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { addBannerAction } from "../../../Redux/Slices/bannerSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Css for dropzone
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-width: 2px;
  border-radius: 2px;
  border-style: none;
  color: #bdbdbd;
  transition: border 0.24s ease-in-out;
`;

const formSchema = Yup.object({
  bannerImage: Yup.string().required("Banner Image is required"),
});

const AddBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //formik
  const formik = useFormik({
    initialValues: {
      bannerImage: "",
    },
    onSubmit: (values) => {
      const data = {
        bannerImage: values?.bannerImage,
      };
      dispatch(addBannerAction(values));
    },
    validationSchema: formSchema,
  });

  //store data
  const storeData = useSelector((store) => store?.banners);
  const { loading, appErr, serverErr, bannerAdded,isCreated } = storeData;
  console.log(bannerAdded);

  // preview
  const [preview, setPreview] = useState("");

  if (isCreated) {
    toast.success("Banner Image Added successfully");
    navigate(`/`);
  }

  let image = formik?.values?.bannerImage;
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
    <section className="container mx-auto">
      <div className="mx-auto font-display">
        <div className="flex flex-wrap items-start">
          <div className="w-72 px-4">
            <div className="rounded-xl drop-shadow-lg">
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                {/* Image container here thus Dropzone */}
                {appErr || serverErr ? (
                  <h2 className="text-center text-red-500">
                    {serverErr} {appErr}
                  </h2>
                ) : null}

                {preview ? (
                  <img
                    src={preview}
                    alt=""
                    onClick={() => {
                      setPreview(null);
                    }}
                  />
                ) : (
                  <Container className="container bg-white">
                    <Dropzone
                      onBlur={formik.handleBlur("bannerImage")}
                      accept="image/jpeg, image/png"
                      onDrop={(acceptedFiles) => {
                        formik.setFieldValue("bannerImage", acceptedFiles[0]);
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
                              Click here to Add Banner
                            </p>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </Container>
                )}

                <div className="text-red-500">
                  {formik.touched.bannerImage && formik.errors.bannerImage}
                </div>
                <div className="">
                  {loading ? (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-gray-700 hover:bg-gray-900 text-lime-400 font-semibold rounded transition duration-200"
                    >
                      <LoadingComponent />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-gray-700 hover:bg-gray-900 text-lime-400 font-semibold rounded transition duration-200"
                    >
                      Add Banner
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBanner;
