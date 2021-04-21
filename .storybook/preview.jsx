import { cache } from '../src/cache';
import { MockedProvider } from '@apollo/client/testing';
import mock from '../src/mockdata/mocks';
import { BrowserRouter } from 'react-router-dom';
import faker from 'faker';
import { Provider } from 'react-redux';
import { store } from '../src/redux';

import './index.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => {
        faker.seed(0xdeadbeef);
        return (
            <Provider store={store}>
                <MockedProvider cache={cache} mocks={mock}>
                    <BrowserRouter>
                        <Story />
                    </BrowserRouter>
                </MockedProvider>
            </Provider>
        );
    },
];
