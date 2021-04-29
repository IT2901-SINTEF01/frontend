import LineChart from '../components/visualisations/LineChart';
import ThresholdChart from '../components/visualisations/ThresholdChart';
import { ComponentProps } from 'react';
import { RawQueryDataTypes } from '../queries';
import BarChart from '../components/visualisations/BarChart';

/**
 * Data input
 */

// Update this type when you add a new chart
export type Chart = typeof LineChart | typeof ThresholdChart | typeof BarChart;

export type VisualisationInput = ComponentProps<Chart>['data'];

export type MappingFunction = (rawData: RawQueryDataTypes) => VisualisationInput;
