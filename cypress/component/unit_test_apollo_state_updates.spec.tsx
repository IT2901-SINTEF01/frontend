import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter } from 'react-router-dom';
import { cache, dashboardItemsVar } from '../../src/cache/index';
import { MockedProvider } from '@apollo/client/testing';
import mocks from '../../src/mockdata/mocks';
import { WEATHER_MET_API } from '../../src/queries/metApi';
import Dashboard from '../../src/components/organisms/Dashboard';
import { DashboardItemInfo, DashboardItemSize } from '../../src/types/dashboard';
import { DataSourceName } from '../../src/utils/dataSourceMappings';

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
    it('state updates correctly', () => {
        mount(
            <MockedProvider mocks={mocks} cache={cache}>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </MockedProvider>,
        );
        const item: DashboardItemInfo = {
            name: DataSourceName.MET_API_FORECAST,
            id: 'This is a custom ID',
            size: DashboardItemSize.SMALL,
            query: WEATHER_MET_API,
        };
        dashboardItemsVar([item]);
        expect(dashboardItemsVar()).to.deep.include(item);
    });
});
