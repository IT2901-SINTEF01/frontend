import React from 'react';
import { DashboardItemSmall as DashboardItemSmallT } from '../../types/DashboardItem';
import { Card, Pane, Heading } from 'evergreen-ui';

const DashboardItemSmall: React.FC<DashboardItemSmallT> = ({ title, children, width, height, titleSize }) => {
    return (
        <Card width={width} height={height} display="flex" flexDirection="column" border="default" elevation={1}>
            <Heading size={titleSize} marginTop={25} marginLeft={25}>
                {title}
            </Heading>
            <Pane
                alignSelf="center"
                marginTop="auto"
                marginBottom="auto"
                justifyContent="center"
                width="80%"
                height="70%"
            >
                {children}
            </Pane>
        </Card>
    );
};

export default DashboardItemSmall;
