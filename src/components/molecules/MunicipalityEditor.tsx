import React, { Dispatch, SetStateAction } from 'react';
import { useQuery } from '@apollo/client';
import { Combobox, Text } from 'evergreen-ui';
import MunicipalitySelector from '../atoms/MunicipalitySelector';
import { MUNICIPALITIES_IN_NORWAY, MunicipalitiesInNorway } from '../../queries/municipalitiesInNorway';
import { SSBPopulationVariables } from '../../queries/populationInNorway';

export type MunicipalityEditorProps = {
    state: SSBPopulationVariables;
    setState: Dispatch<SetStateAction<SSBPopulationVariables>>;
};

const MunicipalityEditor: React.FC<MunicipalityEditorProps> = (props) => {
    const { loading, data, error } = useQuery<MunicipalitiesInNorway>(MUNICIPALITIES_IN_NORWAY);

    if (error) {
        return <Text>{error.message}</Text>;
    }

    if (loading) {
        return <Combobox isLoading disabled items={['Loading']} />;
    }

    if (!data) {
        return <Text>Tomt</Text>;
    }

    const setMunicipality = (name: string) => {
        props.setState({ municipalities: [name] });
    };

    return (
        <MunicipalitySelector
            defaultValue={props.state.municipalities[0]}
            label="Velg kommune"
            options={data.populationsInNorway.municipalitiesWithKeys}
            onChange={(selected) => setMunicipality(selected.currentTarget.value as string)}
        />
    );
};

export default MunicipalityEditor;
