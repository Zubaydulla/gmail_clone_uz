import { createSlice } from "@reduxjs/toolkit";

export const userlogSlice = createSlice({
  name: "userlog",
  initialState: {
    userlog: null,
  },
  reducers: {
    setUserlogin: (state, action) => {
      state.userlog = action.payload;
    },
    setUserlogout: (state) => {
      state.userlog = null;
    },
  },
});

export const { setUserlogin, setUserlogout } = userlogSlice.actions;
export const userlog = (state) => state.userlog.userlog;
export default userlogSlice.reducer;
