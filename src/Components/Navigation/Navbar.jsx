import React from "react";
import { useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar"; 

const Navbar = () => {
  //ge user from store
  const state = useSelector(state => state?.users);
  const { userAuth} = state;
  const isAdmin = userAuth?.isAdmin;
  
  return (
    <>
      {isAdmin ? (
        <AdminNavbar isLogin={userAuth}/>
      ) : userAuth ? (
        <PrivateNavbar isLogin={userAuth}/>
      ) : (
        <PublicNavbar />
      )}
    </>
  );
};

export default Navbar;