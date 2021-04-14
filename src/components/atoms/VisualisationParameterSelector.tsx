import React from 'react';
import { Pane, SelectField, Textarea, Label } from 'evergreen-ui';
import { DashboardItemSize } from '../../types/DashboardVisualisation';

type VisualisationParameterSelectorProps = {
    paragraph?: string;
    size: DashboardItemSize;
    setSize: (size: DashboardItemSize) => void;
    setParagraph: (text: string | undefined) => void;
};

const VisualisationParameterSelector: React.FC<VisualisationParameterSelectorProps> = ({
    size,
    setSize,
    paragraph,
    setParagraph,
}) => {
    const handleSizeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSize(+e.currentTarget.value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParagraph(e.currentTarget.value);
    };

    return (
        <Pane height="100%" display="flex" flexDirection="column">
            <SelectField label="Velg størrelse" onChange={handleSizeChange} defaultValue={size}>
                <option value={DashboardItemSize.SMALL}>Liten</option>
                <option value={DashboardItemSize.MEDIUM}>Medium</option>
                <option value={DashboardItemSize.LARGE}>Stor</option>
            </SelectField>
            <Label htmlFor="visualisation-text-input" marginBottom={12}>
                Legg til text (valgfritt)
            </Label>
            <Pane flex="1">
                <Textarea
                    value={paragraph}
                    id="visualisation-text-input"
                    maxLength={150}
                    placeholder="Skriv inn ønsket tekst her (maks 150 tegn)"
                    onChange={handleTextChange}
                    height="100%"
                    resize="none"
                />
            </Pane>
        </Pane>
    );
};

export default VisualisationParameterSelector;
