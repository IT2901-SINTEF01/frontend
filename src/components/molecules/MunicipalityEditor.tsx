import React, { Dispatch, SetStateAction } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { Combobox, Text } from 'evergreen-ui';
import MunicipalitySelector from '../atoms/MunicipalitySelector';
import { MunicipalitiesInNorway, MunicipalitiesInNorwayTax } from '../../queries/municipalitiesInNorway';
import { SSBPopulationVariables } from '../../queries/populationInNorway';

export type MunicipalityEditorProps = {
    state: SSBPopulationVariables;
    setState: Dispatch<SetStateAction<SSBPopulationVariables>>;
    query: DocumentNode;
};

const MunicipalityEditor: React.FC<MunicipalityEditorProps> = (props) => {
    const { loading, data, error } = useQuery<MunicipalitiesInNorway | MunicipalitiesInNorwayTax>(props.query);

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

    let options: [string, string][] = [];
    if ('populationsInNorway' in data) {
        options = data.populationsInNorway.municipalitiesWithKeys;
    }

    if ('taxAssessment' in data) {
        options = data.taxAssessment.municipalitiesWithKeys;
    }

    return (
        <MunicipalitySelector
            defaultValue={props.state.municipalities[0]}
            label="Velg kommune"
            options={options}
            onChange={(selected) => setMunicipality(selected.currentTarget.value as string)}
        />
    );
};

export default MunicipalityEditor;
