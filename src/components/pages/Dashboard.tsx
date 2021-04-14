import React from 'react';
import { Pane } from 'evergreen-ui';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardSelector from '../atoms/DashbaordSelector';
import AddNewDashboardButton from '../atoms/AddNewDashboardButton';
import DashboardItems from '../organisms/DashboardItems';

const Dashboard: React.FC = () => {
    return (
        <Pane display="flex" flexDirection="column" paddingBottom="2rem" width="80%" margin="auto">
            <Pane height="8rem" display="flex" flexDirection="row" justifyContent="flex-start" paddingTop="4rem">
                <DashboardSelector />
                <AddNewDashboardButton />
            </Pane>
            <Pane
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" //Smaller screen size should have 1f 1fr 1f
                columnGap="1rem"
                gridAutoRows="18rem"
                rowGap="1rem"
            >
                <AddComponentButton />
                <DashboardItems />
            </Pane>
        </Pane>
    );
};

export default Dashboard;
