import { gql } from '@apollo/client';

export const WEATHER_MET_API = gql`
    query($lat: Float, $lon: Float) {
        forecast(lat: $lat, lon: $lon) {
            forecastProperties {
                meta {
                    updatedAt
                }
                timeseries {
                    time
                    forecastData {
                        instant {
                            details {
                                airTemperature
                            }
                        }
                    }
                }
            }
        }
    }
`;

export type MetApiCompactAirTemperature = {
    forecast: {
        forecastProperties: {
            meta: {
                updatedAt: string;
            };
            timeseries: {
                time: string;
                forecastData: {
                    instant: {
                        details: {
                            airTemperature: number;
                        };
                    };
                };
            }[];
        };
    };
};

export type MetAPIVariables = {
    lat: number;
    lon: number;
};
