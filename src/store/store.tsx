import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layout';

export const store = configureStore( {
    reducer: {
        layout: layoutReducer,
    },
} );

export type AppDispatch = typeof store.dispatch;
export type RootState   = ReturnType<typeof store.getState>;