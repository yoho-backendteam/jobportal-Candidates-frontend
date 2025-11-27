import type { RootState } from '../../../store/store';

export const selectAllapplication = (state: RootState) => state.applicationReducer.applications;
export const selectedapplication = (state: RootState) => state.applicationReducer.selectedapplication;
