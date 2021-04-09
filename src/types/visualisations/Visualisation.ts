import { VisualisationType } from '../Metadata';
import { IDataSource } from '../dataSources/DataSource';
import { AnyDataSource } from '../dataSources';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IVisualisation<K extends IDataSource<any, any>, VisualisationInput, Options> {
    visualisationType: VisualisationType;
    options: Options; // y-axis label, steps, colors, ...
    dataSource: AnyDataSource;

    // From graphql output to cleaned and ready data
    mappingFunction(inputData: NonNullable<ReturnType<K['useQuery']>['data']>): VisualisationInput;

    render(options: Options): React.ReactChild;
}
