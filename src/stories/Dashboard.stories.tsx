import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Dashboard from '../components/organisms/Dashboard';
import { DashboardItemSize, DashboardItemInfo, DashboardProps } from '../dataTypes/Dashboard/DashboardTypes';

export default {
    title: 'Component/Dashboard',
    component: Dashboard,
} as Meta;

export const generateRandomList = (size: number) => {
    const result: DashboardItemInfo[] = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * 3);

        if (randomNum === 0) result.push({ size: DashboardItemSize.small, withText: false });
        else if (randomNum === 1) result.push({ size: DashboardItemSize.medium, withText: false });
        else result.push({ size: DashboardItemSize.large, withText: false });
    }
    return result;
};

export const Primary: React.VFC<DashboardProps> = () => <Dashboard items={generateRandomList(10)} />;
