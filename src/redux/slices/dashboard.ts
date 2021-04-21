import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';
import { v4 as uuidv4 } from 'uuid';

export default createSlice({
    name: 'Dashboard Items',
    initialState: {} as Record<string, DashboardVisualisation>,
    reducers: {
        add: (state, action: PayloadAction<DashboardVisualisation>) => {
            const key = uuidv4();
            state[key] = {
                ...action.payload,
            };
        },
        remove: (state, action: PayloadAction<string>) => {
            const key = action.payload;
            if (state[key]) {
                delete state[key];
            }
        },
        update: (state, action: PayloadAction<DashboardVisualisation>) => {
            const key = action.payload.id ?? '';
            if (state[key]) {
                state[key] = action.payload;
            }
        },
    },
});
