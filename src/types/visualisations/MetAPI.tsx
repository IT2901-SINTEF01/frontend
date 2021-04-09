import React from 'react';

import { IVisualisation } from './Visualisation';
import { ChartEntry } from '../visualisation';
import { metApiCompactAirTemperatureToTimeEntry } from '../../utils/mappingFunctions';
import { VisualisationType } from '../Metadata';
import { MetAPIDataSource } from '../dataSources/MetAPI';
import ThresholdChart from '../../components/charts/ThresholdChart';
import dataSources from '../dataSources';
import DataWrapper from '../../components/molecules/DataWrapper';

export class MetAPIThresholdChart implements IVisualisation<MetAPIDataSource, ChartEntry[], null> {
    mappingFunction = metApiCompactAirTemperatureToTimeEntry;

    options = null;
    visualisationType = VisualisationType.THRESHOLD;

    render(): React.ReactChild {
        return (
            <DataWrapper mappingFunction={this.mappingFunction} query={this.dataSource.graphQLQuery}>
                {(data) => <ThresholdChart data={data} height={300} width={200} />}
            </DataWrapper>
        );
    }

    dataSource = dataSources.metAPIDataSource;
}
