import { Pane, Select } from 'evergreen-ui';
import React from 'react';

const DashboardSelector: React.FC = () => (
    <Pane marginRight="2em">
        <Select defaultValue="foo">
            {/* Placeholders*/}
            <option value="foo">Mitt første dashboard som er veldig langt</option>
            <option value="bar">Mitt andre dashboard</option>
        </Select>
    </Pane>
);

export default DashboardSelector;
