import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import ActiveFilters from '../atoms/ActiveFilters';
import SelectTag from '../atoms/SelectTag';

type FilterControllerProps = {
    size: string;
    activeFilters: string[];
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterController: React.FC<FilterControllerProps> = ({ size, activeFilters, setActiveFilters }) => {
    return (
        <Pane
            width={size}
            background="white"
            elevation={1}
            position="fixed"
            top="0"
            left="0"
            zIndex={1}
            overflowX="hidden"
            height="100%"
        >
            <Pane display="flex" justifyContent="center" alignItems="center" background="#F7F9FD" height="4rem">
                <Heading>Filter</Heading>
            </Pane>
            <Pane padding="1rem">
                <ActiveFilters
                    tags={activeFilters}
                    removeTag={(tag) => setActiveFilters(activeFilters.filter((el) => el !== tag))}
                    removeAll={() => setActiveFilters([])}
                />
                <SelectTag
                    addTag={(tag) => {
                        if (tag && !activeFilters.includes(tag)) setActiveFilters((prev) => [...prev, tag]);
                    }}
                />
            </Pane>
        </Pane>
    );
};

export default FilterController;
