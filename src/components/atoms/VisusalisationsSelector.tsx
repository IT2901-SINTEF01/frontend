import React from 'react';
import { SelectField } from 'evergreen-ui';

type Props = {
    label: string;
    options: Record<string, string>;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const VisualisationsSelector: React.FC<Props> = (props) => (
    <SelectField label={props.label} defaultValue={Object.values(props.options)[0]} onChange={props.onChange}>
        {Object.entries(props.options).map(([label, value]) => (
            <option key={value} value={value}>
                {label}
            </option>
        ))}
    </SelectField>
);

export default VisualisationsSelector;
