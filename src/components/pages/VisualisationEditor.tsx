import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

import { RootState } from '../../redux';
import { useSelector } from 'react-redux';

import { useQuery } from '@apollo/client';

import { AllMetadataResult, METADATA } from '../../queries/metadata';

import { friendlyNameForVisualisationType } from '../../utils/visualisationLabels';

import { VisualisationType } from '../../types/Metadata';
import { DashboardItemSize } from '../../types/VisualisationOption';
import { DataSourceVariables, defaultVariables } from '../../types/DataSource';

import DataInfoBox from '../atoms/DatasetInfoBox';
import VisualisationSelector from '../atoms/VisualisationSelector';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';

import VisualisationPreview from '../molecules/VisualisationPreview';
import AddToDashboard from '../molecules/AddToDashboard';
import DataSourceOptions from '../molecules/DataSourceOptions';

import { Button, CircleArrowLeftIcon, Pane, Text } from 'evergreen-ui';
import { DashboardVisualisation } from '../../types/DashboardVisualisation';

const VisualisationEditor: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    const [selectedVisualisation, setSelectedVisualisation] = useState<VisualisationType>();

    const visualisation = useSelector((state: RootState) => state.dashboard[id] as DashboardVisualisation | undefined);

    const [paragraph, setParagraph] = useState<string>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

    const [variables, setVariables] = useState<DataSourceVariables>();

    const metadata = visualisation
        ? data?.allMetadata.find((el) => el.datasourceId === visualisation.dataSourceId)
        : data?.allMetadata.find((el) => el.id === id);

    // Set the first available visualisation to active
    useEffect(() => {
        if (metadata === undefined) return;

        setSelectedVisualisation(visualisation ? visualisation.visualisationType : metadata.visualisations[0].type);
        setVariables(visualisation ? visualisation.variables : defaultVariables[metadata.datasourceId]);
        setParagraph(visualisation ? visualisation.options.paragraph : '');
    }, [metadata, visualisation]);

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading…</Text>;
    }

    if (!data || (!data.allMetadata.some((el) => el.id === id) && !visualisation)) {
        // No metadata was found. Go back
        history.push('/explore');
        return null;
    }

    if (!metadata) {
        return null;
    }

    if (variables === undefined) {
        return null;
    }

    return (
        <>
            <Button iconBefore={CircleArrowLeftIcon} appearance="minimal" onClick={() => history.push('/explore')}>
                Tilbake til datautforsker
            </Button>
            <Pane
                width="90%"
                margin="auto"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
                columnGap="2rem"
                rowGap="1rem"
                padding="2rem"
            >
                <Pane gridColumn="span 1">
                    <DataInfoBox
                        title={metadata.name}
                        description={metadata.description}
                        tags={metadata.tags}
                        url={metadata.source}
                        published={metadata.published}
                        updated={metadata.updated}
                    />
                </Pane>
                {/* Safe type cast as we don't render before metadata has been loaded. */}
                <VisualisationPreview
                    metadata={metadata}
                    selectedVisualisation={selectedVisualisation as VisualisationType}
                    size={size}
                    paragraph={paragraph}
                />
                <VisualisationParameterSelector
                    size={size}
                    setSize={setSize}
                    paragraph={paragraph}
                    setParagraph={setParagraph}
                />
                <VisualisationSelector
                    label="Velg visualisering"
                    default={selectedVisualisation as VisualisationType}
                    options={Object.fromEntries(
                        metadata.visualisations.map((value) => [
                            friendlyNameForVisualisationType(value.type),
                            value.type,
                        ]),
                    )}
                    onChange={(e) => setSelectedVisualisation(e.currentTarget.value as VisualisationType)}
                />
                <Pane gridColumn={6}>
                    <AddToDashboard
                        dashboardItem={{
                            id,
                            visualisationType: selectedVisualisation ?? metadata.visualisations[0].type,
                            dataSourceId: metadata.datasourceId,
                            options: { size, paragraph },
                            variables,
                        }}
                        metadataId={metadata.id}
                        visualisation={visualisation}
                    />
                </Pane>
                <DataSourceOptions
                    state={variables}
                    setState={setVariables as Dispatch<SetStateAction<DataSourceVariables>>}
                    dataSource={metadata.datasourceId}
                />
            </Pane>
        </>
    );
};

export default VisualisationEditor;
