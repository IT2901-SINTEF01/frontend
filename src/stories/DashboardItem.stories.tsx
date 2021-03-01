import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DashboardItem, { DashboardItemProps } from '../components/molecules/DashboardItem';
import { AppleData as ThresholdChart, appleData } from './ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';

export default {
    title: 'Dashboard/Item',
    component: DashboardItem,
} as Meta;

const Template: Story<DashboardItemProps> = (args) => (
    <DashboardItem {...args}>
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
    </DashboardItem>
);

export const Small = Template.bind({});
Small.args = { title: 'This is a title', width: 500, height: 300, titleSize: 500 };
Small.argTypes = {
    width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
    titleSize: { control: { type: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] } },
};

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
Large.argTypes = {
    width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1800, step: 10 } },
    textSize: { control: { type: 'radio', options: [300, 400, 500] } },
    titleSize: { control: { type: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] } },
};
