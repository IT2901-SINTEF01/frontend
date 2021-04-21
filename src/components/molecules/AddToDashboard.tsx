import React from 'react';
import AddToDashboardButton from '../atoms/AddToDashboardButton';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';
import { useDispatch, useSelector } from 'react-redux';
import dashboard from '../../redux/slices/dashboard';
import { RootState } from '../../redux';
import { useHistory } from 'react-router';
import { toaster } from 'evergreen-ui';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    dashboardItem: DashboardVisualisation;
};

const AddToDashboard: React.FC<Props> = (props) => {
    const history = useHistory();

    const key = props.dashboardItem.id ?? uuidv4();

    const dispatch = useDispatch();
    const added = useSelector((state: RootState) => !!state.dashboard[key]);

    const add = () => {
        dispatch(dashboard.actions.add(props.dashboardItem));
        toaster.success('Visualiseringen ble lagt til i dashboardet.');
        history.push('/');
    };

    const remove = () => {
        dispatch(dashboard.actions.remove(key));
        toaster.success('Visualiseringen ble fjernet fra dashboardet.');
        history.push('/');
    };

    return <AddToDashboardButton added={added} onAdd={add} onRemove={remove} />;
};

export default AddToDashboard;
