import React from 'react';
import { Button, PlusIcon, CrossIcon } from 'evergreen-ui';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    added: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.added) {
        return (
            <Button width="100%" appearance="primary" iconBefore={CrossIcon} onClick={props.onAdd} lineHeight="1.2em">
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
