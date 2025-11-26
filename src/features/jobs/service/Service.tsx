import Client from '../../../api/index';

export const getAlljobsService = async () => {
	try {
		const response = await Client.common.getAllJobs();
		if (response) return response;
	} catch (error) {
		return error;
	}
};
export const getselectedjobService = async (id:any) => {
	try {
		const response = await Client.common.getJobById(id);
		if (response) return response;
	} catch (error) {
		return error;
	}
};