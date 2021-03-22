import React, { useMemo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import { DashboardItemInfo } from '../../types/dashboard';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import { useHistory } from 'react-router-dom';

type AddToDashboardProps = {
    dashboardItemInfo: DashboardItemInfo;
};

const AddToDashboard: React.FC<AddToDashboardProps> = (props) => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);
    const history = useHistory();

    const added = useMemo(() => dashboardItems.some((el) => el.id === props.dashboardItemInfo.id), [dashboardItems]);

    const addDashboardItem = () => {
        dashboardItemsVar([...dashboardItemsVar(), props.dashboardItemInfo]);

        // Navigate back to dashboard after adding it to dashboard
        history.push('/');
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
