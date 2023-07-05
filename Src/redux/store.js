import { configureStore } from '@reduxjs/toolkit';
import coinReducer from '../redux/market/coinSlice';
import cardReducers from '../redux/market/coinSlice2'

export const store = configureStore({
    reducer: {
        coin: coinReducer,
        name: cardReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});
