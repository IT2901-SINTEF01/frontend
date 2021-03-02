import React from 'react';
import { Pane, Select, Text } from 'evergreen-ui';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardItem from '../molecules/DashboardItem';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache/cache';
import DataWrapper from '../molecules/DataWrapper';
import ThresholdChart from '../atoms/ThresholdChart';
import { ParentSize } from '@visx/responsive';

const Dashboard: React.FC = () => {
    //Apollo local state
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" paddingBottom="20px">
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
                {dashboardItems.map((item, i) => {
                    return (
                        <Pane key={i} width="100%" height="100%" gridColumn={'span ' + item.size}>
                            <DashboardItem
                                title="placeholder"
                                height="100%"
                                width="100%"
                                titleSize={100}
                                paragraph={item.paragraph}
                            >
                                <ParentSize>
                                    {(parent) => (
                                        <DataWrapper query={item.query}>
                                            {({ data }) =>
                                                data.length !== 0 && (
                                                    <ThresholdChart
                                                        data={data}
                                                        height={parent.height}
                                                        width={parent.width}
                                                    />
                                                )
                                            }
                                        </DataWrapper>
                                    )}
                                </ParentSize>
                            </DashboardItem>
                        </Pane>
                    );
                })}
                <AddComponentButton />
            </Pane>
        </Pane>
    );
};

export default Dashboard;
