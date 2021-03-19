import { cache } from '../src/cache';
import { MockedProvider } from '@apollo/client/testing';
import mock from '../src/mockdata/mocks';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => (
        <MockedProvider cache={cache} mocks={mock}>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </MockedProvider>
    ),
];
