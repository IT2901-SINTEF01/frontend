import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Dashboard from '../components/organisms/Dashboard';

export const Primary: React.FC = () => <Dashboard />;

export default {
    title: 'Component/Dashboard',
    component: Dashboard,
} as Meta;
