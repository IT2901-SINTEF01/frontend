import React from 'react';
import { Text } from 'evergreen-ui';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AllMetadataResult, METADATA } from '../../queries/metadata';

import VisualisationPreview from '../molecules/VisualisationPreview';

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
    return <VisualisationPreview metadata={data.allMetadata.find((el) => el.id === id)!} />;
};

export default VisualisationEditor;
