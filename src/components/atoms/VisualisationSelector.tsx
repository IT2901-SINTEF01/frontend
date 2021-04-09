import React from 'react';
import { SelectField } from 'evergreen-ui';
import { VisualisationType } from '../../types/Metadata';

type Props = {
    default: VisualisationType;
    label: string;
    options: Record<string, string>;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const VisualisationSelector: React.FC<Props> = (props) => (
    <SelectField label={props.label} value={props.default} onChange={props.onChange}>
        {Object.entries(props.options).map(([label, value]) => (
            <option key={value} value={value}>
                {label}
            </option>
        ))}
    </SelectField>
);

export default VisualisationSelector;
