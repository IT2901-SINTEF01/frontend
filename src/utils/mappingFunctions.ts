import { MetApiCompactAirTemperature } from '../queries/metApi';
import { TimeEntry } from '../components/atoms/ThresholdChart';

export const metApiCompactAirTemperatureToTimeEntry = (data: MetApiCompactAirTemperature): TimeEntry[] =>
    data.forecast.forecastProperties.timeseries.map((el) => ({
        time: el.time,
        value: el.forecastData.instant.details.airTemperature,
    }));

// Export all possible outcomes.
// Add "| typeof ..." when adding a new data source
export type RawDataMappedReturnValues = ReturnType<typeof metApiCompactAirTemperatureToTimeEntry>;
