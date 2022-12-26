import { configureStore } from "@reduxjs/toolkit";
import shopSlices from "../Slices/shopSlices";
import usersReducer from "../Slices/userSlices";


const store = configureStore({
  reducer: {
    users: usersReducer,
    shops: shopSlices,
  },
});

export default store;