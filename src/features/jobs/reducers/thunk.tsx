import type { AppDispatch } from '../../../store/store';
import { getAlljobsService, getselectedjobService } from '../service/Service';
import { getAlljobs, getselectedjob } from './Slice';

export const getAlljobsThunk = () => async (dispatch: AppDispatch) => {
	try {
		const response = await getAlljobsService();
		if (response) {
			dispatch(getAlljobs(response?.data));
		}
	} catch (error) {
		return error;
	}
};
export const getSelectedjobThunk = (id:any) => async (dispatch: AppDispatch) => {
	try {
		const response = await getselectedjobService(id);
		if (response) {
			dispatch(getselectedjob(response?.data));
		}
	} catch (error) {
		return error;
	}
};
