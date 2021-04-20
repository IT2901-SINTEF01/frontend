import React, { useMemo } from 'react';
import { InlineAlert, Pane } from 'evergreen-ui';
import DataResultItem from '../molecules/DataResultItem';
import { useQuery } from '@apollo/client';
import { METADATA, AllMetadataResult } from '../../queries/metadata';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';
import { Link } from 'react-router-dom';

type DataResultItemsProps = {
    activeFilters: string[];
};

const DataResultItems: React.FC<DataResultItemsProps> = ({ activeFilters }) => {
    const { data, loading, error } = useQuery<AllMetadataResult>(METADATA);
    const result = useMemo(() => {
        if (!data) return null;
        if (activeFilters.length === 0) return data.allMetadata;
        return data.allMetadata.filter((el) => el.tags.some((v) => activeFilters.includes(v)));
    }, [data, activeFilters]);

    if (loading) {
        return (
            <Pane height="100%">
                <Loading size={50} />
            </Pane>
        );
    }

    if (error) {
        return (
            <Pane height="100%">
                <ErrorMessage
                    message="Det oppsto en feil under henting av tilgjengelige datasett"
                    moreInfo={error.message}
                />
            </Pane>
        );
    }

    if (!result || result.length === 0) {
        return (
            <Pane height="100%" display="flex" justifyContent="center" alignItems="center">
                <InlineAlert intent="warning">Vi fant dessverre ingen datasett knyttet til ditt søk.</InlineAlert>
            </Pane>
        );
    }

    return (
        <Pane height="100%">
            {result.map((el) => (
                <Pane width="90%" margin="auto" marginTop="2rem" key={el.id} backgroundColor="white">
                    <Link to={`/explore/edit/${el.id}`}>
                        <DataResultItem
                            title={el.name}
                            description={el.description}
                            tags={el.tags}
                            visualisationType={el.visualisations[0].type}
                        />
                    </Link>
                </Pane>
            ))}
        </Pane>
    );
};

export default DataResultItems;
