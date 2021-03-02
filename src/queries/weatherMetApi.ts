import { gql } from '@apollo/client';

export const WEATHER_MET_API = gql`
    query {
        forecast {
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
