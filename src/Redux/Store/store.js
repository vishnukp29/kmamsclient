import { configureStore } from "@reduxjs/toolkit";
import bannerSlices from "../Slices/bannerSlices";
import shopSlices from "../Slices/shopSlices";
import usersReducer from "../Slices/userSlices";


const store = configureStore({
  reducer: {
    users: usersReducer,
    shops: shopSlices,
    banners: bannerSlices,
  },
});

export default store;