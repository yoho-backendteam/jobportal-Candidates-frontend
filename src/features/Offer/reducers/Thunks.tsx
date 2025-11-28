import type { AppDispatch } from "../../../store/store";
import { getOfferServices } from "../services";
import { getOffer } from "./Slice";


export const getOfferThunks = (id: string, data: any) => 
  async (dispatch: AppDispatch) => {
    try {
        const response = await getOfferServices(id, data); 
        dispatch(getOffer(response)); 
        return response;
    } catch (error) {
        console.error("Error in getOfferThunks", error);
        return error;
    }
};