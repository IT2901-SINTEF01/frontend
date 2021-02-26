import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemLarge from '../components/molecules/DashboardItemLarge';
import { DashboardItemLarge as DashboardItemLargeT } from '../types/DashboardItem';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';

const Template: Story<DashboardItemLargeT> = (args) => (
    <DashboardItemLarge {...args}>
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
    </DashboardItemLarge>
);

export const Large = Template.bind({});
Large.args = {
    title: 'This is a title',
    width: 1000,
    height: 300,
    titleSize: 500,
    paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textSize: 300,
};

export default {
    title: 'Dashboard/Item',
    component: Large,
    argTypes: {
        width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
        height: { control: { type: 'range', min: 100, max: 1800, step: 10 } },
        titleSize: { control: { type: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] } },
        textSize: { control: { type: 'select', options: [300, 400, 500] } },
    },
} as Meta;
