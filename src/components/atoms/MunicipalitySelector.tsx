import React from 'react';
import { SelectField } from 'evergreen-ui';

type Props = {
    label: string;
    options: [string, string][];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    defaultValue: string;
};

const MunicipalitySelector: React.FC<Props> = (props) => (
    <SelectField label={props.label} onChange={props.onChange} defaultValue={props.defaultValue}>
        {Object.values(props.options).map(([municipalityKey, municipalityName]) => (
            <option key={municipalityKey} value={municipalityKey}>
                {municipalityName}
            </option>
        ))}
    </SelectField>
);

export default MunicipalitySelector;
