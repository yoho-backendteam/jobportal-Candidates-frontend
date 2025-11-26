import httpClients from './httpClients';
import httpEndPoints from './httpEndPoints';

class Client {
	//common routes
	common = {
		login: (data: any) => httpClients.post(httpEndPoints.users.login, data, {}),
		register: (data: any) =>
			httpClients.post(httpEndPoints.users.register, data, {}),
		send_otp: (data: any) =>
			httpClients.post(httpEndPoints.users.send_otp, data, {}),
		verify_otp: (data: any) =>
			httpClients.post(httpEndPoints.users.verify_otp, data, {}),
		resend_otp: (data: any) =>
			httpClients.post(httpEndPoints.users.resend_otp, data, {}),
		reset_password: (data: any) =>
			httpClients.post(httpEndPoints.users.reset_password, data, {}),
		change_password: (data: any) =>
			httpClients.post(httpEndPoints.users.change_password, data, {}),
		getProfile: () => httpClients.get(httpEndPoints.users.profile),
		getAllJobs: () => httpClients.get(httpEndPoints.jobs.getAll),
		getJobById: (params: string) =>
			httpClients.get(httpEndPoints.jobs.getById.replace(':id', params)),
	};

	//candidate routes
	candidate = {
		applyJob: (data: any) =>
			httpClients.post(httpEndPoints.applications.create, data, {}),
		getAppliedJobs: (params?: any) =>
			httpClients.get(httpEndPoints.applications.getApplications, params),
		getApplicationById: (params: string) =>
			httpClients.get(
				httpEndPoints.applications.getById.replace(':id', params)
			),
		updateApplicationById: (params: string) =>
			httpClients.put(httpEndPoints.applications.update.replace(':id', params)),
		deleteApplicationById: (params: string) =>
			httpClients.delete(
				httpEndPoints.applications.delete.replace(':id', params)
			),
		updateOffer: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.updateOffer.replace(':id', params),
				data
			),
		updateDocument: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.updateDocument.replace(':id', params),
				data
			),
		uploadDocuments: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.uploadDocuments.replace(':id', params),
				data
			),
		timeLine: (params: string) =>
			httpClients.get(
				httpEndPoints.applications.applicationTimeline.replace(':id', params)
			),
	};

	//hr routes
	hr = {
		getAllUsers: () => httpClients.get(httpEndPoints.users.getAllUsers),
		getAllCandidates: () =>
			httpClients.get(httpEndPoints.users.getAllCandidates),
		getUserById: (params: string) =>
			httpClients.get(httpEndPoints.users.getUserById.replace(':id', params)),
		deactivateUser: (params: string) =>
			httpClients.put(
				httpEndPoints.users.deactivateUser.replace(':id', params)
			),
		activateUser: (params: string) =>
			httpClients.put(httpEndPoints.users.activateUser.replace(':id', params)),
		deleteUser: (params: string) =>
			httpClients.delete(
				httpEndPoints.users.deactivateUser.replace(':id', params)
			),
		createJob: (data: any) =>
			httpClients.post(httpEndPoints.jobs.create, data, {}),

		getAllApplications: () =>
			httpClients.get(httpEndPoints.applications.getAllApplications),
		getApplicationByJob: (params: string) =>
			httpClients.get(
				httpEndPoints.applications.getApplicationsByJob.replace(
					':jobId',
					params
				)
			),
		updateApplicationStatus: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.updateApplicationStatus.replace(
					':id',
					params
				),
				data
			),
		scheduleInterview: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.scheduleInterview.replace(':id', params),
				data
			),
		reScheduleInterview: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.reScheduleInterview.replace(':id', params),
				data
			),
		sendOffer: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.sendOffer.replace(':id', params),
				data
			),
		verifyDocument: (params: string, data: any) =>
			httpClients.put(
				httpEndPoints.applications.verifyDocument.replace(':id', params),
				data
			),
		onboard: (params: string) =>
			httpClients.put(
				httpEndPoints.applications.verifyDocument.replace(':id', params)
			),
	};
}

export default new Client();
