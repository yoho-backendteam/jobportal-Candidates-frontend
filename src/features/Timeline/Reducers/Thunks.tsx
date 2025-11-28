import type { AppDispatch } from "../../../store/store";
import { getTimelineServices } from "../Services";
import { getTimelineslice } from "./Slice";




export const getTimelineThunks = (id: string) => 
  async (dispatch: AppDispatch) => {
    try {
        const response = await getTimelineServices(id); 
        dispatch(getTimelineslice(response)); 
        return response;
    } catch (error) {
        console.error("Error in getTimelineThunks", error);
        return error;
    }
};