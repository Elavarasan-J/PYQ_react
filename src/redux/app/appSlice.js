import { createSlice } from "@reduxjs/toolkit";
const types = ["PAID", "FREE"];
const initialState = {
  initialAppLoading: true,
  keywordTypes: types,
  activeType: types[0],
  cartItems: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    disableInitialLoading: (state) => {
      state.initialAppLoading = false;
    },
    updateCartItems: (state, { payload }) => {
      const { action, id } = payload;
      if (action === "ADD") {
        state.cartItems.push(id);
      } else {
        const index = state.cartItems.indexOf(id);
        state.cartItems.splice(index, 1);
      }
    },
    resetAppSlice: () => {
      return initialState;
    },
  },
});

export const { disableInitialLoading, resetAppSlice, updateCartItems } =
  appSlice.actions;
export default appSlice.reducer;
