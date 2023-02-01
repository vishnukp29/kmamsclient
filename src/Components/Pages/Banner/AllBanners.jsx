import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBannerAction } from "../../../Redux/Slices/bannerSlices";
import { useDispatch, useSelector } from "react-redux";
import DeleteBanner from "../../Modal/DeleteBanner";

const AllBanners = () => {
  const { id } = useParams();

  const banner = useSelector((state) => state?.banners);
  const { loading, appErr, serverErr, bannerList } = banner;
  console.log(bannerList);

  const bannerArray = bannerList?.map((obj) => {
    return obj.bannerImage;
  });

  console.log(bannerArray);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerAction());
  }, [id,dispatch]);

  return (
    <div className=" p-4 ">
      <div className="p-2 border rounded-lg flex flex-wrap justify-start">
        {appErr || serverErr ? (
          <h1 className="text-red-600 text-2xl text-center">
            {serverErr} {appErr}
          </h1>
        ) : bannerList?.length <= 0 ? (
          <h1 className="text-3xl font-bold text-center">No Banners Found</h1>
        ) : (
          bannerList?.map((banner) => (
            <div
              key={banner.id}
              className="block p-3 rounded-lg shadow-lg bg-white mt-2 lg:w-1/3"
             >
              <div className="">
                  {/* Banner image */}
                  <img
                    className="mb-4 rounded-md"
                    src={banner?.bannerImage}
                    alt=""
                  />
                  <Link
                        to={`/bannerdetail/${banner?._id}`}
                        className="bg-gray-900 text-lime-500 font-medium uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                       >
                        View Banner
                      </Link>
                  {/* <DeleteBanner/> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBanners;
