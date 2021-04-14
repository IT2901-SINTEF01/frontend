import React from 'react';
import { Badge, Card, CrossIcon, IconButton, Text, Pane, Button } from 'evergreen-ui';

type ActiveFiltersProps = {
    tags: string[];
    removeTag: (tag: string) => void;
    removeAll: () => void;
};

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ tags, removeTag, removeAll }) => {
    return (
        <Pane>
            <Pane display="flex" justifyContent="space-between" alignItems="center">
                <Text size={300}>AKTIVE FILTERE</Text>
                <Button appearance="minimal" intent="none" onClick={removeAll}>
                    Nullstill
                </Button>
            </Pane>
            <Card border="default" display="flex" flexWrap="wrap" minHeight="4rem" padding="0.2rem">
                {tags.length === 0 && <Text color="muted">Ingen filtere valgt</Text>}
                {tags.map((tag) => (
                    <Badge key={tag} color="neutral" margin="0.5rem" display="flex" alignItems="center">
                        {tag}
                        <IconButton icon={CrossIcon} appearance="minimal" height="14" onClick={() => removeTag(tag)} />
                    </Badge>
                ))}
            </Card>
        </Pane>
    );
};

export default ActiveFilters;
