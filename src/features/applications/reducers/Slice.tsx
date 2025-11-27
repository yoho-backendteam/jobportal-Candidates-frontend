import { createSlice } from "@reduxjs/toolkit";

const ApplicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState: {
    applications: [],
    selectedapplication: [],
    application: null,
  },
  reducers: {
    getAllapplications: (state, action) => {
      state.applications = action.payload;
    },
    getselectedapplication: (state, action) => {
      state.selectedapplication = action.payload;
    },
    setApplication: (state, action) => {
      state.application = action.payload;
    },
  },
});

export const { getAllapplications, getselectedapplication, setApplication } =
  ApplicationSlice.actions;
export default ApplicationSlice.reducer;
