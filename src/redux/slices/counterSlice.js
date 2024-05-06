import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bientmp: 0,
    value: 10,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.bientmp += 1;
        },
        decrement: (state) => {
            state.bientmp -= 1;
        },
        incrementByAmount: (state, action) => {
            state.bientmp += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// thêm .actions vào giúp định nghĩa các action

export default counterSlice.reducer;
