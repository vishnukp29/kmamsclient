import React from "react";
import b1 from "../../../Logo/b1.png";
import b2 from "../../../Logo/b2.png";

const AllBanners = () => {
  return (
    <div className="flex flex-wrap justify-start p-4 ">
      <div className="p-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
          <img className="mb-4 rounded-md" src={b2} alt="Banner" />
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
          <img className="mb-4 rounded-md" src={b1} alt="Banner" />
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
          <img className="mb-4 rounded-md" src={b2} alt="Banner" />
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
          <img className="mb-4 rounded-md" src={b1} alt="Banner" />
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
          <img className="mb-4 rounded-md" src={b2} alt="Banner" />
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Delete
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AllBanners;
