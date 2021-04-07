import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DataResultItem, { DataResultItemProps } from '../components/molecules/DataResultItem';
import { VisualisationType } from '../types/Metadata';

export default {
    title: 'DataExplorer/Result item',
    component: DataResultItem,
} as Meta;

const Template: Story<DataResultItemProps> = (args) => <DataResultItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is a title',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Energi', 'Miljø', 'Helse', 'Pils', 'Raketter'],
    visualisationType: VisualisationType.THRESHOLD, // 'thresholdchart',
};
Primary.argTypes = {
    tags: { control: { type: 'array' } },
    visualisationType: {
        control: { type: 'select', options: ['barchart', 'thresholdchart', 'piechart', 'linechart'] },
    },
};

Primary.storyName = 'Result item';
