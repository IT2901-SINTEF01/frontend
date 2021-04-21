import React, { useState } from 'react';
import { Button, CircleArrowLeftIcon, Pane } from 'evergreen-ui';
import DataResultItems from '../organisms/DataResultItems';
import { useHistory } from 'react-router';
import FilterController from '../molecules/FilterController';

const DataExplorer: React.FC = () => {
    const history = useHistory();
    const sidebarSize = '20rem';
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    return (
        <Pane marginLeft={sidebarSize}>
            <FilterController size={sidebarSize} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
            <Pane>
                <Button iconBefore={CircleArrowLeftIcon} appearance="minimal" onClick={() => history.push('/')}>
                    Tilbake til dashboard
                </Button>
                <DataResultItems activeFilters={activeFilters} />
            </Pane>
        </Pane>
    );
};

export default DataExplorer;
