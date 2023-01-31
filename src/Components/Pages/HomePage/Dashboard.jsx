import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopsAction, fetchApprovedShopsAction } from "../../../Redux/Slices/shopSlices";
import { fetchUsersAction } from "../../../Redux/Slices/userSlices";
import { fetchBannerAction } from "../../../Redux/Slices/bannerSlices";
import { FaUsers } from "react-icons/fa";
import { GiVerticalBanner,GiShop } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { MdOutlineError,MdPendingActions } from "react-icons/md";
import { Link } from 'react-router-dom'
import AddBanner from "../Banner/AddBanner";
import AllBanners from "../Banner/AllBanners";

const Dashboard = () => {
  // Select user from from store
  const user = useSelector((state) => state?.users);
  const { usersList } = user;

  const allUsers = usersList?.length;
  console.log(allUsers);

  //select shop from store
  const shop = useSelector((state) => state?.shops);
  const { shopLists,shopsApproved } = shop;

  const shops = shopLists?.length;
  console.log(shops);

  const approvedShops = shopsApproved?.length
  console.log(approvedShops);

  const pendingShops = shops-approvedShops
  console.log(pendingShops);

  // Select user from from store
  const banner = useSelector((state) => state?.banners);
  const { bannerList } = banner;

  const allBanners = bannerList?.length;
  console.log(allBanners);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopsAction());
    dispatch(fetchUsersAction());
    dispatch(fetchApprovedShopsAction());
    dispatch(fetchBannerAction());
  }, [dispatch]);

  return (
    <div>
      <section className="min-h-screen  py-20 2xl:py-40 overflow-hidden">
        <div className="container px-4 mx-auto font-display">
          <div className="flex flex-wrap items-center mx-4 mb-2 2xl:mb-4">
            <div className="w-full lg:w-1/2 px-4 mb-2">
              <div className=" w-full flex ">
                <h2 className="mb-5 text-4xl text-lime-500 font-bold">
                  Admin{" "}
                </h2>
                <h2 className="mb-5 text-4xl text-gray-900 font-bold">
                  Dashboard
                </h2>
              </div>
            </div>
          </div>

          <div className="flex justify-around sm:flex flex-wrap p-4 rounded-lg drop-shadow-md">
            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <Link to={`/retailors`} className="text-lime-800 font-bold">
                    Total Retailors
                  </Link>
                  <label
                    htmlFor=""
                    className="text-fuchsia-600 text-2xl font-medium"
                  >
                    <FaUsers />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-fuchsia-600 text-4xl font-bold mb-2">
                    {allUsers}{" "}
                    <span className="text-gray-400 text-sm font-medium">
                      {" "}
                      Users
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <Link to={`/all-shops`} className="text-lime-800 font-bold">Total Shops</Link>
                  <label
                    htmlFor=""
                    className="text-cyan-800 text-2xl font-medium"
                  >
                    <GiShop />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-cyan-800 text-4xl font-medium mb-2">
                    {shops}{" "}
                    <span className="text-gray-400 text-sm font-medium">
                      {" "}
                      Shops
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <label className="text-lime-800 font-bold">
                    Total Banners
                  </label>
                  <label
                    htmlFor=""
                    className="text-pink-600 text-2xl font-medium"
                  >
                    <GiVerticalBanner />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-pink-600 text-4xl font-medium mb-2">
                    {allBanners} {" "}
                    <span className="text-gray-400 text-sm font-medium">
                      {" "}
                      Banners
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <label className="text-lime-800 font-bold">
                    Approved Shops
                  </label>
                  <label
                    htmlFor=""
                    className="text-lime-600 text-2xl font-medium"
                  >
                    <FcApproval />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-lime-600 text-4xl font-medium mb-2">
                    {approvedShops} <span className="text-gray-400 text-sm font-medium">Shops Approved</span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
              <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <label className="text-lime-800 font-bold">
                    Denied Shops
                  </label>
                  <label
                    htmlFor=""
                    className="text-red-500 text-2xl font-medium"
                  >
                    <MdOutlineError />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-red-500 text-4xl font-medium mb-2">
                    0{" "}
                    <span className="text-gray-400 text-sm font-medium">
                      Shops Denied
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2 transition transform hover:-translate-y-1">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
              <div class="py-3 px-6 border-b border-gray-300 flex justify-between">
                  <label className="text-lime-800 font-bold">
                    Shops Pending for Approval
                  </label>
                  <label
                    htmlFor=""
                    className="text-yellow-500 text-2xl font-medium"
                  >
                    <MdPendingActions />
                  </label>
                </div>
                <div class="p-6">
                  <h5 class="text-yellow-500 text-4xl font-medium mb-2">
                    {pendingShops}{" "}
                    <span className="text-gray-400 text-sm font-medium">
                      {" "}
                      Shops Pending
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container mx-auto p-4 px-8 lg:px-6">
          <AddBanner/>
        </div>
        <div className="container mx-auto px-8 lg:px-6 flex flex-wrap justify-start h-72 overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-thumb-rounded-full">
          <AllBanners/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
