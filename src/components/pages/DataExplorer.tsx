import React from 'react';
import { Button, CircleArrowLeftIcon, InlineAlert, Pane } from 'evergreen-ui';
import DataResultItem from '../molecules/DataResultItem';
import { useQuery } from '@apollo/client';
import { METADATA, AllMetadataResult } from '../../queries/metadata';
import Loading from '../atoms/Loading';
import ErrorMessage from '../atoms/ErrorMessage';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const DataExplorer: React.FC = () => {
    const { data, loading, error } = useQuery<AllMetadataResult>(METADATA);
    const history = useHistory();

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
        <>
            <Button iconBefore={CircleArrowLeftIcon} appearance="minimal" onClick={() => history.push('/')}>
                Tilbake til dashboard
            </Button>
            {data.allMetadata.map((el) => (
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
        </>
    );
};

export default DataExplorer;
