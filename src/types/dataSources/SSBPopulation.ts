import { DataSourceID, IDataSource } from './DataSource';
import { QueryResult, useQuery as _useQuery } from '@apollo/client';
import { POPULATION_IN_NORWAY, PopulationInNorway } from '../../queries/populationInNorway';

type SSBPopulationVariables = {
    years: Array<string>;
    municipalities: Array<string>;
};

export class SSBPopulationDataSource implements IDataSource<PopulationInNorway, SSBPopulationVariables> {
    graphQLQuery = POPULATION_IN_NORWAY;
    dataSourceId = DataSourceID.SSB_POPULATION;

    useQuery(variables: SSBPopulationVariables): QueryResult<PopulationInNorway, SSBPopulationVariables> {
        return _useQuery(this.graphQLQuery, {
            variables,
        });
    }
}
