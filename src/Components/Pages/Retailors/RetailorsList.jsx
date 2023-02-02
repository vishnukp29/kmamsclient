import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../../Redux/Slices/userSlices";
import RetailorsListItem from "./RetailorsListItem";

const RetailorsList = () => {
  //dispatch
  const dispatch = useDispatch();

  //data from store
  const retailors = useSelector((state) => state?.users);
  const { usersList} = retailors;

  //fetch all retailors
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <section className="min-h-screen  py-20 2xl:py-40 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto font-display">
        <div className="flex flex-wrap items-center mx-4 mb-2 2xl:mb-4">
          <div className="w-full lg:w-1/2 px-4 mb-2">
            <div className=" w-full flex ">
              <h2 className="mb-5 text-4xl text-lime-500 font-bold">All</h2>
              <h2 className="mb-5 text-4xl text-gray-900 font-bold">
                Retailors
              </h2>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          {usersList?.length <= 0 ? (
            <h2>No Retailors Found</h2>
          ) : (
            usersList?.map((user) => (
              <>
                <RetailorsListItem user={user} />
              </>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RetailorsList;




// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import clsx from "clsx";
// import { fetchUsersAction } from "../../../Redux/Slices/userSlices";
// import RetailorsListItem from "./RetailorsListItem";
// // import useLazyLoad from "./useLazyLoad";

// const RetailorsList = () => {
//   //dispatch
//   const dispatch = useDispatch();

//   //data from store
//   const retailors = useSelector((state) => state?.users);
//   const { usersList} = retailors;

//   //fetch all retailors
//   useEffect(() => {
//     dispatch(fetchUsersAction());
//   }, [dispatch]);

//   // Lazy loading
//   // const triggerRef = useRef(null);
//   // const NUM_PER_PAGE = 5;
//   // const TOTAL_PAGES = usersList?.length;

//   // const onGrabData = (currentPage) => {
//   //   // This would be where you'll call your API
//   //   return new Promise((resolve) => {
//   //     setTimeout(() => {
//   //       const data = usersList?.slice(
//   //         ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
//   //         NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
//   //       );
//   //       console.log(data);
//   //       resolve(data);
//   //     }, 3000);
//   //   });
//   // };

//   // const {loading } = useLazyLoad({ triggerRef, onGrabData });

//   return (
//     <section className="min-h-screen  py-20 2xl:py-40 bg-gray-50 overflow-hidden">
//       <div className="container px-4 mx-auto font-display">
//         <div className="flex flex-wrap items-center mx-4 mb-2 2xl:mb-4">
//           <div className="w-full lg:w-1/2 px-4 mb-2">
//             <div className=" w-full flex ">
//               <h2 className="mb-5 text-4xl text-lime-500 font-bold">All</h2>
//               <h2 className="mb-5 text-4xl text-gray-900 font-bold">
//                 Retailors
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="container px-4 mx-auto">
//           {usersList?.length <= 0 ? (
//             <h2>No Retailors Found</h2>
//           ) : (
//             usersList?.map((user) => (
//               <>
//                 <RetailorsListItem user={user} />
//               </>
//             ))
//           )}
//         </div>
//         {/* <div
//           ref={triggerRef}
//           className={clsx("trigger", { visible: loading })}
//         ></div> */}
//       </div>
//     </section>
//   );
// };

// export default RetailorsList;
