import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache({}),
});

export const VisualiserProvider: React.FC = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
