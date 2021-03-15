import { cache } from '../src/cache';
import { MockedProvider } from '@apollo/client/testing';
import mock from '../src/mockdata/mocks';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => (
        <MockedProvider cache={cache} mocks={mock}>
            <Story />
        </MockedProvider>
    ),
];
