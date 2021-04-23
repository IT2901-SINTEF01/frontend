import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import BarChart, { BarChartProps } from '../components/visualisations/BarChart';
import { Story } from '@storybook/react';
import { historicAppleStockPrice } from '../mockdata/appleStock';

export default {
    title: 'Graphs/Bar Chart',
    component: BarChart,
    excludeStories: ['data'],
} as Meta;

const Template: Story<BarChartProps> = (args) => (
    <BarChart barNames={args.barNames} yLabel={args.yLabel} width={args.width} height={args.height} data={args.data} />
);

// export const Primary = Template.bind({});
// Primary.args = {
//     barNames: ['first label', 'secondLabel'],
//     data: [
//         historicAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
//         historicAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
//     ],
//     yLabel: 'Price',
//     height: 400,
//     width: 600,
// };

export const Primary = Template.bind({});
Primary.args = {
    barNames: ['first label', 'secondLabel'],
    data: historicAppleStockPrice.slice(Math.max(historicAppleStockPrice.length - 30, 0)),
    yLabel: 'Price',
    height: 400,
    width: 600,
};
