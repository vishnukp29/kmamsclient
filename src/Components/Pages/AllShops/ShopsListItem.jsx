import React from "react";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

const ShopsListItem = (shop) => {
    
  const registered = shop.shop?.createdAt?.slice(0, 10);

  return (
    <section className="p-8 mb-4 bg-white shadow rounded flex justify-center items-center transition transform hover:-translate-y-1">
      <div className="container mx-auto font-display">
        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-full lg:w-3/12 flex px-4 mb-6 lg:mb-0">
            <img
              className="w-10 h-10 mr-4 object-cover rounded-full"
              src={shop?.shop?.shopImage}
              alt="profile "
            />
            <div>
              <p className="text-md font-semibold">
                {shop?.shop?.shopName} 
              </p>
              <p className="text-xs text-gray-500 font-semibold">{shop?.shop?.shopLocation}</p>
            </div>
          </div>

          <div className="w-full flex lg:w-4/12 px-4  mb-6 lg:mb-0 justify-between">
            <p className="inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 text-xs "> 
                <span className="text-sm mr-2 font-semibold text-gray-800">Joined On: {registered}</span>
            </p>

            <Link
              to={`/shopdetail/${shop?.shop?._id}`}
              className=" inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 text-base rounded bg-gray-800 text-bold hover:bg-gray-700 text-lime-400 font-medium drop-shadow-md transition transform hover:-translate-y-1"
             >
              View Shop
            </Link>
          </div>

          <div className=" w-full flex lg:w-4/12 px-2  mb-2 lg:mb-0 justify-center">
            <p className="py-2 px-4 text-sm">
              <span className="text-sm mr-2 font-semibold text-gray-800">{shop.shop?.mobileNum}</span>
            </p>

            <p className="py-2 px-4 text-sm">
              <span className="text-sm mr-2 font-semibold text-gray-800">{shop.shop?.mail}</span>
            </p>

            <p className="py-2 px-4 text-sm">
              {/* <span className="text-sm mr-2 font-semibold text-gray-800">{shop.shop?.isApproved}</span> */}
              {shop.shop?.isApproved ? (
                <span className="text-sm mr-2 font-semibold text-white bg-green-500 rounded-full p-1 px-2 drop-shadow-md">Approved</span>
              ):(
                <span className="text-sm mr-2 font-semibold text-white bg-yellow-400 rounded-full p-1 px-2 drop-shadow-md">Pending</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopsListItem;
