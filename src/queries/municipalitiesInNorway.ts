import { gql } from '@apollo/client';

export const MUNICIPALITIES_IN_NORWAY = gql`
    query {
        populationsInNorway {
            municipalitiesWithKeys
        }
    }
`;

export type MunicipalitiesInNorway = {
    populationsInNorway: {
        municipalitiesWithKeys: [string, string][];
    };
};
