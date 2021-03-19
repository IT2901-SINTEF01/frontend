import React, { useEffect, useState } from 'react';
import { Text } from 'evergreen-ui';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { AllMetadataResult, METADATA, MetadataEntry } from '../../queries/metadata';

import VisualisationPrevew from '../molecules/VisualisationPreview';

type ParamType = {
    id?: string;
};

const VisualisationEditor: React.FC = () => {
    const { loading, data, error } = useQuery<AllMetadataResult>(METADATA);
    const { id } = useParams<ParamType>();
    const [metadata, setMetadata] = useState<MetadataEntry>();

    useEffect(() => {
        //Refresh will not work during development since the id is mocked.
        setMetadata(data?.allMetadata.find((el) => el.id === id));
    }, [data]);

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (!metadata) {
        return <Text>Empty</Text>;
    }

    return <VisualisationPrevew metadata={metadata} />;
};

export default VisualisationEditor;
