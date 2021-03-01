import React from 'react';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';

export type DashboardItemLargeProps = import('./DashboardItemSmall').DashboardItemSmallProps & {
    paragraph: string;
    textSize: 300 | 400 | 500;
};

const DashboardItemLarge: React.FC<DashboardItemLargeProps> = ({
    title,
    width,
    paragraph,
    height,
    titleSize,
    textSize,
    children,
}) => {
    return (
        <Card width={width} height={height} display="flex" flexDirection="column" border="default" elevation={1}>
            <Heading size={titleSize} marginTop={25} marginLeft={25}>
                {title}
            </Heading>
            <Pane
                width="95%"
                height="inherit"
                overflow="auto"
                display="flex"
                flexDirection="row"
                alignSelf="center"
                marginTop={10}
            >
                <Paragraph width="15%" height="100%" size={textSize}>
                    {paragraph}
                </Paragraph>
                <Pane marginLeft={15} justifyContent="center" width="80%" height="80%">
                    {children}
                </Pane>
            </Pane>
        </Card>
    );
};

export default DashboardItemLarge;
