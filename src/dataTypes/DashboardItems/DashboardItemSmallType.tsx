import { ReactNode } from 'react';

export type DashboardItemSmallType = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
    children: ReactNode;
};
