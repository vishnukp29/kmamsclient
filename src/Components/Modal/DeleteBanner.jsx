import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { deleteBannerAction } from "../../Redux/Slices/bannerSlices";

const DeleteBanner = ({ open, setOpen, commentId, value }) => {
    const [showModal, setShowModal] = React.useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //select Banner details from store
    const banner = useSelector((state) => state?.banners);
    const { bannerDetails, loading,bannerDeleted, isDeleted } = banner;

    if(bannerDeleted){
      toast.success('Banner Removed successfully')
      navigate(`/`); 
    }

  return (
    <>
      <button
        className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear  duration-150 transition transform hover:-translate-y-0.5"
        type="button"
        onClick={() => setShowModal(true)}
       >
        Delete
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
                  Are you sure you want to delete this Banner?
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
                    Deleting...
                  </button>
                   ):(
                    <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                        dispatch(deleteBannerAction(bannerDetails?._id))
                      }
                  >
                    Delete 
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

export default DeleteBanner;