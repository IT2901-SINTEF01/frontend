import React from 'react';
import { Card, Heading, Pane } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';
import { VisualisationType } from '../../types/Metadata';
import MockedVisualisation from './MockedVisualisation';

export type DataResultItemProps = {
    visualisationType: VisualisationType;
    title: string;
    description: string;
    tags: string[];
};

const DataResultItem: React.FC<DataResultItemProps> = ({ title, description, tags, visualisationType }) => (
    <Card
        width="100%"
        height="20rem"
        elevation={1}
        display="flex"
        padding="1.5rem"
        role="button"
        aria-pressed="false"
        aria-label={`Gå til visualiseringsvelger for ${title}.`}
    >
        <Pane flex="1" marginRight="2rem">
            <DatasetInfoBox title={title} description={description} tags={tags} />
        </Pane>
        <Pane flex="2">
            <Heading marginBottom="1rem">Forslag til visualisering</Heading>
            <MockedVisualisation visualisationType={visualisationType} height="90%" width="100%" />
        </Pane>
    </Card>
);
export default DataResultItem;
