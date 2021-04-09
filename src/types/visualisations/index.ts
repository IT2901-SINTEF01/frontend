import { SSBPopulationLineChart } from './SSBPopulation';
import { MetAPIThresholdChart } from './MetAPI';

const visualisations = {
    SSBPopulationLineChart: new SSBPopulationLineChart(),
    MetAPIThresholdChart: new MetAPIThresholdChart(),
};
export default visualisations;

export type Visualisation = typeof visualisations[keyof typeof visualisations];
