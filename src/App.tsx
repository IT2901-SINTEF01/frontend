import React from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/organisms/Dashboard';
import DataExplorer from './components/organisms/DataExplorer';
import NotFound from './components/organisms/NotFound';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache,
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/explore" component={DataExplorer} />
                    <Route exact path="/" component={Dashboard} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
