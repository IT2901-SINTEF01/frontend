// Needs to be updated manually with the introduction or changing of any data sources.
import { DocumentNode } from '@apollo/client';
import { RawQueryDataTypes } from '../queries';
import { metApiCompactAirTemperatureToTimeEntry, RawDataMappedReturnValues } from './mappingFunctions';
import { WEATHER_MET_API } from '../queries/metApi';

export enum DataSourceName {
    SSB_POPULATION = 'Befolkning. Kommuner, pr. 1.1., 1986 - siste år',
    MET_API_FORECAST = 'MetAPI Forecast',
}

type DataSourceMetaInformation = {
    query: DocumentNode;
    mapping: (rawData: RawQueryDataTypes) => RawDataMappedReturnValues;
};

type DataSourceMapping = Record<DataSourceName, DataSourceMetaInformation>;

export default {
    [DataSourceName.MET_API_FORECAST]: {
        query: WEATHER_MET_API,
        mapping: metApiCompactAirTemperatureToTimeEntry,
    },
} as DataSourceMapping;
