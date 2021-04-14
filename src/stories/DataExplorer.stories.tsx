import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import DataExplorer from '../components/pages/DataExplorer';

export default {
    title: 'DataExplorer',
    component: DataExplorer,
} as Meta;

const Template: Story = () => <DataExplorer />;

export const Primary = Template.bind({});
Primary.storyName = 'Data explorer';
