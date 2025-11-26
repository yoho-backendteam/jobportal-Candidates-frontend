import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducers/Slice';
import jobsReducer from '../features/jobs/reducers/Slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        jobsReducer:jobsReducer
    },
});

export default store;

// store.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
