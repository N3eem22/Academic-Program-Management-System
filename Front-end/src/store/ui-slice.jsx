import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  api_url: "http://localhost:9000",
  copyrights:
    "جميع الحقوق محفوظة لمركز الاتصالات وتكنولوجيا المعلومات - جامعة حلوان © 2024",
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
