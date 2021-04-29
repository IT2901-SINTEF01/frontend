import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import BarChart, { BarChartProps } from '../components/visualisations/BarChart';
import { Story } from '@storybook/react';
import mockCartesianChartInput from '../mockdata/mockCartesianChartInput';
import { VisualisationType } from '../types/Metadata';

export default {
    title: 'Graphs/Bar Chart',
    component: BarChart,
    excludeStories: ['data'],
} as Meta;

const Template: Story<BarChartProps> = (args) => (
    <BarChart yLabel={args.yLabel} width={args.width} height={args.height} data={args.data} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: [
        ...mockCartesianChartInput(20, VisualisationType.LINE),
        ...mockCartesianChartInput(20, VisualisationType.LINE),
    ],
    yLabel: 'Price',
    height: 400,
    width: 600,
};
