import { DocumentNode, QueryResult } from '@apollo/client';

export enum DataSourceID {
    SSB_POPULATION = 'SSB_POPULATION',
    MET_API_FORECAST = 'MET_API',
}

export interface IDataSource<Output, Variables> {
    dataSourceId: DataSourceID;
    graphQLQuery: DocumentNode;

    useQuery(variables: Variables): QueryResult<Output, Variables>;
}
