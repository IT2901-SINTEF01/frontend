import React from 'react';
import { Button, CrossIcon, PlusIcon, Text } from 'evergreen-ui';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    added: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.added) {
        return (
            <Button width="100%" appearance="primary" intent="danger" iconBefore={CrossIcon} onClick={props.onRemove}>
                <Text color="white" margin="0.2rem">
                    Fjern fra ditt dashboard
                </Text>
            </Button>
        );
    }

    return (
        <Button width="100%" appearance="primary" iconBefore={PlusIcon} onClick={props.onAdd} height="auto">
            <Text color="white" margin="0.2rem">
                Legg til i ditt dashboard
            </Text>
        </Button>
    );
};

export default AddToDashboardButton;
