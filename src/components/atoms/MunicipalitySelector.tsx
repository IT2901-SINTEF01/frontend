import React from 'react';
import { SelectField } from 'evergreen-ui';

type Props = {
    label: string;
    options: [string, string][];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const MunicipalitySelector: React.FC<Props> = (props) => (
    <SelectField label={props.label} defaultValue={'Oslo'} onChange={props.onChange}>
        {Object.entries(props.options).map((value) => (
            <option key={value[1][0]} value={value[1][0]}>
                {value[1][1]}
            </option>
        ))}
    </SelectField>
);

export default MunicipalitySelector;
