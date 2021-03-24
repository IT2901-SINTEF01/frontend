import { MetApiCompactAirTemperature } from '../queries/metApi';
import { TimeEntry } from '../types/visualisation';
import { PopulationInNorway } from '../queries/populationInNorway';

export const metApiCompactAirTemperatureToTimeEntry = (data: MetApiCompactAirTemperature): TimeEntry[] =>
    data.forecast.forecastProperties.timeseries.map((el) => ({
        time: el.time,
        value: el.forecastData.instant.details.airTemperature,
    }));

export const ssbPopulationInNorwayToTimeEntry = (data: PopulationInNorway): TimeEntry[] =>
    data.populationsInNorway.dataset.value.map((value) => ({
        time: new Date().toISOString(),
        value: value,
    }));

// Export all possible outcomes.
// Add "| typeof ..." when adding a new data source
export type RawDataMappedReturnValues = ReturnType<
    typeof metApiCompactAirTemperatureToTimeEntry | typeof ssbPopulationInNorwayToTimeEntry
>;
