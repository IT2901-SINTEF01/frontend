import React, { useMemo } from 'react';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';
import { useDispatch, useSelector } from 'react-redux';
import dashboard from '../../redux/slices/dashboard';
import { RootState } from '../../redux';
import { useHistory } from 'react-router';
import { toaster } from 'evergreen-ui';

type Props = {
    dashboardItem: DashboardVisualisation;
    metadataId: string;
};

const AddToDashboard: React.FC<Props> = (props) => {
    const history = useHistory();

    const key = useMemo(() => props.dashboardItem.id, []);

    const dispatch = useDispatch();
    const visualisation = useSelector((state: RootState) => state.dashboard[key]);
    const added = !!visualisation;

    const add = () => {
        dispatch(dashboard.actions.add(props.dashboardItem));
        toaster.success('Visualiseringen ble lagt til i dashboardet.');
        history.push('/');
    };

    const remove = () => {
        dispatch(dashboard.actions.remove(key));
        toaster.success('Visualiseringen ble fjernet fra dashboardet.');
        history.push(`/explore/edit/${props.metadataId}`);
    };

    return <AddToDashboardButton added={added} onAdd={add} onRemove={remove} />;
};

export default AddToDashboard;
