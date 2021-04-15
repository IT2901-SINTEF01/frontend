import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VisualisationMappingFunctionPath } from '../../utils/visualisationMapping';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';

export default createSlice({
    name: 'Dashboard Items',
    initialState: {} as Record<VisualisationMappingFunctionPath, DashboardVisualisation>,
    reducers: {
        add: (state, action: PayloadAction<DashboardVisualisation>) => {
            const key = `${action.payload.dataSourceId}-${action.payload.visualisationType}` as VisualisationMappingFunctionPath;
            state[key] = action.payload;
        },
        remove: (state, action: PayloadAction<VisualisationMappingFunctionPath>) => {
            if (state[action.payload]) {
                delete state[action.payload];
            }
        },
        update: (state, action: PayloadAction<DashboardVisualisation>) => {
            const key = `${action.payload.dataSourceId}-${action.payload.visualisationType}` as VisualisationMappingFunctionPath;
            if (state[key]) {
                state[key] = action.payload;
            }
        },
    },
});
