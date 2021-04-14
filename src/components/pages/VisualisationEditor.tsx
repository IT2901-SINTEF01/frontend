import React, { useState } from 'react';
import { Pane, Text } from 'evergreen-ui';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AllMetadataResult, METADATA } from '../../queries/metadata';

import VisualisationPreview from '../molecules/VisualisationPreview';
import DataInfoBox from '../atoms/DatasetInfoBox';
import VisualisationSelector from '../atoms/VisualisationSelector';
import { friendlyNameForVisualisationType } from '../../utils/visualisationLabels';
import { VisualisationType } from '../../types/Metadata';

const VisualisationEditor: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const { id } = useParams<{ id: string }>();

    const [selectedVisualisation, setSelectedVisualisation] = useState<VisualisationType>();

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading…</Text>;
    }

    if (!data || !data.allMetadata.some((el) => el.id === id)) {
        return <Text>Empty</Text>;
    }

    // Safe non-null-assertion due to the .some above
    // eslint-disable-next-line
    const metadata = data.allMetadata.find((el) => el.id === id)!;

    return (
        <Pane
            width="100%"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
            columnGap="1rem"
            rowGap="1rem"
            padding="2rem"
        >
            <Pane gridColumn="span 1">
                <DataInfoBox title={metadata.name} description={metadata.description} tags={metadata.tags} />
            </Pane>
            {/* Safe type cast as we don't render before metadata has been loaded. */}
            <VisualisationPreview
                metadata={metadata}
                selectedVisualisation={selectedVisualisation as VisualisationType}
            />
            <VisualisationSelector
                label="Velg visualisering"
                default={selectedVisualisation as VisualisationType}
                options={Object.fromEntries(
                    metadata.visualisations.map((value) => [friendlyNameForVisualisationType(value.type), value.type]),
                )}
                onChange={(e) => setSelectedVisualisation(e.currentTarget.value as VisualisationType)}
            />
        </Pane>
    );
};

export default VisualisationEditor;
