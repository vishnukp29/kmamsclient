import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Utils/baseURL";

const resetShop = createAction("shops/reset");
const resetShopEdit = createAction("shop/reset");
const resetShopDelete = createAction("shop/delete");

// Resgister Shop Action
export const registerShopAction = createAsyncThunk(
  "shop/created",
  async (shop, { rejectWithValue, getState, dispatch }) => {
    console.log(shop);

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
      formData.append("ownerName", shop?.ownerName);
      formData.append("shopName", shop?.shopName);
      formData.append("shopDescription", shop?.shopDescription);
      formData.append("shopAddress", shop?.shopAddress);
      formData.append("estCertificate", shop?.estCertificate);
      formData.append("mobileNum", shop?.mobileNum);
      formData.append("mail", shop?.mail);
      formData.append("shopImage", shop?.shopImage);
      formData.append("shopLocation", shop?.shopLocation);
      console.log(formData, shop);
      const { data } = await axios.post(
        `${baseUrl}/api/shop/shop-join`,
        formData,
        config
      );
      dispatch(resetShop());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Update Shop
export const updateShopAction = createAsyncThunk(
  "shop/updated",
  async (shop, { rejectWithValue, getState, dispatch }) => {
    console.log(shop);
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
      const { data } = await axios.put(
        `${baseUrl}/api/shop/${shop?.id}`,
        shop,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all Shops
export const fetchShopsAction = createAsyncThunk(
  "shop/list",
  async (shop, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/api/shop`
      );
      return data
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch Shop details
export const fetchShopDetails = createAsyncThunk(
  "shop/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/shop/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch newShops
export const fetchNewShopsAction = createAsyncThunk(
  "shop/newly",
  async (shop, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/shop/newly`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Delete
export const deleteShopAction = createAsyncThunk(
  "shop/delete",
  async (shopId, { rejectWithValue, getState, dispatch }) => {
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
        `${baseUrl}/api/shop/${shopId}`,
        config
      );
      //dispatch
      dispatch(resetShopDelete());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice
const shopSlice = createSlice({
  name: "shop",
  initialState: {},
  extraReducers: (builder) => {
    // Create Shop
    builder.addCase(registerShopAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetShop, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(registerShopAction.fulfilled, (state, action) => {
      state.shopCreated = action?.payload;
      state.loading = false;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerShopAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Update Shop
    builder.addCase(updateShopAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetShopEdit, (state, action) => {
      state.isUpdated = true;
    });
    builder.addCase(updateShopAction.fulfilled, (state, action) => {
      state.shopUpdated = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isUpdated = false
    });
    builder.addCase(updateShopAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch Shops
    builder.addCase(fetchShopsAction.pending,(state,action)=>{
      state.loading=true;
    });
    builder.addCase(fetchShopsAction.fulfilled,(state,action)=>{ 
      state.shopLists=action?.payload;      
      state.loading=false;
      state.hasMore=true;
      state.pageNumber=0
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchShopsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch new Shops
    builder.addCase(fetchNewShopsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNewShopsAction.fulfilled, (state, action) => {
      state.newShopLists = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchNewShopsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch post Details
    builder.addCase(fetchShopDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchShopDetails.fulfilled, (state, action) => {
      state.shopDetails = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchShopDetails.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Delete Shop
    builder.addCase(deleteShopAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteShopAction, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deleteShopAction.fulfilled, (state, action) => {
      state.shopDeleted = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteShopAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    }); 

  },
});

export default shopSlice.reducer;
