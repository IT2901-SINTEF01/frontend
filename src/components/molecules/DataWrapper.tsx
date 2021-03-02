import React, { ReactNode, useEffect, useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { TimeEntry } from '../atoms/ThresholdChart';
import { formatMetData } from '../../utils/formatMetData';

export type DataWrapperProps = {
    query: DocumentNode;
    children: (args: { data: TimeEntry[] }) => ReactNode;
};

const DataWrapper: React.FC<DataWrapperProps> = ({ children, query }) => {
    const [formattedData, setFormattedData] = useState<TimeEntry[]>([]);
    const { loading, error, data } = useQuery(query);

    useEffect(() => {
        if (data) setFormattedData(formatMetData(data));
    }, [data]);

    if (loading) {
        return <p>Loading...</p>; //Change to loading atom
    }
    if (error) {
        return <p>Error :/</p>; //Change to error atom
    }

    return <>{children({ data: formattedData })}</>;
};

export default DataWrapper;
