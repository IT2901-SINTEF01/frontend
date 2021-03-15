/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { addDays } from 'date-fns';
import { WEATHER_MET_API } from '../queries/metApi';
import { METADATA } from '../queries/metadata';
import faker from 'faker';

const visualisationTypes = ['barchart', 'thresholdchart', 'piechart', 'linechart'];

const randomListOfWords = () => {
    const wordList = faker.lorem.words(faker.random.number(7)).split(' ');
    return wordList.length !== 1 ? wordList : [];
};

const makeMetadata = () => {
    const allMetadata = [];
    for (let i = 0; i < 10; i++) {
        allMetadata.push({
            id: faker.random.uuid(),
            name: faker.name.title(),
            description: faker.lorem.paragraph(),
            published: faker.date.recent(),
            source: faker.internet.url(),
            tags: randomListOfWords(),
            updated: faker.date.recent(),
            visualisations: [
                {
                    type: faker.random.objectElement(visualisationTypes),
                    axes: {
                        x: {
                            name: faker.lorem.word(),
                        },
                        y: {
                            name: faker.lorem.word(),
                        },
                    },
                },
            ],
        });
    }

    return allMetadata;
};

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
