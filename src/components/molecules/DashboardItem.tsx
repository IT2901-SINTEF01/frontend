import React from 'react';
import { Card, EditIcon, Heading, IconButton, Pane, Paragraph, TrashIcon } from 'evergreen-ui';

export type DashboardItemProps = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
    paragraph?: string;
    textSize?: 300 | 400 | 500;
    onEdit?: () => void;
    onDelete?: () => void;
};

const DashboardItem: React.FC<DashboardItemProps> = ({
    title,
    width,
    paragraph,
    height,
    titleSize,
    textSize = 300,
    onEdit,
    onDelete,
    children,
}) => {
    if (paragraph) {
        return (
            <Card
                width={width}
                height={height}
                border="default"
                elevation={1}
                padding="1rem"
                paddingBottom="0"
                display="flex"
            >
                <Pane width="20%" display="flex" flexDirection="column" paddingBottom="1em">
                    <Heading size={titleSize} marginBottom="0.5rem">
                        {title}
                    </Heading>
                    <Paragraph size={textSize} wordWrap="break-word" whiteSpace="pre-wrap" wordBreak="break-all">
                        {paragraph}
                    </Paragraph>
                    <Pane marginTop="auto">
                        <IconButton onClick={onEdit} appearance="minimal" icon={EditIcon} display="inline-block" />
                        <IconButton
                            onClick={onDelete}
                            appearance="minimal"
                            icon={TrashIcon}
                            display="inline-block"
                            intent="danger"
                        />
                    </Pane>
                </Pane>
                <Pane height="100%" width="80%">
                    {children}
                </Pane>
            </Card>
        );
    }

    return (
        <Card width={width} height={height} border="default" elevation={1} padding="1rem">
            <Pane display="flex">
                <Heading size={titleSize} marginBottom="0.5em">
                    {title}
                </Heading>
                <Pane marginLeft="auto">
                    <IconButton onClick={onEdit} appearance="minimal" icon={EditIcon} display="inline-block" />
                    <IconButton
                        onClick={onDelete}
                        appearance="minimal"
                        icon={TrashIcon}
                        display="inline-block"
                        intent="danger"
                    />
                </Pane>
            </Pane>
            <Pane height="90%" width="100%">
                {children}
            </Pane>
        </Card>
    );
};

export default DashboardItem;
