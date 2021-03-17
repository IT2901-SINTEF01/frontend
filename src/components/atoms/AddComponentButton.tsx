import React from 'react';
import { Card, Text } from 'evergreen-ui';
import { useHistory } from 'react-router-dom';

const AddComponentButton: React.FC = () => {
    const history = useHistory();

    const addDashboardItem = () => {
        history.push('/explore');
    };

    return (
        <Card
            cursor="pointer"
            width="100%"
            height="100%"
            gridColumn="span 2"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={addDashboardItem}
            border="muted"
            borderStyle="dotted"
            borderWidth="3px"
        >
            <Text>Legg til nytt komponent + </Text>
        </Card>
    );
};

export default AddComponentButton;
