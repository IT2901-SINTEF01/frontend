/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { addDays } from 'date-fns';
import { WEATHER_MET_API } from '../queries/metApi';

const makeTimeseries = () => {
    const timeseries = [];
    const dayOne = new Date();

    for (let i = 0; i < 50; i++) {
        timeseries.push({
            time: addDays(dayOne, i),
            forecastData: {
                instant: { details: { airTemperature: Math.floor(Math.random() * 10 - Math.random() * 10) } },
            },
        });
    }

    return timeseries;
};

export default [
    {
        request: {
            query: WEATHER_MET_API,
        },
        result: {
            data: {
                forecast: {
                    forecastProperties: {
                        meta: {
                            updatedAt: String(Math.random() * 1000),
                        },
                        timeseries: makeTimeseries(),
                    },
                },
            },
        },
    },
];
