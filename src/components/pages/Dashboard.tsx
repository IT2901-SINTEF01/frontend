import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardItem from '../molecules/DashboardItem';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import DataWrapper from '../molecules/DataWrapper';
import ThresholdChart from '../charts/ThresholdChart';
import { ParentSize } from '@visx/responsive';
import dataSourceMappings from '../../utils/dataSourceMappings';
import LineChart from '../charts/LineChart';
import { VisualisationType } from '../../types/Metadata';
import DashboardSelector from '../atoms/DashbaordSelector';
import AddNewDashboardButton from '../atoms/AddNewDashboardButton';

const Dashboard: React.FC = () => {
    //Apollo local state
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" paddingBottom="2rem">
            <Pane
                width="80%"
                height="8rem"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                paddingTop="4rem"
            >
                <DashboardSelector />
                <AddNewDashboardButton />
            </Pane>
            <Pane
                width="80%"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" //Smaller screen size should have 1f 1fr 1f
                columnGap="1rem"
                gridAutoRows="18rem"
                rowGap="1rem"
            >
                {dashboardItems.map((item) => {
                    return (
                        <Pane
                            key={item.id}
                            width="100%"
                            height="100%"
                            gridColumn={'span ' + item.size}
                            className="dashboardItem"
                        >
                            <DashboardItem
                                title={item.name}
                                height="100%"
                                width="100%"
                                titleSize={100}
                                paragraph={item.paragraph}
                            >
                                <ParentSize>
                                    {(parent) => (
                                        <DataWrapper
                                            mappingFunction={dataSourceMappings[item.datasourceId].mapping}
                                            query={dataSourceMappings[item.datasourceId].query}
                                        >
                                            {(data) => {
                                                switch (item.visualisationType) {
                                                    case VisualisationType.LINE:
                                                        return (
                                                            <LineChart
                                                                width={parent.width}
                                                                height={parent.height}
                                                                data={data}
                                                            />
                                                        );
                                                    case VisualisationType.THRESHOLD:
                                                        return (
                                                            <ThresholdChart
                                                                data={data}
                                                                height={parent.height}
                                                                width={parent.width}
                                                            />
                                                        );
                                                    default:
                                                        return <Text>Denne visualiseringstypen er ikke støttet.</Text>;
                                                }
                                            }}
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
