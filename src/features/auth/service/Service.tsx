import Client from "../../../api/index";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await Client.common.login(data);
    console.log("Login", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const forgotpasswordService = async (data: {
  email?: string;
  phone?: string;
}) => {
  try {
    const response = await Client.common.send_otp(data);
    console.log("Forgot Password sending OTP", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const resendotpService = async (data: {
  email?: string;
  phone?: string;
}) => {
  try {
    const response = await Client.common.resend_otp(data);
    console.log("Resend OTP", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyOtpService = async (data: {
  email?: string;
  phone?: string;
  otp: string;
  type: "reset" | "verification";
}) => {
  try {
    const response = await Client.common.verify_otp(data);
    console.log("OTP Verification", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordService = async (data: {
  email: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  try {
    const response = await Client.common.reset_password(data);
    console.log("first",response)
    return response;
  } catch (error) {
    throw error;
  }
};
