import React from 'react';

const DashboardItemStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
};

type DashboardItemProps = {
    label: string;
};

const DashboardItem: React.FC<DashboardItemProps> = ({ label }) => {
    return <div style={DashboardItemStyle}>{label}</div>;
};

export default DashboardItem;
