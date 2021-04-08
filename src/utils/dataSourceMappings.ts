// Needs to be updated manually with the introduction or changing of any data sources.
import { DocumentNode } from '@apollo/client';
import { RawQueryDataTypes } from '../queries';
import {
    metApiCompactAirTemperatureToTimeEntry,
    RawDataMappedReturnValues,
    ssbPopulationInNorwayToTimeEntry,
} from './mappingFunctions';
import { WEATHER_MET_API } from '../queries/metApi';
import { POPULATION_IN_NORWAY } from '../queries/populationInNorway';

export enum DataSourceID {
    SSB_POPULATION = 'SSB_POPULATION',
    MET_API_FORECAST = 'MET_API',
}

export type DataSourceMetaInformation = {
    query: DocumentNode;
    mapping: (rawData: RawQueryDataTypes) => RawDataMappedReturnValues;
};

type DataSourceMapping = Record<DataSourceID, DataSourceMetaInformation>;

export default {
    [DataSourceID.MET_API_FORECAST]: {
        query: WEATHER_MET_API,
        mapping: metApiCompactAirTemperatureToTimeEntry,
    },
    [DataSourceID.SSB_POPULATION]: {
        query: POPULATION_IN_NORWAY,
        mapping: ssbPopulationInNorwayToTimeEntry,
    },
} as DataSourceMapping;
