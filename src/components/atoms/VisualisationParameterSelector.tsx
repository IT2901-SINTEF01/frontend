import React, { useState } from 'react';
import { Pane, SelectField, Switch, Textarea, Heading, Text } from 'evergreen-ui';
import { DashboardItemSize } from '../../types/dashboard';

type VisualisationParameterSelectorProps = {
    setSize: (size: DashboardItemSize) => void;
    setParagraph: (text: string | undefined) => void;
};

const VisualisationParameterSelector: React.FC<VisualisationParameterSelectorProps> = ({ setSize, setParagraph }) => {
    const [withText, setWithText] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>();

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

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWithText(e.currentTarget.checked);
        if (!withText) {
            setParagraph(inputText);
        } else {
            setParagraph(undefined);
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value);
        setParagraph(e.currentTarget.value);
    };

    return (
        <Pane height="100%" display="flex" flexDirection="column">
            <Pane height="32px" marginBottom="1rem" />
            <SelectField label="Velg størrelse" onChange={handleSizeChange}>
                <option value="small">Liten</option>
                <option value="medium">Medium</option>
                <option value="large" selected>
                    Stor
                </option>
            </SelectField>
            <Heading size={400} marginBottom="1rem">
                Legg til tekst
            </Heading>
            <Pane display="flex" marginBottom="1rem">
                <Switch checked={withText} onChange={handleSwitchChange} marginRight="0.5rem" />
                {!withText && <Text size={300}>Ingen tekst</Text>}
            </Pane>
            <Pane flex="1">
                <Textarea
                    disabled={!withText}
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
