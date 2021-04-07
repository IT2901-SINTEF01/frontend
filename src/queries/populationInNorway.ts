import { gql } from '@apollo/client';

export const POPULATION_IN_NORWAY = gql`
    query {
        populationsInNorway {
            dataset(years: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"], municipalities: ["K-0301"]) {
                value {
                    populationForYear {
                        population
                        year
                    }
                }
            }
        }
    }
`;

export type PopulationInNorway = {
    populationsInNorway: {
        dataset: {
            value: {
                populationForYear: {
                    population: number;
                    year: number;
                }[];
            }[];
        };
    };
};
