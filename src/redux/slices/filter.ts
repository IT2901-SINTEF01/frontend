import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export default createSlice({
    name: 'Active Filters',
    initialState: {
        filters: [] as string[],
    },
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            if (action.payload && !state.filters.includes(action.payload))
                state.filters = [...state.filters, action.payload];
        },
        remove: (state, action: PayloadAction<string>) => {
            state.filters = state.filters.filter((el) => el !== action.payload);
        },
        reset: (state) => {
            state.filters = [];
        },
    },
});
