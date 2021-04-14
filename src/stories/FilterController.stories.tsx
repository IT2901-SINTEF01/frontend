import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FilterController from '../components/molecules/FilterController';

export default {
    title: 'Filter/Search and filter',
    component: FilterController,
} as Meta;

const Template: Story = () => <FilterController />;

export const Primary = Template.bind({});
Primary.storyName = 'Search and filter';
