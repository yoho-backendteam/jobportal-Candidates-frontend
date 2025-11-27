import type { AppDispatch } from "../../../store/store";
import { getOfferServices } from "../services";
import { getOffer } from "./Slice";


export const getOfferThunks = (id: string, data: any) => 
  async (dispatch: AppDispatch) => {
    try {
        const response = await getOfferServices(id, data); 
        dispatch(getOffer(response)); 
        console.log("Get Offer Thunk Response", response);
        return response;
    } catch (error) {
        console.log("Error in getOfferThunks", error);
        return error;
    }
};