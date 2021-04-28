import React from 'react';
import { Combobox, Label } from 'evergreen-ui';
import { TAGS, AllTags } from '../../queries/metadata';
import { useQuery } from '@apollo/client';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

type SelectTagProps = {
    addTag: (tag: string) => void;
};

const SelectTag: React.FC<SelectTagProps> = ({ addTag }) => {
    const { data, error, loading } = useQuery<AllTags>(TAGS);
    const tags = data?.allMetadata.map((e) => e.tags).flat(1);

    if (error) return <ErrorMessage message="Noe gikk galt, finner ikke filter" />;

    if (loading || !tags) return <Loading size={30} />;

    return (
        <>
            <Label htmlFor="choose-municipality-combobox">Filtrer på datatyper</Label>
            <Combobox
                paddingTop="0.5rem"
                id="choose-municipality-combobox"
                width="100%"
                openOnFocus
                items={tags}
                onChange={(selected) => addTag(selected)}
                placeholder="Velg datatype"
            />
        </>
    );
};

export default SelectTag;
