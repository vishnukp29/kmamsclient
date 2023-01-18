import React from "react";
import { Link } from "react-router-dom";

const RetailorsListItem = (user) => {
    
  const joined = user.user?.createdAt?.slice(0, 10);

  return (
    <section className="p-8 mb-4 bg-white shadow rounded flex justify-center items-center  transition transform hover:-translate-y-1">
      <div className="container mx-auto font-display">
        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-full lg:w-3/12 flex px-4 mb-6 lg:mb-0">
            <img
              className="w-10 h-10 mr-4 object-cover rounded-full"
              src={user?.user?.profilePicture}
              alt="profile "
            />
            <div>
              <p className="text-sm font-medium">
                {user?.user?.firstName} {user?.user?.lastName}
              </p>
              <p className="text-xs text-gray-500">{user?.user?.email}</p>
            </div>
          </div>

          <div className="w-full flex lg:w-4/12 px-4  mb-6 lg:mb-0 justify-between">
            <p className="inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 text-xs ">
              <span className="text-base mr-2  boder-2 text-bold text-slate-700">
                 Shops : {" "} <span className="text-gray-800 font-semibold"> {user.user?.shopCount}</span>
              </span>
            </p>

            <Link
              to={`/profile/${user?.user?._id}`}
              className=" inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 text-lime-400 rounded bg-gray-800 text-bold  transition transform hover:-translate-y-0.5"
            >
              Profile
            </Link>
          </div>

          <div className=" w-full flex lg:w-4/12 px-2  mb-2 lg:mb-0 justify-center">
            <p className="py-2 px-4 text-sm">
              Contact{" "}
              <span className="text-sm mr-2 font-semibold text-gray-800">{user.user?.phoneNum}</span>
            </p>

            <p className="py-2 px-4 text-sm">
              Joined{" "}
              <span className="text-sm mr-2 font-semibold text-gray-800">{joined}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailorsListItem;
