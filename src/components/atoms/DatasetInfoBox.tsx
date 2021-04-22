import React from 'react';
import { Pane, Heading, Text, Badge, Link, Strong } from 'evergreen-ui';
import { format, formatDistanceToNow, isEqual } from 'date-fns';

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

    const Published: React.FC = () => {
        return (
            <Text title={`Published: ${format(publishedDate, 'dd/MM/yyyy;HH:mm')}`} size={300} marginTop="0.15rem">
                Published: <Strong size={300}>{formatDistanceToNow(publishedDate, { addSuffix: true })}</Strong>
            </Text>
        );
    };

    const LastUpdated: React.FC = () => {
        return (
            <Text
                title={`Published: ${format(publishedDate, 'dd/MM/yyyy;HH:mm')}, Updated: ${format(
                    updatedDate,
                    'dd/MM/yyyy;HH:mm',
                )}`}
                size={300}
                marginTop="0.15rem"
            >
                Last updated: <Strong size={300}>{formatDistanceToNow(updatedDate, { addSuffix: true })}</Strong>
            </Text>
        );
    };

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column">
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
            <Pane marginTop="auto" display="flex" flexDirection="column">
                    <Text size={300}>Origin: </Text>
                        {url}
                    </Link>
                </Text>
                {isEqual(updatedDate, publishedDate) ? <Published /> : <LastUpdated />}
            </Pane>
        </Pane>
    );
};

export default DatasetInfoBox;
