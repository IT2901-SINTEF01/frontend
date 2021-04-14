import { DataSourceID } from './DataSource';
import { VisualisationType } from './Metadata';

/**
 * Visualisation customisation
 */

// This is the set of options for all visualisations
export type BaseChartCustomisationOption = { description?: string };

// Add a customisation option for each visualisation possible
export type LineChartCustomisationOption = BaseChartCustomisationOption;
export type ThresholdChartCustomisationOption = BaseChartCustomisationOption & { thresholdValue?: number };

// The union type of all available customisation option objects
export type ChartCustomisationOption = LineChartCustomisationOption | ThresholdChartCustomisationOption;

/**
 * General
 */

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 4,
    LARGE = 6,
}

export type DashboardVisualisation = {
    dataSourceId: DataSourceID;
    visualisationType: VisualisationType;
    options: ChartCustomisationOption;
};
