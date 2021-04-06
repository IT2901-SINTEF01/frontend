import React from 'react';
import { Card, Pane, Heading, Text } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';

export type DataResultItemProps = {
    visualisationType: string;
    title: string;
    description: string;
    tags: string[];
};

const DataResultItem: React.FC<DataResultItemProps> = ({ title, description, tags, visualisationType }) => {
    return (
        <Card
            width="100%"
            height="20rem"
            elevation={1}
            display="flex"
            padding="1rem"
            role="button"
            aria-pressed="false"
            aria-label={`Gå til visualiserings velger for ${title}.`}
        >
            <Pane flex="1" marginRight="2rem">
                <DatasetInfoBox title={title} description={description} tags={tags} />
            </Pane>
            <Pane flex="2">
                <Heading marginBottom="1rem">Forslag til visualisering</Heading>
                {/* The template graph will go here */}
                <Text>{visualisationType}</Text>
            </Pane>
        </Card>
    );
};

export default DataResultItem;
