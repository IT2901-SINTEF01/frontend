import { gql } from '@apollo/client';

export const POPULATION_IN_NORWAY = gql`
    query($municipalities: [String]) {
        populationsInNorway {
            dataset(years: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"], municipalities: $municipalities) {
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

export type SSBPopulationVariables = {
    municipalities: string[];
};
