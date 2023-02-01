import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerDetails } from "../../../Redux/Slices/bannerSlices";
import DeleteBanner from "../../Modal/DeleteBanner";
import LoadingComponent from "../../../Utils/LoadingComponent";

const BannerDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  //select Banner details from store
  const banner = useSelector((state) => state?.banners);
  const { bannerDetails, loading } = banner;
  console.log(bannerDetails);

  const addedAt = bannerDetails?.createdAt.slice(0, 10);
  console.log(addedAt);

  useEffect(() => {
    dispatch(fetchBannerDetails(id));
  }, [id, dispatch]);

  //Get login user
  const user = useSelector((state) => state.users);
  const { userAuth } = user;

  const isCreatedBy = bannerDetails?.user === userAuth?._id;

  return (
    <div className="h-screen">
      <section className="text-gray-700 font-display overflow-hidden bg-white">
        <div className="container px-4 py-12 mx-auto ">
          {loading ? (
            <div className="flex justify-center">
              <LoadingComponent />
            </div>
          ) : (
            <div className="w-full mx-auto p-4 border border-sm rounded-md ">
              <div className="flex justify-center mb-4 lg:h-64">
                <img
                  alt="Banner"
                  className=" w-full object-cover object-center rounded border border-gray-200"
                  src={bannerDetails?.bannerImage}
                />
              </div>
              <p className="leading-relaxed text-justify text-gray-700 font-medium">
                Banner Created At: {addedAt}
              </p>
              <div className="flex mt-2 justify-start">
                <p className="mx-auto">
                  <Link
                    to={`/dashboard`}
                    className="bg-gray-900 text-lime-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear  duration-150 transition transform hover:-translate-y-0.5"
                    type="button"
                  >
                    GO BACK
                  </Link>
                  <DeleteBanner />
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BannerDetails;
