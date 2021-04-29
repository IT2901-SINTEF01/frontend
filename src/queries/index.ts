import { MetApiCompactAirTemperature, WEATHER_MET_API } from './metApi';
import { POPULATION_IN_NORWAY, PopulationInNorway } from './populationInNorway';
import { TAX_ASSESMENT, TaxAssesment } from './taxInNorway';
import { DocumentNode } from '@apollo/client';
import { DataSourceID } from '../types/DataSource';

export type RawQueryDataTypes = MetApiCompactAirTemperature | PopulationInNorway | TaxAssesment;

export default {
    [DataSourceID.MET_API_FORECAST]: WEATHER_MET_API,
    [DataSourceID.SSB_POPULATION]: POPULATION_IN_NORWAY,
    [DataSourceID.SSB_TAX]: TAX_ASSESMENT,
} as Record<DataSourceID, DocumentNode>;
