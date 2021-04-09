import React, { useMemo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import { DashboardItemInfo } from '../../types/dashboard';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import visualisations from '../../types/visualisations';

type AddToDashboardProps = {
    dashboardItemInfo: DashboardItemInfo;
};

const AddToDashboard: React.FC<AddToDashboardProps> = (props) => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    const added = useMemo(
        () => dashboardItems.some((el) => el.dataSource.dataSourceId === props.dashboardItemInfo.datasourceId),
        [dashboardItems],
    );

    const addDashboardItem = () => {
        const newVis = visualisations.SSBPopulationLineChart;
        dashboardItemsVar([...dashboardItemsVar(), newVis]);
    };

    const removeDashboardItem = () => {
        // dashboardItemsVar(dashboardItemsVar().filter((el) => el.id !== props.dashboardItemInfo.id));
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
