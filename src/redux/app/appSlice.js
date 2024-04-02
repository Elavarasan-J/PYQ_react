import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialAppLoading: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    disableInitialLoading: (state) => {
      state.initialAppLoading = false;
    },
    resetAppSlice: () => {
      return initialState;
    },
  },
});

export const { disableInitialLoading, resetAppSlice } = appSlice.actions;
export default appSlice.reducer;
