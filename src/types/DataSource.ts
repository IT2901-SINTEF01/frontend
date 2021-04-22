import { SSBPopulationVariables } from '../queries/populationInNorway';
import { MetAPIVariables } from '../queries/metApi';

export enum DataSourceID {
    SSB_POPULATION = 'SSB_POPULATION',
    MET_API_FORECAST = 'MET_API',
}

export const defaultVariables: Record<DataSourceID, DataSourceVariables> = {
    [DataSourceID.SSB_POPULATION]: {
        municipalities: ['K-0301'],
    },
    [DataSourceID.MET_API_FORECAST]: {
        lat: 63,
        lon: 11,
    },
};

/**
 * Main exports
 */
export type DataSourceVariables = SSBPopulationVariables | MetAPIVariables;
