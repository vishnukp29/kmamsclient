import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { addBannerAction } from "../../../Redux/Slices/bannerSlices";

//Form schema
const formSchema = Yup.object({
  bannerImage: Yup.string().required("Banner Image is required"),
});

// CSS for Dropzone
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

const AddBanner = () => {
  //dispath
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // preview
  const [preview, setPreview] = useState("");

  //formik
  const formik = useFormik({
    initialValues: {
      bannerImage: "",
    },
    onSubmit: (values) => {
      const data = {
        bannerImage: values?.bannerImage,
      };
      dispatch(addBannerAction(data));
    },
    validationSchema: formSchema,
  });

  //select state from store
  const storeData = useSelector((store) => store?.banners);
  const { loading, bannerAdded } = storeData;

  //redirect
  if (bannerAdded) {
    toast.success("Banner Image successfully");
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
    <section className="">
      <div className="container mx-auto">
        <div className=" mx-auto font-display">
          <div className="flex flex-wrap items-start">
            <div className="w-72 px-4">
              <div className=" rounded-xl drop-shadow-lg ">
                <form onSubmit={formik.handleSubmit}>
                  {/* Banner Image */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md ">
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
                          onBlur={formik.handleBlur("image")}
                          accept="image/jpeg, image/png"
                          onDrop={(acceptedFiles) => {
                            formik.setFieldValue("bannermage", acceptedFiles[0]);
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
                                <p className="text-gray-800 text-lg cursor-pointer hover:text-gray-500">
                                  Click here to select image
                                </p>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </Container>
                    )}
                  </div>

                  <div className="inline-flex mb-10"></div>

                  {loading ? (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-gray-700 hover:bg-gray-900 text-lime-400 font-semibold rounded transition duration-200"
                    >
                      Please wait...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="py-2 w-32 bg-gray-700 hover:bg-gray-900 text-lime-400 font-semibold rounded transition duration-200"
                    >
                      Add Banner
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBanner;
