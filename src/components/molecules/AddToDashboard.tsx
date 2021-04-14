import React from 'react';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';
import { useDispatch, useSelector } from 'react-redux';
import dashboard from '../../redux/slices/dashboard';
import { VisualisationMappingFunctionPath } from '../../utils/visualisationMapping';
import { RootState } from '../../redux';
import { useHistory } from 'react-router';
import { toaster } from 'evergreen-ui';

type Props = {
    dashboardItem: DashboardVisualisation;
};

const AddToDashboard: React.FC<Props> = (props) => {
    const history = useHistory();

    const key = `${props.dashboardItem.dataSourceId}-${props.dashboardItem.visualisationType}` as VisualisationMappingFunctionPath;

    const dispatch = useDispatch();
    const added = useSelector((state: RootState) => !!state.dashboard[key]);

    const add = () => {
        dispatch(dashboard.actions.add(props.dashboardItem));
        toaster.success('Visualiseringen ble lagt til i dashboardet ditt.');
        history.push('/');
    };

    const remove = () => {
        dispatch(dashboard.actions.remove(key));
        toaster.success('Visualiseringen ble fjernet.');
    };

    return <AddToDashboardButton added={added} onAdd={add} onRemove={remove} />;
};

export default AddToDashboard;
