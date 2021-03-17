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
    const handleOnClick = () => {
        return 0; //Will route to data customise page later.
    };

    return (
        <Card width="100%" height="20rem" elevation={1} display="flex" onClick={handleOnClick} padding="1rem">
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
