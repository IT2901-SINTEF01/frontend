import React, { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import { DashboardItemInfo } from '../../types/dashboard';
import AddToDashboardButton from '../atoms/AddToDashboardButton';

type AddToDashboardProps = {
    dashboardItemInfo: DashboardItemInfo;
};

const AddToDashboard: React.FC<AddToDashboardProps> = (props) => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    const [added, setAdded] = useState(false);

    useEffect(() => {
        setAdded(dashboardItems.some((el) => el.id === props.dashboardItemInfo.id));
    }, [dashboardItems]);

    const addDashboardItem = () => {
        dashboardItemsVar([...dashboardItemsVar(), props.dashboardItemInfo]);
    };

    const removeDashboardItem = () => {
        dashboardItemsVar(dashboardItemsVar().filter((el) => el.id !== props.dashboardItemInfo.id));
    };

    return (
        <AddToDashboardButton
            added={added}
            onAdd={addDashboardItem}
            onRemove={removeDashboardItem}
            dashboardItemInfo={props.dashboardItemInfo}
        />
    );
};

export default AddToDashboard;
