export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 4,
    LARGE = 6,
}

/**
 * Visualisation customisation
 */

// This is the set of options for all visualisations
export type BaseChartCustomisationOption = { description?: string; size: DashboardItemSize; paragraph?: string };

// Add a customisation option for each visualisation possible
export type LineChartCustomisationOption = BaseChartCustomisationOption;
export type ThresholdChartCustomisationOption = BaseChartCustomisationOption & { thresholdValue?: number };

// The union type of all available customisation option objects
export type ChartCustomisationOption = LineChartCustomisationOption | ThresholdChartCustomisationOption;
