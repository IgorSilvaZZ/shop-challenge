import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from ".";
import { IChangeProduct } from "../types/IChangeProduct";

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
      const product = { ...payload };

      const indexProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (indexProduct > -1) {
        state.cart[indexProduct].quantity =
          state.cart[indexProduct].quantity + 1;

        state.cart[indexProduct].price =
          state.cart[indexProduct].price * state.cart[indexProduct].quantity;
      } else {
        state.cart.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    addQuantityProduct(
      state,
      { payload }: PayloadAction<IChangeProduct>
    ): void {
      const { id } = payload;

      const indexProduct = state.cart.findIndex((product) => product.id === id);

      if (indexProduct > -1) {
        state.cart[indexProduct].quantity =
          state.cart[indexProduct].quantity + 1;

        state.cart[indexProduct].price =
          state.cart[indexProduct].priceOriginal *
          state.cart[indexProduct].quantity;
      }
    },
    removeQuantityProduct(
      state,
      { payload }: PayloadAction<IChangeProduct>
    ): void {
      const { id } = payload;

      const indexProduct = state.cart.findIndex((product) => product.id === id);

      if (indexProduct > -1) {
        if (state.cart[indexProduct].quantity > 1) {
          state.cart[indexProduct].quantity =
            state.cart[indexProduct].quantity - 1;

          state.cart[indexProduct].price =
            state.cart[indexProduct].price -
            state.cart[indexProduct].priceOriginal *
              state.cart[indexProduct].quantity;
        }
      }
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
