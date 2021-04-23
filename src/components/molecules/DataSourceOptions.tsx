import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { DataSourceID, DataSourceVariables } from '../../types/DataSource';
import MunicipalityEditor from './MunicipalityEditor';
import { SSBPopulationVariables } from '../../queries/populationInNorway';
import LatLonInputSet from '../atoms/LatLonInputSet';
import { MetAPIVariables } from '../../queries/metApi';

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
                        state={props.state as SSBPopulationVariables}
                        setState={props.setState as Dispatch<SetStateAction<SSBPopulationVariables>>}
                    />
                );
            case DataSourceID.MET_API_FORECAST:
                return (
                    <LatLonInputSet
                        state={props.state as MetAPIVariables}
                        setState={props.setState as Dispatch<SetStateAction<MetAPIVariables>>}
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
