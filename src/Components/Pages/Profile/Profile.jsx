import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../../Redux/Slices/userSlices";
import DateFormatter from "../../../Utils/DateFormatter";

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  //User data from store
  const users = useSelector((state) => state.users);
  const {profile,userAuth,} = users;

  //fetch user profile
  useEffect(() => {
    dispatch(userProfileAction(id));
  }, [id, dispatch]);

  //isLogin
  const isLoginUser = userAuth?._id === profile?._id;

  return (
    <section>
      <div className="p-16 font-display">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0 ">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-sm">{<DateFormatter date={profile?.createdAt} />}</p>{" "}
                <p className="text-gray-400">Created At</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-sm">{profile?.phoneNum}</p>{" "}
                <p className="text-gray-400">Contact</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-sm">{profile?.shopCount}</p>{" "}
                <p className="text-gray-400">Shops</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-gray-200 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-gray-700">
              <img className="rounded-full"
                    src={profile?.profilePicture}
                    alt={profile?.firstName}
                    />
              </div>{" "}
            </div>{" "}

            {isLoginUser ? (
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <Link to={`/update-profile/${profile?._id}`}
                className="text-lime-400 py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Update Profile
              </Link>{" "}
              <Link  to={`/upload-profile-photo/${profile?._id}`}
                className="text-lime-400 py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Add Profile Photo
              </Link>{" "}
            </div>
            ):(
              <div className="space-x-8 flex justify-center mt-32 md:mt-0 ">
                <Link  to={`/retailors`}
                  className="text-lime-400 py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  Go Back
                </Link>
              </div>
            )}

          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
            {profile?.firstName} {profile?.lastName}
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">{profile?.email}</p>{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Profile;
