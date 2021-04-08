import { MetApiCompactAirTemperature } from '../queries/metApi';
import { ChartEntry } from '../types/visualisation';
import { PopulationInNorway } from '../queries/populationInNorway';

export const metApiCompactAirTemperatureToTimeEntry = (data: MetApiCompactAirTemperature): ChartEntry[] =>
    data.forecast.forecastProperties.timeseries.map((el) => ({
        x: el.time,
        y: el.forecastData.instant.details.airTemperature,
    }));

export const ssbPopulationInNorwayToTimeEntry = (data: PopulationInNorway): ChartEntry[] =>
    data.populationsInNorway.dataset.value.flatMap((value) =>
        value.populationForYear.map((popForYear) => ({ x: popForYear.year, y: popForYear.population })),
    );

// Export all possible outcomes.
// Add "| typeof ..." when adding a new data source
export type RawDataMappedReturnValues = ReturnType<
    typeof metApiCompactAirTemperatureToTimeEntry | typeof ssbPopulationInNorwayToTimeEntry
>;
