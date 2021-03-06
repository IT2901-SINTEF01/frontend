/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { addDays } from 'date-fns';
import { WEATHER_MET_API } from '../queries/metApi';
import { METADATA, MetadataEntry } from '../queries/metadata';
import faker from 'faker';
import { VisualisationType } from '../types/Metadata';
import { DataSourceID } from '../types/DataSource';

const randomListOfWords = (count: number) => {
    const wordList = faker.random.words(count % 6).split(' ');
    return wordList[0] ? wordList : [];
};

export const makeMetadata = (): MetadataEntry[] => {
    return Object.keys(new Array(10).fill(null)).map((i) => ({
        id: faker.random.uuid(),
        datasourceId: faker.random.arrayElement(Object.values(DataSourceID)),
        name: faker.hacker.phrase(),
        description: faker.lorem.paragraph(),
        published: faker.date.recent().toISOString(),
        source: faker.internet.url(),
        tags: randomListOfWords(Number(i)),
        updated: faker.date.recent().toISOString(),
        visualisations: [
            {
                type: VisualisationType.LINE,
                threshold: 0,
                axes: {
                    x: {
                        name: faker.lorem.word(),
                        type: 'date',
                    },
                    y: {
                        name: faker.lorem.word(),
                        limit: [0, 100],
                        type: 'date',
                    },
                },
            },
        ],
    }));
};

export const makeTimeseries = () => {
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
            query: METADATA,
        },
        result: {
            data: {
                allMetadata: makeMetadata(),
            },
        },
    },
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
