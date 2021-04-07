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

    const updateStorage = (content: DashboardItemInfo[]) => {
        dashboardItemsVar(content);
        window.localStorage.setItem('dashboard', JSON.stringify(content));
    };

    const addDashboardItem = () => {
        updateStorage([...dashboardItemsVar(), props.dashboardItemInfo]);
    };

    const removeDashboardItem = () => {
        updateStorage(dashboardItemsVar().filter((el) => el.id !== props.dashboardItemInfo.id));
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
