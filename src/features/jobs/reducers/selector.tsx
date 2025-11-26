import type { RootState } from '../../../store/store';

export const selectAlljobs = (state: RootState) =>
	state.jobsReducer.jobs;
export const selectedjob = (state: RootState) =>
	state.jobsReducer.selectedjob;
