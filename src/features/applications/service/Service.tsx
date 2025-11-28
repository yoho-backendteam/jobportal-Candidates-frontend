import Client from "../../../api/index";

export const getAllapplicationService = async () => {
  try {
    const response = await Client.candidate.getAppliedJobs();
    if (response) return response;
  } catch (error) {
    return error;
  }
};
export const getselectedapplicationService = async (id: any) => {
  try {
    const response = await Client.candidate.getApplicationById(id);
    if (response) return response;
  } catch (error) {
    return error;
  }
};

export const createapplicationservice = async (data: {
  job: string;
}) => {
  try {
    const response = Client.candidate.applyJob(data);
    console.log("Apply job", response);
    return response;
  } catch (error) {
    return error;
  }
};
