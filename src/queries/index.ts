import { MetApiCompactAirTemperature, WEATHER_MET_API } from './metApi';
import { POPULATION_IN_NORWAY, PopulationInNorway } from './populationInNorway';
import { DocumentNode } from '@apollo/client';
import { DataSourceID } from '../types/DataSource';

export type RawQueryDataTypes = MetApiCompactAirTemperature | PopulationInNorway;

export default {
    [DataSourceID.MET_API_FORECAST]: WEATHER_MET_API,
    [DataSourceID.SSB_POPULATION]: POPULATION_IN_NORWAY,
} as Record<DataSourceID, DocumentNode>;
