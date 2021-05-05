import React from 'react';
import { Badge, Heading, Link, Pane, Strong, Text } from 'evergreen-ui';
import { formatDistanceToNow, formatISO, isEqual, parseISO } from 'date-fns';

type DatasetInfoBoxProps = {
    title: string;
    description: string;
    tags: string[];
    url: string;
    updated: string;
    published: string;
};

const DatasetInfoBox: React.FC<DatasetInfoBoxProps> = ({ title, description, tags, url, updated, published }) => {
    let updatedDate: Date;
    let publishedDate: Date;

    try {
        updatedDate = new Date(updated);
        publishedDate = new Date(published);
    } catch (e) {
        updatedDate = parseISO(updated);
        publishedDate = parseISO(published);
    }

    const Published: React.FC = () => {
        return (
            <Text title={`Publisert: ${formatISO(publishedDate)}`} size={300} marginTop="0.15rem">
                Publisert: <Strong size={300}>{formatDistanceToNow(publishedDate, { addSuffix: true })}</Strong>
            </Text>
        );
    };

    const LastUpdated: React.FC = () => {
        return (
            <Text
                title={`Publisert: ${formatISO(publishedDate)}, Sist oppdatert: ${formatISO(updatedDate)}`}
                size={300}
                marginTop="0.15rem"
            >
                Sist oppdatert: <Strong size={300}>{formatDistanceToNow(updatedDate, { addSuffix: true })}</Strong>
            </Text>
        );
    };

    const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column">
            <Heading size={600} marginBottom="1rem">
                {title}
            </Heading>
            <Text overflow="auto" display="block">
                {description}
            </Text>
            <Pane display="flex" flexWrap="wrap" marginBottom="1.5rem">
                {tags.map((tag) => (
                    <Badge
                        key={tag}
                        color="neutral"
                        marginRight="1rem"
                        marginTop="0.5rem"
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
                <Pane>
                    <Text size={300}>Kilde: </Text>
                    <Link href={url} target="_blank" onClick={handleLinkClick} size={300}>
                        {url}
                    </Link>
                </Pane>
                {isEqual(updatedDate, publishedDate) ? <Published /> : <LastUpdated />}
            </Pane>
        </Pane>
    );
};

export default DatasetInfoBox;
