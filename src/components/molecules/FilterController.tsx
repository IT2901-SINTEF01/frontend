import { Heading, Pane } from 'evergreen-ui';
import React, { useState } from 'react';
import ActiveFilters from '../atoms/ActiveFilters';
import SelectMunicipality from '../atoms/SelectMunicipality';
import { municipalityList } from '../../utils/municipalityList';

const FilterController: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const addFilter = (filter: string) => {
        if (municipalityList.includes(filter) && !selectedFilters.includes(filter))
            setSelectedFilters((oldState) => [...oldState, filter]);
    };

    const removeFilter = (filter: string) => {
        setSelectedFilters((oldState) => oldState.filter((el) => el !== filter));
    };

    return (
        <Pane width="20%">
            <Pane display="flex" justifyContent="center" alignItems="center" background="blueTint" height="4rem">
                <Heading>Filter</Heading>
            </Pane>
            <Pane padding="1rem">
                <ActiveFilters
                    tags={selectedFilters}
                    removeTag={removeFilter}
                    removeAll={() => {
                        setSelectedFilters([]);
                    }}
                />
                <SelectMunicipality addMunicipality={addFilter} />
            </Pane>
        </Pane>
    );
};

export default FilterController;
