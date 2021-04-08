import React from 'react';
import DataWrapper from '../../components/molecules/DataWrapper';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChartEntry } from '../../types/visualisation';
import dataSourceMappings, { DataSourceID } from '../../utils/dataSourceMappings';

const client = new ApolloClient({
    uri: process.env.AZURE_GRAPHQL_URI,
    cache: new InMemoryCache({}),
});

type VisualiserWrapperProps = {
    children: (data: ChartEntry[]) => JSX.Element;
    dataSource: DataSourceID;
};

const VisualiserWrapper: React.FC<VisualiserWrapperProps> = ({ children, dataSource }) => {
    return (
        <ApolloProvider client={client}>
            <DataWrapper
                mappingFunction={dataSourceMappings[dataSource].mapping}
                query={dataSourceMappings[dataSource].query}
            >
                {(data) => children(data)}
            </DataWrapper>
        </ApolloProvider>
    );
};

export default VisualiserWrapper;
