import React from 'react';
import { DashboardItemLargeType } from '../../dataTypes/DashboardItems/DashboardItemLargeType';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';

const DashboardItemLarge: React.FC<DashboardItemLargeType> = ({
    title,
    children,
    width,
    paragraph,
    height,
    titleSize,
    textSize,
}) => {
    return (
        <Card width={width} height={height} display="flex" flexDirection="column" border="default" elevation={1}>
            <Heading size={titleSize} marginTop={25} marginLeft={25}>
                {title}
            </Heading>
            <Pane width="95%" height="100%" display="flex" flexDirection="row" alignSelf="center" marginTop={10}>
                <Paragraph width="15%" height="100%" size={textSize} overflow="hidden" textOverflow="-">
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
