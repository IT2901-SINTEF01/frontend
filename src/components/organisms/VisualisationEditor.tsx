import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AllMetadataResult, METADATA } from '../../queries/metadata';

import VisualisationPreview from '../molecules/VisualisationPreview';
import DataInfoBox from '../atoms/DatasetInfoBox';
import VisualisationsSelector from '../atoms/VisusalisationsSelector';
import { friendlyNameForVisualisationType } from '../../utils/visualisationLabels';

const VisualisationEditor: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const { id } = useParams<{ id: string }>();

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
            height="25rem"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
            columnGap="1rem"
            rowGap="1rem"
            padding="2rem"
        >
            <Pane gridColumn="span 1">
                <DataInfoBox title={metadata.name} description={metadata.description} tags={metadata.tags} />
            </Pane>
            <VisualisationPreview metadata={metadata} />
            <VisualisationsSelector
                label="Velg visualisering"
                options={Object.fromEntries(
                    metadata.visualisations.map((value) => [friendlyNameForVisualisationType(value.type), value.type]),
                )}
                onChange={(e) => alert(e.currentTarget.value)}
            />
        </Pane>
    );
};

export default VisualisationEditor;
