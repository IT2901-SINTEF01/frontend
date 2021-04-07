import React from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/organisms/Dashboard';
import DataExplorer from './components/organisms/DataExplorer';
import VisualisationEditor from './components/organisms/VisualisationEditor';
import NotFound from './components/organisms/NotFound';
import { GoogleAPIProvider } from 'reactive-atlas';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache,
});

const App: React.FC = () => {
    return (
        <GoogleAPIProvider apiKey={process.env.REACT_APP_ATLAS_KEY ?? ''}>
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
        </GoogleAPIProvider>
    );
};

export default App;
