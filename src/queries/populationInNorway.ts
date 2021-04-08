import { gql } from '@apollo/client';

const code = localStorage.getItem('municipality') || 'K-0301';

export const POPULATION_IN_NORWAY = gql`
    query {
        populationsInNorway {
            dataset(years: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"], municipalities: ["${code}"]) {
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
