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
    const Title = <Heading size={titleSize}>{title}</Heading>;
    const Subtitle = (
        <Paragraph size={textSize} marginTop="0.5em">
            {paragraph}
        </Paragraph>
    );

    if (paragraph) {
    }

    return (
        <Card
            width={width}
            height={height}
            border="default"
            elevation={1}
            display="flex"
            flexDirection={paragraph ? 'row' : 'column'}
            padding="1em"
        >
            <Pane width={paragraph ? '45%' : '100%'}>
                {Title}
                {paragraph && Subtitle}
            </Pane>
            <Pane height="95%" width="100%">
                {children}
            </Pane>
        </Card>
    );
};

export default DashboardItem;
