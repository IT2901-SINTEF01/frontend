import React, { useEffect } from 'react';
import { ApolloClient, ApolloProvider, useReactiveVar } from '@apollo/client';
import { cache, dashboardItemsVar, updateLocalstorage } from './cache';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import DataExplorer from './components/pages/DataExplorer';
import VisualisationEditor from './components/pages/VisualisationEditor';
import NotFound from './components/pages/NotFound';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache,
});

const App: React.FC = () => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    useEffect(() => {
        updateLocalstorage(dashboardItems);
    }, [dashboardItems]);

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/explore/edit/:id" component={VisualisationEditor} />
                    <Route exact path="/explore" component={DataExplorer} />
                    <Route exact path="/" component={Dashboard} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
