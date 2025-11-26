import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducers/Slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;

// store.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
