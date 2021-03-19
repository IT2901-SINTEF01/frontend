import React, { useEffect, useState } from 'react';
import { Button, CrossIcon, PlusIcon } from 'evergreen-ui';
import { dashboardItemsVar } from '../../cache';
import { DashboardItemInfo } from '../../types/dashboard';
import { useReactiveVar } from '@apollo/client';

const AddToDashboard: React.FC<DashboardItemInfo> = ({ size, paragraph, query, id, title }) => {
    const dashboardItems = useReactiveVar(dashboardItemsVar);
    const [added, setAdded] = useState<boolean>(false);

    useEffect(() => {
        setAdded(dashboardItems.some((el) => el.id === id));
    }, [dashboardItems]);

    const addDashboardItem = () => {
        dashboardItemsVar([...dashboardItemsVar(), { size, query, paragraph, id, title }]);
    };

    const removeDashboardItem = () => {
        dashboardItemsVar(dashboardItemsVar().filter((el) => el.id !== id));
    };

    if (added) {
        return (
            <Button appearance="primary" intent="danger" iconBefore={CrossIcon} onClick={removeDashboardItem}>
                Fjern fra ditt dashboard
            </Button>
        );
    }

    return (
        <Button onClick={addDashboardItem} appearance="primary" iconBefore={PlusIcon}>
            Legg til i ditt dashboard
        </Button>
    );
};

export default AddToDashboard;
