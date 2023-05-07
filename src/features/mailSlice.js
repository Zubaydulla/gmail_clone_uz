import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMailData: null,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    setSelectedMailData: (state, action) => {
      state.selectedMailData = action.payload;
    },
  },
});

export const { setSelectedMailData, openSendMessage, closeSendMessage } =
  mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMailData = (state) => state.mail.selectedMailData;
export default mailSlice.reducer;
