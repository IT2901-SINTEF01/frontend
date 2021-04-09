import React from 'react';

import { IVisualisation } from './Visualisation';
import { ChartEntry } from '../visualisation';
import { ssbPopulationInNorwayToTimeEntry } from '../../utils/mappingFunctions';
import { VisualisationType } from '../Metadata';
import Line from '../../components/charts/LineChart';
import dataSources from '../dataSources';
import { SSBPopulationDataSource } from '../dataSources/SSBPopulation';
import DataWrapper from '../../components/molecules/DataWrapper';

export class SSBPopulationLineChart implements IVisualisation<SSBPopulationDataSource, ChartEntry[], null> {
    mappingFunction = ssbPopulationInNorwayToTimeEntry;

    options = null;
    visualisationType = VisualisationType.LINE;

    render(): React.ReactChild {
        return (
            <DataWrapper mappingFunction={this.mappingFunction} query={this.dataSource.graphQLQuery}>
                {(data) => <Line data={data} height={300} width={200} />}
            </DataWrapper>
        );
    }

    dataSource = dataSources.ssbPopulationDataSource;
}
