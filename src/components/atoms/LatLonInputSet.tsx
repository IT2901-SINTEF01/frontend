import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MetAPIVariables } from '../../queries/metApi';
import { TextInputField } from 'evergreen-ui';

type LatLonInputSetProps = {
    state: MetAPIVariables;
    setState: Dispatch<SetStateAction<MetAPIVariables>>;
};

const LatLonInputSet: React.FC<LatLonInputSetProps> = (props) => {
    const [state, setState] = useState<{ lat: string; lon: string }>({ lat: '63', lon: '11' });

    // To avoid problems with difficult digit entry for user
    useEffect(() => {
        props.setState({ lat: Number(state.lat), lon: Number(state.lon) });
    }, [state]);

    const update = (key: keyof typeof state) => (e: ChangeEvent<HTMLInputElement>) =>
        setState((prevState) => ({ ...prevState, [key]: e.target.value }));

    return (
        <>
            <TextInputField value={state.lat} label="Breddegrad" onChange={update('lat')} />
            <TextInputField value={state.lon} label="Lengdegrad" onChange={update('lon')} />
        </>
    );
};

export default LatLonInputSet;
