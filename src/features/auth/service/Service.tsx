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
