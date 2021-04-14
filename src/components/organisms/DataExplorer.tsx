import React from 'react';
import { InlineAlert, Pane } from 'evergreen-ui';
import DataResultItem from '../molecules/DataResultItem';
import { useQuery } from '@apollo/client';
import { METADATA, AllMetadataResult } from '../../queries/metadata';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';
import { Link } from 'react-router-dom';

const DataExplorer: React.FC = () => {
    const { data, loading, error } = useQuery<AllMetadataResult>(METADATA);

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

    if (!data) {
        return (
            <Pane height="100%" display="flex" justifyContent="center" alignItems="center">
                <InlineAlert intent="warning">Vi fant dessverre ingen datasett knyttet til ditt søk.</InlineAlert>
            </Pane>
        );
    }

    return (
        <Pane>
            {data.allMetadata.map((el) => (
                <Pane margin="2rem" key={el.id}>
                    <Link to={`/explore/edit/${el.id}`}>
                        <DataResultItem
                            title={el.name}
                            description={el.description}
                            tags={el.tags}
                            visualisationType={el.visualisations[0].type}
                            yLabel={el.visualisations[0].axes.x.name}
                            xLabel={el.visualisations[0].axes.y.name}
                        />
                    </Link>
                </Pane>
            ))}
        </Pane>
    );
};

export default DataExplorer;
