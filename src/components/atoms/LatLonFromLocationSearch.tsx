import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { MetAPIVariables } from '../../queries/metApi';
import { Button, Combobox, TextInputField, toaster } from 'evergreen-ui';
import { Address } from '../../types/Address';
import debounce from 'lodash.debounce';

type LatLonInputSetProps = {
    state: MetAPIVariables;
    setState: Dispatch<SetStateAction<MetAPIVariables>>;
};

const LatLonFromLocationSearch: React.FC<LatLonInputSetProps> = (props) => {
    const [state, setState] = useState<{ lat: string; lon: string }>({
        lat: String(props.state.lat),
        lon: String(props.state.lon),
    });

    const [locations, setLocations] = useState<string[]>([]);

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
    // TODO: This is a SyntheticBaseEvent, don't know how to import that type. Any ideas, August?
    const onInputChange = async (e: any): Promise<void> => {
        const locationData = await fetch(
            `https://ws.geonorge.no/adresser/v1/sok?sok=${e.target.value}&treffPerSide=10`,
        ).then((res) => res.json());
        // TODO: Don't know how we should handle errors like these
        //.catch((err) => console.log(err));
        if (locationData.adresser.length === 0) {
            setLocations([]);
            return;
        }
        const locationList = locationData.adresser.map((address: Address) => {
            return {
                label: `${address.adressetekst} (${address.kommunenavn})`,
                lat: address.representasjonspunkt.lat,
                lon: address.representasjonspunkt.lon,
            };
        });
        setLocations(locationList);
    };

    const inputChanged = (address: { label: string; lat: number; lon: number }): void => {
        if (address === null) return;
        setState({ lat: address.lat.toString(), lon: address.lon.toString() });
    };

    return (
        <>
            <Combobox
                items={locations}
                placeholder="Adresse"
                onInput={debounce(onInputChange, 500)}
                itemToString={(item) => (item ? item.label : '')}
                onChange={inputChanged}
            />
            <TextInputField value={state.lat} label="Breddegrad" onChange={update('lat')} />
            <TextInputField value={state.lon} label="Lengdegrad" onChange={update('lon')} />
            <Button onClick={setToMyLocation}>Sett til min posisjon</Button>
        </>
    );
};
export default LatLonFromLocationSearch;
