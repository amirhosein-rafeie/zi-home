import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    login: () => {},
    logout: () => {},
  },
});

export const { setPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
