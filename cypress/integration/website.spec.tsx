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
    it('adds new component', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('a').first().click();
        cy.contains('Legg til i ditt dashboard').click();
        cy.get('.dashboardItem').should('be.visible');
    });
    it('removes component', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('a').first().click();
        cy.contains('Legg til i ditt dashboard').click();
        cy.get('[data-icon=trash]').click();
        cy.get('.dashboardItem').should('not.exist');
    });
    it('goes to 404 if page does not exist', () => {
        cy.visit('/emilom');
        cy.contains('404').should('be.visible');
        cy.visit('/blauks');
        cy.contains('404').should('be.visible');
    });
});
