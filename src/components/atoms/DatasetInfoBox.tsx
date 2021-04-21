import React from 'react';
import { Pane, Heading, Text, Badge, Link, Strong } from 'evergreen-ui';

type DatasetInfoBoxProps = {
    title: string;
    description: string;
    tags: string[];
    url: string;
    updated: string;
    published: string;
};

const DatasetInfoBox: React.FC<DatasetInfoBoxProps> = ({ title, description, tags, url, updated, published }) => {
    const updatedDate = new Date(updated);
    const publishedDate = new Date(published);

    return (
        <Pane width="100%" height="100%">
            <Heading size={600} marginBottom="1rem">
                {title}
            </Heading>
            <Text overflow="auto" display="block">
                {description}
            </Text>
            <Pane display="flex" flexWrap="wrap">
                {tags.map((tag) => (
                    <Badge
                        key={tag}
                        color="neutral"
                        marginRight="1rem"
                        marginTop="1rem"
                        overflow="hidden"
                        wordWrap="break-word"
                        whiteSpace="pre-wrap"
                        wordBreak="break-all"
                    >
                        {tag}
                    </Badge>
                ))}
            </Pane>
            <Pane marginTop="1rem" display="flex" flexDirection="column">
                <Text size={300}>
                    URL: <Link size={300}>{url}</Link>
                </Text>
                <Text size={300} marginTop="0.15rem">
                    Last updated:{' '}
                    <Strong size={300}>
                        {`${updatedDate.getDate()}.${updatedDate.getMonth() + 1}.${updatedDate.getFullYear()}`}
                    </Strong>
                </Text>
                <Text size={300} marginTop="0.15rem">
                    Published:{' '}
                    <Strong size={300}>{`${publishedDate.getDate()}.${
                        publishedDate.getMonth() + 1
                    }.${publishedDate.getFullYear()}`}</Strong>
                </Text>
            </Pane>
        </Pane>
    );
};

export default DatasetInfoBox;
