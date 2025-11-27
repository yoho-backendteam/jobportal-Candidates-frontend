import { createSlice } from '@reduxjs/toolkit';

const ApplicationSlice = createSlice({
	name: 'Offer',
	initialState: {
		data: []},
	reducers: {
		getOffer: (state, action) => {
			state.data = action.payload;
		},
   
	},
});

export const { getOffer} = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
