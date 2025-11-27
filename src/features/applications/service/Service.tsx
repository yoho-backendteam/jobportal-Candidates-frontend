import Client from "../../../api/index";
export const createapplicationservice = async (data: {
  job: string;
  user: string;
  status: string;
}) => {
  try {
    const response = Client.candidate.applyJob(data);
    console.log("Apply job", response);
    return response;
  } catch (error) {
    throw error;
  }
};
