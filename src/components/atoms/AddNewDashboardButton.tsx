import { Pane, Text } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import React from 'react';

const AddNewDashboardButton: React.FC = () => (
    <Pane paddingTop="5px">
        <Link to="/">
            <Text color="#1070CA">+ Legg til dashboard</Text>
        </Link>
    </Pane>
);

export default AddNewDashboardButton;
