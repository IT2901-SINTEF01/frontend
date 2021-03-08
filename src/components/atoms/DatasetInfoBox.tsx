import React from 'react';
import { Pane, Heading, Text, Badge } from 'evergreen-ui';

type DatasetInfoBoxProps = {
    title: string;
    description: string;
    tags: string[];
};

const DatasetInfoBox: React.FC<DatasetInfoBoxProps> = ({ title, description, tags }) => {
    return (
        <Pane width="100%" height="100%">
            <Heading size={600}>{title}</Heading>
            <Text>{description}</Text>
            <Pane display="flex" flexWrap="wrap">
                {tags.map((tag, index) => (
                    <Badge key={index} color="neutral" marginRight="1rem" marginTop="1rem">
                        {tag}
                    </Badge>
                ))}
            </Pane>
        </Pane>
    );
};

export default DatasetInfoBox;
