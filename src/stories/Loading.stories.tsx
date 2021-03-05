import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Loading, { LoadingProps } from '../components/atoms/Loading';
import { Story } from '@storybook/react';

export default {
    title: 'Atom/Loading',
    component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading size={args.size} />;

export const Primary = Template.bind({});

Primary.args = { size: 50 };
Primary.argTypes = {
    size: { control: { type: 'range', min: 10, max: 100, step: 1 } },
};
