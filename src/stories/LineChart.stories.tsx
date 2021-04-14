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
    <LineChart data={args.data} yLabel={args.yLabel} strokeColor={args.strokeColor} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: historicAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
    yLabel: 'Price',
    strokeColor: '#222',
};

export const Secondary = Template.bind({});
Secondary.args = {
    data: numericAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
    yLabel: 'Some value',
    strokeColor: '#222',
};

Primary.argTypes = {
    strokeColor: { control: 'color' },
    data: { table: { disable: true } },
    margin: { table: { disable: true } },
};

Secondary.argTypes = Primary.argTypes;

Primary.storyName = 'With dates';
Secondary.storyName = 'With numbers';
