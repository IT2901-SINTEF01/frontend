import React from 'react';
import { Card, Pane, Heading } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';

export type DataResultItemProps = {
    title: string;
    description: string;
    tags: string[];
};

const DataResultItem: React.FC<DataResultItemProps> = ({ title, description, tags }) => {
    const handleOnClick = () => {
        return 0; //Will route to data customise page later.
    };

    return (
        <Card width="100%" height="20rem" elevation={1} display="flex" onClick={handleOnClick}>
            <Pane flex="1" padding="1rem">
                <DatasetInfoBox title={title} description={description} tags={tags} />
            </Pane>
            <Pane flex="2">
                <Heading>Forslag til visualisering</Heading>
                {/* The template graph will go here */}
            </Pane>
        </Card>
    );
};

export default DataResultItem;
