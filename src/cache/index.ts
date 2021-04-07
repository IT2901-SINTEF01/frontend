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

const initValue = [];
const storage = window.localStorage.getItem('dashboard');
if (storage) {
    initValue.push(...JSON.parse(storage));
}
export const dashboardItemsVar = makeVar<DashboardItemInfo[]>(initValue);
