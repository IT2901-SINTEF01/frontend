import React, { useMemo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import { DashboardItemInfo } from '../../types/dashboard';
import AddToDashboardButton from '../atoms/AddToDashboardButton';

type AddToDashboardProps = {
    dashboardItemInfo: DashboardItemInfo;
};

const AddToDashboard: React.FC<AddToDashboardProps> = (props) => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    const added = useMemo(() => dashboardItems.some((el) => el.id === props.dashboardItemInfo.id), [dashboardItems]);

    const addDashboardItem = () => {
        const dashboardContent = [...dashboardItemsVar(), props.dashboardItemInfo];
        dashboardItemsVar(dashboardContent);
        window.localStorage.setItem('dashboard', JSON.stringify(dashboardContent));
    };

    const removeDashboardItem = () => {
        const dashboardContent = dashboardItemsVar().filter((el) => el.id !== props.dashboardItemInfo.id);
        dashboardItemsVar(dashboardContent);
        window.localStorage.setItem('dashboard', JSON.stringify(dashboardContent));
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
