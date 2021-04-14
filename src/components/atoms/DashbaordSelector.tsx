import { Select } from 'evergreen-ui';
import React from 'react';

const DashboardSelector: React.FC = () => (
    <Select defaultValue="default" maxWidth="16em">
        <option value="default">Standarddashboard</option>
    </Select>
);

export default DashboardSelector;
