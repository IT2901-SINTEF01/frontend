import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemSmall from '../components/molecules/DashboardItemSmall';
import { DashboardItemSmallType } from '../dataTypes/DashboardItems/DashboardItemSmallType';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';

const Template: Story<DashboardItemSmallType> = (args) => <DashboardItemSmall {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is a title',
    width: 500,
    height: 300,
    titleSize: 500,
    children: (
        <ThresholdChart
            data={appleData}
            width={400}
            height={200}
            thresholdValue={150}
            aboveThresholdColor="green"
            belowThresholdColor="red"
            yLabel="Price"
        />
    ),
};

export default {
    title: 'Dashboard/Dashboard Item Small',
    component: DashboardItemSmall,
} as Meta;
