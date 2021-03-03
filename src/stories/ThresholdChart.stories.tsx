import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ThresholdChart, { ThresholdChartProps } from '../components/atoms/ThresholdChart';
import { Story } from '@storybook/react';
import { appleStock } from '@visx/mock-data';

export default {
    title: 'Graphs/ThresholdChart',
    component: ThresholdChart,
    excludeStories: ['data'],
} as Meta;

export const data = appleStock.map(({ date, close }) => ({ time: date, value: close }));

const Template: Story<ThresholdChartProps> = (args) => (
    <ThresholdChart
        data={data}
        width={args.width}
        background={args.background}
        height={args.height}
        thresholdValue={args.thresholdValue}
        aboveThresholdColor={args.aboveThresholdColor}
        belowThresholdColor={args.belowThresholdColor}
        yLabel={args.yLabel}
    />
);

export const Primary = Template.bind({});
Primary.args = {
    width: 600,
    height: 400,
    yLabel: 'Price',
    thresholdValue: 150,
    aboveThresholdColor: 'green',
    belowThresholdColor: 'red',
    background: '#fff',
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
