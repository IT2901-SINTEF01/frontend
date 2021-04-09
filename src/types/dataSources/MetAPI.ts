import { IDataSource, DataSourceID } from './DataSource';
import { MetApiCompactAirTemperature, WEATHER_MET_API } from '../../queries/metApi';
import { QueryResult, useQuery as _useQuery } from '@apollo/client';

type MetAPIVariables = {
    lat: number;
    lon: number;
};

export class MetAPIDataSource implements IDataSource<MetApiCompactAirTemperature, MetAPIVariables> {
    graphQLQuery = WEATHER_MET_API;
    dataSourceId = DataSourceID.MET_API_FORECAST;

    useQuery(variables: MetAPIVariables): QueryResult<MetApiCompactAirTemperature, MetAPIVariables> {
        return _useQuery(this.graphQLQuery, {
            variables,
        });
    }
}
