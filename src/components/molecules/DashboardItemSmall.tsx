import React from 'react';
import { DashboardItemSmallType } from '../../dataTypes/DashboardItems/DashboardItemSmallType';
import { Card, Text } from 'evergreen-ui';

const DashboardItemSmall: React.FC<DashboardItemSmallType> = ({ title, children }) => {
    return (
        <Card
            height={400}
            width={800}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="default"
            elevation={1}
        >
            <Text>{title}</Text>
            {children}
        </Card>
    );
};

export default DashboardItemSmall;
