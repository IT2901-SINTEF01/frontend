import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import LineChart, { LineChartProps } from '../components/visualisations/LineChart';
import { Story } from '@storybook/react';
import { historicAppleStockPrice, numericAppleStockPrice } from '../mockdata/appleStock';

export default {
    title: 'Graphs/Line chart',
    component: LineChart,
    excludeStories: ['data'],
} as Meta;

const Template: Story<LineChartProps> = (args) => (
    <LineChart
        data={args.data}
        yLabel={args.yLabel}
        strokeColor={args.strokeColor}
        width={args.width}
        height={args.height}
    />
);

export const Primary = Template.bind({});
Primary.args = {
    data: historicAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
    yLabel: 'Price',
    strokeColor: '#222',
    height: 400,
    width: 600,
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: numericAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
    yLabel: 'Some value',
    strokeColor: '#222',
    height: 400,
    width: 600,
};

Primary.argTypes = {
    width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
    strokeColor: { control: 'color' },
    data: { table: { disable: true } },
};

Secondary.argTypes = Primary.argTypes;

Primary.storyName = 'With dates';
Secondary.storyName = 'With numbers';
