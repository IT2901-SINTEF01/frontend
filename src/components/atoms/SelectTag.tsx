import React from 'react';
import { Combobox, Label } from 'evergreen-ui';
import { TAGS, AllTags } from '../../queries/metadata';
import { useQuery } from '@apollo/client';

type SelectTagProps = {
    addTag: (tag: string) => void;
};

const SelectTag: React.FC<SelectTagProps> = ({ addTag }) => {
    const { data } = useQuery<AllTags>(TAGS);

    const tags = data?.allMetadata.map((e) => e.tags).flat(1);
    if (!tags) return <p>Rip, ingen tags</p>;

    return (
        <>
            <Label htmlFor="choose-municipality-combobox">Filtrer på datatyper</Label>
            <Combobox
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
