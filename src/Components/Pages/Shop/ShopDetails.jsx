import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopDetails } from "../../../Redux/Slices/shopSlices";
import DeleteShop from "../../Modal/DeleteShop";
import LoadingComponent from "../../../Utils/LoadingComponent";

const ShopDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  //select Shop details from store
  const shop = useSelector((state) => state?.shops);
  const { shopDetails, loading } = shop;

  useEffect(() => {
    dispatch(fetchShopDetails(id));
  }, [id, dispatch]);

  //Get login user
  const user = useSelector((state) => state.users);
  const { userAuth } = user;

  const isCreatedBy = shopDetails?.user === userAuth?._id;

  return (
    <div>
      <section class="text-gray-700 font-display overflow-hidden bg-white">
        <div class="container px-4 py-12 mx-auto ">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div class="lg:w-4/5 mx-auto flex flex-wrap p-10 border border-sm rounded-md ">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={shopDetails?.shopImage}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {shopDetails?.shopName}
                </h1>
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {shopDetails?.shopLocation}
                </h2>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <span class="text-gray-600 text-md ">{shopDetails?.mail}</span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 text-md ">
                    {shopDetails?.mobileNum}
                  </span>
                </div>
                <p class="leading-relaxed text-justify">
                  {shopDetails?.shopDescription}
                </p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div class="flex items-center font-semibold text-md">
                    <span class="mr-3">{shopDetails?.shopAddress}</span>
                  </div>
                </div>
                <div class="flex">
                  {isCreatedBy ? (
                    <p class="flex mx-auto justify-around">
                      <Link
                        to={`/updateshop/${shopDetails?._id}`}
                        className="bg-gray-900 text-lime-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Edit Shop
                      </Link>
                      <DeleteShop />
                    </p>
                  ) : (
                    <div className="space-x-8 flex justify-center mt-32 md:mt-0 ">
                      <Link
                        to={`/`}
                        className="text-lime-400 py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      >
                        {" "}
                        Go Back
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopDetails;
