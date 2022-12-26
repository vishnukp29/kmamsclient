import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateShopAction, fetchShopDetails} from "../../../Redux/Slices/shopSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

//Form schema
const formSchema = Yup.object({
    ownerName: Yup.string().required("OwnerName is required"),
    shopName: Yup.string().required("Shop Name is required"),
    shopDescription: Yup.string().required("Shop Description is required"),
    shopAddress: Yup.string().required("Shop Address is required"),
    mobileNum: Yup.string().required("Mobile Number is required"),
    mail: Yup.string().required("Email is required"),
    shopLocation: Yup.string().required("Shop Location is required"),
});


const UpdateShop = () => {

  const {id}=useParams()
  //dispath
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchShopDetails(id));
  }, [id, dispatch]);

  //select Shop
  const shopData = useSelector((state) => state.shops);
  const { shopDetails } = shopData;
  console.log(shopDetails);

  //select updated post from store;
  const shopUpdate = useSelector((state) => state.shops);
  const { loading,shopUpdated } = shopUpdate;

  //formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ownerName: shopDetails?.ownerName,
      shopName: shopDetails?.shopName,
      shopDescription: shopDetails?.shopDescription,
      shopAddress: shopDetails?.shopAddress,
      mobileNum: shopDetails?.mobileNum,
      mail: shopDetails?.mail,
      shopLocation: shopDetails?.shopLocation,
    },
    onSubmit: (values) => {
      const data = {
        ownerName: values.ownerName,
        shopName: values?.shopName,
        shopDescription: values?.shopDescription,
        shopAddress: values?.shopAddress,
        mobileNum: values?.mobileNum,
        mail: values?.mail,
        shopLocation: values?.shopLocation,
        id,
      };
      dispatch(updateShopAction(data));
    },
    validationSchema: formSchema,
  });

  if(shopUpdated){
    toast.success('Shop Updated successfully')
     navigate("/"); 
  }

  return (
    <section className="min-h-screen  py-10 2xl:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto font-display">
          <div className="flex  w-full sm:flex flex-wrap mt-8">
            <h2 className="mb-5 text-6xl text-lime-500 font-bold ">
              Update
            </h2>
            <h2 className="mb-5 text-6xl text-gray-900 font-bold mx-8 ">
              {" "}
              Shop Details
            </h2>
          </div>
          <div className="flex flex-wrap items-start -mx-4 mt-8">
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-2 lg:px-10 py-6 lg:py-12 bg-gray-900 rounded-xl border border-gray-500 drop-shadow-lg ">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="mb-5 text-4xl text-lime-300 font-bold font-heading">
                    Update Here
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
                    <LoadingComponent/>
                  </button>
                  ) : (
                    // <EditShop/>
                    <button
                    type="submit"
                    className="py-2 w-32 bg-lime-300 hover:bg-yellow-400 text-gray-900 font-bold rounded transition duration-200"
                  >
                    Update
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

export default UpdateShop;
