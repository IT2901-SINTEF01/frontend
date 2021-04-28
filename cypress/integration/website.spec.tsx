import { makeMetadata, makeTimeseries } from '../../src/mockdata/mocks';
const mockedMetadata = makeMetadata();

describe('Dashboard', () => {
    beforeEach(() => {
        cy.intercept('POST', '/graphql', (req) => {
            if (req.body.query.includes('allMetadata')) {
                req.alias = 'METADATA';
                req.reply({
                    data: {
                        allMetadata: mockedMetadata,
                    },
                });
            } else if (req.body.query.includes('forecast')) {
                req.alias = 'getData';
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
            } else if (req.body.query.includes('populationsInNorway')) {
                req.alias = 'getData';
                req.reply({
                    data: {
                        populationsInNorway: {
                            dataset: {
                                value: [
                                    {
                                        populationForYear: [
                                            {
                                                population: 69,
                                                year: '1999',
                                            },
                                        ],
                                    },
                                ],
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
        cy.get('.dataResultItems').first().click();
        cy.contains('Legg til i dashboard').click();
        cy.get('.dashboardItem').should('be.visible');
    });
    it('show multiple visualisations on dashboard', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('.dataResultItems').first().click();
        cy.contains('Legg til i dashboard').click();
        cy.get('.dashboardItem').should('be.visible');

        cy.contains('Legg til nytt komponent').click();
        cy.get('.dataResultItems').eq(1).click();
        cy.contains('Legg til i dashboard').click();
        cy.get('.dashboardItem').should('have.length', '2');
    });
    it('removes component', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('.dataResultItems').first().click();
        cy.contains('Legg til i dashboard').click();
        cy.get('[data-icon=trash]').click();
        cy.get('.dashboardItem').should('not.exist');
    });
    it('keeps dashboard items after refresh', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('.dataResultItems').first().click();
        cy.contains('Legg til i dashboard').click();

        cy.reload();

        cy.get('.dashboardItem').should('be.visible');
    });
    it('filters through components', () => {
        cy.visit('/');
        cy.contains('Legg til nytt komponent').click();
        cy.wait('@METADATA');
        cy.get('input[type="text"]').click();
        cy.get('#downshift-0-item-0').click();
        // This works since we are guaranteed that atleast one of the components do not have a tag
        cy.get('.dataResultItems').should('not.have.length', '10');
    });
    it('goes to 404 if page does not exist', () => {
        cy.visit('/emilom');
        cy.contains('404').should('be.visible');
        cy.visit('/blauks');
        cy.contains('404').should('be.visible');
    });
});
