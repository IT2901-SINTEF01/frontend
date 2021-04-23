import React, { useMemo } from 'react';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';
import { useDispatch } from 'react-redux';
import dashboard from '../../redux/slices/dashboard';
import { useHistory } from 'react-router';
import { toaster } from 'evergreen-ui';

type Props = {
    dashboardItem: DashboardVisualisation;
    metadataId: string;

    // This will be non-null if we're editing an existing visualisation
    visualisation?: DashboardVisualisation;
};

const AddToDashboard: React.FC<Props> = (props) => {
    const history = useHistory();

    const key = useMemo(() => props.dashboardItem.id, []);

    const dispatch = useDispatch();

    const added = props.visualisation !== undefined;

    // Cheeky deep-object comparison
    const updated = added && JSON.stringify(props.visualisation) != JSON.stringify(props.dashboardItem);

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

    const update = () => {
        dispatch(dashboard.actions.update(props.dashboardItem));
        toaster.success('Visualiseringen din har blitt oppdatert.');
        history.push('/');
    };

    return <AddToDashboardButton added={added} updated={updated} onUpdate={update} onAdd={add} onRemove={remove} />;
};

export default AddToDashboard;
