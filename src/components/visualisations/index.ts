import { VisualisationType } from '../../types/Metadata';
import { Chart } from '../../types/Chart';
import LineChart from './LineChart';
import ThresholdChart from './ThresholdChart';

export default {
    [VisualisationType.LINE]: LineChart,
    [VisualisationType.THRESHOLD]: ThresholdChart,
} as Record<VisualisationType, Chart>;
