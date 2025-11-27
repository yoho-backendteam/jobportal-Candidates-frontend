import type { AppDispatch } from "../../../store/store";
import { createapplicationservice } from "../service/Service";
import { setApplication } from "./Slice";

export const applyForJobThunk =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await createapplicationservice(data);
      dispatch(setApplication(response));
    } catch (error) {
      console.error("Error applying job:", error);
    }
  };
