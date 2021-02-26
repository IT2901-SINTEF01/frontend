import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemSmall from '../components/molecules/DashboardItemSmall';
import { DashboardItemSmall as DashboardItemSmallTypeT } from '../types/DashboardItem';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';

const Template: Story<DashboardItemSmallTypeT> = (args) => (
    <DashboardItemSmall {...args}>
        <ParentSize>
            {(parent) => (
                <ThresholdChart
                    data={appleData}
                    width={parent.width}
                    height={parent.height}
                    thresholdValue={150}
                    aboveThresholdColor="green"
                    belowThresholdColor="red"
                    yLabel="Price"
                />
            )}
        </ParentSize>
    </DashboardItemSmall>
);

export const Small = Template.bind({});
Small.args = {
    title: 'This is a title',
    width: 500,
    height: 300,
    titleSize: 500,
};

export default {
    title: 'Dashboard/Item',
    component: Small,
    argTypes: {
        width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
        height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
        titleSize: { control: { type: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] } },
    },
} as Meta;
