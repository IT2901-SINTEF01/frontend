import React, { ReactNode, useEffect, useState } from 'react';
import { ApolloError, DocumentNode, useQuery } from '@apollo/client';
import { TimeEntry } from '../atoms/ThresholdChart';
import { formatMetData } from '../../utils/formatMetData';

export type DataWrapperProps = {
    query: DocumentNode;
    children: (args: { data: TimeEntry[]; loading: boolean; error: ApolloError | undefined }) => ReactNode;
};

const DataWrapper: React.FC<DataWrapperProps> = ({ children, query }) => {
    const [formattedData, setFormattedData] = useState<TimeEntry[]>([{ time: '2021-02-18T12:00:00Z', value: 5 }]); //test:)
    const { loading, error, data } = useQuery(query);

    useEffect(() => {
        if (data) setFormattedData(formatMetData(data));
    }, [data]);

    return <>{children({ data: formattedData, loading, error })}</>;
};

export default DataWrapper;
