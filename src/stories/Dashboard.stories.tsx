import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Dashboard from '../components/organisms/Dashboard';

export default {
    title: 'Dashboard/Dashboard',
    component: Dashboard,
} as Meta;

const Template: Story = () => <Dashboard />;

export const Primary = Template.bind({});
Primary.storyName = 'Visualisation Dashboard';
