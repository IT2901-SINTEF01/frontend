import { InMemoryCache, makeVar } from '@apollo/client';
import { DashboardItemInfo } from '../types/dashboard';

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

export const dashboardItemsVar = makeVar<DashboardItemInfo[]>([]);
