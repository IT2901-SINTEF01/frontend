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

export const updateLocalstorage = (saveData: DashboardItemInfo[]): void => {
    window.localStorage.setItem('dashboard', JSON.stringify(saveData));
};

const storage = window.localStorage.getItem('dashboard');
const initValue: DashboardItemInfo[] = storage ? JSON.parse(storage) : [];
export const dashboardItemsVar = makeVar<DashboardItemInfo[]>(initValue);
export const dashboardItemsVar = makeVar<Visualisation[]>([]);
