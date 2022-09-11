import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

import { IStateCart } from "../types/IStateCart";

const slice = createSlice({
  name: "cart",
  initialState: <IStateCart>{
    cart: [],
  },
  reducers: {
    addCart(state, { payload }: PayloadAction<IProduct>): void {
      state.cart.push(payload);
    },
  },
});

export const cartActions = slice.actions;
export const selectCart = (state: IStateCart) => state.cart;

export default slice.reducer;
