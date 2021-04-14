import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import DashboardItem from '../molecules/DashboardItem';
import { ParentSize } from '@visx/responsive';
import DataWrapper from '../molecules/DataWrapper';
import dataSourceMappings from '../../utils/dataSourceMappings';
import { VisualisationType } from '../../types/Metadata';
import LineChart from '../charts/LineChart';
import ThresholdChart from '../charts/ThresholdChart';
import { DashboardItemInfo } from '../../types/dashboard';

type Props = {
    dashboardItems: Array<DashboardItemInfo>;
};

const DashboardItems: React.FC<Props> = (props) => (
    <>
        {props.dashboardItems.map((item) => (
            <Pane key={item.id} width="100%" height="100%" gridColumn={'span ' + item.size} className="dashboardItem">
                <DashboardItem title={item.name} height="100%" width="100%" titleSize={100} paragraph={item.paragraph}>
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
                                                <LineChart width={parent.width} height={parent.height} data={data} />
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
        ))}
    </>
);

export default DashboardItems;
