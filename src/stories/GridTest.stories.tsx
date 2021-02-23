import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import GridTest from '../components/molecules/GirdTest';

export default {
    title: 'Component/GridTest',
    component: GridTest,
} as Meta;

export const Primary: React.VFC<any> = () => <GridTest />;
