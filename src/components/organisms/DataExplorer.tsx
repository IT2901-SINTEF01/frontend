import React from 'react';
import { Pane } from 'evergreen-ui';
import DataResultItem from '../molecules/DataResultItem';
import { useQuery } from '@apollo/client';
import { METADATA, MetadataEntry } from '../../queries/metadata';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';

const DataExplorer: React.FC = () => {
    const { data, loading, error } = useQuery(METADATA);

    if (loading) {
        return (
            <Pane height="100vh">
                <Loading size={50} />
            </Pane>
        );
    }

    if (error) {
        return (
            <Pane height="100vh">
                <ErrorMessage message="Det oppsto en feil under henting av datasett" moreInfo={error.message} />
            </Pane>
        );
    }

    return (
        <Pane>
            {data.allMetadata.map((el: MetadataEntry) => (
                <Pane margin="2rem" key={el.id}>
                    <DataResultItem title={el.name} description={el.description} tags={el.tags} />
                </Pane>
            ))}
        </Pane>
    );
};

export default DataExplorer;
