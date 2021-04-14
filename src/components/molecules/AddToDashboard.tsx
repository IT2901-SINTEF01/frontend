import React from 'react';
import AddToDashboardButton from '../atoms/AddToDashboardButton';

const AddToDashboard: React.FC = () => {
    return <AddToDashboardButton added={true} onAdd={() => null} onRemove={() => null} />;
};

export default AddToDashboard;
