import React from 'react';
import { Button, CrossIcon, PlusIcon } from 'evergreen-ui';
import { DashboardItemInfo } from '../../types/dashboard';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    dashboardItemInfo: DashboardItemInfo;
    added: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.added) {
        return (
            <Button appearance="primary" intent="danger" iconBefore={CrossIcon} onClick={props.onRemove}>
                Fjern fra ditt dashboard
            </Button>
        );
    }

    return (
        <Button appearance="primary" iconBefore={PlusIcon} onClick={props.onAdd}>
            Legg til i ditt dashboard
        </Button>
    );
};

export default AddToDashboardButton;
