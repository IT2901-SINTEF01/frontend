import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import LineChart, { LineChartProps } from '../components/atoms/LineChart';
import { Story } from '@storybook/react';
import { appleStock } from '@visx/mock-data';

export default {
    title: 'Graphs/Line chart',
    component: LineChart,
    excludeStories: ['data'],
} as Meta;

export const data = appleStock.map(({ date, close }) => ({ time: date, value: close }));

const Template: Story<LineChartProps> = (args) => (
    <LineChart
        data={data}
        width={args.width}
        background={args.background}
        height={args.height}
        yLabel={args.yLabel}
        strokeColor={args.strokeColor}
        colorBottom={args.colorBottom}
    />
);

export const Primary = Template.bind({});
Primary.args = {
    width: 600,
    height: 400,
    yLabel: 'Price',
    background: '#fff',
    strokeColor: '#222',
    colorBottom: '#BF55EC',
};
Primary.argTypes = {
    width: { control: { type: 'range', min: 100, max: 1200, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1600, step: 10 } },
    background: { control: 'color' },
    strokeColor: { control: 'color' },
    colorBottom: { control: 'color' },
    data: { table: { disable: true } },
    margin: { table: { disable: true } },
};

Primary.storyName = 'Line chart';
