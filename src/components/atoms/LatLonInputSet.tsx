import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MetAPIVariables } from '../../queries/metApi';
import { Button, TextInputField, toaster } from 'evergreen-ui';

type LatLonInputSetProps = {
    state: MetAPIVariables;
    setState: Dispatch<SetStateAction<MetAPIVariables>>;
};

const LatLonInputSet: React.FC<LatLonInputSetProps> = (props) => {
    const [state, setState] = useState<{ lat: string; lon: string }>({
        lat: String(props.state.lat),
        lon: String(props.state.lon),
    });

    // To avoid problems with difficult digit entry for user
    useEffect(() => {
        props.setState({ lat: Number(state.lat), lon: Number(state.lon) });
    }, [state]);

    const update = (key: keyof typeof state) => (e: ChangeEvent<HTMLInputElement>) =>
        setState((prevState) => ({ ...prevState, [key]: e.target.value }));

    const setToMyLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({ lat: String(position.coords.latitude), lon: String(position.coords.longitude) });
            },
            () => {
                toaster.warning('Du må tillate lokasjonstjenester for at denne tjenesten skal fungere.');
            },
        );
    };

    return (
        <>
            <TextInputField value={state.lat} label="Breddegrad" onChange={update('lat')} />
            <TextInputField value={state.lon} label="Lengdegrad" onChange={update('lon')} />
            <Button onClick={setToMyLocation}>Sett til min posisjon</Button>
        </>
    );
};

export default LatLonInputSet;
