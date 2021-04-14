import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ThresholdChart, { ThresholdChartProps } from '../components/visualisations/ThresholdChart';
import { Story } from '@storybook/react';
import { historicAppleStockPrice, numericAppleStockPrice } from '../mockdata/appleStock';

export default {
    title: 'Graphs/Threshold chart',
    component: ThresholdChart,
    excludeStories: ['data'],
} as Meta;

const Template: Story<ThresholdChartProps> = (args) => (
    <ThresholdChart data={args.data} thresholdValue={args.thresholdValue} yLabel={args.yLabel} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: historicAppleStockPrice,
    yLabel: 'Price',
    thresholdValue: 150,
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: numericAppleStockPrice,
    yLabel: 'Price',
    thresholdValue: 150,
};

Primary.argTypes = {
    width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
    thresholdValue: { control: { type: 'range', min: 10, max: 400, step: 5 } },
    aboveThresholdColor: { control: 'color' },
    belowThresholdColor: { control: 'color' },
    background: { control: 'color' },
    data: { table: { disable: true } },
    margin: { table: { disable: true } },
};

Secondary.argTypes = Primary.argTypes;

Primary.storyName = 'With dates';
Secondary.storyName = 'With numbers';
