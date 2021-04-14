import React from 'react';
import { Pane } from 'evergreen-ui';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardSelector from '../atoms/DashbaordSelector';
import DashboardItems from '../organisms/DashboardItems';

const Dashboard: React.FC = () => {
    return (
        <Pane display="flex" flexDirection="column" width="80%" margin="auto">
            <Pane display="flex" flexDirection="row" justifyContent="flex-start" paddingY="2em">
                <DashboardSelector />
            </Pane>
            <Pane
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" //Smaller screen size should have 1f 1fr 1f
                columnGap="1rem"
                gridAutoRows="18rem"
                rowGap="1rem"
            >
                <DashboardItems />
                <AddComponentButton />
            </Pane>
        </Pane>
    );
};

export default Dashboard;
