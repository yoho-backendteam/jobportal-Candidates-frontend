import Client from "../../../api/index";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await Client.common.login(data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const signupService = async (data: {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  highestEducation: string;
  institution: string;
  graduationYear: number;
  percentage: number;
  specialization: string;
  totalExperience: number;
  keySkills: string[];
}) => {
  try {
    const response = await Client.common.register(data);
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
    return response;
  } catch (error) {
    throw error;
  }
};
