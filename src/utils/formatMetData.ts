import { MetApiCompactAirTemperature } from '../queries/metApi';
import { TimeEntry } from '../components/atoms/ThresholdChart';

export const formatMetData = (data: MetApiCompactAirTemperature): TimeEntry[] =>
    data.forecast.forecastProperties.timeseries.map((el) => ({
        time: el.time,
        value: el.forecastData.instant.details.airTemperature,
    }));
