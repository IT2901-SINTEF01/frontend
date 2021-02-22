import React from 'react';
import { DashboardItemSmallType } from '../../dataTypes/DashboardItems/DashboardItemSmallType';
import { Card, Pane, Heading } from 'evergreen-ui';

const DashboardItemSmall: React.FC<DashboardItemSmallType> = ({ title, children }) => {
    return (
        <Card height={300} width={500} display="flex" flexDirection="column" border="default" elevation={1}>
            <Heading size={500} marginTop={25} marginLeft={25}>
                {title}
            </Heading>
            <Pane alignSelf="center" marginTop="auto" marginBottom="auto">
                {children}
            </Pane>
        </Card>
    );
};

export default DashboardItemSmall;
