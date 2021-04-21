import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FilterController from '../components/molecules/FilterController';

export default {
    title: 'Filter',
    component: FilterController,
} as Meta;

const MockFilterController: React.FC = () => {
    const [state, setState] = useState<string[]>([]);
    return <FilterController size={'20rem'} activeFilters={state} setActiveFilters={setState} />;
};

const Template: Story = () => <MockFilterController />;

export const Primary = Template.bind({});
Primary.storyName = 'Tag Filter';
