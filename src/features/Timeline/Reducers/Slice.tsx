import { createSlice } from '@reduxjs/toolkit';

const ApplicationSlice = createSlice({
	name: 'Timeline',
	initialState: {
		data: []},
	reducers: {
		getTimelineslice: (state, action) => {
			state.data = action.payload;
		},
   
	},
});

export const { getTimelineslice} = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
