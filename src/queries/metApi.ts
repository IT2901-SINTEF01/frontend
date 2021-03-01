import { gql } from '@apollo/client';

//Format: What where
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
