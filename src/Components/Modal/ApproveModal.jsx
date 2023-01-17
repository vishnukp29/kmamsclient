import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approveShopAction } from "../../Redux/Slices/shopSlices";
import {toast} from 'react-toastify'

const ApproveModal = ({ open, setOpen, commentId, value }) => {
    const [showModal, setShowModal] = React.useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //select Shop details from store
    const shop = useSelector((state) => state?.shops);
    const { shopDetails, loading,approveShop } = shop;

    // //Get login user
    // const user = useSelector(state => state.users);
    // const {userAuth} = user;
    // const isCreatedBy = shopDetails?.user === userAuth?._id;

    if(approveShop){
      toast.success('Shop Approved successfully')
       navigate("/all-shops"); 
    }

  return (
    <>
      <button
        className="bg-lime-600 text-gray-50 transform hover:-translate-y-0.5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Aprove Shop
      </button>
      {showModal ? (
        <>
          <div
            className="justify-start items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Are you sure you want to approve this Shop?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-gray-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {loading ? 
                   (
                    <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Approving, Please Wait
                  </button>
                   ):(
                    <button
                    className="bg-lime-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                        dispatch(approveShopAction(shopDetails?._id))
                      }
                  >
                    Approve
                  </button>
                   )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ApproveModal;