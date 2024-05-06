import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import ResponsiveSlice from './slices/ResponsiveSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        responsive: ResponsiveSlice,
    },
});
// store đại diện cho redux
