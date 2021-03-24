import { makeMetadata, makeTimeseries } from '../../src/mockdata/mocks';

describe('Dashboard', () => {
    beforeEach(() => {
        cy.intercept('POST', '/graphql', (req) => {
            if (req.body.query.includes('allMetadata')) {
                req.alias = 'METADATA';
                req.reply({ data: { allMetadata: makeMetadata() } });
            } else if (req.body.query.includes('forecast')) {
                req.alias = 'WEATHER_MET_API';
                req.reply({
                    data: {
                        forecast: {
                            forecastProperties: {
                                meta: { updatedAt: String(Math.random() * 1000) },
                                timeseries: makeTimeseries(),
                            },
                        },
                    },
                });
            }
        });
    });

    it('successfully loads', () => {
        cy.visit('/');
    });
});

export {};
