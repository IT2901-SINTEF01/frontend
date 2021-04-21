import React from 'react';

import { Pane, Spinner, toaster } from 'evergreen-ui';
import DashboardItem from '../molecules/DashboardItem';
import DataWrapper from '../molecules/DataWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import visualisationMapping, { VisualisationMappingFunctionPath } from '../../utils/visualisationMapping';

import queries from '../../queries';
import Visualisations from '../visualisations';
import { useQuery } from '@apollo/client';
import { AllMetadataResult, METADATA } from '../../queries/metadata';
import ErrorMessage from '../atoms/ErrorMessage';
import { useHistory } from 'react-router';
import dashboard from '../../redux/slices/dashboard';

const DashboardItems: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const visualisations = useSelector((state: RootState) => state.dashboard);
    const history = useHistory();
    const dispatch = useDispatch();

    const deleteDashboardVisualisation = (key: string) => () => {
        dispatch(dashboard.actions.remove(key as VisualisationMappingFunctionPath));
        toaster.success('Visualiseringen ble fjernet.');
    };

    if (loading) {
        return (
            <Pane width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Spinner />
            </Pane>
        );
    }

    if (error) {
        return <ErrorMessage message={error.name} moreInfo={error.message} />;
    }

    if (!data) {
        return <ErrorMessage message="Ingen data!" moreInfo="Underfundig… Vi fant ingen data." />;
    }

    return (
        <>
            {Object.entries(visualisations).map(([mappingPath, visualisation]) => {
                const metadataEntry = data.allMetadata.find((md) => md.datasourceId === visualisation.dataSourceId);

                const name = metadataEntry?.name ?? 'Ingen navn her.';

                return (
                    <Pane
                        key={mappingPath}
                        width="100%"
                        height="100%"
                        gridColumn={`span ${visualisation.options.size}`}
                        className="dashboardItem"
                        backgroundColor="white"
                    >
                        <DashboardItem
                            title={name}
                            height="100%"
                            width="100%"
                            titleSize={400}
                            paragraph={visualisation.options.paragraph}
                            onEdit={() => history.push(`/explore/edit/${metadataEntry?.id}`)}
                            onDelete={deleteDashboardVisualisation(mappingPath)}
                        >
                            <DataWrapper
                                mappingFunction={visualisationMapping[mappingPath as VisualisationMappingFunctionPath]}
                                query={queries[visualisation.dataSourceId]}
                                variables={visualisation.variables}
                            >
                                {(data) => {
                                    const Vis = Visualisations[visualisation.visualisationType];
                                    return <Vis data={data} height="100%" width="100%" />;
                                }}
                            </DataWrapper>
                        </DashboardItem>
                    </Pane>
                );
            })}
        </>
    );
};

export default DashboardItems;
