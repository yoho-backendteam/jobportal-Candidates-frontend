import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,

    otpSent: false,
    otpResent: false,
    otpVerified: false,
    loading: false,
    error: null,
    resetSuccess: false,
    signupSuccess: false,
  },

  reducers: {
    signin(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setOtpLoading(state, action) {
      state.loading = action.payload;
    },
    setOtpSent(state, action) {
      state.otpSent = action.payload;
    },
    setOtpResent(state, action) {
      state.otpResent = action.payload;
    },
    setOtpVerified(state, action) {
      state.otpVerified = action.payload;
    },
    setOtpError(state, action) {
      state.error = action.payload;
    },
    setResetSuccess(state, action) {
      state.resetSuccess = action.payload;
    },
    setSignupSuccess(state, action) {
      state.signupSuccess = action.payload;
    },
  },
});

export const {
  signin,
  setOtpLoading,
  setOtpSent,
  setOtpResent,
  setOtpVerified,
  setOtpError,
  setResetSuccess,
  setSignupSuccess
} = authSlice.actions;

export default authSlice.reducer;
