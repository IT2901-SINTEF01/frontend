import React from 'react';
import { Button, CrossIcon, PlusIcon, RefreshIcon } from 'evergreen-ui';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    onUpdate: () => void;

    added: boolean;
    updated: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.updated) {
        return (
            <Button
                width="100%"
                appearance="primary"
                intent="success"
                iconBefore={RefreshIcon}
                onClick={props.onUpdate}
                lineHeight="1.2em"
            >
                Oppdater visualisering
            </Button>
        );
    }

    if (props.added) {
        return (
            <Button
                width="100%"
                intent="danger"
                appearance="primary"
                iconBefore={CrossIcon}
                onClick={props.onAdd}
                lineHeight="1.2em"
            >
                Fjern fra dashboard
            </Button>
        );
    }

    return (
        <Button width="100%" appearance="primary" iconBefore={PlusIcon} onClick={props.onAdd} lineHeight="1.2em">
            Legg til i dashboard
        </Button>
    );
};

export default AddToDashboardButton;
