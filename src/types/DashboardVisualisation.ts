import { DataSourceID, DataSourceVariables } from './DataSource';
import { VisualisationType } from './Metadata';
import { ChartCustomisationOption } from './VisualisationOption';

/**
 * General
 */

export type DashboardVisualisation = {
    id: string; // UUID
    dataSourceId: DataSourceID;
    visualisationType: VisualisationType;
    options: ChartCustomisationOption;
    variables: DataSourceVariables;
};
