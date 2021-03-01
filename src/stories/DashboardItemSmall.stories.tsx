import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemSmall, { DashboardItemSmallProps } from '../components/molecules/DashboardItemSmall';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';

const Template: Story<DashboardItemSmallProps> = (args) => (
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

export default {
    title: 'Dashboard/Item/Small',
    component: Small,
    args: {
        title: 'This is a title',
        width: 500,
        height: 300,
        titleSize: 500,
    },
    argTypes: {
        width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
        height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
        titleSize: { control: { type: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] } },
    },
} as Meta;
