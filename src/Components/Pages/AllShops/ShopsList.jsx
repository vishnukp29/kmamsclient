import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import ShopsListItem from "./ShopsListItem";
import useLazyLoad from "../Retailors/useLazyLoad";
import { fetchShopsAction } from "../../../Redux/Slices/shopSlices";

const ShopsList = () => {
  //dispatch
  const dispatch = useDispatch();

  const shops = useSelector((state) => state?.shops);
  const { shopLists} = shops;

  //fetch all retailors
  useEffect(() => {
    dispatch(fetchShopsAction());
  }, [dispatch]);

  // Lazy loading
  const triggerRef = useRef(null);
  const NUM_PER_PAGE = 5;
  const TOTAL_PAGES = shopLists?.length;

  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = shopLists.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 3000);
    });
  };

  const {loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto font-display">
        <div className="flex flex-wrap items-center mx-4 mb-2 2xl:mb-4">
          <div className="w-full lg:w-1/2 px-4 mb-2">
            <div className=" w-full flex ">
              <h2 className="mb-5 text-4xl text-lime-500 font-bold">All</h2>
              <h2 className="mb-5 text-4xl text-gray-900 font-bold">
                Shops
              </h2>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          {shopLists?.length <= 0 ? (
            <h2>No Shops Found</h2>
          ) : (
            shopLists?.map((shop) => (
              <>
                <ShopsListItem shop={shop} />
              </>
            ))
          )}
        </div>
        <div
          ref={triggerRef}
          className={clsx("trigger", { visible: loading })}
        ></div>
      </div>
    </section>
  );
};

export default ShopsList;
