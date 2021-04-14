import React from 'react';

import { Pane } from 'evergreen-ui';
import DashboardItem from '../molecules/DashboardItem';
import { ParentSize } from '@visx/responsive';
import DataWrapper from '../molecules/DataWrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import visualisationMapping, { VisualisationMappingFunctionPath } from '../../utils/visualisationMapping';

import queries from '../../queries';
import Visualisations from '../visualisations';

const DashboardItems: React.FC = () => {
    const visualisations = useSelector((state: RootState) => state.dashboard);

    return (
        <>
            {Object.entries(visualisations).map(([mappingPath, visualisation]) => (
                <Pane key={mappingPath} width="100%" height="100%" gridColumn={'span 6'} className="dashboardItem">
                    <DashboardItem title={'abc'} height="100%" width="100%" titleSize={100}>
                        <ParentSize>
                            {(parent) => (
                                <DataWrapper
                                    mappingFunction={
                                        visualisationMapping[mappingPath as VisualisationMappingFunctionPath]
                                    }
                                    query={queries[visualisation.dataSourceId]}
                                >
                                    {(data) => {
                                        const Vis = Visualisations[visualisation.visualisationType];
                                        return <Vis data={data} height={parent.height} width={parent.width} />;
                                    }}
                                </DataWrapper>
                            )}
                        </ParentSize>
                    </DashboardItem>
                </Pane>
            ))}
        </>
    );
};

export default DashboardItems;
