import React from 'react';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';

export type DashboardItemProps = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
    paragraph?: string;
    textSize?: 300 | 400 | 500;
};

const DashboardItem: React.FC<DashboardItemProps> = ({
    title,
    width,
    paragraph,
    height,
    titleSize,
    textSize = 300,
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
                <Pane width="20%">
                    <Heading size={titleSize} marginBottom="0.5rem">
                        {title}
                    </Heading>
                    <Paragraph size={textSize} wordWrap="break-word" whiteSpace="pre-wrap" wordBreak="break-all">
                        {paragraph}
                    </Paragraph>
                </Pane>
                <Pane height="100%" width="80%">
                    {children}
                </Pane>
            </Card>
        );
    }

    return (
        <Card width={width} height={height} border="default" elevation={1} padding="1rem" paddingBottom="0">
            <Heading size={titleSize} marginBottom="0.5em">
                {title}
            </Heading>
            <Pane height="90%" width="100%">
                {children}
            </Pane>
        </Card>
    );
};

export default DashboardItem;
