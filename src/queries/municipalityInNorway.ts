import { gql } from '@apollo/client';

export const MUNICIPALITY_IN_NORWAY = gql`
    query {
        populationsInNorway {
            municipalitiesWithKeys
        }
    }
`;

export type MunicipalityInNorway = {
    populationsInNorway: {
        municipalitiesWithKeys: [[string]];
    };
};
