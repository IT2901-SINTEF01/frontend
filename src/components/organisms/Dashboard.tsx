import React from 'react';
import { Pane, Select, Text } from 'evergreen-ui';
import { generateRandomList } from '../../utils/dashboardList';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardItemSmall from '../molecules/DashboardItemSmall';

const Dashboard: React.FC = () => {
    //Simulates stored state in state manager.
    const itemList = generateRandomList(3);

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
            <Pane width="80%" height="100px" position="relative">
                <Select position="absolute" bottom="20px" width="200px">
                    {/* Placeholders*/}
                    <option value="foo" selected>
                        Mitt første dashboard
                    </option>
                    <option value="bar">Mitt andre dashboard</option>
                </Select>
                <Text position="absolute" bottom="25px" left="220px" color="#1070CA" cursor="pointer">
                    + Legg til dashboard
                </Text>
            </Pane>
            <Pane
                width="80%"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" //Smaller screen size should have 1f 1fr 1f
                columnGap="10px"
                gridAutoRows="250px"
                rowGap="10px"
            >
                {itemList.map((item, i) => {
                    return (
                        <Pane key={i} width="100%" height="100%" gridColumn={'span ' + item.size}>
                            <DashboardItemSmall title="placeholder" height="100%" width="100%" titleSize={100}>
                                {''}
                            </DashboardItemSmall>
                        </Pane>
                    );
                })}
                <AddComponentButton />
            </Pane>
        </Pane>
    );
};

export default Dashboard;
