import type { RootState } from "../../../store/store";

export const selectTimeline = (state: RootState) =>state.Timeline.data;