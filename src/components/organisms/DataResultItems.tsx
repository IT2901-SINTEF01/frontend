import React, { useMemo } from 'react';
import { InlineAlert, Pane } from 'evergreen-ui';
import DataResultItem from '../molecules/DataResultItem';
import { useQuery } from '@apollo/client';
import { METADATA, AllMetadataResult } from '../../queries/metadata';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const DataResultItems: React.FC = () => {
    const { data, loading, error } = useQuery<AllMetadataResult>(METADATA);
    const activeFilters = useSelector((state: RootState) => state.filter.filters);
    const result = useMemo(() => {
        if (!data) return null;
        if (activeFilters.length === 0) return data.allMetadata;
        return data?.allMetadata.filter((el) => el.tags.some((v) => activeFilters.indexOf(v) !== -1));
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

    if (!result) {
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
