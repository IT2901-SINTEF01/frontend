import React from 'react';
import { Pane, Text, Heading } from 'evergreen-ui';

const NotFound: React.FC = () => {
    return (
        <Pane display="flex" height="100%" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading>404</Heading>
            <Text>Oops! Her ser det ut som det ble noe krøll… Vi finner ikke siden du leter etter.</Text>
        </Pane>
    );
};

export default NotFound;
