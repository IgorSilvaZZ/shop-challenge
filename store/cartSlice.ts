import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from ".";

import { IProduct } from "../types/IProduct";

import { IStateCart } from "../types/IStateCart";

const initialState: IStateCart = {
  cart: [],
};

const slice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart(state, { payload }: PayloadAction<IProduct>): void {
      state.cart.push(payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.shop.cart,
      };
    },
  },
});

export const cartActions = slice.actions;
export const selectCart = (state: AppState) => state.shop.cart;

export default slice.reducer;
