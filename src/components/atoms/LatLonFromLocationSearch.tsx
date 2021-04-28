import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MetAPIVariables } from '../../queries/metApi';
import { Button, Combobox, FormField, TextInputField, toaster } from 'evergreen-ui';
import { Address } from '../../types/Address';
import debounce from 'lodash.debounce';

type LatLonInputSetProps = {
    state: MetAPIVariables;
    setState: Dispatch<SetStateAction<MetAPIVariables>>;
};

type LabeledPosition = {
    label: string;
    lat: number;
    lon: number;
};

const LatLonFromLocationSearch: React.FC<LatLonInputSetProps> = (props) => {
    const [state, setState] = useState<{ lat: string; lon: string }>({
        lat: String(props.state.lat),
        lon: String(props.state.lon),
    });

    const [locations, setLocations] = useState<LabeledPosition[]>([]);

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

    const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const rawLocationData = await fetch(
            `https://ws.geonorge.no/adresser/v1/sok?sok=${e.target.value}&treffPerSide=10`,
        );
        const locationData: { adresser: Array<Address> } = await rawLocationData.json();
        const locationList = locationData.adresser.map((address) => {
            return {
                label: `${address.adressetekst} (${address.kommunenavn})`,
                lat: address.representasjonspunkt.lat,
                lon: address.representasjonspunkt.lon,
            };
        });
        setLocations(locationList);
    };

    const selectionChanged = (address: LabeledPosition | null): void => {
        if (address === null) return;
        setState({ lat: address.lat.toString(), lon: address.lon.toString() });
    };

    return (
        <>
            <FormField label="Adresse" marginBottom="24px">
                <Combobox
                    items={locations}
                    placeholder="Adresse"
                    onInput={debounce(onInputChange, 500)}
                    itemToString={(item) => item?.label ?? ''}
                    onChange={selectionChanged}
                />
            </FormField>
            <TextInputField disabled={true} value={state.lat} label="Breddegrad" onChange={update('lat')} />
            <TextInputField disabled={true} value={state.lon} label="Lengdegrad" onChange={update('lon')} />
            <Button onClick={setToMyLocation}>Sett til min posisjon</Button>
        </>
    );
};
export default LatLonFromLocationSearch;
