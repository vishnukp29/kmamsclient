import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateProtected = ({  children }) => {
//check if user is loggin
const user = useSelector(state => state?.users);
const { userAuth } = user;

 if (!userAuth) {
 return <Navigate to="/login" replace />;
 }
 return children;
};
export default PrivateProtected;
