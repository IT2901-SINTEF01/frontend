import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import DataExplorer from '../components/organisms/DataExplorer';

export const Primary: React.FC = () => <DataExplorer />;

export default {
    title: 'Component/DataExplorer',
    component: DataExplorer,
} as Meta;
