import React from 'react';
import { Card, Text } from 'evergreen-ui';

const AddComponentButton: React.FC = () => {
    const handleClick = () => {
        //Change to data explorer page with react router
        return;
    };

    return (
        <Card
            cursor="pointer"
            width="100%"
            height="100%"
            gridColumn={'span 2'}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleClick}
            border="muted"
            borderStyle="dotted"
            borderWidth="3px"
        >
            <Text>Legg til nytt komponent + </Text>
        </Card>
    );
};

export default AddComponentButton;
