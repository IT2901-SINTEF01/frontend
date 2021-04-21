import React from 'react';
import { Button, CrossIcon, Icon, PlusIcon, Text } from 'evergreen-ui';

type AddToDashboardButtonType = {
    onAdd: () => void;
    onRemove: () => void;
    added: boolean;
};

const AddToDashboardButton: React.FC<AddToDashboardButtonType> = (props) => {
    if (props.added) {
        return (
            <Button width="100%" appearance="primary" onClick={props.onAdd} height="auto" display="flex">
                <Icon icon={CrossIcon} size={12} />
                <Text color="white" margin="0.5em" textAlign="center" flex="1" width="100%">
                    Fjern fra ditt dashboard
                </Text>
            </Button>
        );
    }

    return (
        <Button width="100%" appearance="primary" onClick={props.onAdd} height="auto" display="flex">
            <Icon icon={PlusIcon} size={12} />
            <Text color="white" margin="0.5em" textAlign="center" flex="1" width="100%">
                Legg til i ditt dashboard
            </Text>
        </Button>
    );
};

export default AddToDashboardButton;
