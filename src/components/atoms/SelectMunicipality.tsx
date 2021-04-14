import React from 'react';
import { Combobox, Label } from 'evergreen-ui';
import { municipalityList } from '../../utils/municipalityList';

type SelectMunicipalityProps = {
    addMunicipality: (municipality: string) => void;
};

const SelectMunicipality: React.FC<SelectMunicipalityProps> = ({ addMunicipality }) => {
    return (
        <>
            <Label htmlFor="choose-municipality-combobox">Kommuner</Label>
            <Combobox
                id="choose-municipality-combobox"
                width="100%"
                openOnFocus
                items={municipalityList}
                onChange={(selected) => addMunicipality(selected)}
                placeholder="Legg til kommuner"
            />
        </>
    );
};

export default SelectMunicipality;
