import React from 'react';
import { Card } from 'evergreen-ui';

const DashboardItem: React.FC = () => {
    console.log('title');
    return <Card width={'100%'} height={'100%'} border="default" elevation={1}></Card>;
};

export default DashboardItem;
