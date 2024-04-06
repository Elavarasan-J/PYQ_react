import { createSlice } from "@reduxjs/toolkit";
const types = ["PAID", "FREE"];
const initialState = {
  initialAppLoading: true,
  keywordTypes: types,
  activeType: types[0],
  cartItems: [],
  cartActions: {},
  openCart: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    disableInitialLoading: (state) => {
      state.initialAppLoading = false;
    },
    updateCartItems: (state, { payload }) => {
      const { action, id, name } = payload;
      if (action === "ADD") {
        state.cartItems.push(id);
        state.cartActions["action"] = action;
        state.cartActions["message"] = `Keyword "${name}" added to cart!`;
        state.cartActions["title"] = "ADDED";
      } else {
        const index = state.cartItems.indexOf(id);
        state.cartItems.splice(index, 1);
        state.cartActions["action"] = action;
        state.cartActions["message"] = `Keyword "${name}" removed from cart!`;
        state.cartActions["title"] = "REMOVED";
      }
    },
    clearCartActions: (state) => {
      state.cartActions = {};
    },
    showCartDialog: (state, { payload }) => {
      state.openCart = payload;
    },
    resetAppSlice: () => {
      return initialState;
    },
  },
});

export const {
  disableInitialLoading,
  resetAppSlice,
  updateCartItems,
  clearCartActions,
  showCartDialog,
} = appSlice.actions;
export default appSlice.reducer;
