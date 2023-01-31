import React, { useEffect } from "react";
import { fetchBannerAction,fetchBannerDetails } from "../../../Redux/Slices/bannerSlices";
import { useDispatch, useSelector } from "react-redux";
import DeleteBanner from "../../Modal/DeleteBanner";
import { useParams } from "react-router-dom";

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
    dispatch(fetchBannerDetails());
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
              className="block p-6 rounded-lg shadow-lg bg-white mt-2"
             >
              <div className="">
                  {/* Banner image */}
                  <img
                    className="mb-4 rounded-md"
                    src={banner?.bannerImage}
                    alt=""
                  />
                  <DeleteBanner/>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBanners;
