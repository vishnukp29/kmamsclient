import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopsAction } from "../../../Redux/Slices/shopSlices";
import { fetchUsersAction } from "../../../Redux/Slices/userSlices";

const Dashboard = () => {
  // Select user from from store
  const user = useSelector((state) => state?.users);
  const { usersList } = user;
  const allUsers = usersList?.length;
  console.log(allUsers);

  //select post from store
  const shop = useSelector((state) => state?.shops);
  const { shopLists } = shop;
  const shops = shopLists?.length;
  console.log(shops);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopsAction());
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <div>
      <section className="min-h-screen  py-20 2xl:py-40 bg-gray-50 overflow-hidden">
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

          <div className="flex justify-around sm:flex flex-wrap bg-white p-4 rounded-lg drop-shadow-md">
            <div class="flex justify-center p-2">
              <div class="block rounded-lg shadow-lg bg-gray-700 max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 text-lime-300 font-bold">
                  Total Retailors
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {allUsers}
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2">
              <div class="block rounded-lg shadow-lg bg-gray-700 max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 text-lime-300 font-bold">
                  Total Shops
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {shops}
                  </h5>
                </div>
              </div>
            </div>

            <div class="flex justify-center p-2">
              <div class="block rounded-lg shadow-lg bg-gray-700 max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 text-lime-300 font-bold">
                  Banners</div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">3</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
