import { SSBPopulationVariables } from '../queries/populationInNorway';
import { MetAPIVariables } from '../queries/metApi';
import { TaxAssesmentVariables } from '../queries/taxInNorway';

export enum DataSourceID {
    SSB_POPULATION = 'SSB_POPULATION',
    MET_API_FORECAST = 'MET_API',
    SSB_TAX = 'SSB_TAX',
}

export const defaultVariables: Record<DataSourceID, DataSourceVariables> = {
    [DataSourceID.SSB_POPULATION]: {
        municipalities: ['K-0301'],
    },
    [DataSourceID.MET_API_FORECAST]: {
        lat: 63,
        lon: 11,
    },
    SSB_TAX: {
        municipalities: ['0301'],
    },
};

/**
 * Main exports
 */
export type DataSourceVariables = SSBPopulationVariables | MetAPIVariables | TaxAssesmentVariables;
