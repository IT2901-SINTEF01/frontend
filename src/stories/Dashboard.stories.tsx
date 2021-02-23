import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Dashboard, { DashboardProps } from '../components/organisms/Dashboard';

export default {
    title: 'Component/Dashboard',
    component: Dashboard,
} as Meta;

export const generateRandomList = (size: number) => {
    const result: string[] = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0) result.push('small');
        else if (randomNum === 1) result.push('medium');
        else result.push('large');
    }
    return result;
};

export const Primary: React.VFC<DashboardProps> = () => <Dashboard items={generateRandomList(3)} />;
