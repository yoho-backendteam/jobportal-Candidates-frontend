import type { AppDispatch } from "../../../store/store";
import { getTimelineServices } from "../Services";
import { getTimelineslice } from "./Slice";




export const getTimelineThunks = (id: string) => 
  async (dispatch: AppDispatch) => {
    try {
        const response = await getTimelineServices(id); 
        dispatch(getTimelineslice(response)); 
        console.log("Get Timeline Thunk Response", response);
        return response;
    } catch (error) {
        console.log("Error in getTimelineThunks", error);
        return error;
    }
};