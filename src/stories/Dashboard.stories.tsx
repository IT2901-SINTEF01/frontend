import React from 'react';

import { generateRandomList } from '../utils/dashboardList';

import { Meta, Story } from '@storybook/react/types-6-0';
import Dashboard from '../components/organisms/Dashboard';

export const Primary: Story<{ numberOfItems: number }> = ({ numberOfItems }) => (
    <Dashboard items={generateRandomList(numberOfItems)} />
);

export default {
    title: 'Component/Dashboard',
    component: Primary,
    args: {
        numberOfItems: 10,
    },
    argTypes: {
        numberOfItems: {
            control: {
                type: 'range',
                min: 1,
                max: 20,
                step: 1,
            },
        },
    },
} as Meta;
