import { createSlice } from '@reduxjs/toolkit';

const JoblistSlice = createSlice({
	name: 'JoblistSlice',
	initialState: {
		jobs: [],
    selectedjob:[]
	},
	reducers: {
		getAlljobs: (state, action) => {
			state.jobs = action.payload;
		},
    getselectedjob:(state,action)=>{
      state.selectedjob=action.payload
    }
	},
});

export const { getAlljobs , getselectedjob} = JoblistSlice.actions;
export default JoblistSlice.reducer;
