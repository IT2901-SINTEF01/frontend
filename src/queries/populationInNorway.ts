import { gql } from '@apollo/client';

export const POPULATION_IN_NORWAY = gql`
    query {
        populationsInNorway {
            dataset {
                value
            }
        }
    }
`;

export type PopulationInNorway = {
    populationsInNorway: {
        dataset: {
            value: number[];
        };
    };
};
