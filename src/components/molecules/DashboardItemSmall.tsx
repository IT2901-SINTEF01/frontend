import React from 'react';
import { Card, Pane, Heading } from 'evergreen-ui';

export type DashboardItemSmallProps = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
};

const DashboardItemSmall: React.FC<DashboardItemSmallProps> = ({ title, children, width, height, titleSize }) => {
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
