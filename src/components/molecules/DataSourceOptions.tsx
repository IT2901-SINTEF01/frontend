import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { DataSourceID, DataSourceVariables } from '../../types/DataSource';
import MunicipalityEditor from './MunicipalityEditor';
import { SSBPopulationVariables } from '../../queries/populationInNorway';
import { MetAPIVariables } from '../../queries/metApi';
import LatLonFromLocationSearch from '../atoms/LatLonFromLocationSearch';
import { MUNICIPALITIES_IN_NORWAY, MUNICIPALITIES_IN_NORWAY_TAX } from '../../queries/municipalitiesInNorway';

type DataSourceOptionsProps = {
    state: DataSourceVariables;
    setState: Dispatch<SetStateAction<DataSourceVariables>>;

    dataSource: DataSourceID;
};

const DataSourceOptions: React.FC<DataSourceOptionsProps> = (props) => {
    const child = useMemo(() => {
        switch (props.dataSource) {
            case DataSourceID.SSB_POPULATION:
                return (
                    <MunicipalityEditor
                        query={MUNICIPALITIES_IN_NORWAY}
                        state={props.state as SSBPopulationVariables}
                        setState={props.setState as Dispatch<SetStateAction<SSBPopulationVariables>>}
                    />
                );
            case DataSourceID.MET_API_FORECAST:
                return (
                    <LatLonFromLocationSearch
                        state={props.state as MetAPIVariables}
                        setState={props.setState as Dispatch<SetStateAction<MetAPIVariables>>}
                    />
                );
            case DataSourceID.SSB_TAX:
                return (
                    <MunicipalityEditor
                        query={MUNICIPALITIES_IN_NORWAY_TAX}
                        state={props.state as SSBPopulationVariables}
                        setState={props.setState as Dispatch<SetStateAction<SSBPopulationVariables>>}
                    />
                );
        }
    }, [props]);

    return (
        <Pane gridColumn="span 2">
            <Heading size={500} marginBottom="1em">
                Parametere
            </Heading>

            {child}
        </Pane>
    );
};

export default DataSourceOptions;
