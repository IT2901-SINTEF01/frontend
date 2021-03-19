import React from 'react';
import { Card, Text } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const AddComponentButton: React.FC = () => {
    return (
        <Link to="/explore" style={{ gridColumn: 'span 2' }}>
            <Card
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="muted"
                borderStyle="dotted"
                borderWidth="3px"
            >
                <Text>Legg til nytt komponent + </Text>
            </Card>
        </Link>
    );
};

export default AddComponentButton;
