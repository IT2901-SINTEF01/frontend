export interface MetApiCompact {
    data: {
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
}
