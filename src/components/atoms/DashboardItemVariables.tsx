import React from 'react';
import { DataSourceID, DataSourceVariables } from '../../types/DataSource';
import { Paragraph } from 'evergreen-ui';
import { SSBPopulationVariables } from '../../queries/populationInNorway';
import { MetAPIVariables } from '../../queries/metApi';
import { convertDMS } from '../../utils/latLonDMS';

type DashboardItemVariablesProps = {
    dataSourceId: DataSourceID;
    variables: DataSourceVariables;
};

const DashboardItemVariables: React.FC<DashboardItemVariablesProps> = (props) => {
    let content: string;

    switch (props.dataSourceId) {
        case DataSourceID.SSB_POPULATION:
            const ssbVars = props.variables as SSBPopulationVariables;
            content = `Befolkning i ${ssbVars.municipalities[0]}.`;
            break;
        case DataSourceID.MET_API_FORECAST:
            const metApiVars = props.variables as MetAPIVariables;
            content = `Værmelding for ${convertDMS(metApiVars.lat, metApiVars.lon)}.`;
            break;
    }

    return <Paragraph size={300}>{content}</Paragraph>;
};

export default DashboardItemVariables;
