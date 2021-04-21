import { DataSourceID } from './DataSource';
import { VisualisationType } from './Metadata';
import { ChartCustomisationOption } from './VisualisationOption';

/**
 * General
 */

export type DashboardVisualisation = {
    dataSourceId: DataSourceID;
    visualisationType: VisualisationType;
    options: ChartCustomisationOption;
};
