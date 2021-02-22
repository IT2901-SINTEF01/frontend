import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemSmall from '../components/molecules/DashboardItemSmall';
import { DashboardItemSmallType } from '../dataTypes/DashboardItems/DashboardItemSmallType';

const Template: Story<DashboardItemSmallType> = (args) => <DashboardItemSmall {...args} />;

export default {
    title: 'Dashboard Item Small',
    component: DashboardItemSmall,
};
