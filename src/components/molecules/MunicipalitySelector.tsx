import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { MunicipalityInNorway, MUNICIPALITY_IN_NORWAY } from '../../queries/municipalityInNorway';
import { Text } from 'evergreen-ui';
import MunicipalitySelector from '../atoms/MunicipalitySelector';

const MunicipalityEditor: React.FC = () => {
    const [, setselectedMunicipality] = useState('');
    const { loading, data, error } = useQuery<MunicipalityInNorway>(MUNICIPALITY_IN_NORWAY);

    // Not sure if necessary
    useEffect(() => {
        if (!data) return;
        setselectedMunicipality(data.populationsInNorway.municipalitiesWithKeys[0][0]);
    }, [data]);

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Text>Loading…</Text>;
    }

    if (!data) {
        return <Text>Empty</Text>;
    }

    return (
        <MunicipalitySelector
            label="Velg kommune"
            options={data.populationsInNorway.municipalitiesWithKeys}
            onChange={(e) => setselectedMunicipality(e.currentTarget.value as string)}
        />
    );
};

export default MunicipalityEditor;
