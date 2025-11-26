const httpEndPoints = {
	//users
	users: {
		//common(candidate & hr)
		login: 'api/users/login',
		register: 'api/users/register',
		profile: 'api/users/profile',
		change_password: 'api/users/change-password',
		verify_otp: 'api/otp/verify-otp',
		resend_otp: 'api/otp/resend-otp',
		reset_password: 'api/otp/reset-password',
		send_otp: 'api/otp/send-verification',

		//(hr only)
		getAllUsers: 'api/users',
		getAllCandidates: 'api/users/candidates',
		getUserById: 'api/users/:id',
		deactivateUser: 'api/users/deactivate/:id',
		activateUser: 'api/users/activate/:id',
		deleteUser: 'api/users/:id',
	},

	//jobs
	jobs: {
		create: 'api/jobs',
		getAll: 'api/jobs',
		getById: 'api/jobs/:id',
	},

	//applications
	applications: {
		//candidate
		create: 'api/applications',
		getApplications: 'api/applications/my-applications',
		getById: 'api/applications/:id',
		update: 'api/applications/:id',
		delete: 'api/applications/:id',
		updateOffer: 'api/applications/:id/offer-status',
		updateDocument: 'api/applications/:id/update-document',
		uploadDocuments: 'api/applications/:id/upload-documents',
		applicationTimeline: 'api/applications/:id/timeline',

		//hr
		getAllApplications: 'api/applications',
		getApplicationsByJob: 'api/applications/job/:jobId',
		updateApplicationStatus: 'api/appications/:id/status',
		scheduleInterview: 'api/applications/:id/schedule-interview',
		reScheduleInterview: 'api/applications/:id/reschedule-interview',
		sendOffer: 'api/applications/:id/send-offer',
		verifyDocument: 'api/applications/:id/verify-document',
		onboard: 'api/applications/:id/onboard',
	},
};

export default httpEndPoints;
