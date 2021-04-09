import { SSBPopulationDataSource } from './SSBPopulation';
import { MetAPIDataSource } from './MetAPI';

const dataSources = {
    ssbPopulationDataSource: new SSBPopulationDataSource(),
    metAPIDataSource: new MetAPIDataSource(),
};

export default dataSources;

export type AnyDataSource = typeof dataSources[keyof typeof dataSources];
