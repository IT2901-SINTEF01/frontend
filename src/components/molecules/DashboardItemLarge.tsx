import React from 'react';
import { DashboardItemLarge as DashboardItemLargeT } from '../../types/DashboardItem';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';

const DashboardItemLarge: React.FC<DashboardItemLargeT> = ({
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