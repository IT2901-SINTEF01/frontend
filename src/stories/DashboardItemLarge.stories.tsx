import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItemLarge from '../components/molecules/DashboardItemLarge';
import { DashboardItemLargeType } from '../dataTypes/DashboardItems/DashboardItemLargeType';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';

const Template: Story<DashboardItemLargeType> = (args) => <DashboardItemLarge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is a title',
    width: 1000,
    height: 300,
    titleSize: 500,
    paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textSize: 300,
    children: (
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
    ),
};

export default {
    title: 'Dashboard/Dashboard Item Large',
    component: DashboardItemLarge,
} as Meta;
