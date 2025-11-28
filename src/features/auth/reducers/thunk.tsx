import type { AppDispatch } from "../../../store/store";
import {
  forgotpasswordService,
  loginService,
  resendotpService,
  resetPasswordService,
  signupService,
  verifyOtpService,
} from "../service/Service";
import {
  setOtpError,
  setOtpLoading,
  setOtpResent,
  setOtpSent,
  setOtpVerified,
  setResetSuccess,
  setSignupSuccess,
  signin,
} from "./Slice";

export const loginThunk = (data: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await loginService(data);
      dispatch(
        signin({
          user: response.data.user,
          token: response.data.token,
        })
      );
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };
};

export const sendOtpThunk = (data: { email?: string; phone?: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));

      const response = await forgotpasswordService(data);

      dispatch(setOtpSent(true));
      dispatch(setOtpError(null));
      dispatch(setOtpLoading(false));

      return response.data;
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};

export const resendOtpThunk = (data: { email?: string; phone?: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));

      const response = await resendotpService(data);

      dispatch(setOtpResent(true));
      dispatch(setOtpError(null));
      dispatch(setOtpLoading(false));

      return response.data;
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};

export const verifyOtpThunk = (data: {
  email?: string;
  phone?: string;
  otp: string;
  type: "reset" | "verification";
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));

      const response = await verifyOtpService(data);

      dispatch(setOtpVerified(true));
      dispatch(setOtpError(null));
      dispatch(setOtpLoading(false));

      return response.data;
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};

export const resetPasswordThunk = (data: {
  email: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));

      const response = await resetPasswordService(data);
      console.error("thunk", response);

      dispatch(setOtpError(null));
      dispatch(setOtpLoading(false));
      dispatch(setResetSuccess(true));

      return response;
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};

export const signupThunk = (data: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));
      dispatch(setSignupSuccess(false));

      const response = await signupService(data);
      const responseData = response.data || response;

      dispatch(setOtpLoading(false));
      dispatch(setOtpError(null));
      dispatch(setSignupSuccess(true));

      return responseData; 
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};
// Add this to your existing thunk file
export const verifySignupOtpThunk = (data: { email: string; otp: string }) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setOtpLoading(true));

      const response = await verifyOtpService({
        ...data,
        type: "verification",
      });

      dispatch(setOtpVerified(true));
      dispatch(setOtpError(null));
      dispatch(setOtpLoading(false));

      return response.data;
    } catch (error: any) {
      dispatch(setOtpError(error?.message));
      dispatch(setOtpLoading(false));
      throw error;
    }
  };
};
