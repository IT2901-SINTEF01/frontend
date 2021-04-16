import React from 'react';
import { Button, CrossIcon, PlusIcon } from 'evergreen-ui';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    added: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.added) {
        return (
            <Button width="100%" appearance="primary" intent="danger" iconBefore={CrossIcon} onClick={props.onRemove}>
                Fjern fra ditt dashboard
            </Button>
        );
    }

    return (
        <Button width="100%" appearance="primary" iconBefore={PlusIcon} onClick={props.onAdd}>
            Legg til i ditt dashboard
        </Button>
    );
};

export default AddToDashboardButton;
