import { InMemoryCache, makeVar } from '@apollo/client';
import { Visualisation } from '../types/visualisations';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                dashboardItems: {
                    read() {
                        return dashboardItemsVar();
                    },
                },
            },
        },
    },
});

export const dashboardItemsVar = makeVar<Visualisation[]>([]);
