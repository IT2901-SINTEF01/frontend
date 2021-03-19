import React from 'react';
import { mount } from '@cypress/react';
import Dashboard from '../../src/components/organisms/Dashboard';
import AddComponentButton from '../../src/components/atoms/AddComponentButton';
import { dashboardItemsVar } from '../../src/cache/index';
import { BrowserRouter } from 'react-router-dom';

describe('Apollo state management', () => {
    beforeEach(() => {
        dashboardItemsVar([]);
    });
    it('dashboard starts out empty', () => {
        mount(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>,
        );
        expect(dashboardItemsVar()).to.deep.equal([]);
    });
    it('adds new item to state', () => {
        // This has to change when we add more functionality to the Add component button.
        mount(
            <BrowserRouter>
                <AddComponentButton />
            </BrowserRouter>,
        );
        cy.contains('Legg til nytt komponent').click();
        expect(dashboardItemsVar()).to.not.equal([]);
    });
});
