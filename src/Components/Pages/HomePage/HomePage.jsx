import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShopsAction,
  fetchNewShopsAction,
} from "../../../Redux/Slices/shopSlices";
import LoadingComponent from "../../../Utils/LoadingComponent";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");

  //select post from store
  const shop = useSelector((state) => state?.shops);
  const { shopLists, loading, appErr, serverErr, newShopLists } = shop;

  console.log(newShopLists);
  console.log(shopLists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopsAction());
    dispatch(fetchNewShopsAction());
  }, [dispatch]);

  return (
    <section className="min-h-screen 2xl:py-10 bg-gradient-to-t from-lime-100 to-gray-200 overflow-hidden">
      {loading ? (
        <div className="mx-auto flex justify-center items-center">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <div className="mx-auto">
            <div className="rounded-lg">
              <Banner />
            </div>
          </div>

          <div className="container px-4 mx-auto font-display">
            <div className="w-80 p-4">
              <input
                type="text"
                id="mapLocation"
                className="bg-gray-50  text-sm rounded-lg w-full p-2 drop-shadow shadow-md"
                placeholder="Search Location"
                required
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>

          <div className="container px-4 mx-auto font-display ">
            <div className="max-w-sm w-full lg:max-w-full bg-opacity-25  mb-4  flex items-start sm:flex flex-wrap rounded-lg">
              <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-4 mx-4 lg:sticky-top">
                <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                  New Shops
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Check the newly Registered Shops
                </p>
                <div className="my-4 space-y-3">
                {appErr || serverErr ? (
                  <h1 className="text-red-600 text-2xl text-center">
                    {serverErr} {appErr}
                  </h1>
                ) : newShopLists?.length <= 0 ? (
                  <h1 className="text-3xl font-bold text-center">
                    No Shops Found
                  </h1>
                ) : (
                  newShopLists
                    ?.map((shop) => (
                      <div
                        key={shop.id}
                        className="flex flex-wrap bg-white mb-4 border border-slate-300 rounded-lg shadow-md"
                      >
                        <div className="mb-10 w-1/4 px-3 mt-10">
                          <div>
                            {/* Shop image */}
                            <img
                              className="w-full h-full object-cover rounded"
                              src={shop?.shopImage}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="w-3/4 px-3 mt-10 sm:mb-6">
                          <div className="hover:underline">
                            <Link to={`/shop/${shop.id}`}
                            className="mb-1 text-2xl text-slate-800 font-bold font-heading cursor-pointer">
                              {/* {capitalizeWord(post?.title)} */}
                              {shop?.shopName}
                            </Link>
                          </div>

                          <p className="text-black line-clamp-3 ">
                            {shop?.shopLocation}
                          </p>
                        </div>
                      </div>
                    ))
                )}
                </div>
              </div>

              <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal lg:w-3/5">
                {appErr || serverErr ? (
                  <h1 className="text-red-600 text-2xl text-center">
                    {serverErr} {appErr}
                  </h1>
                ) : shopLists?.length <= 0 ? (
                  <h1 className="text-3xl font-bold text-center">
                    No Shops Found
                  </h1>
                ) : (
                  shopLists
                    ?.filter((val) => {
                      if (keyword === "") {
                        return val
                      } else if (
                        val.shopLocation
                          ?.toLowerCase()
                          .includes(keyword?.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((shop) => (
                      <div
                        key={shop.id}
                        className="flex flex-wrap bg-white mb-4 border border-slate-300 rounded-lg shadow-md"
                      >
                        <div className="mb-10  w-full lg:w-1/4 px-3 mt-10">
                          <div>
                            {/* Shop image */}
                            <img
                              className="w-full h-full object-cover rounded"
                              src={shop?.shopImage}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-3/4 px-3 lg:mt-10 sm:mb-6">
                          <div className="hover:underline">
                            <h3 className="mb-1 text-2xl text-slate-800 font-bold font-heading cursor-pointer">
                              {/* {capitalizeWord(post?.title)} */}
                              {shop?.shopName}
                            </h3>
                          </div>

                          <p className="text-black line-clamp-3 ">
                            {shop?.shopLocation}
                          </p>
                          <p className="text-black line-clamp-3 ">
                            {shop?.mobileNum}
                          </p>
                          <p className="text-black line-clamp-3 ">{shop?.mail}</p>
                          {/* Read more */}
                          <Link
                            to={`/shop/${shop.id}`}
                            className="text-indigo-500 hover:underline"
                          >
                            More Details...
                          </Link>

                          {/* User Avatar */}
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HomePage;
