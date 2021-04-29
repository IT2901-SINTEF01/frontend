import { gql } from '@apollo/client';

export const MUNICIPALITIES_IN_NORWAY = gql`
    query {
        populationsInNorway {
            municipalitiesWithKeys
        }
    }
`;

export const MUNICIPALITIES_IN_NORWAY_TAX = gql`
    query {
        taxAssessment {
            municipalitiesWithKeys
        }
    }
`;

export type MunicipalitiesInNorway = {
    populationsInNorway: {
        municipalitiesWithKeys: [string, string][];
    };
};

export type MunicipalitiesInNorwayTax = {
    taxAssessment: {
        municipalitiesWithKeys: [string, string][];
    };
};
