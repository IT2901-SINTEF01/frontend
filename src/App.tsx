import React from 'react';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Dashboard from './components/pages/Dashboard';
import DataExplorer from './components/pages/DataExplorer';
import VisualisationEditor from './components/pages/VisualisationEditor';
import NotFound from './components/pages/NotFound';

import { store } from './redux';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache,
});

const App: React.FC = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
