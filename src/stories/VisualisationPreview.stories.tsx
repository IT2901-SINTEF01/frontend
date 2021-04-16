import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import VisualisationPreview from '../components/molecules/VisualisationPreview';
import { makeMetadata } from '../mockdata/mocks';
import { VisualisationType } from '../types/Metadata';
import { DashboardItemSize } from '../types/DashboardVisualisation';

export default {
    title: 'Visualisation editor/Visualisation preview',
    component: VisualisationPreview,
} as Meta;

const Template: Story = () => {
    /**
     * Since the example is using a LINE chart, we need to update the generated visualisation to fit this.
     */
    let metadata = makeMetadata()[0];

    metadata = {
        ...metadata,
        visualisations: metadata.visualisations.map((vis) => ({ ...vis, type: VisualisationType.LINE })),
    };

    return (
        <VisualisationPreview
            metadata={metadata}
            selectedVisualisation={VisualisationType.LINE}
            size={DashboardItemSize.LARGE}
            paragraph={'Welcome to the black parade.'}
        />
    );
};

export const Primary = Template.bind({});
Primary.storyName = 'Visualisation preview';
