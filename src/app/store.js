import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userlogReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    userlog: userlogReducer,
  },
});
