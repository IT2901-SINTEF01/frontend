import React, { useEffect, useState } from 'react';
import { Button, CircleArrowLeftIcon, Pane, Text } from 'evergreen-ui';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AllMetadataResult, METADATA } from '../../queries/metadata';

import VisualisationPreview from '../molecules/VisualisationPreview';
import DataInfoBox from '../atoms/DatasetInfoBox';
import VisualisationSelector from '../atoms/VisualisationSelector';
import { friendlyNameForVisualisationType } from '../../utils/visualisationLabels';
import { VisualisationType } from '../../types/Metadata';

import { useHistory } from 'react-router';
import AddToDashboard from '../molecules/AddToDashboard';
import { DashboardItemSize } from '../../types/DashboardVisualisation';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';

const VisualisationEditor: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    const [selectedVisualisation, setSelectedVisualisation] = useState<VisualisationType>();

    const [paragraph, setParagraph] = useState<string>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading…</Text>;
    }

    if (!data || !data.allMetadata.some((el) => el.id === id)) {
        // No metadata was found. Go back
        history.push('/explore');
        return null;
    }

    // Safe non-null-assertion due to the .some above
    // eslint-disable-next-line
    const metadata = data.allMetadata.find((el) => el.id === id)!;

    // Set the first available visualisation to active
    useEffect(() => setSelectedVisualisation(metadata.visualisations[0].type), [metadata]);

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
                            visualisationType: selectedVisualisation ?? metadata.visualisations[0].type,
                            dataSourceId: metadata.datasourceId,
                            options: { size, paragraph },
                        }}
                    />
                </Pane>
            </Pane>
        </>
    );
};

export default VisualisationEditor;
