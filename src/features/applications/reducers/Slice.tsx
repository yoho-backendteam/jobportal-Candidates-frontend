import { createSlice } from '@reduxjs/toolkit';

const ApplicationSlice = createSlice({
	name: 'ApplicationSlice',
	initialState: {
		applications: [],
    selectedapplication:[]
	},
	reducers: {
		getAllapplications: (state, action) => {
			state.applications = action.payload;
		},
    getselectedapplication:(state,action)=>{
      state.selectedapplication=action.payload
    }
	},
});

export const { getAllapplications , getselectedapplication} = ApplicationSlice.actions;
export default ApplicationSlice.reducer;