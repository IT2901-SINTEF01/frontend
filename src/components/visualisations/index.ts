import { VisualisationType } from '../../types/Metadata';
import { Chart } from '../../types/Chart';
import LineChart from './LineChart';
import ThresholdChart from './ThresholdChart';
import BarChart from './BarChart';

export default {
    [VisualisationType.LINE]: LineChart,
    [VisualisationType.THRESHOLD]: ThresholdChart,
    [VisualisationType.BAR]: BarChart,
} as Record<VisualisationType, Chart>;
