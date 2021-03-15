import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import DataResultItem, { DataResultItemProps } from '../components/molecules/DataResultItem';

export default {
    title: 'DataExplorer/Item',
    component: DataResultItem,
} as Meta;

const Template: Story<DataResultItemProps> = (args) => <DataResultItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is an title',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Energi', 'Miljø', 'Helse', 'Pils', 'Raketter'],
};
