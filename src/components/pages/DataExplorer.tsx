import React from 'react';
import { Button, CircleArrowLeftIcon, Pane } from 'evergreen-ui';
import DataResultItems from '../organisms/DataResultItems';
import { useHistory } from 'react-router';
import FilterController from '../molecules/FilterController';

const DataExplorer: React.FC = () => {
    const history = useHistory();
    const sidebarSize = '18rem';

    return (
        <Pane marginLeft={sidebarSize}>
            <FilterController size={sidebarSize} />
            <Pane>
                <Button iconBefore={CircleArrowLeftIcon} appearance="minimal" onClick={() => history.push('/')}>
                    Tilbake til dashboard
                </Button>
                <DataResultItems />
            </Pane>
        </Pane>
    );
};

export default DataExplorer;
