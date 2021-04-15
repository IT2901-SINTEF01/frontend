import React from 'react';
import { useQuery } from '@apollo/client';
import { MunicipalityInNorway, MUNICIPALITY_IN_NORWAY } from '../../queries/municipalityInNorway';
import { Text } from 'evergreen-ui';
import MunicipalitySelector from '../atoms/MunicipalitySelector';
import { Combobox } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import municipality from '../../redux/slices/municipality';

const MunicipalityEditor: React.FC = () => {
    const { loading, data, error } = useQuery<MunicipalityInNorway>(MUNICIPALITY_IN_NORWAY);
    const dispatch = useDispatch();

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Combobox isLoading disabled items={['Loading']} />;
    }

    if (!data) {
        return <Text>Empty</Text>;
    }

    const setMunicipality = (name: string) => {
        dispatch(municipality.actions.update(name));
    };

    return (
        <MunicipalitySelector
            label="Velg kommune"
            options={data.populationsInNorway.municipalitiesWithKeys}
            onChange={(selected) => setMunicipality(selected.currentTarget.value as string)}
        />
    );
};

export default MunicipalityEditor;
