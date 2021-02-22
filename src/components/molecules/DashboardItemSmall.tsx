import React from 'react';
import { DashboardItemSmallType } from '../../dataTypes/DashboardItems/DashboardItemSmallType';

const DashboardItemSmall: React.FC<DashboardItemSmallType> = ({ title, lables, graph }) => {
    return <p>{title}</p>;
};

export default DashboardItemSmall;
