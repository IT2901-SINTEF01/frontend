import React, { useState } from 'react';
import VisualisationSelector from '../atoms/VisualisationSelector';
import { useQuery } from '@apollo/client';
import { MunicipalityInNorway, MUNICIPALITY_IN_NORWAY } from '../../queries/municipalityInNorway';
import { Text } from 'evergreen-ui';

const MunicipalitySelector: React.FC = () => {
    const [selectedMunicipality, setselectedMunicipality] = useState('Oslo');
    const { loading, data, error } = useQuery<MunicipalityInNorway>(MUNICIPALITY_IN_NORWAY);
    console.log(data?.populationsInNorway.municipalitiesWithKeys);
    const dummyData: Record<string, string> = {
        Oslo: 'O',
        Tønsberg: 'T',
        Bergen: 'B',
    };

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading…</Text>;
    }

    return (
        <VisualisationSelector
            label="Velg kommune"
            options={dummyData}
            onChange={(e) => setselectedMunicipality(e.currentTarget.value as string)}
        />
    );
};

export default MunicipalitySelector;
