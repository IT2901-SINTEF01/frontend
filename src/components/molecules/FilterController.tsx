import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import ActiveFilters from '../atoms/ActiveFilters';
import SelectTag from '../atoms/SelectTag';
import { RootState } from '../../redux';
import filter from '../../redux/slices/filter';

type FilterControllerProps = {
    size: string;
};

const FilterController: React.FC<FilterControllerProps> = ({ size }) => {
    const selectedFilters = useSelector((state: RootState) => state.filter.filters);
    const dispatch = useDispatch();

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
                    tags={selectedFilters}
                    removeTag={(tag) => dispatch(filter.actions.remove(tag))}
                    removeAll={() => dispatch(filter.actions.reset())}
                />
                <SelectTag addTag={(tag) => dispatch(filter.actions.add(tag))} />
            </Pane>
        </Pane>
    );
};

export default FilterController;
