import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { registerShopAction } from "../../../Redux/Slices/shopSlices";
 
//Form schema
const formSchema = Yup.object({
  ownerName: Yup.string().required("Owner's Name is required"),
  shopName: Yup.string().required("Shop Name is required"),
  shopDescription: Yup.string().required("Shop Description is required"),
  shopAddress: Yup.string().required("Shop Address is required"),
  estCertificate: Yup.string().required("Establishment Certificate is required" ),
  mobileNum: Yup.string().required("Shop Mobile Number is required"),
  mail: Yup.string().required("Shop Email is required"),
  shopImage: Yup.string().required("shopImage is required" ),
  shopLocation: Yup.string().required("Shop Location is required"),
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
  background-color: #fafafa;
  color: #bdbdbd;
  border-color: gray;
  transition: border 0.24s ease-in-out;
`;

const JoinNow = () => {
  //dispath
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // preview
  const [preview, setPreview] = useState("");
  const [imgPreview, setImgPreview] = useState("");

  //formik
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      shopName: "",
      shopDescription: "",
      shopAddress: "",
      estCertificate: "",
      mobileNum: "",
      mail: "",
      shopImage: "",
      shopLocation: "",
    },
    onSubmit: (values) => {
      const data = {
        ownerName: values?.ownerName,
        shopName: values?.shopName,
        shopDescription: values?.shopDescription,
        shopAddress: values?.shopAddress,
        estCertificate: values?.estCertificate,
        mobileNum: values?.mobileNum,
        mail: values?.mail,
        shopImage: values?.shopImage,
        shopLocation: values?.shopLocation,
      };
      dispatch(registerShopAction(data));
    },
    validationSchema: formSchema,
  });

  //select state from store
  const storeData = useSelector((store) => store?.shops);
  const { loading,shopCreated} = storeData;

  //redirect
  if (shopCreated) {
    toast.success("Your Shop registered successfully");
    navigate(`/`);
  }

  let image = formik?.values?.estCertificate;
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

  let imgs = formik?.values?.shopImage;
  useEffect(() => {
    if (imgs) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(imgs);
    } else {
      setImgPreview(null);
    }
  }, [imgs]);

  return (
    <section className="min-h-screen  py-10 2xl:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto font-display">
          <div className="flex  w-full sm:flex flex-wrap mt-8">
            <h2 className="mb-5 text-6xl text-lime-500 font-bold ">
              SHOP OWNERS
            </h2>
            <h2 className="mb-5 text-6xl text-gray-900 font-bold mx-8 ">
              {" "}
              JOIN HERE
            </h2>
          </div>
          <div className="flex flex-wrap items-start -mx-4 mt-8">
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-2 lg:px-10 py-6 lg:py-12 bg-gray-900 rounded-xl border border-gray-500 drop-shadow-lg ">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="mb-5 text-4xl text-lime-300 font-bold font-heading">
                    JOIN HERE
                  </h2>

                  {/* Owners name */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.ownerName}
                      onChange={formik.handleChange("ownerName")}
                      onBlur={formik.handleBlur("ownerName")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="ownerName"
                      placeholder="Owner's Name"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.ownerName && formik.errors.ownerName}
                  </div>

                  {/* Shop name */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.shopName}
                      onChange={formik.handleChange("shopName")}
                      onBlur={formik.handleBlur("shopName")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="shopName"
                      placeholder="Shop Name"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.shopName && formik.errors.shopName}
                  </div>

                  {/* Shop Address */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <textarea
                      value={formik.values.shopDescription}
                      onChange={formik.handleChange("shopDescription")}
                      onBlur={formik.handleBlur("shopDescription")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="shopDescription"
                      placeholder="Shop Description"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.shopDescription && formik.errors.shopDescription}
                  </div>

                  {/* Shop Address */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <textarea
                      value={formik.values.shopAddress}
                      onChange={formik.handleChange("shopAddress")}
                      onBlur={formik.handleBlur("shopAddress")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="shopAddress"
                      placeholder="Shop Address"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.shopAddress && formik.errors.shopAddress}
                  </div>

                  {/* Shop Image */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    {preview ? (
                      <img
                        src={imgPreview}
                        alt=""
                        onClick={() => {
                          setImgPreview(null);
                        }}
                      />
                    ) : (
                      <Container className="container bg-gray-700">
                        <Dropzone
                          onBlur={formik.handleBlur("shopImage")}
                          accept="image/jpeg, image/png, image/webp"
                          // accept="image/*"
                          onDrop={(acceptedFiles) => {
                            formik.setFieldValue("shopImage", acceptedFiles[0]);
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
                                  Click here to select Shop Image
                                </p>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </Container>
                    )}
                  </div>

                  {/* Establishment Certificate */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    {preview ? (
                      <img
                        src={preview}
                        alt=""
                        onClick={() => {
                          setPreview(null);
                        }}
                      />
                    ) : (
                      <Container className="container bg-gray-700">
                        <Dropzone
                          onBlur={formik.handleBlur("estCertificate")}
                          accept="image/jpeg, image/png, image/webp"
                          // accept="image/*"
                          onDrop={(acceptedFiles) => {
                            formik.setFieldValue("estCertificate", acceptedFiles[0]);
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
                                  Click here to select Certificate
                                </p>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </Container>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.mobileNum}
                      onChange={formik.handleChange("mobileNum")}
                      onBlur={formik.handleBlur("mobileNum")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="mobileNum"
                      placeholder="Shop Mobile Number"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.mobileNum && formik.errors.mobileNum}
                  </div>

                  {/* Email */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.mail}
                      onChange={formik.handleChange("mail")}
                      onBlur={formik.handleBlur("mail")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.mail && formik.errors.mail}
                  </div>
                  

                  {/* Map Location */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-md border border-slate-400">
                    <input
                      value={formik.values.shopLocation}
                      onChange={formik.handleChange("shopLocation")}
                      onBlur={formik.handleBlur("shopLocation")}
                      className="w-full p-2 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                      type="location"
                      placeholder="Shop Location" 
                    />
                  </div>
                  {/* Err msg*/}
                  <div className="text-red-400 mb-2">
                    {formik.touched.shopLocation && formik.errors.shopLocation}
                  </div>

                  <div className="inline-flex mb-10"></div>

                  {loading ? (
                    <button
                    type="submit"
                    className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                  >
                    Please wait...
                  </button>
                  ) : (
                    <button
                    type="submit"
                    className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                  >
                    Join 
                  </button>
                  )}
                </form>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5 lg:mb-0 mt-10 bg-slate-50 rounded-lg ">
              <div className="max-w-md">
                <span className=" text-lime-500 font-bold text-2xl lg:text-3xl">
                  Follow these Instructions to Register their Shops
                </span>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  Registered shop owners can register their shop here.
                </h2>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  Registered shop owners may add their shop details here.
                </h2>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  All the fileds are mandatory.
                </h2>
                <h2 className="mt-4 text-md font-bold font-heading text-gray-900">
                  To register a new shop, must provide shop establishment certificate.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
