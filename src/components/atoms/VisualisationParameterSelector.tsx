import React from 'react';
import { Pane, SelectField, Textarea, Label } from 'evergreen-ui';
import { DashboardItemSize } from '../../types/dashboard';

type VisualisationParameterSelectorProps = {
    setSize: (size: DashboardItemSize) => void;
    setParagraph: (text: string | undefined) => void;
};

const VisualisationParameterSelector: React.FC<VisualisationParameterSelectorProps> = ({ setSize, setParagraph }) => {
    const handleSizeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        switch (e.currentTarget.value as 'small' | 'medium' | 'large') {
            case 'small':
                return setSize(DashboardItemSize.SMALL);
            case 'medium':
                return setSize(DashboardItemSize.MEDIUM);
            case 'large':
                return setSize(DashboardItemSize.LARGE);
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParagraph(e.currentTarget.value);
    };

    return (
        <Pane height="100%" display="flex" flexDirection="column">
            <Pane height="32px" marginBottom="1rem" />
            <SelectField label="Velg størrelse" onChange={handleSizeChange} defaultValue="large">
                <option value="small">Liten</option>
                <option value="medium">Medium</option>
                <option value="large">Stor</option>
            </SelectField>
            <Label htmlFor="visualisation-text-input" marginBottom={12}>
                Legg til text (valgfritt)
            </Label>
            <Pane flex="1">
                <Textarea
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
