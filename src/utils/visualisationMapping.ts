// import { DataSourceID } from '../types/DataSource';
// import { VisualisationType } from '../types/Metadata';
import { PopulationInNorway } from '../queries/populationInNorway';
import LineChart from '../components/visualisations/LineChart';
import { ComponentProps } from 'react';
import { MetApiCompactAirTemperature } from '../queries/metApi';
import ThresholdChart from '../components/visualisations/ThresholdChart';
import { DataSourceID } from '../types/DataSource';
import { VisualisationType } from '../types/Metadata';
import { MappingFunction } from '../types/Chart';

// A typed string with the path to the mapping function
export type VisualisationMappingFunctionPath = `${DataSourceID}-${VisualisationType}`;

type LineChartData = ComponentProps<typeof LineChart>['data'];
type ThresholdChartData = ComponentProps<typeof ThresholdChart>['data'];

/**
 * SSB Population helpers
 */
const populationInNorwayToCartesian = (rawData: PopulationInNorway): LineChartData | ThresholdChartData =>
    rawData.populationsInNorway.dataset.value.flatMap((populationForYearList) =>
        populationForYearList.populationForYear.map((populationForYear) => ({
            x: populationForYear.year,
            y: populationForYear.population,
        })),
    );

/**
 * MetAPI helpers
 */

const metAPICompactToCartesian = (rawData: MetApiCompactAirTemperature): LineChartData | ThresholdChartData =>
    rawData.forecast.forecastProperties.timeseries.map((value) => ({
        x: value.time,
        y: value.forecastData.instant.details.airTemperature,
    }));

/**
 * Default export
 */
export default {
    // SSB
    [`${DataSourceID.SSB_POPULATION}-${VisualisationType.LINE}`]: populationInNorwayToCartesian,
    [`${DataSourceID.SSB_POPULATION}-${VisualisationType.THRESHOLD}`]: populationInNorwayToCartesian,

    // METAPI
    [`${DataSourceID.MET_API_FORECAST}-${VisualisationType.LINE}`]: metAPICompactToCartesian,
    [`${DataSourceID.MET_API_FORECAST}-${VisualisationType.THRESHOLD}`]: metAPICompactToCartesian,
} as Record<Partial<VisualisationMappingFunctionPath>, MappingFunction>;
