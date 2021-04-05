import { cache } from "../src/cache";
import { MockedProvider } from "@apollo/client/testing";
import mock from "../src/mockdata/mocks";
import { BrowserRouter } from "react-router-dom";
import faker from "faker";

import "./index.css";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
    (Story) => {
        faker.seed(0xdeadbeef);
        return (
            <MockedProvider cache={cache} mocks={mock}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </MockedProvider>
        );
    }
];
