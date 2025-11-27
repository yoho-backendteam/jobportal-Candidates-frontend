import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducers/Slice';
import jobsReducer from '../features/jobs/reducers/Slice';
import applicationReducer from '../features/applications/reducers/Slice';
import Offer from "../features/Offer/reducers/Slice"
import Timeline from "../features/Timeline/Reducers/Slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        jobsReducer:jobsReducer,
        applicationReducer:applicationReducer,
        Offer:Offer,
        Timeline:Timeline
    },
});

export default store;

// store.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
