import { ReactNode } from 'react';

export type DashboardItemLargeType = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
    paragraph: string;
    textSize: 300 | 400 | 500;
    children: ReactNode;
};
