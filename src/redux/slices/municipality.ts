import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MunicipalityState {
    selected: string;
}

const initialState: MunicipalityState = {
    selected: 'K-3449',
};

export default createSlice({
    name: 'Selected Municipality',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.selected = action.payload;
        },
        update: (state, action: PayloadAction<string>) => {
            state.selected = action.payload;
        },
        remove: (state) => {
            if (state) {
                state.selected = '';
            }
        },
    },
});
