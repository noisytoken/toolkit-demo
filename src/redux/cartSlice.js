import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todoSlice";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      const newCart = state.cart.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.cart = newCart;
    },
  },

  //   extraReducers: {
  //     [addTodo]: (state, action) => {
  //       console.log("extra");
  //       console.log({ action });
  //       if (!action.payload.text.includes("app")) {
  //         state.cart.push(action.payload);
  //       }
  //     },
  //   },
});

export const { addProduct, removeProduct } = cartslice.actions;

export default cartslice.reducer;
