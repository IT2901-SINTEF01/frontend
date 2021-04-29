import { PopulationInNorway } from '../queries/populationInNorway';
import { TaxAssesment } from '../queries/taxInNorway';
import LineChart from '../components/visualisations/LineChart';
import { ComponentProps } from 'react';
import { MetApiCompactAirTemperature } from '../queries/metApi';
import ThresholdChart from '../components/visualisations/ThresholdChart';
import { DataSourceID } from '../types/DataSource';
import { VisualisationType } from '../types/Metadata';
import { MappingFunction } from '../types/Chart';
import BarChart from '../components/visualisations/BarChart';

// A typed string with the path to the mapping function
export type VisualisationMappingFunctionPath = `${DataSourceID}-${VisualisationType}`;

type LineChartData = ComponentProps<typeof LineChart>['data'];
type ThresholdChartData = ComponentProps<typeof ThresholdChart>['data'];
type BarChartData = ComponentProps<typeof BarChart>['data'];

/**
 * SSB Population helpers
 */
const populationInNorwayToCartesian = (rawData: PopulationInNorway): LineChartData | ThresholdChartData => [
    rawData.populationsInNorway.dataset.value.flatMap((populationForYearList) =>
        populationForYearList.populationForYear.map((populationForYear) => ({
            x: populationForYear.year,
            y: populationForYear.population,
        })),
    ),
];

/**
 * MetAPI helpers
 */

const metAPICompactToCartesian = (rawData: MetApiCompactAirTemperature): LineChartData | ThresholdChartData => [
    rawData.forecast.forecastProperties.timeseries.map((value) => ({
        x: value.time,
        y: value.forecastData.instant.details.airTemperature,
    })),
];

/**
 * SSB Tax Assesment helpers
 */

const taxAssesmentToCartesuanList = (rawData: TaxAssesment): BarChartData => {
    const result: BarChartData = [[], [], []];
    rawData.taxAssessment.dataset.value.forEach((taxesForYearList) => {
        taxesForYearList.taxesForYear.forEach((value) => {
            result[0].push({
                x: value.year,
                y: value.averageDebt,
                name: 'Gjennomsnittlig gjeld',
            });
            result[1].push({
                x: value.year,
                y: value.averageBankDeposits,
                name: 'Gjennomsnittlig bankinnskudd',
            });
            result[2].push({
                x: value.year,
                y: value.averageGrossIncome,
                name: 'Gjennomsnittlig inntekt',
            });
        });
    });
    return result;
};

/**
 * { x: el.year, y: el.averageBankDeposits },
            { x: el.year, y: el.averageDebt },
 */

/**
 * Default export
 */
export default {
    // SSB
    [`${DataSourceID.SSB_POPULATION}-${VisualisationType.LINE}`]: populationInNorwayToCartesian,
    [`${DataSourceID.SSB_POPULATION}-${VisualisationType.THRESHOLD}`]: populationInNorwayToCartesian,
    [`${DataSourceID.SSB_POPULATION}-${VisualisationType.BAR}`]: populationInNorwayToCartesian,

    // METAPI
    [`${DataSourceID.MET_API_FORECAST}-${VisualisationType.LINE}`]: metAPICompactToCartesian,
    [`${DataSourceID.MET_API_FORECAST}-${VisualisationType.THRESHOLD}`]: metAPICompactToCartesian,

    // SSB_TAX
    [`${DataSourceID.SSB_TAX}-${VisualisationType.BAR}`]: taxAssesmentToCartesuanList,
} as Record<Partial<VisualisationMappingFunctionPath>, MappingFunction>;
