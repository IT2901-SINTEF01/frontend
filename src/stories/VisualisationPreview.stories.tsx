import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import VisualisationPreview from '../components/molecules/VisualisationPreview';
import { makeMetadata } from '../mockdata/mocks';

export default {
    title: 'VisualisationEditor/Visualisation preview',
    component: VisualisationPreview,
} as Meta;

const metadata = makeMetadata()[0];

const Template: Story = () => <VisualisationPreview metadata={metadata} />;

export const Primary = Template.bind({});
Primary.storyName = 'Visualisation preview';
