import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ErrorMessage, { ErrorMessageProps } from '../components/atoms/ErrorMessage';
import { Story } from '@storybook/react';

export default {
    title: 'Atom/ErrorMessage',
    component: ErrorMessage,
} as Meta;

const Template: Story<ErrorMessageProps> = (args) => (
    <ErrorMessage message={args.message} moreInfo={args.moreInfo} size={args.size} />
);

const sizeControl = { control: { type: 'radio', options: [300, 400, 500, 600] } };

export const Primary = Template.bind({});
Primary.args = { size: 400, message: 'Error message' };
Primary.argTypes = {
    size: sizeControl,
};

export const Secondary = Template.bind({});
Secondary.args = { size: 400, message: 'Error message', moreInfo: 'This is more info about the error' };
Secondary.argTypes = {
    size: sizeControl,
};
