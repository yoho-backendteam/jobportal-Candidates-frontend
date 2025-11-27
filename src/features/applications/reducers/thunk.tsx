import type { AppDispatch } from '../../../store/store';
import { getAllapplicationService, getselectedapplicationService } from '../service/Service';
import { getAllapplications, getselectedapplication } from './Slice';

export const getAllapplicationThunk = () => async (dispatch: AppDispatch) => {
	try {
		const response = await getAllapplicationService();
		if (response) {
			dispatch(getAllapplications(response?.data));
		}
	} catch (error) {
		return error;
	}
};
export const getSelectedapplicationThunk = (id:any) => async (dispatch: AppDispatch) => {
	try {
		const response = await getselectedapplicationService(id);
		if (response) {
			dispatch(getselectedapplication(response?.data));
		}
	} catch (error) {
		return error;
	}
};