import React, { useState } from 'react';
import { Pane, SelectField, Switch, Textarea } from 'evergreen-ui';
import { DashboardItemSize } from '../../types/dashboard';

type VisualisationParameterSelectorProps = {
    setSize: (size: DashboardItemSize) => void;
    setParagraph: (text: string | undefined) => void;
};

const VisualisationParameterSelector: React.FC<VisualisationParameterSelectorProps> = ({ setSize, setParagraph }) => {
    const [withText, setWithText] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>();

    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.currentTarget.value) {
            case 'small':
                setSize(DashboardItemSize.SMALL);
                break;
            case 'medium':
                setSize(DashboardItemSize.MEDIUM);
                break;
            case 'large':
                setSize(DashboardItemSize.LARGE);
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
        <Pane>
            <SelectField label="Velg størrelse" onChange={handleSizeChange}>
                <option value="small">Liten</option>
                <option value="medium">Medium</option>
                <option value="large" selected>
                    Stor
                </option>
            </SelectField>
            <Switch checked={withText} onChange={handleSwitchChange} />
            <Textarea
                disabled={!withText}
                placeholder="Skriv inn ønsket tekst her (max 150 tegn)"
                onChange={handleTextChange}
            />
        </Pane>
    );
};

export default VisualisationParameterSelector;
