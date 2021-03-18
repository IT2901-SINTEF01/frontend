import React from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';

import Dashboard from './components/organisms/Dashboard';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache,
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Dashboard />
        </ApolloProvider>
    );
};

export default App;
