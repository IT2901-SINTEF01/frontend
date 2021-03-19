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
                placeholder="Skriv inn ønsket tekst her (maks 150 tegn)"
                onChange={handleTextChange}
            />
        </Pane>
    );
};

export default VisualisationParameterSelector;
