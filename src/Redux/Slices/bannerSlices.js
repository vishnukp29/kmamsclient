import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Utils/baseURL";

const resetBanner = createAction("banner/reset");
const resetBannerDelete = createAction("banner/delete");

// Resgister Shop Action
export const addBannerAction = createAsyncThunk(
  "banner/created",
  async (banner, { rejectWithValue, getState, dispatch }) => {
    console.log(banner);

    //get user action
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    try {
      //http call
      const formData = new FormData();
      formData.append("bannerImage", banner?.bannerImage);
      console.log(formData, banner);
      const { data } = await axios.post(
        `${baseUrl}/api/banner/add-banner`,
        formData,
        config
      );
      dispatch(resetBanner());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all Shops
export const fetchBannerAction = createAsyncThunk(
  "banner/list",
  async (banner, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/banner`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Delete
export const deleteBannerAction = createAsyncThunk(
  "banner/delete",
  async (bannerId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const { data } = await axios.delete(
        `${baseUrl}/api/banner/${bannerId}`,
        config
      );
      //dispatch
      dispatch(resetBannerDelete());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice
const bannerSlice = createSlice({
  name: "banner",
  initialState: {},
  extraReducers: (builder) => {
    // Add Banner
    builder.addCase(addBannerAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetBanner, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(addBannerAction.fulfilled, (state, action) => {
      state.bannerAdded = action?.payload;
      state.loading = false;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(addBannerAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Fetch Banners
    builder.addCase(fetchBannerAction.pending,(state,action)=>{
      state.loading=true;
    });
    builder.addCase(fetchBannerAction.fulfilled,(state,action)=>{ 
      state.bannerList=action?.payload;      
      state.loading=false;
      state.hasMore=true;
      state.pageNumber=0
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchBannerAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Delete Banner
    builder.addCase(deleteBannerAction.pending, (state, action) => {
      state.loading = true;
    }); 
    builder.addCase(deleteBannerAction, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deleteBannerAction.fulfilled, (state, action) => {
      state.bannerDeleted = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteBannerAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    }); 

  },
});

export default bannerSlice.reducer;
