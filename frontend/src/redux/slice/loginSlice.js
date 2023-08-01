import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false
  },
  reducers: {},
  extraReducers: {},
});

export default loginSlice.reducer;
